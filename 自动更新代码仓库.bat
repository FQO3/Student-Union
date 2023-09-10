@echo off
echo 开始自动更新仓库（间隔30秒拉取一次）
:start
git pull
choice /t 30 /d y /n >null
goto start