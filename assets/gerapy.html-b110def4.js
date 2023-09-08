import{_ as e,Y as i,Z as a,a4 as n}from"./framework-957baa9a.js";const l={},s=n(`<h1 id="gerapy安装" tabindex="-1"><a class="header-anchor" href="#gerapy安装" aria-hidden="true">#</a> Gerapy安装</h1><ul><li>在aws上安装 系统amazon linux, python版本:python36</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo python3 -m pip install gerapy 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>出现错误</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gcc -pthread -Wno-unused-result -Wsign-compare -DDYNAMIC_ANNOTATIONS_ENABLED=1 -DNDEBUG -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -D_GNU_SOURCE -fPIC -fwrapv -fPIC -I/usr/include/python3.6m -c src/twisted/test/raiser.c -o build/temp.linux-x86_64-3.6/src/twisted/test/raiser.o
    src/twisted/test/raiser.c:4:20: fatal error: Python.h: No such file or directory
     #include &quot;Python.h&quot;
                        ^
    compilation terminated.
**error: command &#39;gcc&#39; failed with exit status 1**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解决方案:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install python36-devel libxml2-devel libxslt-devel
sudo yum install gcc
**注意: 安装python-devel需要指定版本, 可解决问题**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>验证成功</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gerapy 
显示:
&gt; Usage:
  gerapy init [--folder=&lt;folder&gt;]
  gerapy migrate
  gerapy createsuperuser
  gerapy runserver [&lt;host:port&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><ol><li>初始化</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gerapy init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>执行完毕后, 本地生成gerapy文件夹, 进入后, 看到projects文件夹</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd gerapy
gerapy migrate  # 将会生成一个SQLite数据库, 同时建立数据库表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>启动服务, gerapy将会运行在6800端口</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gerapy runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>gerapy其实是用来管理多个scrapyd的服务器, 所以没必要运行在多个服务器上, 我可以运行在巴西1 或者本地都可以.</p>`,18),d=[s];function r(t,c){return i(),a("div",null,d)}const o=e(l,[["render",r],["__file","gerapy.html.vue"]]);export{o as default};
