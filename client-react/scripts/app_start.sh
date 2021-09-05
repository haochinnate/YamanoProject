#!/bin/bash
sudo chmod -R 777 /home/ubuntu/fortune
cd /home/ubuntu/fortune/build
pm2 start /home/ubuntu/fortune/node_modules/react-scripts/scripts/start.js --name “fortune”
#sudo npm start
#pm2 start npm --name "yamano" -- start
#pm2 startup
#pm2 save
#pm2 restart all
