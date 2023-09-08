import{_ as d,Y as r,Z as l,a0 as e,a1 as i,a2 as a,a4 as s,E as v}from"./framework-957baa9a.js";const c={},t=s(`<h2 id="scrapy-redis" tabindex="-1"><a class="header-anchor" href="#scrapy-redis" aria-hidden="true">#</a> Scrapy-Redis</h2><h2 id="设置说明" tabindex="-1"><a class="header-anchor" href="#设置说明" aria-hidden="true">#</a> 设置说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   ## 以下是redis配置
   
   # 启用Redis调度存储请求队列
   SCHEDULER = &quot;scrapy_redis.scheduler.Scheduler&quot;
   
   # 确保所有的爬虫通过Redis去重
   DUPEFILTER_CLASS = &#39;scrapy_redis.dupefilter.RFPDupeFilter&#39;
   
   # 请求序列化器
   SCHEDULER_SERIALIZER = &quot;scrapy_redis.picklecompat&quot;
   
   # 不清空Redis队列, 可以暂停/恢复爬虫
   SCHEDULER_PERSIST = True
   
   #使用优先级调度请求队列 （默认使用）
   SCHEDULER_QUEUE_CLASS = &#39;scrapy_redis.queue.PriorityQueue&#39;
   #可选用的其它队列
   #SCHEDULER_QUEUE_CLASS = &#39;scrapy_redis.queue.FifoQueue&#39;
   #SCHEDULER_QUEUE_CLASS = &#39;scrapy_redis.queue.LifoQueue&#39;
   
   # 设置最大等待时间来避免爬虫关闭, 只有在队列是SpiderQueue和SpiderStack是才有效
   SCHEDULER_IDLE_BEFORE_CLOSE = 10
   
   # 在redis中存储爬取的item, 以便于后续处理
   ITEM_PIPELINES = {
      &#39;scrapy_redis.pipelines.RedisPipeline&#39;: 300,
   }
   
   # item序列化并保存这些item在此redis 键中
   REDIS_ITEMS_KEY = &#39;%(spider)s:items&#39;
   
   # item序列化默认使用ScrapyJSONEncoder. 你可以使用其他
   REDIS_ITEMS_SERIALIZER = &#39;json.dumps&#39;
   
   # 指定redis的主机和端口
   REDIS_HOST = &#39;localhost&#39;
   REDIS_PORT = 6379
   
   # 指定完整的redis连接参数,比如: 超时等
   #REDIS_PARAMS  = {}
   # Use custom redis client class.
   #REDIS_PARAMS[&#39;redis_cls&#39;] = &#39;myproject.RedisClient&#39;
   
   # 如果为true, 将使用redis的spop操作,你必须使用sadd命令来增加urls到redis队列. 
   # 如果你想在start urls的列表避免重复, 并且顺序不重要是可以使用
   REDIS_START_URLS_AS_SET = False
   
   # 默认redis urls的键用于RedisSpider和RedisCrawlSpider
   REDIS_START_URLS_KEY = &#39;%(name)s:start_urls&#39;
   
   # 为redis使用其他编码, 默认utf-8
   # REDIS_ENCODING = &#39;latin1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spider部分" tabindex="-1"><a class="header-anchor" href="#spider部分" aria-hidden="true">#</a> spider部分</h2><ul><li>spider继承RedisSpider类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from scrapy_redis.spiders import RedisCrawlSpider  # 可以自定义地址过滤, 暂不考虑
from scrapy_redis.spiders import RedisSpider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>start_urls</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># start_urls 来自redis, 位置由redis_key决定, 一般为 spider_name:start_urls
redis_key = &#39;douban_spider_redis:start_urls&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pipelines</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># item默认输出到redis一份, 位置: spider_name:items
# 可以改写process_item方法来将item输出成多个格式, 也可以爬完之后再从redis获取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可以指定redis数据库到其他位置" tabindex="-1"><a class="header-anchor" href="#可以指定redis数据库到其他位置" aria-hidden="true">#</a> 可以指定redis数据库到其他位置</h2>`,11),u={href:"https://blog.csdn.net/Bone_ACE/article/details/54139500",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>在settings.py同级目录下新建一个文件schedulerOverwrite.py，填入下面的代码。然后在settings.py设置SCHEDULER=schedulerOverwrite.SchedulerSon，之后在settings.py中设置REDIS_DB=XXX即可指定db。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import redis
from scrapy_redis.scheduler import Scheduler
from scrapy.utils.misc import load_object
# default values
SCHEDULER_PERSIST = False
QUEUE_KEY = &#39;%(spider)s:requests&#39;
QUEUE_CLASS = &#39;scrapy_redis.queue.SpiderPriorityQueue&#39;
DUPEFILTER_KEY = &#39;%(spider)s:dupefilter&#39;
IDLE_BEFORE_CLOSE = 0
 
REDIS_URL = None
REDIS_HOST = &#39;localhost&#39;
REDIS_PORT = 6379
REDIS_DB = 0
 
 
def from_settings(settings):
    url = settings.get(&#39;REDIS_URL&#39;, REDIS_URL)
    host = settings.get(&#39;REDIS_HOST&#39;, REDIS_HOST)
    port = settings.get(&#39;REDIS_PORT&#39;, REDIS_PORT)
    db = settings.get(&#39;REDIS_DB&#39;, REDIS_DB)

    # REDIS_URL takes precedence over host/port specification.
    if url:
        return redis.from_url(url)
    else:
        return redis.Redis(host=host, port=port, db=db)
 
 
class SchedulerSon(Scheduler):
    @classmethod
    def from_settings(cls, settings):
        persist = settings.get(&#39;SCHEDULER_PERSIST&#39;, SCHEDULER_PERSIST)
        queue_key = settings.get(&#39;SCHEDULER_QUEUE_KEY&#39;, QUEUE_KEY)
        queue_cls = load_object(settings.get(&#39;SCHEDULER_QUEUE_CLASS&#39;, QUEUE_CLASS))
        dupefilter_key = settings.get(&#39;DUPEFILTER_KEY&#39;, DUPEFILTER_KEY)
        idle_before_close = settings.get(&#39;SCHEDULER_IDLE_BEFORE_CLOSE&#39;, IDLE_BEFORE_CLOSE)
        server = from_settings(settings)
        return cls(server, persist, queue_key, queue_cls, dupefilter_key, idle_before_close)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(b,E){const n=v("ExternalLinkIcon");return r(),l("div",null,[t,e("p",null,[e("a",u,[i("参考位置:https://blog.csdn.net/Bone_ACE/article/details/54139500"),a(n)]),i(" 原理: 重写scrapy_redis的调度器: scheduler.py下的from_settings()方法调用")]),m])}const S=d(c,[["render",_],["__file","scrapy-redis.html.vue"]]);export{S as default};
