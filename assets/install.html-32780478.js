import{_ as a,Y as i,Z as s,a0 as e,a1 as n,a2 as o,a4 as l,E as r}from"./framework-957baa9a.js";const t={},c=e("h1",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),m={href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),v=l(`<h2 id="yum安装" tabindex="-1"><a class="header-anchor" href="#yum安装" aria-hidden="true">#</a> yum安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo nano /etc/yum.repos.d/mongodb-org-4.0.repo
    paste:
        [mongodb-org-4.0]
        name=MongoDB Repository
        baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/
        gpgcheck=1
        enabled=1
        gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

$ sudo yum install -y mongodb-org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动服务
sudo service mongod start  
systemctl start mongod

sudo tail /var/log/mongodb/mongod.log   # 验证是否运行

# 将在系统重启后自启
sudo chkconfig mongod on
sudo systemctl ennable mongod

sudo service mongod stop  # 停止服务
sudo service mongod restart  # 重启服务
kill -15 mongo_id  # 使用-15杀mongod进程避免锁死
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>yum安装后的mongdb<br> mongod.conf 的位置: /etc/</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo nano /etc/mongod.conf

/var/lib/mongod  # 默认存储位置
/var/log/mongodb/mongod.log  # 默认log位置
port: 27017
bindIp: 127.0.0.1  →  0.0.0.0  # 默认只允许本地访问, 修改后对互联网开放
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><ol><li>关闭mongod</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo service mongod stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>删除安装包</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum erase $(rpm -qa | grep mongodb-org)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>删除数据文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用robo-3t-通过ssh连接mongodb" tabindex="-1"><a class="header-anchor" href="#使用robo-3t-通过ssh连接mongodb" aria-hidden="true">#</a> 使用Robo 3T 通过ssh连接mongodb</h1><ol><li>AWS安全组设置, 添加入站端口 27017</li><li>Robo 3T添加链接, 使用ssh验证</li></ol>`,16);function b(g,h){const d=r("ExternalLinkIcon");return i(),s("div",null,[c,e("p",null,[n("参考: "),e("a",m,[n("https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/"),o(d)]),u,n(" 可以选择多平台的安装, 本次安装环境: Amazon linux")]),v])}const x=a(t,[["render",b],["__file","install.html.vue"]]);export{x as default};
