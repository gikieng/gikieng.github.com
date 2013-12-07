iptables是Linux实现过滤包的一个应用程序,是打开服务器的最后一扇大门,也称
之为Linux的防火墙。使用得当,可以对访问的可疑IP实现控制,特别恶意攻击时直
接将其拒绝门外。
<h2>1.基础应用</h2>
**安装位置**
</br>[root@localhost ~]# which iptables

**查看iptables状态**</br>
[root@localhost ~]# iptables -L

**关闭iptables**</br>
[root@localhost ~]# service iptables stop

**关闭iptables**</br>
[root@localhost ~]# service iptables start

**iptables的自启动**

chkconfig iptables on</br>
chkconfig iptables off</br>

<h2>2.基本用法</h2>
**基本操作**

-A(append) 在链尾添加一条规则;</br>
-I(insert) 插入规则;</br>
-D(delete) 删除规则;</br>
-R(replace) 替代一条规则;</br>
-L(list) 列出规则。</br>

**响应操作**

ACCEPT 接收该数据报;</br>
DROP 丢弃该数据报;</br>
REJECT 拒绝该数据 有些OS是用的DENY</br>

**目标操作**

-p(protocol) 指定协议(tcp/icmp/udp/...);</br>
-s(source) 源地址(ip address/masklen);</br>
-d(destination) 目的地址(ip address/masklen);</br>
--sport 源端口 source port</br>
--dport 目标端口 destination port</br>
状态 -m state --state(INVALID,ESTABLISHED,NEW和RELATED)</br>
INVALID 失效的连接</br>
ESTABLISHED 已经建立的连接</br>
NEW 新的连接</br>
RELATED 相关的连接</br>

**规则链**

– INPUT 输入</br>
– OUTPUT 输出</br>
– FORWARD filter</br>
– PREROUTING nat(network address translator)</br>
– POSTROUTING nat 查看></br>

**删除**

iptables -D INPUT 1</br>
或者</br>
iptables -D INPUT -s 192.168.2.137 -j DROP
iptables -D OUTPUT -d 192.168.2.137 -j REJECT

**清除所有规则**

iptables -F


<h2>3.iptables的保存</h2>
    [root@localhost ~]# iptables-save -c > ./kenyon.iptables.bak
    [root@localhost ~]# /etc/init.d/iptables save
    
<h2>示例:</h2>

    开启ssh

    [root@localhost ~]# iptables -A INPUT -p tcp --dport 22 -j ACCEPT
    [root@localhost ~]# iptables -A OUTPUT -p tcp --sport 22 -j ACCEPT
    
    --写两次防止OUT规则是DROP时开启

    开启80WEB端口
    [root@localhost ~]# iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    
    开启邮件服务110端口
    
    [root@localhost ~]# iptables -A INPUT -p tcp --dport 110 -j ACCEPT
    
    开启FTP的21端口
    
    [root@localhost ~]# iptables -A INPUT -p tcp --dport 21 -j ACCEPT
    
    开启DNS的53端口
    
    [root@localhost ~]# iptables -A INPUT -p tcp --dport 53 -j ACCEPT
    
    开启5432端口
    
    [root@localhost ~]# iptables -A INPUT -p tcp --dport 5432 -j ACCEPT
    
    开启一段端口
    
    [root@localhost ~]# iptables -A INPUT -p tcp --dport 65520:65534 -j ACCEPT
    
    允许ping
    
    [root@localhost ~]# iptables -A OUTPUT -p icmp -j ACCEPT
    [root@localhost ~]# iptables -A INPUT -p icmp -j ACCEPT
    
    关闭其他端口
    
    [root@localhost ~]# iptables -A OUTPUT -p tcp --sport 31335 -j DROP
    [root@localhost ~]# iptables -A OUTPUT -p tcp --dport 31335 -j DROP

    拒绝接受某个IP的包
    
    [root@localhost ~]# iptables -A INPUT -s 192.168.2.137 -j DROP
    
    拒绝发送到某个IP的包
    
    [root@localhost ~]# iptables -A OUTPUT -d 192.168.2.137 -j REJECT
    
    拒绝接受某一段IP的包
    
    [root@localhost ~]# iptables -A INPUT -s 192.168.2.0/24 -j DROP
    
    拒绝某个mac地址的包(不能用在output和postrouting)
    
    [root@localhost ~]# iptables -A INPUT -m mac --mac-source 00:0C:29:AB:4B:FF -j DROP
    
    允许已经建立的和相关的连接
    
    [root@localhost ~]# iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
    
    [root@localhost ~]# iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
    
份备己用。