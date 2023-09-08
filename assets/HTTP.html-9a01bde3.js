import{_ as e,Y as n,Z as i,a4 as d}from"./framework-957baa9a.js";const a={},s=d(`<h1 id="django-url" tabindex="-1"><a class="header-anchor" href="#django-url" aria-hidden="true">#</a> django url</h1><h2 id="app中修改" tabindex="-1"><a class="header-anchor" href="#app中修改" aria-hidden="true">#</a> app中修改</h2><ul><li>添加urls</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># blog/urls.py
# url: 正则表达式匹配空字符, index: views的内容, name是index的别名
from django.conf.urls import url
urlpatterns = [
    url(r&#39;^$&#39;, views.index, name=&#39;index&#39;),
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加views</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># blog/views.py
from django.http import HttpResponse
# render根据返回的内容构造httpResponse
from django.shortcuts import render  
# Create your views here.
def index(request):
    return HttpResponse(&quot;欢迎访问我的博客首页！&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册到project中" tabindex="-1"><a class="header-anchor" href="#注册到project中" aria-hidden="true">#</a> 注册到project中</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from django.urls import path, include
urlpatterns = [
    path(&#39;admin/&#39;, admin.site.urls),
    # 此处的path, url添加后, 可以和后面的urls组合
    path(&#39;&#39;, include(&#39;blog.urls&#39;)),
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑视图函数" tabindex="-1"><a class="header-anchor" href="#编辑视图函数" aria-hidden="true">#</a> 编辑视图函数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from django.urls import get_object_or_404
# 返回数据库的对象, 不存在返回404
- ...
    post = get_object_or_404(Post, pk=pk)
  ... 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[s];function l(t,u){return n(),i("div",null,r)}const v=e(a,[["render",l],["__file","HTTP.html.vue"]]);export{v as default};
