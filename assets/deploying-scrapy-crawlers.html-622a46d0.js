import{_ as d,Y as i,Z as n,a0 as s,a1 as e,a2 as t,a4 as a,E as c}from"./framework-957baa9a.js";const l={},o=a(`<h1 id="部署爬虫" tabindex="-1"><a class="header-anchor" href="#部署爬虫" aria-hidden="true">#</a> 部署爬虫</h1><p>部署爬虫的两种方案:</p><ul><li>开源方案 Scrapyd</li><li>Scrapy的付费方案: Scrapy Cloud</li></ul><p>scrapyd运行在服务器, 作为一个服务, 接收特定接口的包部署, 运行爬虫的每个服务器都需要</p><h1 id="scrapyd-的使用" tabindex="-1"><a class="header-anchor" href="#scrapyd-的使用" aria-hidden="true">#</a> Scrapyd 的使用</h1><p><strong>服务器部署</strong></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo python3 -m pip install scrapyd  # 必须指定scrapyd的python版本, 因为之后默认按这个版本运行爬虫
sudo pip3 install scrapyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>scrapyd自1.2版本后, 不再自动创建配置文件, 需手动添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mkdir /etc/scrapyd
sudo nano /etc/scrapyd/scrapyd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p={href:"https://scrapyd.readthedocs.io/en/stable/config.html#example-configuration-file",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>[services] schedule.json = scrapyd.webservice.Schedule cancel.json = scrapyd.webservice.Cancel addversion.json = scrapyd.webservice.AddVersion listprojects.json = scrapyd.webservice.ListProjects listversions.json = scrapyd.webservice.ListVersions listspiders.json = scrapyd.webservice.ListSpiders delproject.json = scrapyd.webservice.DeleteProject delversion.json = scrapyd.webservice.DeleteVersion listjobs.json = scrapyd.webservice.ListJobs daemonstatus.json = scrapyd.webservice.DaemonStatus \`\`\`</p><h2 id="开通服务器的6800端口" tabindex="-1"><a class="header-anchor" href="#开通服务器的6800端口" aria-hidden="true">#</a> 开通服务器的6800端口</h2><ul><li>启动服务器</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrapyd
# 或者
systemctl enable scrapyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>并将scrapyd加入到supervisor来确保始终启用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[program:scrapyd]
command=scrapyd              ; the program (relative uses PATH, can take args)
process_name=%(program_name)s ; process_name expr (default %(program_name)s)
;directory=~                ; directory to cwd to before exec (def no cwd)
autostart=true                ; start at supervisord start (default: true)
startsecs=1                   ; # of secs prog must stay up to be running (def. 1)
startretries=3                ; max # of serial start failures when starting (default 3)
autorestart=True        ; when to restart if exited after running (def: unexpected)
stopsignal=KILL               ; signal used to kill process (default TERM)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web端访问" tabindex="-1"><a class="header-anchor" href="#web端访问" aria-hidden="true">#</a> web端访问</h2><blockquote><p>访问 http://localhost:6800/</p></blockquote>`,8);function v(h,b){const r=c("ExternalLinkIcon");return i(),n("div",null,[o,s("p",null,[e("配置文件内容如下: "),s("a",p,[e("官方demo"),t(r)]),e(" ``` [scrapyd] eggs_dir = eggs logs_dir = logs items_dir = jobs_to_keep = 5 dbs_dir = dbs max_proc = 0 max_proc_per_cpu = 4 finished_to_keep = 100 poll_interval = 5.0 bind_address = 0.0.0.0 http_port = 6800 debug = off runner = scrapyd.runner application = scrapyd.app.application launcher = scrapyd.launcher.Launcher webroot = scrapyd.website.Root")]),u])}const y=d(l,[["render",v],["__file","deploying-scrapy-crawlers.html.vue"]]);export{y as default};
