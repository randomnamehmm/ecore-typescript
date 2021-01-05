#!/bin/bash

pushd ..

if [ ! -d neo4j-shell-tools ]; then
	git clone https://github.com/tsdh/ttc15-train-benchmark-funnyqt.git
fi

cd ttc15-train-benchmark-funnyqt
git pull
# download lein and build the project
wget -nc https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein
chmod +x lein
./lein install

popd
