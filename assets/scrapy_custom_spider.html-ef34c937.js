import{_ as s,Y as a,Z as t,$ as p,a0 as n,a1 as e,a4 as i}from"./framework-957baa9a.js";const o={},c=n("h1",{id:"scrapy-自定义爬虫",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scrapy-自定义爬虫","aria-hidden":"true"},"#"),e(" scrapy 自定义爬虫")],-1),l=n("p",null,"减少日志的繁琐配置",-1),u=i(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> customs <span class="token keyword">import</span> MySpider
<span class="token keyword">import</span> scrapy

<span class="token keyword">class</span> <span class="token class-name">ExampleSpider</span><span class="token punctuation">(</span>MySpider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;_summary_

    1. 测试自定义参数 -a crawler_batch_id=&#39;11&#39; -a custom_metrics=&#39;custom_metrics01&#39;
    2. 测试日志, MY_LOG_HELPER=True, 日志写入: /logs/bot_name/spider_name...log
    &quot;&quot;&quot;</span>
    name <span class="token operator">=</span> <span class="token string">&quot;example&quot;</span>
    allowed_domains <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;example.com&quot;</span><span class="token punctuation">]</span>
    start_urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">]</span>
    custom_settings <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;MY_LOG_HELPER&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token string">&#39;BASIC_LOG_DIR&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;./logs&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>inc_stats<span class="token punctuation">(</span><span class="token string">&#39;success_cnt&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="myspider" tabindex="-1"><a class="header-anchor" href="#myspider" aria-hidden="true">#</a> MySpider</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> scrapy
<span class="token keyword">import</span> time
<span class="token keyword">import</span> os
<span class="token keyword">import</span> logging
<span class="token keyword">import</span> datetime
<span class="token keyword">from</span> scrapy<span class="token punctuation">.</span>crawler <span class="token keyword">import</span> Crawler


<span class="token keyword">class</span> <span class="token class-name">MySpider</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;MySpider 自定义爬虫

    1. 自定义指标: inc_stats(), set_stats() 直接操作scrpay.StatsCollector, 自由定义指标
    2. update_settings() 增加spider_name, 方便生成日志文件
    3. 快速自定义日志 install_customize_root_handler
    4. _set_crawler(), 为爬虫日志默认添加crawler_batch_id/spider_id
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        MY_LOG_HELPER <span class="token operator">=</span> self<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>getbool<span class="token punctuation">(</span><span class="token string">&#39;MY_LOG_HELPER&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> MY_LOG_HELPER<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>install_customize_root_handler<span class="token punctuation">(</span>self<span class="token punctuation">.</span>settings<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>spider_id <span class="token operator">=</span> <span class="token string">&#39;{}_{}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">update_settings</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        如果 configure_logging 中配置日志, 并且希望按spider_name命名, 则需要从此处更新settings
        比较早的获取settings, 方便在__init__中使用最完整的settings, 而不是等到Crawl._create_spider
        &quot;&quot;&quot;</span>
        settings<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;spider_name&#39;</span><span class="token punctuation">,</span> cls<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        cls<span class="token punctuation">.</span>settings <span class="token operator">=</span> settings
        <span class="token builtin">super</span><span class="token punctuation">(</span>MySpider<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>update_settings<span class="token punctuation">(</span>settings<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_set_crawler</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> crawler<span class="token punctuation">:</span> Crawler<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;发生在MySpider.__init__之后, 用来补充一些配置到stats

        Args:
            crawler (Crawler): _description_
        &quot;&quot;&quot;</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>_set_crawler<span class="token punctuation">(</span>crawler<span class="token punctuation">)</span>
        crawler<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span><span class="token string">&#39;spider_id&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>spider_id<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token string">&quot;crawler_batch_id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>set_stats<span class="token punctuation">(</span><span class="token string">&#39;crawler_batch_id&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>crawler_batch_id<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>set_stats<span class="token punctuation">(</span><span class="token string">&#39;crawler_batch_id&#39;</span><span class="token punctuation">,</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;%Y_%m_%d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">inc_stats</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;spider自定义统计指标到corestats, 
            self.inc_stats(&#39;success_cnt&#39;, 1)

        Args:
            name (_type_): _description_
            value (int, optional): _description_. Defaults to 1.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>crawler<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>inc_value<span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">set_stats</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>crawler<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>set_value<span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">install_customize_root_handler</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> settings<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;自定义TimedRotatingFileHandler

        Args: in settings.py
            MY_LOG_HELPER = True    # 日志写入文件
            BASIC_LOG_DIR = &#39;/logs&#39;   # 日志根目录, 默认/logs
            file_name = {BASIC_LOG_DIR}/{bot_name}/{spider_name}_YYYY_mm_dd_HH_MM_SS_ffffff.log
        &quot;&quot;&quot;</span>
        BASIC_LOG_DIR <span class="token operator">=</span> settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;BASIC_LOG_DIR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/logs&#39;</span><span class="token punctuation">)</span>
        datetime_str <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;%Y_%m_%d_%H_%M_%S_%f&#39;</span><span class="token punctuation">)</span>
        file_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASIC_LOG_DIR<span class="token punctuation">,</span> settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;BOT_NAME&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bot_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>file_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>file_dir<span class="token punctuation">)</span>
        filename <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>file_dir<span class="token punctuation">,</span> <span class="token string">&#39;{}_{}.log&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;spider_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;spider_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> datetime_str<span class="token punctuation">)</span><span class="token punctuation">)</span>
        encoding <span class="token operator">=</span> settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;LOG_ENCODING&#39;</span><span class="token punctuation">)</span>
        file_handler <span class="token operator">=</span> logging<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span>TimedRotatingFileHandler<span class="token punctuation">(</span>
                filename<span class="token operator">=</span>filename<span class="token punctuation">,</span>
                when<span class="token operator">=</span><span class="token string">&#39;midnight&#39;</span><span class="token punctuation">,</span>
                backupCount<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>
                encoding<span class="token operator">=</span>encoding<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
        formatter <span class="token operator">=</span> logging<span class="token punctuation">.</span>Formatter<span class="token punctuation">(</span>
            fmt<span class="token operator">=</span><span class="token string">&quot;%(asctime)s %(name)s %(filename)s %(lineno)s %(levelname)s %(message)s&quot;</span><span class="token punctuation">,</span>
            datefmt<span class="token operator">=</span>settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;LOG_DATEFORMAT&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        file_handler<span class="token punctuation">.</span>setFormatter<span class="token punctuation">(</span>formatter<span class="token punctuation">)</span>
        file_handler<span class="token punctuation">.</span>setLevel<span class="token punctuation">(</span>settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;LOG_LEVEL&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        logging<span class="token punctuation">.</span>root<span class="token punctuation">.</span>addHandler<span class="token punctuation">(</span>file_handler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function r(d,k){return a(),t("div",null,[c,l,p(" more "),u])}const m=s(o,[["render",r],["__file","scrapy_custom_spider.html.vue"]]);export{m as default};
