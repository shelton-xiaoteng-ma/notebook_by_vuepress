import{_ as i,Y as e,Z as n,a4 as l}from"./framework-957baa9a.js";const s={},d=l(`<h1 id="web服务器nginx" tabindex="-1"><a class="header-anchor" href="#web服务器nginx" aria-hidden="true">#</a> WEB服务器Nginx</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h2><ol><li><p>web服务器和应用服务器的区别</p><ul><li>web服务器负责处理HTTP协议</li><li>web服务器用于处理静态页面的内容, 对于python产生的动态内容,通过WSGI接口交给应用服务器来处理</li><li>一般应用服务器都集成了web服务器</li></ul><p>尽管集成了web服务器, 但大部分用来做调试, 出于性能和稳定性的考虑,并不能在生产环境中使用.</p></li><li><p>为什么选择Nginx</p><ul><li>处理静态文件,索引文件效率非常高</li><li>高并发连接</li><li>低的内存损耗</li><li>强大的反响代理和负载均衡功能,平衡集群中各个服务器的负载压力</li></ul></li></ol><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h2><ol><li><p>安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install nginx
sudo systemctl status nginx # 查看当前状态
sudo systemctl start nginx # 查看当前状态
sudo systemctl stop nginx # 查看当前状态
sudo systemctl enable nginx  # 设置开机自启动
sudo systemctl restart nginx  # 重启nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 好的习惯是先检查配置文件,再重启服务器
sudo nginx -t  # 验证Nginx配置是否正确

# 修改配置文件后的重载
sudo nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置文件</p><ol><li>配置目录<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查找主配置文件, 里面包含日志文件路径和子配置文件路径
# 优先配置方案参考https://serverfault.com/questions/527630/what-is-the-different-usages-for-sites-available-vs-the-conf-d-directory-for-ngi
find / -name nginx.conf
# 子路径配置文件
/etc/nginx/conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>配置文件demo<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># nginx.conf
user root;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                    &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
# 子配置文件
server {
    charset utf-8;
    listen 80;
    server_name book.maxiaoteng.xyz;
    server_name book.maxiaoteng.tk;

    # 重定向
    rewrite  ^/(.*)$  https://shelton-xiaoteng-ma.github.io/maxiaoteng-book/$1 permanent;

    # 代理
    location /static {
        alias /var/www/mxt_blogs_project/static; 
    }
    location / {
        proxy_pass http://localhost:4000;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>日志位置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/var/log/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_3-其他" tabindex="-1"><a class="header-anchor" href="#_3-其他" aria-hidden="true">#</a> 3. 其他</h2><ol><li><p>什么时候选择源码安装？二进制包安装和源码安装应用场景:</p><ul><li>对软件精简度有要求, 性能非常高的要求</li><li>源码安装自由度高</li><li>对软件打过补丁</li><li>源码安装提供了统一的安装方式,可以跨平台应用</li></ul></li><li><p>反向代理和正向代理<br> 通常部署web应用的时候, 都会选择一个叫做WSGI的应用服务器,搭配Nginx来使用</p><ul><li>正向代理: 作为一个媒介将互联网获取的资源返回给相关联的客户端, 代理和客户端在一个局域网,对于服务端是透明的</li><li>反向代理: 根据客户端的请求, 从后端的服务器上获取资源, 然后再将这些资源返回给客户端. 代理和服务器在一个局域网,对客户端是透明的.</li></ul></li><li><p>反向代理的作用</p><ul><li>提高动态语言的I/O处理能力</li><li>加密和SSL加速</li><li>安全</li><li>负载均衡</li><li>缓存静态内容</li><li>支持压缩</li></ul></li><li><p>负载均衡算法</p><ol><li>round-robin # 按请求顺序依次分配, 如果某台服务器自动宕机,自动剔除</li><li>least_conn # 请求发送到活跃连接最少的服务器上</li><li>ip_hash # 按ip的hash值分配</li><li>hash</li></ol></li><li><p>通过Gunicorn启动Flask应用</p></li><li><p>nginx代理出现502</p><ol><li>检查日志发现<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># log文件显示
15 connect() to 127.0.0.1:2018 failed (13: Permission denied) while connecting to upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>解决办法: <ul><li>关闭selinux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /etc/selinux/config
# 将SELINUX=enforcing改为SELINUX=disabled
重启即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>临时解决:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li></ol>`,7),a=[d];function r(t,v){return e(),n("div",null,a)}const u=i(s,[["render",r],["__file","web-server-nginx.html.vue"]]);export{u as default};
