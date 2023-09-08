import{_ as e,Y as i,Z as s,a4 as n}from"./framework-957baa9a.js";const l={},d=n(`<h1 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> views</h1><h2 id="_1-django-orm三种查询方法" tabindex="-1"><a class="header-anchor" href="#_1-django-orm三种查询方法" aria-hidden="true">#</a> 1. django orm三种查询方法</h2><ol><li><p>直接导入执行SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    from django.db import connection  

    cursor = connection.cursor()  
    cursor.execute(&quot;insert into hello_author(name) VALUES (&#39;郭敬明&#39;)&quot;)  
    cursor.execute(&quot;update hello_author set name=&#39;韩寒&#39; WHERE name=&#39;郭敬明&#39;&quot;)  
    cursor.execute(&quot;delete from hello_author where name=&#39;韩寒&#39;&quot;)  
    cursor.execute(&quot;select * from hello_author&quot;)  
    cursor.fetchone()  
    cursor.fetchall() 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用raw</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    books=Book.objects.raw(&#39;select * from hello_book&#39;)  
    for book in books:  
        print book  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用orm方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用extra：查询人民邮电出版社出版并且价格大于50元的书籍
Book.objects.filter(publisher__name=&#39;人民邮电出版社&#39;).extra(where=[&#39;price&gt;50&#39;]) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-views三种返回" tabindex="-1"><a class="header-anchor" href="#_2-views三种返回" aria-hidden="true">#</a> 2. views三种返回</h2><ol><li><p>HttpResponse()</p><ol><li>直接返回<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    from django.http import HttpResponse

    def index(request):
        return HttpResponse(&quot;欢迎访问我的博客首页！&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>render<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    from django.shortcuts import render

    def index(request):
        post_list = Post.objects.all().order_by(&#39;-created_time&#39;)
        context = {
            &#39;post_list&#39;: post_list,
            &#39;title&#39;: &#39;博客首页&#39;,
            &#39;welcome&#39;: &#39;欢迎访问我的博客首页&#39;,
        }
        return render(request, &#39;blog/index.html&#39;, context=context)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>JsonResponse()</p></li><li><p>redirect(&#39;/other_url&#39;)</p></li></ol><h2 id="_3-对cookie和session的处理" tabindex="-1"><a class="header-anchor" href="#_3-对cookie和session的处理" aria-hidden="true">#</a> 3. 对cookie和session的处理</h2><ol><li><p>cookie</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>request.COOKIES.get(&#39;islogin&#39;)
response.set_cookie(&#39;islogin&#39;, &#39;yes&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>session</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在django—session表中创建一条记录:
   session-key                                     session-data
   ltv8zy1kh5lxj1if1fcs2pqwodumr45t                  更新数据
else:
    1 生成随机字符串   ltv8zy1kh5lxj1if1fcs2pqwodumr45t
    2 response.set_cookie(&quot;sessionid&quot;,ltv8zy1kh5lxj1if1fcs2pqwodumr45t)
    3 在django—session表中创建一条记录:
    session-key                                     session-data
    ltv8zy1kh5lxj1if1fcs2pqwodumr45t       {&quot;is_login&quot;:True,&quot;username&quot;:&quot;yuan&quot;}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-request的几个属性" tabindex="-1"><a class="header-anchor" href="#_4-request的几个属性" aria-hidden="true">#</a> 4. request的几个属性</h2><ol><li>Path</li><li>method</li><li>GET</li><li>COOKIES</li><li>POST <ol><li>类似字典对象, 可以通过<code>request.POST[&#39;choice&#39;]</code>来获取post的请求参数</li></ol></li></ol>`,9),a=[d];function r(t,o){return i(),s("div",null,a)}const u=e(l,[["render",r],["__file","views.html.vue"]]);export{u as default};
