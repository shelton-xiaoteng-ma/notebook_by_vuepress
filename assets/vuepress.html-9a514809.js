import{_ as l,Y as p,Z as o,$ as i,a0 as n,a1 as s,a2 as t,a4 as a,E as c}from"./framework-957baa9a.js";const u={},d=n("h1",{id:"使用-vuepress-theme-hope-搭建静态文档和博客",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-vuepress-theme-hope-搭建静态文档和博客","aria-hidden":"true"},"#"),s(" 使用 vuepress-theme-hope 搭建静态文档和博客")],-1),r=a(`<h2 id="为什么使用" tabindex="-1"><a class="header-anchor" href="#为什么使用" aria-hidden="true">#</a> 为什么使用</h2><ol><li>试用docsify, 还不是很满意, 不能通过tags/category结构化文档</li><li>使用后发现目录很灵活, <code>structure</code>简单配置就是我想要的格式</li></ol><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2><ol><li><p>初始化, 将会在当前目录直接创建一个完整项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vuepress-theme-hope@next docs

<span class="token comment"># 已有项目安装包</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>简单配置一下即可使用</p></li><li><p>开发启动<code>yarn run docs:dev</code></p></li></ol><h2 id="使用指南" tabindex="-1"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>除了文档目录分类, 如果想对文档按其他方式归类, 可以参考<code>tag/category</code><br> 除了默认目录, 还想自定义目录, 避免展示过多不相关信息, 可以参考<code>.vuepress/sidebar.ts</code></p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><p><code>docs/.vuepress</code>下存放配置文件</p><ol><li><code>.vuepress/public</code> 静态文件存放, 比如照片, 绝对路径<code>docs/.vuepress/public/images/django_01.png</code>, 在markdown中可以使用<code>/images/django_01.png</code></li><li><code>.vuepress/sidebar.ts</code>, 侧边栏配置, 支持多个侧边栏, 比如<code>/python/</code>, 当访问python路径时使用 <ul><li><p>默认目录, 会显示所有一级分类</p></li><li><p>在访问<code>python</code>目录下的文档时, 会显示<code>/python/</code>以及同级目录</p></li><li><p>自定义目录, <code>&quot;/python/&quot;: &quot;structure&quot;,</code>, 在访问<code>/python/</code>目录下的文档时, 只显示子目录, 不显示同级目录</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/python/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目录标题: <code>/python/</code>, 显示名称为<code>/python/README.md</code>的一级标题</p></li></ul></li><li><code>.vuepress/navbar.ts</code> 导航栏同理</li><li><code>.vuepress/theme.ts</code> 主页配置</li><li>插件安装 <ul><li><p>搜索<code>plugin-search</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@vuepress/plugin-search&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// config.ts</span>
plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// options</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="其他特别用法" tabindex="-1"><a class="header-anchor" href="#其他特别用法" aria-hidden="true">#</a> 其他特别用法</h3>`,10),v=n("li",null,[n("p",null,[n("code",null,".vuepress/public"),s("下的附件, 在markdown中可以使用相对路径, "),n("code",null,"/images/django_01.png")])],-1),k=n("p",null,[s("所有目录下必须有"),n("code",null,"README.md"),s(", 才能正常访问")],-1),m=n("code",null,"docs/python/README.md",-1),h={href:"https://domain.com/python/",target:"_blank",rel:"noopener noreferrer"},b=a(`<li><p>markdown引用, 同一目录下直接引用<code>python.md</code>, 或者按目录关系</p></li><li><p>在首页使用如下标签</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2022-07-12 11:44:43</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span> 奥特曼
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> vuepress
    <span class="token punctuation">-</span> 文档化
<span class="token key atrule">category</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> demo</span>
<span class="token punctuation">---</span></span>

// v2

tag: [vuepress, 文档化]
category: [demo]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),g=n("h2",{id:"部署github-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署github-pages","aria-hidden":"true"},"#"),s(" 部署github pages")],-1),y={href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"},_=a("<li><p>需要注意, markdown的图片后缀不能是大写, 否则<code>build</code>通不过, 报错找不到图片</p></li><li><p>通常发布后的访问路径为<code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, 所以需要修改<code>config.ts</code>中的<code>basic</code>路径设置为<code>/&lt;REPO&gt;/</code>, (如果是托管到其他域名, 这不需要修改)</p></li>",2),f={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},x=a(`<ul><li><p>创建文件<code>.github/workflows/deploy-docs.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docs

    <span class="token comment"># action, 当vuepress_theme_hope有push动作时执行</span>
    <span class="token key atrule">on</span><span class="token punctuation">:</span>
        <span class="token key atrule">push</span><span class="token punctuation">:</span>
            <span class="token key atrule">branches</span><span class="token punctuation">:</span>
            <span class="token comment"># make sure this is the branch you are using</span>
            <span class="token punctuation">-</span> vuepress_theme_hope

    <span class="token key atrule">jobs</span><span class="token punctuation">:</span>
        <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
            <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
            <span class="token key atrule">steps</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
                    <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
                    <span class="token key atrule">with</span><span class="token punctuation">:</span>
                    <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
                    <span class="token comment"># if your docs needs submodules, uncomment the following line</span>
                    <span class="token comment"># submodules: true</span>

                <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
                    <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
                    <span class="token key atrule">with</span><span class="token punctuation">:</span>
                        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">16</span>
                        <span class="token key atrule">cache</span><span class="token punctuation">:</span> yarn

                <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Deps
                    <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

                <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Docs
                    <span class="token key atrule">env</span><span class="token punctuation">:</span>
                        <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=4096
                    <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
                        yarn run docs<span class="token punctuation">:</span>build
                        <span class="token punctuation">&gt;</span> docs/.vuepress/dist/.nojekyll

                <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy Docs
                    <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
                    <span class="token key atrule">with</span><span class="token punctuation">:</span>
                        <span class="token comment"># 可以部署到其他仓库</span>
                        <span class="token key atrule">repository-name</span><span class="token punctuation">:</span> shelton<span class="token punctuation">-</span>xiaoteng<span class="token punctuation">-</span>ma/notebook_by_vuepress
                        <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
                        <span class="token key atrule">ssh-key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SSH_DEPLOY_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
                        <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,1);function E(q,w){const e=c("ExternalLinkIcon");return p(),o("div",null,[d,i(" more "),r,n("ol",null,[v,n("li",null,[k,n("ul",null,[n("li",null,[m,s(", url: "),n("a",h,[s("https://domain.com/python/"),t(e)])])])]),b]),g,n("ol",null,[n("li",null,[n("p",null,[s("脚本参考pub_github.sh, "),n("a",y,[s("参考文档"),t(e)])])]),_,n("li",null,[n("p",null,[s("使用github action发布, 参考"),n("a",f,[s("github-pages-deploy-action"),t(e)])]),x])])])}const D=l(u,[["render",E],["__file","vuepress.html.vue"]]);export{D as default};
