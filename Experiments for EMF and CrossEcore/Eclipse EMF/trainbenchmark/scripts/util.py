"""
@author: Zsolt Kovari

"""
import os
import logging
import glob


def set_working_directory(path=None):
    """
    Set the working directory to this script's folder or to the path
    optional parameter, if that is given.

    Parameters:
    @param path: optional parameter, a directory
    """
    if path is None:
        full_path = os.path.realpath(__file__)
        path = os.path.split(full_path)
        os.chdir(path[0])
    else:
        if os.path.exists(path):
            os.chdir(path)
        else:
            logging.error("The given parameter is not a valid directory:" +
                          path)


def check_validation(conf):
    """Json validation check.
    """
    if conf["MinSize"] > conf["MaxSize"]:
        msg = "Maxsize is lower than minsize. Change the " +\
              "config.json file"
        logging.error(msg)
        raise IOError(msg)
    sizes = get_power_of_two(conf["MinSize"],conf["MaxSize"])
    if len(sizes) == 0:
        msg = "Problem occurred with min and maxsize." +\
              "Too short the range between them."
        logging.error(msg)
        raise IOError(msg)


def get_generator_jar():
    """
    Returns the generator's .jar file's path which belongs to the certain
    format.
    """
    folder = "../hu.bme.mit.trainbenchmark.ttc.generator/target/"
    files = glob.glob(folder + "*.jar")
    for file in files:
        if not "source" in file:
            return file
    # raise error if file not found
    msg = "JAR file does not exist for generator."
    logging.error(msg)
    raise FileNotFoundError(msg)


def get_tool_jar(tool):
    """
    Returns the tool's .jar file's path.
    """
    folder = "../{TOOL}/target/".format(TOOL=tool)
    files = glob.glob(folder + "*.jar")
    for file in files:
        if not "source" in file:
            return file
    # raise error if file not found
    logging.error("JAR file does not exist for " + tool)
    raise FileNotFoundError("JAR file does not exist for " + tool)


def get_power_of_two(minsize, maxsize):
    """
    Return power of two numbers between minsize and maxsize
    in a list.
    """
    all_size = []
    index = 1
    while index <= maxsize:
        if index >= minsize:
            all_size.append(index)
        index *= 2
    return all_size
