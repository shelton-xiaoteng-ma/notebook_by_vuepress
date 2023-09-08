import{_ as e,Y as a,Z as i,a4 as n}from"./framework-957baa9a.js";const d={},r=n(`<h1 id="cron" tabindex="-1"><a class="header-anchor" href="#cron" aria-hidden="true">#</a> Cron</h1><h2 id="_1-命令的使用" tabindex="-1"><a class="header-anchor" href="#_1-命令的使用" aria-hidden="true">#</a> 1. 命令的使用</h2><ol><li>列出当前任务</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -l 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>备份当前任务列表</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -l &gt; my_cron   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>编辑一个命令文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nano my_crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>将编辑好的命令生效</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab my_crontab 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>重启crond</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service crond restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="直接编辑" tabindex="-1"><a class="header-anchor" href="#直接编辑" aria-hidden="true">#</a> 直接编辑</h3><p>不建议这么做，通常是编辑文件然后生效，这样确保有备份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -e  # 任何用户都可以用
vim /etc/crontab  # 仅限root用户, 通常用于给其他用户指定定时任务, 或者需要root来运行任务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-命令格式" tabindex="-1"><a class="header-anchor" href="#_2-命令格式" aria-hidden="true">#</a> 2. 命令格式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 文件格式说明
#  ——分钟（0 - 59）
# |  ——小时（0 - 23）
# | |  ——日（1 - 31）
# | | |  ——月（1 - 12）
# | | | |  ——星期（0 - 7，星期日=0或7）
# | | | | |
# * * * * * 被执行的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>命令用空格分隔，</li><li>不用的, 任意可能的使用*代替</li><li>多个值用&#39;,&#39;分割</li><li><code>*/2</code> 每两分钟，每两天。。。<code>(0-23)/2</code>11点前每两小时一次</li></ul><h2 id="_3-不发送电子邮件" tabindex="-1"><a class="header-anchor" href="#_3-不发送电子邮件" aria-hidden="true">#</a> 3. 不发送电子邮件</h2><p>如果输出结果来自crontab, 那么cron守护进程会使用电子邮件发送给用户, 位置<code>/var/spool/mail/ec2-user</code>, 需要将命令重定向到 <code>&gt;/dev/null 2&gt;&amp;1</code></p><h2 id="_4-查看日志排除问题" tabindex="-1"><a class="header-anchor" href="#_4-查看日志排除问题" aria-hidden="true">#</a> 4. 查看日志排除问题</h2><p>位置: <code>/var/log/cron</code></p><h2 id="_5-crontab设置scrapy脚本的定时任务" tabindex="-1"><a class="header-anchor" href="#_5-crontab设置scrapy脚本的定时任务" aria-hidden="true">#</a> 5. crontab设置scrapy脚本的定时任务</h2><p>编写shell脚本</p><pre><code>\`\`\`
#!/bin/sh
. ~/.bash_profile
source /etc/profile
# 切换到scrpay命令下
cd /home/ec2-user/crawler/mangoplate_scrapy/

# 依次启动爬虫
/usr/local/bin/scrapy list
/usr/local/bin/scrapy crawl codetable
/usr/local/bin/scrapy crawl mangoplate

# 去重
/usr/bin/python3 deduplicate.py
\`\`\`
</code></pre><h2 id="_6-环境变量的问题" tabindex="-1"><a class="header-anchor" href="#_6-环境变量的问题" aria-hidden="true">#</a> 6. 环境变量的问题</h2><ol><li>由于crontab只加载/ect/environment，并不加载/etc/profile和~/.bash_profile，所以需要在脚本里手动添加环境变量<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    . /etc/profile
    . ~/.bash_profile
    export xx/xx/xx.conf  # 可以导入需要的配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>考虑到crontab中设置复杂不一, 应该规范shell命令的格式, 确保每次使用绝对路径, 适用于crontab的运行</li><li>crontab的任务只有一行运行shell脚本的命令即可</li></ul></li><li>如果不适用shell脚本，也可以这样：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 0 10 * * 5 source ~/.bashrc;cd /home/xiaoteng/code/aspex_tickets/src &amp;&amp; python3 all_tickets.py &gt;/dev/null 2&gt;&amp;1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_7-docker中" tabindex="-1"><a class="header-anchor" href="#_7-docker中" aria-hidden="true">#</a> 7. docker中</h2><p>由于docker默认不启动，启动容器后执行如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 后台启动cron
/usr/sbin/crond -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,30),l=[r];function s(c,t){return a(),i("div",null,l)}const u=e(d,[["render",s],["__file","crontab.html.vue"]]);export{u as default};
