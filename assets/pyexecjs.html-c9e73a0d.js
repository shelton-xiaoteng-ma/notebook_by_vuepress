import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},i=e(`<h1 id="pyexecjs-python执行js代码" tabindex="-1"><a class="header-anchor" href="#pyexecjs-python执行js代码" aria-hidden="true">#</a> PyExecJS python执行js代码</h1><ol><li><p>install</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> PyExecJS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>demo</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token keyword">import</span> execjs
    js_str <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
        function re(){
            var fo = new Fingerprint()
            return fo.getCanvasFingerprint()
    }
    &quot;&quot;&quot;</span>
    ctx <span class="token operator">=</span> execjs<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span>js_str<span class="token punctuation">)</span>
    t <span class="token operator">=</span> ctx<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token string">&#39;re&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[i];function p(o,l){return s(),a("div",null,c)}const u=n(t,[["render",p],["__file","pyexecjs.html.vue"]]);export{u as default};
