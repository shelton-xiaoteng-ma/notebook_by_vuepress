import{_ as s,Y as n,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},o=e(`<h1 id="flask-others" tabindex="-1"><a class="header-anchor" href="#flask-others" aria-hidden="true">#</a> flask others</h1><ol><li>flask 返回json乱码的问题 <ul><li><p>在app.config添加配置:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;JSON_AS_ASCII&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">False</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token string">&#39;8080&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol>`,2),p=[o];function l(c,i){return n(),a("div",null,p)}const u=s(t,[["render",l],["__file","others.html.vue"]]);export{u as default};
