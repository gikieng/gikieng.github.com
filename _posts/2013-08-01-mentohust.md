---
layout: post
title: "linux锐捷使用方法"
description: ""
category: 
tags: []
---
决定用linux系统时，还担心校园网登不上去，因为要用锐捷登录。
后来查了下,可以用mentohust来登录。


安装mentohust :<a href usr="https://code.google.com/p/mentohust/">下载</a>


配置：第一次使用的时候，会提示配置。以后想改配置可以修改/etc/mentohust.conf。
有些服务器要检查客户端的版本，可以把windows下的锐捷下的8021x.exe和W32N55.dll(可以不要这个，但是每次登录会提示缺失，不过还是可以登录上去的)拷到/etc/mentohust/下，没有这个文件夹，要自己建一个，
#mkdir /etc/mentohust


使用：$sudo mentohust -参数（不加参数就按照配置里的设置登录，其中-h是帮助文件）


感觉：用mengohust，不会检查你的网卡信息，只要设置了克隆mac，就可以用舍友的帐号来登录。用windows的锐捷也是可以的，不过会提示网卡地址和系统网卡地址不一样，不过不会断开。
