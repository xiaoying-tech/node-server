#!/bin/bash

# 删除dist文件夹
rm -r dist
echo "dist文件删除成功"


# 拉取最新代码
git pull 
echo "拉取代码成功！！！！"


# 重启应用程序
pm2 restart node-server
echo "重启成功！！！！"
