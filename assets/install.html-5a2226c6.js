import{_ as l,Y as r,Z as d,a0 as s,a1 as n,a2 as i,a4 as a,E as c}from"./framework-957baa9a.js";const t={},o=a('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><h2 id="_1-redis简介" tabindex="-1"><a class="header-anchor" href="#_1-redis简介" aria-hidden="true">#</a> 1. Redis简介</h2><ol><li><p>Redis是一个基于内存的键值对存储系统，常用作数据库、缓存和消息代理 。它支持字符串、字典、列表、集合、有序集合、位图（Bitmaps）、地理位置等多种数据结构，所以常常被称为<strong>数据结构服务器</strong>。Redis支持事务、分片、主从复制，<strong>支持RDB</strong>（将内存中的数据保存在文件中）和AOF（类似于MySQL的binlog）两种持久化方式，还支持订阅分发、Lua 脚本、集群等特性。</p><ol><li>数据存放在内存中，访问速度快</li><li>支持丰富的数据结构：string,list, set, map...</li><li>原子性操作，单线程，安全，支持事务(session)</li><li>可以设置过期时间</li></ol></li><li><p>相对于Memcached的优势</p><ol><li>redis可以持久化数据 Web应用中常需要将一些重要数据持久化到硬盘，避免宕机等原因导致数据丢失。Redis会周期性把更新的数据写入磁盘或者追加到命令日志中，并且在此基础上实现了主从同步。而Memcached在进程关闭之后数据就会丢失</li><li>memcached支持数据类型简单 一些业务为了简化工作，需要使用列表、集合这样只有Redis才支持的数据结构。相对于Memcahced，Redis有更多的应用场景</li><li>Redis速度快，并提供了丰富的命令</li></ol></li><li><p>Redis应用场景</p><ol><li>取Top N 操作</li><li>实时统计</li><li>计数器</li><li>显示最新的项目列表</li><li>秒杀活动</li></ol></li></ol><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h2>',4),p=s("li",null,[s("p",null,[n("ubuntu安装可以使用"),s("code",null,"apt install redis-server"),n("一键安装")])],-1),u={href:"https://medium.com/@andrewcbass/install-redis-v3-2-on-aws-ec2-instance-93259d40a3ce",target:"_blank",rel:"noopener noreferrer"},v=s("strong",null,"参考教程",-1),m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> update 
$ <span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc <span class="token function">make</span>  <span class="token comment"># 安装gcc make用来编译</span>

<span class="token comment"># 下载文件</span>
<span class="token builtin class-name">cd</span> /usr/local/src 
<span class="token function">sudo</span> <span class="token function">wget</span> http://download.redis.io/releases/redis-4.0.11.tar.gz
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-xvzf</span> redis-4.0.11.tar.gz 
<span class="token builtin class-name">cd</span> redis-stable
<span class="token function">make</span> <span class="token builtin class-name">test</span>  <span class="token comment"># 可选</span>
<span class="token comment"># 编译安装</span>
<span class="token function">make</span>  

<span class="token comment"># 安装到环境变量</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># 等价于: </span>
<span class="token function">sudo</span> <span class="token function">cp</span> src/redis-server /usr/local/bin/
<span class="token function">sudo</span> <span class="token function">cp</span> src/redis-cli /usr/local/bin/

<span class="token comment"># 安装tcl</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> tcl 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=s("h2",{id:"_3-配置redis",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-配置redis","aria-hidden":"true"},"#"),n(" 3. 配置Redis")],-1),k={href:"http://www.runoob.com/redis/redis-conf.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>初始配置文件位于解压目录 <code>.../redis-stable/redis.conf</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./redis-stable/redis.conf  
<span class="token function">sudo</span> <span class="token function">nano</span> redis.conf

    <span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1  <span class="token comment"># 绑定本地ip, 要想公网访问,注释掉</span>
    requirepass xxx  <span class="token comment"># 添加链接密码, 在允许公网访问之前, 必须设置密码</span>
    protected-mode  no  <span class="token comment"># 禁用保护模式, 这个是在无密码时禁止公网访问使用的                           </span>
    daemonize <span class="token function">yes</span>  <span class="token comment"># 后台运行                             </span>
    logfile <span class="token string">&quot;/var/log/redis_6379.log&quot;</span>             
    pidfile  /var/run/redis.pid 
    <span class="token function">dir</span> /var/redis/6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>移动配置文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> redis.conf /etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-使用服务方式运行redis" tabindex="-1"><a class="header-anchor" href="#_4-使用服务方式运行redis" aria-hidden="true">#</a> 4. 使用服务方式运行redis</h2><ol><li><p>编辑配置脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/systemd/system/redis.service
