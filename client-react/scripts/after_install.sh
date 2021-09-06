#!/bin/bash
cd /home/ubuntu/fortune
npm install
npm install --save react react-dom react-scripts react-particles-js
npm install pm2 -g
npm install -g json-server
mv db.json ../json-data/