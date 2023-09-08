import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const p={},e=t(`<h1 id="setting-py" tabindex="-1"><a class="header-anchor" href="#setting-py" aria-hidden="true">#</a> setting.py</h1><ul><li>设置语言</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>blogproject<span class="token operator">/</span>blogproject<span class="token operator">/</span>settings<span class="token punctuation">.</span>py
<span class="token comment">## 其它配置代码...</span>
LANGUAGE_CODE <span class="token operator">=</span> <span class="token string">&#39;en-us&#39;</span>  <span class="token comment"># &#39;zh-hans&#39;</span>
TIME_ZONE <span class="token operator">=</span> <span class="token string">&#39;UTC&#39;</span>  <span class="token comment"># &#39;Asia/beijing&#39;</span>
<span class="token comment">## 其它配置代码...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置模板路径</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>TEMPLATES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&#39;BACKEND&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.template.backends.django.DjangoTemplates&#39;</span><span class="token punctuation">,</span>
        <span class="token comment"># 重点是这句</span>
        <span class="token string">&#39;DIRS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;templates&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;APP_DIRS&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;context_processors&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;django.template.context_processors.debug&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;django.template.context_processors.request&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;django.contrib.auth.context_processors.auth&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;django.contrib.messages.context_processors.messages&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>选择数据库版本</li><li>查看默认设置</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># blogproject/settings.py</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.sqlite3&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;db.sqlite3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改MySql数据库</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>DEFAULT_CHARSET <span class="token operator">=</span> <span class="token string">&#39;utf8&#39;</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.mysql&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;labelme&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;USER&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;XXX&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;HOST&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PORT&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;sql_mode&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;traditional&#39;</span><span class="token punctuation">,</span>
            <span class="token comment"># &quot;init_command&quot;: &quot;SET sql_mode=&#39;STRICT_TRANS_TABLES&#39;&quot;,</span>
            <span class="token string">&#39;charset&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;utf8&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[e];function c(o,l){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","settings.html.vue"]]);export{d as default};
