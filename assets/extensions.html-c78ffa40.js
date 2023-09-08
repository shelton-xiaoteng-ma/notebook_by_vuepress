import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},p=e(`<h1 id="extension-扩展" tabindex="-1"><a class="header-anchor" href="#extension-扩展" aria-hidden="true">#</a> EXTENSION 扩展</h1><ol><li><p>scrapy-redis自动关闭</p><ol><li>脚本</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># encoding: utf-8</span>
<span class="token keyword">import</span> logging
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet <span class="token keyword">import</span> task
<span class="token keyword">from</span> scrapy<span class="token punctuation">.</span>exceptions <span class="token keyword">import</span> NotConfigured
<span class="token keyword">from</span> scrapy <span class="token keyword">import</span> signals

logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">CloseSpiderRedis</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Start a task to check if scrapy_redis spider is idle in every minutes,
    when it found the idle times granter then CLOSE_SPIDER_AFTER_IDLE_TIMES which add in settings,
    the spider would be closed.
    Usage:
    In settings.py
    EXTENSIONS = {
        &#39;prototypes.extensions.CloseSpiderRedis&#39;: 100,
    },
    CLOSE_SPIDER_AFTER_IDLE_TIMES = 5
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> crawler<span class="token punctuation">,</span> idle_close_after_times<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>crawler <span class="token operator">=</span> crawler
        self<span class="token punctuation">.</span>stats <span class="token operator">=</span> crawler<span class="token punctuation">.</span>stats
        self<span class="token punctuation">.</span>idle_close_after_times <span class="token operator">=</span> idle_close_after_times
        self<span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token string">&#39;close spider after {0} times of spider idle&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>idle_close_after_times<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>idle_count <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>interval <span class="token operator">=</span> <span class="token number">60.0</span>
        self<span class="token punctuation">.</span>multiplier <span class="token operator">=</span> <span class="token number">60.0</span> <span class="token operator">/</span> self<span class="token punctuation">.</span>interval

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">from_crawler</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> crawler<span class="token punctuation">)</span><span class="token punctuation">:</span>
        idle_close_after_times <span class="token operator">=</span> crawler<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>getint<span class="token punctuation">(</span><span class="token string">&#39;CLOSE_SPIDER_AFTER_IDLE_TIMES&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> idle_close_after_times<span class="token punctuation">:</span>
            <span class="token keyword">raise</span> NotConfigured
        o <span class="token operator">=</span> cls<span class="token punctuation">(</span>crawler<span class="token punctuation">,</span> idle_close_after_times<span class="token punctuation">)</span>
        crawler<span class="token punctuation">.</span>signals<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>o<span class="token punctuation">.</span>spider_opened<span class="token punctuation">,</span> signal<span class="token operator">=</span>signals<span class="token punctuation">.</span>spider_opened<span class="token punctuation">)</span>
        crawler<span class="token punctuation">.</span>signals<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>o<span class="token punctuation">.</span>spider_closed<span class="token punctuation">,</span> signal<span class="token operator">=</span>signals<span class="token punctuation">.</span>spider_closed<span class="token punctuation">)</span>
        <span class="token keyword">return</span> o

    <span class="token keyword">def</span> <span class="token function">spider_opened</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>pagesprev <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>itemsprev <span class="token operator">=</span> <span class="token number">0</span>

        self<span class="token punctuation">.</span>task <span class="token operator">=</span> task<span class="token punctuation">.</span>LoopingCall<span class="token punctuation">(</span>self<span class="token punctuation">.</span>idle_close<span class="token punctuation">,</span> spider<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>start<span class="token punctuation">(</span>self<span class="token punctuation">.</span>interval<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">idle_close</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
        items <span class="token operator">=</span> self<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token string">&#39;item_scraped_count&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        pages <span class="token operator">=</span> self<span class="token punctuation">.</span>stats<span class="token punctuation">.</span>get_value<span class="token punctuation">(</span><span class="token string">&#39;response_received_count&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        irate <span class="token operator">=</span> <span class="token punctuation">(</span>items <span class="token operator">-</span> self<span class="token punctuation">.</span>itemsprev<span class="token punctuation">)</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>multiplier
        prate <span class="token operator">=</span> <span class="token punctuation">(</span>pages <span class="token operator">-</span> self<span class="token punctuation">.</span>pagesprev<span class="token punctuation">)</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>multiplier
        self<span class="token punctuation">.</span>pagesprev<span class="token punctuation">,</span> self<span class="token punctuation">.</span>itemsprev <span class="token operator">=</span> pages<span class="token punctuation">,</span> items

        <span class="token keyword">if</span> irate <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> prate <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>idle_count <span class="token operator">==</span> self<span class="token punctuation">.</span>idle_close_after_times<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>crawler<span class="token punctuation">.</span>engine<span class="token punctuation">.</span>close_spider<span class="token punctuation">(</span>spider<span class="token punctuation">,</span> reason<span class="token operator">=</span>self<span class="token punctuation">.</span>reason<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>idle_count <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">spider_closed</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">,</span> reason<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>running<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","extensions.html.vue"]]);export{r as default};
