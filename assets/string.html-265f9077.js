import{_ as s,Y as n,Z as a,a4 as t}from"./framework-957baa9a.js";const e={},p=t(`<h1 id="string-模块" tabindex="-1"><a class="header-anchor" href="#string-模块" aria-hidden="true">#</a> string 模块</h1><p>提供字符串和数字组合</p><ol><li><p>用法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> string
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string
<span class="token operator">&lt;</span>module <span class="token string">&#39;string&#39;</span> <span class="token keyword">from</span> <span class="token string">&#39;/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/string.py&#39;</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>digits
<span class="token string">&#39;0123456789&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>hexdigits
<span class="token string">&#39;0123456789abcdefABCDEF&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>octdigits
<span class="token string">&#39;01234567&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>punctuation
<span class="token string">&#39;!&quot;#$%&amp;\\&#39;()*+,-./:;&lt;=&gt;?@[\\\\]^_\`{|}~&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>ascii_lowercase
<span class="token string">&#39;abcdefghijklmnopqrstuvwxyz&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>ascii_uppercase
<span class="token string">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> string<span class="token punctuation">.</span>ascii_letters
<span class="token string">&#39;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关系</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>printable <span class="token operator">=</span> digits <span class="token operator">+</span> ascii_letters <span class="token operator">+</span> punctuation <span class="token operator">+</span> whitespace
hexdigits <span class="token operator">=</span> digits <span class="token operator">+</span> <span class="token string">&#39;abcdef&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;ABCDEF&#39;</span>
whitespace <span class="token operator">=</span> <span class="token string">&#39; \\t\\n\\r\\v\\f&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>随机字符串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span>random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>string<span class="token punctuation">.</span>digits<span class="token operator">+</span>string<span class="token punctuation">.</span>ascii_lowercase<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,3),o=[p];function i(r,l){return n(),a("div",null,o)}const d=s(e,[["render",i],["__file","string.html.vue"]]);export{d as default};
