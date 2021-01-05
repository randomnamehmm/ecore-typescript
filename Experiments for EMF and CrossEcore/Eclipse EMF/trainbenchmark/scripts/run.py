#!/usr/bin/env python3
"""
@author: Zsolt Kovari

"""
import argparse
import logger
import logging
import os
import shutil
import subprocess
import sys
import util
from loader import Loader
from subprocess import TimeoutExpired
from subprocess import CalledProcessError

def flatten(lst):
    return sum(([x] if not isinstance(x, list) else flatten(x) for x in lst), [])


def build(conf, skip_tests):
    """Builds the project.
    """
    util.set_working_directory("../")
    args = flatten(["mvn", conf.vmargs, "clean", "install", "--fail-at-end"])
    if skip_tests:
        args.append("-DskipTests")
    print(args)
    """ angepasst mit shell=True
        subprocess.check_call(args, shell=True)
    """
    subprocess.check_output(args, stderr=subprocess.STDOUT, shell=True)
    util.set_working_directory()


def generate(conf):
    """Generates the models.
    """
    target = util.get_generator_jar()
    for size in conf.sizes:
        subprocess.check_call(flatten(["java", conf.vmargs, "-Xmx" + conf.xmx, "-jar", target, "-size", str(size)]))


def benchmark(conf):
    """Runs measurements.
    """
    header = "../output/header.tsv"
    result_file = "../output/output.tsv"
    if os.path.exists(result_file):
        os.remove(result_file)
    shutil.copy(header, result_file)
    for change_set in conf.change_sets:
        for tool in conf.tools:
            for query in conf.queries:
                for args in conf.optional_arguments:
                    for size in conf.sizes:
                        target = util.get_tool_jar(tool)
                        print("Running benchmark: tool = " + tool + ", change set = " + change_set +
                            ", query = " + query + ", size = " + str(size) + ", extra arguments = " + str(args))
                        try:
                            command = ["java", conf.vmargs,
                                 "-jar", target,
                                 "-runs", str(conf.runs),
                                 "-size", str(size),
                                 "-query", query,
                                 "-changeSet", change_set,
                                 "-iterationCount", str(conf.iterations)]
                            command += args
                            command = flatten(command)
                            output = subprocess.check_output(command, timeout=conf.timeout)
                            with open(result_file, "ab") as file:
                                file.write(output)
                        except TimeoutExpired:
                            print("Timed out after", conf.timeout, "s, continuing with the next query.")
                            break
                        except CalledProcessError as e:
                            print("Program exited with error")
                            break


def clean_dir(dir):
    if os.path.exists(dir):
        shutil.rmtree(dir)
    os.mkdir(dir)


def visualize():
    """Visualizes the benchmark results
    """
    clean_dir("../diagrams")
    util.set_working_directory("../reporting")
    subprocess.call(["Rscript", "visualize.R", "../config/reporting-1.json"])
    #subprocess.call(["Rscript", "visualize.R", "../config/reporting-2.json"])


def extract_results():
    """Extracts the benchmark results
    """
    clean_dir("../results")
    util.set_working_directory("../reporting")
    subprocess.call(["Rscript", "extract_results.R"])


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-b", "--build",
                        help="build the project",
                        action="store_true")
    parser.add_argument("-g", "--generate",
                        help="generate models",
                        action="store_true")
    parser.add_argument("-m", "--measure",
                        help="run the benchmark",
                        action="store_true")
    parser.add_argument("-s", "--skip-tests",
                        help="skip JUnit tests",
                        action="store_true")
    parser.add_argument("-v", "--visualize",
                        help="create visualizations",
                        action="store_true")
    parser.add_argument("-e", "--extract",
                        help="extract results",
                        action="store_true")
    parser.add_argument("-t", "--test",
                        help="run test",
                        action="store_true")
    args = parser.parse_args()

    if (args.skip_tests and not args.build):
        raise ValueError("skip-tests provided without build argument")

    util.set_working_directory()
    logger.init()
    loader = Loader()
    config = loader.load()

    # if there are no args, execute a full sequence
    # with the test and the visualization/reporting
    no_args = all(val==False for val in vars(args).values())
    if no_args:
        args.test = True
        args.visualize = True
        args.extract = True

    if args.build:
        build(config, args.skip_tests)
    if args.generate:
        generate(config)
    if args.measure:
        benchmark(config)
    if args.test:
        build(config, True)
        generate(config)
        build(config, False)
        benchmark(config)
    if args.visualize:
        visualize()
    if args.extract:
        extract_results()
