#!/bin/bash

cd outputs
cp header.tsv output.tsv
tail -q -n +2 output-*.tsv >> output.tsv
mv output.tsv ../../output

