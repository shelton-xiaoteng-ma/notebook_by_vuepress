import{_ as e,Y as i,Z as n,a4 as s}from"./framework-957baa9a.js";const l={},a=s(`<h1 id="scrapy配置" tabindex="-1"><a class="header-anchor" href="#scrapy配置" aria-hidden="true">#</a> scrapy配置</h1><h2 id="配置优先级" tabindex="-1"><a class="header-anchor" href="#配置优先级" aria-hidden="true">#</a> 配置优先级</h2><ol><li><p>命令行选项 -s 最高</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrapy crawl myspider -s LOG_FILE=scrapy.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>每个spider的custom_settings</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Spider(RedisSpider):
    name = &#39;spider_name&#39;
    redis_key = xxx
    custom_settings = {
        &#39;REDIRECT_ENABLED&#39;: True,
        &#39;COOKIES_ENABLED&#39;: True,
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>settings.py</p></li><li><p>每个命令的默认setting</p></li><li><p>默认的setting</p></li></ol><h2 id="settings-py配置" tabindex="-1"><a class="header-anchor" href="#settings-py配置" aria-hidden="true">#</a> settings.py配置</h2><ol><li><p>网站爬虫规则，关闭robots.txt遵循</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Obey robots.txt rules
ROBOTSTXT_OBEY = False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载延迟</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import random  
DOWNLOAD_DELAY = random.randint(1, 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>并发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CONCURRENT_REQUESTS = 64

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>是否启用cookie</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># COOKIES_ENABLED = False # 默认生效中，像浏览器一样，一般无需管理  
COOKIES_ENABLED = True  # 如果使用自定义cookie就把COOKIES_ENABLED设置为True  
COOKIES_ENABLED = False   # 如果使用settings的cookie就把COOKIES_ENABLED设置为False  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>extensions</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXTENSIONS = {
    &#39;scrapy.extensions.telnet.TelnetConsole&#39;: None,
    # CloseSpiderRedis是设置redis没有任务后自动关闭的扩展, 如果不用bo_lib, 需要手动加入(见[extensions.md](extensions.md))
    &#39;bo_lib.scrapy_tools.CloseSpiderRedis&#39;: 100,
}
CLOSE_SPIDER_AFTER_IDLE_TIMES = 5  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ITEM的处理(pipeline)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ITEM_PIPELINES = {
 # &#39;weapon.pipelines.WeaponPipeline&#39;: 300,
 # &#39;weapon.mongoPipeline.MongoPipeline&#39;: 301,
 &#39;weapon.mysql_pipelines.MySQLPipeline&#39;: 301,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>} \`\`\`</p><ol start="5"><li><p>文件编码<br> FEED_EXPORT_ENCODING = &#39;utf-8&#39;</p></li><li><p>LOG的配置<br> LOG_ENCODING = &#39;UTF-8&#39;</p></li><li><p>数据库配置</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   MYSQL_HOST = &#39;localhost&#39;  
MYSQL_DATABASE = &#39;military&#39;  
MYSQL_POST = 3306  
MYSQL_USER = &#39;root&#39;  
# MYSQL_PASSWORD = &#39;&#39;  
MYSQL_PASSWORD = &#39;PnS_cDEZhMb4p8M3&#39;  
# mongodb配置  
MONGO_URI = &quot;localhost:27017&quot;  
MONGO_DATABASE = &#39;military&#39;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><p>配置数据版本VERSION</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date = datetime.datetime.now().strftime(&quot;%Y-%m-%d&quot;)

VERSION = date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置item pipelines</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Configure item pipelines

ITEM_PIPELINES = {
   &#39;mangoplate_scrapy.pipelines.MangoplateScrapyPipeline&#39;: 300,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置自动限速</p><p>下载延迟计算: 通过计算建立TCP连接到接收HTTP header之间的时间来测量的.</p><p>自动计算来确定合理的延迟和并发数, 注意:</p><ul><li>&#39;CONCURRENT_REQUESTS_PER_DOMAIN&#39; 计算出的并发不高于预设置的</li><li>&#39;CONCURRENT_REQUESTS_PER_IP&#39; 计算出的并发不高于预设置的</li><li>&#39;DOWNLOAD_DELAY&#39; 计算出的延迟不会低于预设置的</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
AUTOTHROTTLE_ENABLED = True  # 启用自动限速扩展
# The initial download delay
AUTOTHROTTLE_START_DELAY = 5  # 初始下载延迟
# The maximum download delay to be set in case of high latencies
AUTOTHROTTLE_MAX_DELAY = 60 # 高延迟情况下最大的下载延迟
# The average number of requests Scrapy should be sending in parallel to each remote server
AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0  # 开启时的并发
# Enable showing throttling stats for every response received:
AUTOTHROTTLE_DEBUG = False  # debug模式, true将会展示每个接收到的response, 可以查看限速参数是如何调整的.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>log配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cur_dir = os.path.dirname(os.path.realpath(__file__))
logFilename = os.path.join(cur_dir, &#39;../../crawlerOutput/{}/log/roundmenu.log&#39;.format(VERSION))
logging.basicConfig(
  level=logging.ERROR,  # 定义输出到文件的log级别，
  format=&#39;%(asctime)s  %(filename)s : %(levelname)s  %(message)s&#39;,  # 定义输出log的格式
  datefmt=&#39;%Y-%m-%d %A %H:%M:%S&#39;,  # 时间
  filename=logFilename,  # log文件名
  filemode=&#39;a&#39;)

FEED_EXPORT_ENCODING = &#39;UTF-8&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>请求超时</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 设置超时，默认180秒</span>
DOWNLOAD_TIMEOUT <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>处理HTTP错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 默认为[], 即所有的httperror请求调用errback, 配置后对应的响应将调用callback
HTTPERROR_ALLOWED_CODES = [302, 404]

# 默认False
HTTPERROR_ALLOW_ALL = TRUE

# spider中可以用
handle_httpstatus_list = [404]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>scrapy_redis</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># scrapy_redis 默认有 REDIS_PARAMS 这个参数，且会自动将你的 REDIS_PARAMS 用你的指定的值更新。所以我们可以这样写</span>
REDIS_PARAMS <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;db&#39;</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token string">&#39;use_helper&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>retry重试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RETRY_ENABLED: 是否开启retry
RETRY_TIMES: 重试次数
RETRY_HTTP_CODECS: 遇到什么http code时需要重试，默认是500,502,503,504,408，其他的，网络连接超时等问题也会自动retry的
# 208需要重试, twitchmetrics 发现的问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9),d=[a];function t(r,c){return i(),n("div",null,d)}const u=e(l,[["render",t],["__file","scrapy-setting.html.vue"]]);export{u as default};
