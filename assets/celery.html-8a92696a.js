import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},p=e(`<h1 id="celery" tabindex="-1"><a class="header-anchor" href="#celery" aria-hidden="true">#</a> Celery</h1><p>Distributed Task Queue</p><ol><li>Choosing a Broker <ol><li>Redis</li><li>Rebbit MQ</li></ol></li><li>Installing Celery<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install celery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Application <ol><li>app线程安全<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;pyamqp://guest@localhost//&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># redis, broker读取任务</span>
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>task</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>Keeping Results <ol><li>为了追踪任务状态, celery需要存储和发送任务状态, backend可选( SQLAlchemy/Django ORM, MongoDB, Memcached, Redis, RPC (RabbitMQ/AMQP))</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> backend<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;pyamqp://guest@localhost//&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># redis, broker读取任务, backend</span>
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> backend<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>task</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token comment"># 对于结果调用</span>
<span class="token comment"># delay调用, 返回异步结果</span>
result <span class="token operator">=</span> add<span class="token punctuation">.</span>delay<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span><span class="token builtin">id</span>    <span class="token comment"># 任务id</span>
result<span class="token punctuation">.</span>ready<span class="token punctuation">(</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span>get<span class="token punctuation">(</span>timeout<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># 异常处理, 如果有异常, 调用get也会返回异常</span>
result<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># 直接抛出异常</span>
result<span class="token punctuation">.</span>get<span class="token punctuation">(</span>propagate<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment"># 只返回异常名, 不返回完整的调用栈</span>
result<span class="token punctuation">.</span>traceback    <span class="token comment"># 查看完整的调用栈</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Configuration <ol><li>硬编码配置<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>app<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>task_serializer <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span>
app<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>update<span class="token punctuation">(</span>
    task_serializer<span class="token operator">=</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    accept_content<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment"># Ignore other content</span>
    result_serializer<span class="token operator">=</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    timezone<span class="token operator">=</span><span class="token string">&#39;Europe/Oslo&#39;</span><span class="token punctuation">,</span>
    enable_utc<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>配置文件<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app.config_from_object(&#39;celeryconfig&#39;)
# celeryconfig.py
broker_url = &#39;pyamqp://&#39;
result_backend = &#39;rpc://&#39;
task_serializer = &#39;json&#39;
result_serializer = &#39;json&#39;
accept_content = [&#39;json&#39;]
timezone = &#39;Europe/Oslo&#39;
enable_utc = True
# python -m celeryconfig.py 检查配置文件准确
# 特定队列的配置
task_routes = {
    &#39;tasks.add&#39;: &#39;low-priority&#39;,
    &#39;tasks.add&#39;: {&#39;rate_limit&#39;: &#39;10/m&#39;} # 每分钟处理10个任务
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>启动worker<div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>celery -A tasks worker --loglevel=INFO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>other</li></ol>`,3),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","celery.html.vue"]]);export{u as default};
