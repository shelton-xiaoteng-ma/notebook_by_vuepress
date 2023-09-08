import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const e={},p=t(`<h1 id="twisted" tabindex="-1"><a class="header-anchor" href="#twisted" aria-hidden="true">#</a> twisted</h1><ol><li><p>demo</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet <span class="token keyword">import</span> task
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet <span class="token keyword">import</span> reactor
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet<span class="token punctuation">.</span>defer <span class="token keyword">import</span> inlineCallbacks
<span class="token keyword">from</span> bo_lib<span class="token punctuation">.</span>general<span class="token punctuation">.</span>redis_helper <span class="token keyword">import</span> RedisHelper
<span class="token keyword">from</span> bo_lib<span class="token punctuation">.</span>general<span class="token punctuation">.</span>slack_notifier <span class="token keyword">import</span> BONotifier
<span class="token keyword">from</span> notice <span class="token keyword">import</span> feishu
<span class="token keyword">import</span> logging


logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">TestTwisted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@inlineCallbacks</span>
    <span class="token keyword">def</span> <span class="token function">_task</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
            <span class="token keyword">yield</span> self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;BotNotifier开始......&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task <span class="token operator">=</span> task<span class="token punctuation">.</span>LoopingCall<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_task<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
        reactor<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">finish_run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;BotNotifier退出...&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        reactor<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Returns a deferred that calls do-nothing function</span>
        <span class="token comment"># after \`delay\` seconds</span>
        <span class="token keyword">return</span> task<span class="token punctuation">.</span>deferLater<span class="token punctuation">(</span>reactor<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> <span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">)</span>


    <span class="token decorator annotation punctuation">@inlineCallbacks</span>
    <span class="token keyword">def</span> <span class="token function">repeat_forever</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
            <span class="token keyword">yield</span> self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    &#39;&#39;&#39;</span>
    bn <span class="token operator">=</span> TestTwisted<span class="token punctuation">(</span><span class="token punctuation">)</span>
    bn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>一些说明</p><ul><li><p>因为使用了twisted, 要求运行在主线程, 所以需要使用多进程</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>t1 <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>producter<span class="token punctuation">)</span>
t2 <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>customer<span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>任务阻塞参考task.deferLater</p></li><li><p>如果上一个任务运行, 会持续, 不会开始下一个</p></li></ul></li></ol>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","twisted.html.vue"]]);export{r as default};
