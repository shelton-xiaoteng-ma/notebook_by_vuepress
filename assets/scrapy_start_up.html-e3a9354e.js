import{_ as e,Y as i,Z as n,a4 as s}from"./framework-957baa9a.js";const a={},d=s(`<h1 id="开始一个scrapy" tabindex="-1"><a class="header-anchor" href="#开始一个scrapy" aria-hidden="true">#</a> 开始一个scrapy</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrapy startproject my_scrapy

cd my_scrapy

scrapy genspider -t basic first_spider xx.com

scrapy list

scrapy crawl first_spider  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scrapy" tabindex="-1"><a class="header-anchor" href="#scrapy" aria-hidden="true">#</a> scrapy</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrapy
#等价于
/usr/bin/python36 /usr/local/bin/scrapy
# 所以可以使用这种方法来指定python版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spider传入参数" tabindex="-1"><a class="header-anchor" href="#spider传入参数" aria-hidden="true">#</a> spider传入参数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrapy crawl spider1 -a params
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-定时任务解决" tabindex="-1"><a class="header-anchor" href="#_1-定时任务解决" aria-hidden="true">#</a> 1. 定时任务解决</h2><ol><li><p>apscheduler定时任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -*- coding: utf-8 -*-
from multiprocessing import Process
import traceback
from apscheduler.schedulers.blocking import BlockingScheduler
import sys
sys.path.append(&#39;..&#39;)
from utils.scrapy_tools import start_up_spider

def crawl_scrapy_job_basic_info():
    pros = []
    for i in range(6):
        p = Process(target=start_up_spider, name=&#39;worker {}&#39;.format(i+1), args=(&#39;as_scrapy_job_categories&#39;,))
        pros.append(p)
        p.start()

    for pro in pros:
        pro.join()


def cron_job():
    sched = BlockingScheduler()
    sched.add_job(func=crawl_as_scrapy_job_company, trigger=&#39;cron&#39;, hour=&#39;07&#39;, minute=1, day=&#39;11,26&#39;, id=&#39;crawl_as_scrapy_job_company&#39;)
    sched.start()


if __name__ == &#39;__main__&#39;:
    cron_job()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>日志配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -*- coding: utf-8 -*-
from scrapy import cmdline
import os
import datetime
import logging


def start_up_spider(spider_name):
    root_logger = logging.getLogger()
    log_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), &#39;../../logs&#39;)
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
    datetime_str = datetime.datetime.strftime(datetime.datetime.now(), &#39;%Y-%m-%d_%H:%M:%S&#39;)
    log_path = os.path.join(log_dir, &#39;{}_{}.log&#39;.format(spider_name, datetime_str))
    file_handler = logging.handlers.TimedRotatingFileHandler(
                    filename=log_path,
                    when=&#39;midnight&#39;,
                    backupCount=20,
                    encoding=&quot;utf8&quot;,
                )   
    formater = logging.Formatter(&quot;%(asctime)s %(processName)-10s %(filename)-15s %(lineno)-3s %(levelname)-8s %(message)s&quot;)
    file_handler.setFormatter(formater)
    file_handler.setLevel(logging.DEBUG)
    root_logger.addHandler(file_handler)
    s = &quot;scrapy crawl {} --logfile={}/{}_{}.log &quot;.format(spider_name, log_dir, spider_name, datetime_str)
    cmdline.execute(s.split())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,8),r=[d];function l(c,t){return i(),n("div",null,r)}const m=e(a,[["render",l],["__file","scrapy_start_up.html.vue"]]);export{m as default};
