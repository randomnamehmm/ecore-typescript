#!/bin/bash

cd "$( cd "$( dirname "$0" )" && pwd )"

cd ../config
cp config-default.json config.json
