# hadoop

## 环境

准备 3 台虚拟机，2CPU 4G 50G. hadoop001 hadoop002 hadoop003

设置对应服务器名
`vim /etc/hostname`

配置清华源

参考：https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/

```
sudo apt upgrade
sudo apt update
```

安装 net-tools

`sudo apt install net-tools`

确保可以 ping 通外网

关闭且禁用防火墙

`sudo ufw disable`

`sudo ufw status` 当显示 `Status: inactive` 则为关闭且禁用的状态

root 下创建 shadoop 用户，且设置密码 shadoop
`useradd shadoop`
`passwd shadoop`

配置 shadoop 用户 root 权限，方便需要 sudo 的命令`vim /etc/sudoers`添加`shadoop ALL=(ALL) NOPASSWD:ALL`

创建两个文件夹`mkdir /opt/module`,`mkdir /opt/software`  
修改用户组`chown shadoop:shadoop /opt/module`,`chown shadoop:shadoop /opt/software`  
查看`ll`

添加 hosts`vim /etc/hosts`

```
xxx.xxx.xxx.xxx hadoop001
xxx.xxx.xxx.xxx hadoop002
xxx.xxx.xxx.xxx hadoop003
```

安装 openjdk`sudo apt install openjdk-8-jdk`

安装 openjdk 后配置 JAVA_HOME 变量到 shell

```
sudo vim /etc/profile.d/my_env.sh

#JAVA_HOME
JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64

#mac m
JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```

配置 hadoop001,hadoop002,hadoop003 的 shadoop 相互 ssh 免密访问

生成 ssh`ssh-keygen -t rsa`

下载[hadoop-3.1.3.tar.gz](https://archive.apache.org/dist/hadoop/common/hadoop-3.1.3/) 到`/opt/software` hadoop001

下载慢的话，下载到宿主机，scp 到 hadoop001 `scp hadoop-3.1.3.tar.gz ubuntu@hadoop001:/opt/software`

解压`tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/`

将 hadoop 添加到环境变量

`sudo vim /etc/profile.d/my_env.sh`

```
#HADOOP_HOME
export HADOOP_HOME=/opt/module/hadoop-3.1.3
export PATH=$PATH:$HADOOP_HOME/bin
export PATH=$PATH:$HADOOP_HOME/sbin
```

`source /etc/profile`

验证 `hadoop version`

如果出现`ERROR: JAVA_HOME is not set and could not be found.`

```
vim /opt/module/hadoop-3.1.3/etc/hadoop/hadoop-env.sh

# 添加
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64
export HADOOP_HOME=/opt/module/hadoop-3.1.3
```

正确显示
```
$ hadoop version
Hadoop 3.1.3
Source code repository https://gitbox.apache.org/repos/asf/hadoop.git -r ba631c436b806728f8ec2f54ab1e289526c90579
Compiled by ztang on 2019-09-12T02:47Z
Compiled with protoc 2.5.0
From source with checksum ec785077c385118ac91aadde5ec9799
This command was run using /opt/module/hadoop-3.1.3/share/hadoop/common/hadoop-common-3.1.3.jar
```

集群分发脚本xsync

需要对应用户名ssh可通

scp (secure copy) 实现服务器间copy数据

```shell
scp -r <sourceFile> <targetfile>

# -r: 递归
# <source|target>: 格式 <user@><host>:<目录>/<文件>
```

rsync 用于备份和镜像，相较于scp，scp是复制所以文件，rsync复制差异文件

```shell
rsync -ar <$pdir/$filename> <targetfile>

# -a: 归档拷贝
# -v: 显示过程
# <target>: 格式 <$user@><$host>:<$pdir>/<$fname>
```
如将hadoop复制到hadoop002`rsync -av hadoop-3.1.3/ shadoop@hadoop002:/opt/module/hadoop-3.1.3/
`

编写脚本，`${HOME}/bin`目录下`vim xsync` 
```shell
#!/bin/bash
#1. 判断参数个数
if [ $# -lt 1 ]
then
    echo Not Enough Arguement!
    exit;
fi
#2. 遍历集群所有机器
for host in hadoop001 hadoop002 hadoop003
do
    echo ==================== $host ====================
    #3. 遍历所有目录，挨个发送
    for file in $@
    do
        #4. 判断文件是否存在
        if [ -e $file ]
        then
            #5. 获取父目录
            pdir=$(cd -P $(dirname $file); pwd)
            #6. 获取当前文件的名称
            fname=$(basename $file)
            ssh $host "mkdir -p $pdir"
            rsync -av $pdir/$fname $host:$pdir
        else
            echo $file does not exists!
        fi
    done
done
```
修改执行权限`chmod +x xsync`  
测试脚本 `./xsync /home/shadoop/bin/`

将脚本复制到`/bin/`中，方便全局调用`sudo cp xsync /bin/`  

前面已复制hadoop到其他服务器中，若没复制`xsync /opt/module/hadoop-3.1.3`  
复制配置到其他服务器`xsync /etc/profile.d/my_env.sh`  
去其他服务器中，使配置生效`source /etc/profile.d/my_env.sh`  

保证所有服务器都有hadoop环境



|      |   hadoop001   |   hadoop002   |   hadoop003   |
| ---- | ---- | ---- | ---- |
|   HDFS   |   <p style="color: red;">NameNode</p>DataNode   |   DataNode   |   <p style="color: red;">SecondaryNameNode</p>DataNode   |
|   YARN   |   NodeManager   |   <p style="color: red;">ResourceManager</p>NodeManager   |   NodeManager   |

> - NameNode 和 SecondaryNameNode 不要安装在同一台服务器  
> - ResourceManager 也很消耗内存，不要和 NameNode、SecondaryNameNode 配置在
> 同一台机器上。