<span class="token comment"># 注意执行命令和配置文件的路径</span>

    <span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
    <span class="token assign-left variable">Description</span><span class="token operator">=</span>The redis-server Process Manager
    <span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target
    
    <span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
    <span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
    <span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/redis.pid
    <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/redis-server /etc/redis.conf
    <span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> HUP <span class="token variable">$MAINPID</span>
    <span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill <span class="token parameter variable">-s</span> QUIT <span class="token variable">$MAINPID</span>
    <span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
    
    <span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
    <span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重载systemctl</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动重启等操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start/stop/restart/status redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>redis.server修改后重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_5-使用service来管理redis-server" tabindex="-1"><a class="header-anchor" href="#_5-使用service来管理redis-server" aria-hidden="true">#</a> 5. 使用service来管理redis-server</h2><ol><li><p>下载init脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> https://raw.githubusercontent.com/saxenap/install-redis-amazon-linux-centos/master/redis-server
<span class="token function">sudo</span> <span class="token function">mv</span> redis-server /etc/init.d
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/redis-server

**/etc/init/ 和 /etc/init.d 两个文件里的脚本, 是可以使用service mmm start 来启动某项服务的**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改redis_server的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/init.d/redis-server
    <span class="token comment"># 编辑文件以匹配配置文件</span>
    REDIS_CONF_FILE <span class="token operator">=</span>“/etc/redis/6379.conf”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置redis服务器自启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> redis-server 
<span class="token function">sudo</span> <span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">345</span> redis-server on 
<span class="token function">sudo</span> <span class="token function">service</span> redis-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-打开系统配置文件-修复redis内存低的问题" tabindex="-1"><a class="header-anchor" href="#_6-打开系统配置文件-修复redis内存低的问题" aria-hidden="true">#</a> 6. 打开系统配置文件, 修复redis内存低的问题</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/sysctl.conf
      <span class="token comment">#confure redis background save issue </span>
      vm.overcommit_memory <span class="token operator">=</span> <span class="token number">1</span>
      systctl vm.overcommit_memory <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-测试redis服务器是否启动正常" tabindex="-1"><a class="header-anchor" href="#_7-测试redis服务器是否启动正常" aria-hidden="true">#</a> 7. 测试redis服务器是否启动正常</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token function">ping</span>
    <span class="token comment"># 响应为 PONG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-客户端连接redis" tabindex="-1"><a class="header-anchor" href="#_8-客户端连接redis" aria-hidden="true">#</a> 8. 客户端连接Redis</h2><ol><li><p>redis-cli # 启动redis客户端</p></li><li><p>连接到本地redis 服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>  <span class="token comment"># 连接到本地的redis服务器 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>连接到远程redis服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> <span class="token function">host</span> <span class="token parameter variable">-p</span> port <span class="token parameter variable">-a</span> password
<span class="token variable">$redis</span>-cli <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;mypass&quot;</span>
redis <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
redis <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PING

PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_9-可视化redisdesktopmanager" tabindex="-1"><a class="header-anchor" href="#_9-可视化redisdesktopmanager" aria-hidden="true">#</a> 9. 可视化RedisDesktopManager</h2>`,15);function g(f,_){const e=c("ExternalLinkIcon");return r(),d("div",null,[o,s("ol",null,[p,s("li",null,[s("p",null,[n("以下方法用于在aws ec2 上安装 "),s("a",u,[v,n(":"),i(e)])]),m])]),b,s("p",null,[n("参考 "),s("a",k,[n("http://www.runoob.com/redis/redis-conf.html"),i(e)])]),h])}const y=l(t,[["render",g],["__file","install.html.vue"]]);export{y as default};
