import{_ as d,Y as t,Z as o,a0 as n,a1 as a,a2 as e,a3 as i,a4 as l,E as r}from"./framework-957baa9a.js";const c={},p=l(`<h1 id="开始一个项目" tabindex="-1"><a class="header-anchor" href="#开始一个项目" aria-hidden="true">#</a> 开始一个项目</h1><h2 id="_0安装" tabindex="-1"><a class="header-anchor" href="#_0安装" aria-hidden="true">#</a> 0安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> Django
<span class="token function">sudo</span> python <span class="token parameter variable">-m</span> pip <span class="token function">install</span> Django
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>开发流程</p><ul><li>搭建开发环境</li><li>创建Django工程, 基础设置(数据库版本, 模板路径, 语言等), 创建超级用户</li><li>建立应用app, 并注册到setting</li><li>创建数据库模型models, 迁移数据库</li><li>设计app需要的urls, 添加到工程的urls中</li><li>设计url对应的视图函数views, 编辑需要的模板</li></ul></li><li><p>部署流程</p><ul><li>clone代码</li><li>启动虚拟环境, 安装依赖</li><li>收集静态文件</li></ul></li></ol><h2 id="_1-准备目录" tabindex="-1"><a class="header-anchor" href="#_1-准备目录" aria-hidden="true">#</a> 1. 准备目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> mysite
<span class="token builtin class-name">cd</span> mysite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-创建虚拟环境" tabindex="-1"><a class="header-anchor" href="#_2-创建虚拟环境" aria-hidden="true">#</a> 2. 创建虚拟环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># deprecated</span>
virtualenv --no-site-packages venv
<span class="token builtin class-name">source</span> venv/bin/activate
<span class="token comment"># 安装包</span>
pip <span class="token parameter variable">-r</span> requirement.txt
<span class="token comment">## activate</span>
python3 <span class="token parameter variable">-m</span> venv ./django_venv
<span class="token builtin class-name">source</span> django_venv/bin/activate
<span class="token comment"># check version</span>
python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> django
python <span class="token parameter variable">-m</span> django <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建django项目" tabindex="-1"><a class="header-anchor" href="#_3-创建django项目" aria-hidden="true">#</a> 3. 创建django项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>django-admin startproject mysite
<span class="token builtin class-name">cd</span> mysit
<span class="token comment"># 可以指定应用访问的web ip和端口</span>
python36 manage.py runserver <span class="token number">0</span>:8000 

<span class="token comment"># python manage.py runserver 会使AppConfig.ready() running twice, 可以加参数</span>
<span class="token comment"># https://stackoverflow.com/questions/33814615/how-to-avoid-appconfig-ready-method-running-twice-in-django</span>
python manage.py runserver <span class="token parameter variable">--noreload</span> <span class="token number">0</span>:8000 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发服务器自动重载代码的修改, 但是文件的添加需要重启.</p><p>django提供了自动生成一个app的目录结构的功能.</p><h2 id="_4-创建一个app" tabindex="-1"><a class="header-anchor" href="#_4-创建一个app" aria-hidden="true">#</a> 4. 创建一个app</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py startapp polls
<span class="token comment"># 将会创建出一个目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>app文件夹结构</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>blog<span class="token punctuation">\\</span>
    __init__.py
    admin.py
    apps.py
    migrations<span class="token punctuation">\\</span>
        __init__.py
    models.py
    tests.py
    views.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置文件中注册应用</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>blogproject<span class="token operator">/</span>blogproject<span class="token operator">/</span>settings<span class="token punctuation">.</span>py
<span class="token comment">## 其他配置项...</span>
INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;django.contrib.admin&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.auth&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.contenttypes&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.sessions&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.messages&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;django.contrib.staticfiles&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;polls.apps.PollsConfig&#39;</span><span class="token punctuation">,</span> <span class="token comment"># 注册 polls 应用</span>
<span class="token punctuation">]</span>
<span class="token comment">## 其他配置项..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),u={id:"_5-创建modelsmodels-md",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_5-创建modelsmodels-md","aria-hidden":"true"},"#",-1),m={id:"_6-配置viewsviews-md",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_6-配置viewsviews-md","aria-hidden":"true"},"#",-1),b={id:"_7-配置urlsurls-md",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_7-配置urlsurls-md","aria-hidden":"true"},"#",-1),g={id:"_8-django-admindjango-admin",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_8-django-admindjango-admin","aria-hidden":"true"},"#",-1),y=n("h2",{id:"_9-启动服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-启动服务","aria-hidden":"true"},"#"),a(" 9. 启动服务")],-1),f=n("p",null,[n("code",null,"python3 manage.py runserver localhost:8000")],-1),j=n("h2",{id:"_10-调试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-调试","aria-hidden":"true"},"#"),a(" 10. 调试")],-1),x=n("p",null,[n("code",null,"python manage.py shell")],-1),w={id:"_11-设置settings-md",tabindex:"-1"},N=n("a",{class:"header-anchor",href:"#_11-设置settings-md","aria-hidden":"true"},"#",-1),D=l(`<h2 id="_12-shell调试" tabindex="-1"><a class="header-anchor" href="#_12-shell调试" aria-hidden="true">#</a> 12. shell调试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python manage.py shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_13-good-web-development-practice" tabindex="-1"><a class="header-anchor" href="#_13-good-web-development-practice" aria-hidden="true">#</a> 13. good Web development practice</h2><ol><li>使用post请求来修改数据</li><li>执行post操作后使用重定向来返回页面, 如果用户点击返回按钮, 将会重复提交post</li></ol><h2 id="_14-no" tabindex="-1"><a class="header-anchor" href="#_14-no" aria-hidden="true">#</a> 14. NO</h2><ol><li>不使用orm</li><li>学习使用规范的settings</li></ol>`,6);function C(L,V){const s=r("RouterLink");return t(),o("div",null,[p,n("h2",u,[h,a(" 5. 创建Models"),e(s,{to:"/python/python_web/django/models.html"},{default:i(()=>[a("models.md")]),_:1})]),n("h2",m,[v,a(" 6. 配置views"),e(s,{to:"/python/python_web/django/views.html"},{default:i(()=>[a("views.md")]),_:1})]),n("h2",b,[_,a(" 7. 配置urls"),e(s,{to:"/python/python_web/django/urls.html"},{default:i(()=>[a("urls.md")]),_:1})]),n("h2",g,[k,a(" 8. Django admin"),e(s,{to:"/python/python_web/django/django_admin.html"},{default:i(()=>[a("django_admin")]),_:1})]),y,f,j,x,n("h2",w,[N,a(" 11. 设置"),e(s,{to:"/python/python_web/django/settings.html"},{default:i(()=>[a("settings.md")]),_:1})]),D])}const B=d(c,[["render",C],["__file","django_start_up.html.vue"]]);export{B as default};
