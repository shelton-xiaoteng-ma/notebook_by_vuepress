import{_ as e,Y as n,Z as a,a4 as d}from"./framework-957baa9a.js";const i={},s=d(`<h1 id="支持将markdown格式的文本渲染成html页面" tabindex="-1"><a class="header-anchor" href="#支持将markdown格式的文本渲染成html页面" aria-hidden="true">#</a> 支持将Markdown格式的文本渲染成HTML页面</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install markdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="渲染" tabindex="-1"><a class="header-anchor" href="#渲染" aria-hidden="true">#</a> 渲染</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># extensions是markdown的扩展支持, 包括扩展语法, 代码高亮和目录生成
post.body = markdown.markdown(post.body, 
                            extensions=[
                                &#39;markdown.extensions.extra&#39;,
                                &#39;markdown.extensions.codehilite&#39;,
                                &#39;markdown.extensions.toc&#39;,
                            ])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="safe标签" tabindex="-1"><a class="header-anchor" href="#safe标签" aria-hidden="true">#</a> safe标签</h2><p>见template</p>`,6),t=[s];function r(o,l){return n(),a("div",null,t)}const m=e(i,[["render",r],["__file","python-markdown.html.vue"]]);export{m as default};
