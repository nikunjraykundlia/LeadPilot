@echo off
cd /d "D:\Leadpilot-main\Leadpilot-main"
pm2 start ecosystem.config.js
pm2 save
