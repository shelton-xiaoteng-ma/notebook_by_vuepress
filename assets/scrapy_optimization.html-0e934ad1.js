import{_ as e,Y as a,Z as i,a4 as n}from"./framework-957baa9a.js";const d={},s=n(`<h1 id="scrapy优化" tabindex="-1"><a class="header-anchor" href="#scrapy优化" aria-hidden="true">#</a> Scrapy优化</h1><h2 id="增大并发数" tabindex="-1"><a class="header-anchor" href="#增大并发数" aria-hidden="true">#</a> 增大并发数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="降低日志级别" tabindex="-1"><a class="header-anchor" href="#降低日志级别" aria-hidden="true">#</a> 降低日志级别</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>LOG_LEVEL = &#39;INFO&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="增大线程池" tabindex="-1"><a class="header-anchor" href="#增大线程池" aria-hidden="true">#</a> 增大线程池</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>REACTOR_THREADPOOL_MAXSIZE = 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="禁用cookie" tabindex="-1"><a class="header-anchor" href="#禁用cookie" aria-hidden="true">#</a> 禁用cookie</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Disable cookies (enabled by default)
COOKIES_ENABLED = True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动调整负载" tabindex="-1"><a class="header-anchor" href="#自动调整负载" aria-hidden="true">#</a> 自动调整负载</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
AUTOTHROTTLE_ENABLED = True
# The initial download delay
AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
AUTOTHROTTLE_DEBUG = False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r=[s];function t(l,c){return a(),i("div",null,r)}const u=e(d,[["render",t],["__file","scrapy_optimization.html.vue"]]);export{u as default};
