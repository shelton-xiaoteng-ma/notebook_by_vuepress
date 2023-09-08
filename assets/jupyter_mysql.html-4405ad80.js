import{_ as s,Y as n,Z as a,a4 as e}from"./framework-957baa9a.js";const l={},t=e(`<h1 id="jupyter-mysql" tabindex="-1"><a class="header-anchor" href="#jupyter-mysql" aria-hidden="true">#</a> Jupyter Mysql</h1><ol><li><p>加载mysql库</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 加载sql库</span>
    <span class="token operator">%</span>load_ext sql

    <span class="token comment"># 建立连接</span>
    <span class="token operator">%</span>sql mysql<span class="token punctuation">:</span><span class="token operator">//</span>user<span class="token punctuation">:</span>pw@mysqlserver<span class="token operator">/</span>db_name

    <span class="token comment"># 选择查询的数据库</span>
    <span class="token operator">%</span>sql USE db

    <span class="token comment"># 每一次操作都要如下开头</span>
    <span class="token operator">%</span>sql <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),i=[t];function o(c,p){return n(),a("div",null,i)}const d=s(l,[["render",o],["__file","jupyter_mysql.html.vue"]]);export{d as default};
