import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},i=e(`<h1 id="unittest" tabindex="-1"><a class="header-anchor" href="#unittest" aria-hidden="true">#</a> unittest</h1><ol><li><p>demo_code</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># ~/tests/test_xx.py</span>
    <span class="token keyword">import</span> unittest

    <span class="token keyword">class</span> <span class="token class-name">TestCrypt</span><span class="token punctuation">(</span>unittest<span class="token punctuation">.</span>TestCase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">test_dewu_sign</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        query_string <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;catId&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>assertAlmostEqual<span class="token punctuation">(</span>dewu_sign<span class="token punctuation">(</span>query_string<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;23b0ee4fedbc330db564b451e2ae75e5&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># 非必需</span>
    <span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
        unittest<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>run</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-m</span> unittest
python3 test_xx.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),p=[i];function c(l,o){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","unittest.html.vue"]]);export{d as default};
