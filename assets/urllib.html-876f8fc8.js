import{_ as l,Y as a,Z as s,a0 as e,a1 as i,a2 as r,a4 as t,E as d}from"./framework-957baa9a.js";const u={},o=e("h1",{id:"urllib",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#urllib","aria-hidden":"true"},"#"),i(" urllib")],-1),c={href:"https://stackoverflow.com/questions/41501638/attributeerror-module-urllib-has-no-attribute-parse",target:"_blank",rel:"noopener noreferrer"},v=t(`<ol><li><p>构造请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import urllib.parse
# &amp;后面的组合生成
urllib.parse.urlencode(query_data, doseq=True)  # query_data是一个dict
# 如果一个key中是list，doseq可以确保正确的编码

# 如果需要构造cookie或其他内容，需要对单独的str编码
urllib.parse.quote(str)
# 默认将空格转码成%20， 如果需要转成\`+\`,使用下面的  
urllib.parse.quote_plus(str)
[+和%20的区别](https://stackoverflow.com/questions/2678551/when-to-encode-space-to-plus-or-20/2678602)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解析请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>urllib.parse.parse_qs(&#39;age=23&amp;name=%E5%BC%A0%E4%B8%89&#39;)
{&#39;age&#39;: [&#39;23&#39;], &#39;name&#39;: [&#39;张三&#39;]}

urllib.parse.parse_qsl(&#39;age=23&amp;name=%E5%BC%A0%E4%B8%89&#39;)
[(&#39;age&#39;, &#39;23&#39;), (&#39;name&#39;, &#39;张三&#39;)]

# 解析字符串
urllib.parse.unquote(query)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function m(b,p){const n=d("ExternalLinkIcon");return a(),s("div",null,[o,e("p",null,[e("a",c,[i("AttributeError: module 'urllib' has no attribute 'parse'"),r(n)])]),v])}const h=l(u,[["render",m],["__file","urllib.html.vue"]]);export{h as default};
