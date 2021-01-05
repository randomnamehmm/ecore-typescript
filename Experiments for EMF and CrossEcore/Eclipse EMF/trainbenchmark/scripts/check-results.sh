#!/bin/bash

cd "$( cd "$( dirname "$0" )" && pwd )/.."
cd results

for f in *.tsv; do
	diff $f ../expected-results/$f
done
