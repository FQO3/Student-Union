@echo off
echo ��ʼ�Զ����²ֿ⣨���30����ȡһ�Σ�
:start
git pull
choice /t 30 /d y /n >null
goto start