import{_ as e,Y as s,Z as i,a4 as r}from"./framework-957baa9a.js";const a={},n=r(`<h1 id="supervisor-进程守护" tabindex="-1"><a class="header-anchor" href="#supervisor-进程守护" aria-hidden="true">#</a> supervisor 进程守护</h1><p>supervisor使用python编写的进程守护应用, 可以在进程意外中断后重启</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install supervisor
# 或者
sudo pip install supervisor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成配置文件" tabindex="-1"><a class="header-anchor" href="#生成配置文件" aria-hidden="true">#</a> 生成配置文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo echo_supervisord_conf &gt; /etc/supervisord.conf  
# 如果提醒没有权限, 可以先echo_supervisord_conf 获取内容, 创建配置文件后复制进去
# 修改conf文件的配置, supervisor将加载文件夹下的所有conf文件:
[include]
files = /etc/supervisor/conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>conf文件demo</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[program:scrapyd]
command=scrapyd              ; the program (relative uses PATH, can take args)
process_name=%(program_name)s ; process_name expr (default %(program_name)s)
;directory=~                ; directory to cwd to before exec (def no cwd)
autostart=true                ; start at supervisord start (default: true)
startsecs=1                   ; # of secs prog must stay up to be running (def. 1)
startretries=3                ; max # of serial start failures when starting (default 3)
autorestart=True        ; when to restart if exited after running (def: unexpected)
stopsignal=KILL               ; signal used to kill process (default TERM)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>supervisord  # 启动supervisor服务

supervisord -c /etc/supervisord.conf
supervisorctl -c /etc/supervisord.conf status
    &gt; mongodb       RUNNING   pid 2366, uptime 0:01:00
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用管理命令" tabindex="-1"><a class="header-anchor" href="#常用管理命令" aria-hidden="true">#</a> 常用管理命令</h2><ul><li><p>重启supervisor service supervisor restart</p></li><li><p>启动相应进程 supervisorctl start app</p></li><li><p>停止进程 supervisorctl start app</p></li><li><p>停止所有进程 supervisorctl start all</p></li><li><p>载入新的配置文件 supervisorctl reload</p></li><li><p>更新修改的配置文件, 没改变的不影响<br> supervisorctl update</p></li></ul><h2 id="配置进程" tabindex="-1"><a class="header-anchor" href="#配置进程" aria-hidden="true">#</a> 配置进程</h2><blockquote><p>配置文件位置:<code>/etc/supervisor/conf.d/..</code> 每个进程设一个配置文件, 以conf结尾 内容:</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[program:mongodb]
directory = /root/amazon_server  # 运行目录
command =  /usr/bin/mongod -port 27017 --dbpath /vr/lib/mongo
autostart = true     ; 在 supervisord 启动的时候也自动启动
startsecs = 5        ; 启动 5 秒后没有异常退出，就当作已经正常启动了
autorestart = true   ; 程序异常退出后自动重启
startretries = 3     ; 启动失败自动重试次数，默认是 3
stopsignal= KILL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>错误, 返回127是命令行错误</p></blockquote></blockquote><h2 id="web界面管理-可视化进程管理" tabindex="-1"><a class="header-anchor" href="#web界面管理-可视化进程管理" aria-hidden="true">#</a> web界面管理 可视化进程管理</h2><p>修改supervisord.conf的 inet_http_server部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[inet_http_server]           ; inet (TCP) server disabled by default
port=0.0.0.0:9001            ; 开放公网ip(ip_address:port specifier, *:port for all iface)
username=xxxxxxx             ; (default is no username (open server))
password=xxxxxxx             ; (default is no password (open server))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开机自启动" tabindex="-1"><a class="header-anchor" href="#开机自启动" aria-hidden="true">#</a> 开机自启动</h2><ul><li>unix自启动, 需要将命令添加到<code>/etc/rc.local</code></li><li>添加内容:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/bin/supervisord -c /etc/supervisord.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看两个文件的绝对位置:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find / -name supervisord
&gt; /usr/local/python/bin/supervisord
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),d=[n];function l(t,c){return s(),i("div",null,d)}const o=e(a,[["render",l],["__file","supervisor.html.vue"]]);export{o as default};
