import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const t="/images/2816666215-5a25a21f9f37d.png",p={},i=e('<h1 id="scrapy基本组件" tabindex="-1"><a class="header-anchor" href="#scrapy基本组件" aria-hidden="true">#</a> scrapy基本组件</h1><h2 id="scrapy体系流程图" tabindex="-1"><a class="header-anchor" href="#scrapy体系流程图" aria-hidden="true">#</a> scrapy体系流程图</h2><p><img src="'+t+`" alt=""></p><h2 id="spiders" tabindex="-1"><a class="header-anchor" href="#spiders" aria-hidden="true">#</a> spiders</h2><p><strong>基本用法</strong><br> 作为爬虫的开始</p><ul><li><p>开始:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scrapy genspider my_spider baidu.com

<span class="token comment"># template</span>
scrapy genspider my_spider baidu.com <span class="token parameter variable">-d</span> basic
<span class="token comment"># templates位于scrapy/templates/spiders</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>需要实现start_request方法 或存在 start_urls</p></li><li><p>request和response中携带meta属性</p></li><li><p><strong>其他</strong></p><ul><li>模拟表单请求的FormRequest</li><li>异常请求的处理</li></ul></li></ul><hr><h2 id="items" tabindex="-1"><a class="header-anchor" href="#items" aria-hidden="true">#</a> Items</h2><p>item用来结构化数据,所有的item都要实现scrapy.Item</p><ul><li>每个Item为一个类</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">RestaurantItem</span><span class="token punctuation">(</span>scrapy<span class="token punctuation">.</span>Item<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># define the fields for your item here like:</span>
    <span class="token builtin">id</span> <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
    name <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Field<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="item-pipelines" tabindex="-1"><a class="header-anchor" href="#item-pipelines" aria-hidden="true">#</a> item pipelines</h2><p><strong>基本用法</strong><em>pipeline用来处理Item对象</em>, 需要实现的方法:</p><ul><li>process_item(self, item, spider) <strong>必须</strong></li><li><code>__init__</code> <strong>可选</strong></li><li>from_crawler(cls, crawler) <strong>可选</strong></li><li>open_spider(self, spider) <strong>可选</strong></li><li>close_spider(self, spider) <strong>可选</strong></li></ul><p>启用编写好的pipelines</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>  <span class="token comment"># Configure item pipelines</span>
  <span class="token comment"># See https://doc.scrapy.org/en/latest/topics/item-pipeline.html</span>
  ITEM_PIPELINES <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;talabat_scrapy.pipelines.TalabatScrapyPipeline&#39;</span><span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以官网的MongoPipeline为例:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>  <span class="token keyword">import</span> pymongo

  <span class="token keyword">class</span> <span class="token class-name">MongoPipeline</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

      collection_name <span class="token operator">=</span> <span class="token string">&#39;scrapy_items&#39;</span>

      <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> mongo_uri<span class="token punctuation">,</span> mongo_db<span class="token punctuation">)</span><span class="token punctuation">:</span>
          self<span class="token punctuation">.</span>mongo_uri <span class="token operator">=</span> mongo_uri
          self<span class="token punctuation">.</span>mongo_db <span class="token operator">=</span> mongo_db

      <span class="token decorator annotation punctuation">@classmethod</span>
      <span class="token keyword">def</span> <span class="token function">from_crawler</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> crawler<span class="token punctuation">)</span><span class="token punctuation">:</span>
          <span class="token keyword">return</span> cls<span class="token punctuation">(</span>
              mongo_uri<span class="token operator">=</span>crawler<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;MONGO_URI&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              mongo_db<span class="token operator">=</span>crawler<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;MONGO_DATABASE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;items&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">)</span>

      <span class="token keyword">def</span> <span class="token function">open_spider</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
          self<span class="token punctuation">.</span>client <span class="token operator">=</span> pymongo<span class="token punctuation">.</span>MongoClient<span class="token punctuation">(</span>self<span class="token punctuation">.</span>mongo_uri<span class="token punctuation">)</span>
          self<span class="token punctuation">.</span>db <span class="token operator">=</span> self<span class="token punctuation">.</span>client<span class="token punctuation">[</span>self<span class="token punctuation">.</span>mongo_db<span class="token punctuation">]</span>

      <span class="token keyword">def</span> <span class="token function">close_spider</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
          self<span class="token punctuation">.</span>client<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token keyword">def</span> <span class="token function">process_item</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> item<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
          self<span class="token punctuation">.</span>db<span class="token punctuation">[</span>self<span class="token punctuation">.</span>collection_name<span class="token punctuation">]</span><span class="token punctuation">.</span>insert_one<span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>文件管道 和 图片管道</strong> 两个管道的优点: <ul><li>避免下载重复的文件</li><li>可以指定下载文件位置</li></ul></li></ul>`,20),o=[i];function l(c,u){return s(),a("div",null,o)}const d=n(p,[["render",l],["__file","basic-component.html.vue"]]);export{d as default};
