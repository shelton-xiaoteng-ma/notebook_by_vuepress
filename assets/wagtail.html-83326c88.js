import{_ as n,Y as s,Z as i,$ as l,a0 as a,a1 as e,a4 as d}from"./framework-957baa9a.js";const t={},c=a("h1",{id:"wagtail-django-cms",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#wagtail-django-cms","aria-hidden":"true"},"#"),e(" wagtail | Django CMS")],-1),r=a("h2",{id:"为什么使用wagtail",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#为什么使用wagtail","aria-hidden":"true"},"#"),e(" 为什么使用wagtail")],-1),o=d(`<p>目前使用的vuepress, 尽管方便托管静态页面, 但缺点明显:</p><ul><li>图片和内容都是割裂的, 复用不灵活</li><li>只对文章有tag/category, 图片/视频/文件支持不好</li><li>编辑全部都是markdown, 如果需要别人协作不灵活</li></ul><p>wagtail 看重的点</p><ul><li>搜索</li><li>图片/文件管理, 支持tag, 之后可以加上视频的支持(目前视频尽量外链)</li><li>方便多人协作</li></ul><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><ol><li><p>配置环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># venv</span>
<span class="token function">mkdir</span> blog_wagtail

python3 <span class="token parameter variable">-m</span> venv venv_wagtail
<span class="token builtin class-name">source</span> venv_wagtail/bin/activate

pip <span class="token function">install</span> wagtail

<span class="token comment"># 在blog_wagtail 创建blog app, 同时还会有home/search</span>
<span class="token comment"># 最后一个参数表示在哪个目录创建</span>
wagtail start blog

<span class="token comment"># 产生目录: blog_wagtail/blog/</span>
<span class="token builtin class-name">cd</span> blog
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建app及启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建数据库, 每次修改model后需要执行这个命令</span>
python manage.py migrate

<span class="token comment"># createsuperuser</span>
python manage.py createsuperuser

<span class="token comment"># debug</span>
python manage.py runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>部署app</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,6);function v(m,p){return s(),i("div",null,[c,r,l(" more "),o])}const b=n(t,[["render",v],["__file","wagtail.html.vue"]]);export{b as default};
