import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const e={},o=t(`<h1 id="httpx" tabindex="-1"><a class="header-anchor" href="#httpx" aria-hidden="true">#</a> httpx</h1><ol><li><p>demo</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> httpx
<span class="token keyword">import</span> brotli
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># httpx自动添加字段</span>
    <span class="token comment"># &quot;:method&quot;: &quot;GET&quot;,</span>
    <span class="token comment"># &quot;:authority&quot;: &quot;teslamotorsclub.com&quot;,</span>
    <span class="token comment"># &quot;:scheme&quot;: &quot;https&quot;,</span>
    <span class="token comment"># &quot;:path&quot;: &quot;/tmc/online/?type=member&quot;,</span>
    <span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">with</span> httpx<span class="token punctuation">.</span>Client<span class="token punctuation">(</span>headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> http2<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> verify<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token keyword">as</span> client<span class="token punctuation">:</span>
    r <span class="token operator">=</span> client<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> r<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Encoding&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;br&#39;</span><span class="token punctuation">:</span>
            res_text <span class="token operator">=</span> brotli<span class="token punctuation">.</span>decompress<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            res_text <span class="token operator">=</span> r<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>说明</p><ol><li>httpx自动添加headers中http20所需要的字段</li><li>tesla的response使用brotli压缩, 需要特殊处理</li></ol></li></ol>`,2),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","httpx.html.vue"]]);export{r as default};
