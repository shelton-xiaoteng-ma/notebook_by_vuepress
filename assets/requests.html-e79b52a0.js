import{_ as e,Y as s,Z as i,a4 as a}from"./framework-957baa9a.js";const n={},d=a(`<h1 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h1><h2 id="_1-请求参数" tabindex="-1"><a class="header-anchor" href="#_1-请求参数" aria-hidden="true">#</a> 1. 请求参数</h2><ol><li><p>headers</p></li><li><p>proxies</p></li><li><p>get请求的参数dict</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>params = {}
res = requests.get(params=params)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>cookies 参数,dict</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cookies = {
    XX
    ...
}
res = requests.get(cookies=cookies)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>post请求的data参数, dict</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>body = {}
res = requests.post(data=body)  #如果是json,则使用json.dumps()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 有个问题, 如果需要发送的body里面有中文, 则会被编码
</code></pre><h2 id="_2-cookies的使用" tabindex="-1"><a class="header-anchor" href="#_2-cookies的使用" aria-hidden="true">#</a> 2. cookies的使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    cookies = response.cookies   # cookies类型: &lt;class &#39;requests.cookies.RequestsCookieJar&#39;&gt;
    cookies = response.cookies.get_dict()   # cookies 返回, &lt;class &#39;dict&#39;&gt;
    cookies[&#39;sig&#39;] = tmp_cookies.get(&#39;sig&#39;) # 可以使用get拿取需要的cookie
    res = requests.post(url=post_url, data=data, cookies=cookies)   # 包含cookies访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-session的使用" tabindex="-1"><a class="header-anchor" href="#_3-session的使用" aria-hidden="true">#</a> 3. session的使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    session = requests.Session()
    response = session.get(&#39;url&#39;)
    session_dict = session.json()  # 返回： {&#39;cookies&#39;: {&quot;abc&quot;: &#39;123&#39;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-response" tabindex="-1"><a class="header-anchor" href="#_4-response" aria-hidden="true">#</a> 4. response</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>r = requests.get(&#39;url&#39;)
    1. r.text   # 返回的文本 
    2. r.json() # 返回的结果转成JSON格式
    3. r.status_code
    4. r.url
    5. r.request    # 请求对象 
    5. r.request.headers[&#39;User-Agent&#39;]  # 查看请求头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[d];function t(l,o){return s(),i("div",null,r)}const u=e(n,[["render",t],["__file","requests.html.vue"]]);export{u as default};
