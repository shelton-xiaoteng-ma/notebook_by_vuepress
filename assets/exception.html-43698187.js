import{_ as n,Y as a,Z as s,a4 as e}from"./framework-957baa9a.js";const t={},c=e(`<h1 id="异常处理-exception" tabindex="-1"><a class="header-anchor" href="#异常处理-exception" aria-hidden="true">#</a> 异常处理 Exception</h1><h2 id="_1-try-finally" tabindex="-1"><a class="header-anchor" href="#_1-try-finally" aria-hidden="true">#</a> 1. try/finally</h2><p>如果既要将异常向上传播，又要异常发生时执行清理工作，就可以使用try/finally</p><h2 id="_2-try-except-else" tabindex="-1"><a class="header-anchor" href="#_2-try-except-else" aria-hidden="true">#</a> 2. try/except/else</h2><p>如果没有异常抛出，要执行的内容，就放在else中执行, 和try分隔开</p><h2 id="_3-try-except-else-finally" tabindex="-1"><a class="header-anchor" href="#_3-try-except-else-finally" aria-hidden="true">#</a> 3. try/except/else/finally</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">except</span> Exception<span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">except</span> BaseException<span class="token punctuation">:</span>
    <span class="token comment"># 是SystemExit/Exception的父类</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">except</span> SystemExit<span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token comment"># 捕获所有异常</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[c];function p(l,o){return a(),s("div",null,i)}const d=n(t,[["render",p],["__file","exception.html.vue"]]);export{d as default};
