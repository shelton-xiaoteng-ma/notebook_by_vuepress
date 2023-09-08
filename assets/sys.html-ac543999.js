import{_ as s,Y as n,Z as a,a4 as e}from"./framework-957baa9a.js";const i={},t=e(`<h1 id="sys" tabindex="-1"><a class="header-anchor" href="#sys" aria-hidden="true">#</a> sys</h1><ol><li>sys.path.append(&#39;&#39;)</li><li>中断python进程 <ol><li>sys.exit(0) <ol><li>会引发一个异常, SystemExit, 如果异常不被捕获,, 解释器将会退出</li><li>0为正常退出, (1-127为异常)</li><li>优先使用</li></ol></li><li>os._exit() <ol><li>直接终止解释器运行</li></ol></li><li>quit() <ol><li><p>raist SystemExit</p></li><li><p>demo</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">test_quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token keyword">except</span> SystemExit<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol></li></ol>`,2),l=[t];function o(p,c){return n(),a("div",null,l)}const u=s(i,[["render",o],["__file","sys.html.vue"]]);export{u as default};
