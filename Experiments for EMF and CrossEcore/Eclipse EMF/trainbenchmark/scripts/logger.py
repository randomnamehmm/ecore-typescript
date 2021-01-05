"""
@author: Zsolt Kovari

"""
import logging


def init():
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.ERROR)
    c_formatter = logging.Formatter("[%(levelname)s] Module:%(module)s" +
                                    ", Message:%(message)s")
    console_handler.setFormatter(c_formatter)
