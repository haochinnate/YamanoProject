#!/bin/bash
cd /home/ubuntu/server
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install libssl1.1=1.1.1f-1ubuntu2
sudo apt install npm
sudo apt install -y nodejs