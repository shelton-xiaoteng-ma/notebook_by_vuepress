import{_ as e,Y as i,Z as n,a4 as s}from"./framework-957baa9a.js";const l={},a=s(`<h1 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h1><p>HTTP协议中的post请求，由状态行、请求头(headers)和消息主体(entity-body)组成<br> post的消息主体（entity-body）的说明 消息主体(entity-body)是在HTTP协议中规定，以ASCII码传输，但协议没有规定使用何种编码，所以POST请求包含了Content-Type(编码说明)和entity-body(消息主体)两部分</p><p>Content-Type样式：</p><ul><li><p>x-www-form-urlencoded</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># headers样式
# 消息主体发送浏览器form表单，消息主体进行url编码
headers = {
    &#39;Content-Type&#39;:&#39;application/x-www-form-urlencoded&#39;
}
# url编码后的样式
title=test&amp;sub%5B%5D=1&amp;sub%5B%5D=2&amp;sub%5B%5D=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>requests样式<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests
payload = {}  # 一个字典，requests在发送时会自动编码
res = requests.post(url=url, data=payload)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>requests发送list<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>payload = ((&#39;key1&#39;, &#39;value1&#39;), (&#39;key1&#39;, &#39;value2&#39;))
r = requests.post(&#39;http://httpbin.org/post&#39;, data=payload)
&gt;&quot;form&quot;: {
&gt;    &quot;key1&quot;: [
&gt;      &quot;value1&quot;,
&gt;      &quot;value2&quot;
&gt;    ]
&gt;  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>application/json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># headers样式
# 消息主题是序列化后的JSON字符串
headers = {
    &#39;Content-Type&#39;:&#39;application/json&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>requests样式<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests
payload = {}  # 一个字典，requests在发送时会自动编码
r = requests.post(url, data=json.dumps(payload))        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>multipart/form-data</p></li><li><p>text/xml</p></li></ul>`,4),d=[a];function t(r,u){return i(),n("div",null,d)}const v=e(l,[["render",t],["__file","post.html.vue"]]);export{v as default};
