import{_ as i,Y as l,Z as t,a0 as n,a1 as s,a2 as p,a4 as a,E as c}from"./framework-957baa9a.js";const o={},r=n("h1",{id:"包管理和虚拟环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#包管理和虚拟环境","aria-hidden":"true"},"#"),s(" 包管理和虚拟环境")],-1),d=n("ul",null,[n("li",null,"包安装方法 通过Python社区开发的pip, easy_install等工具 使用系统本身自带的包管理器(yum, apt-get) 通过源码安装")],-1),v=n("h2",{id:"_1-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-安装","aria-hidden":"true"},"#"),s(" 1. 安装")],-1),u=n("p",null,"虚拟环境的包是对真实环境包的一个复制",-1),m=n("p",null,"virtualenv是python2使用的, python3.3引入了venv, 作为自带模块",-1),b={href:"https://docs.python.org/3.6/library/venv.html",target:"_blank",rel:"noopener noreferrer"},h=a(`<li><p>virtualenv默认有python可执行文件, 常用标准库等.</p><ol><li><p>python2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> virtualenv  <span class="token comment"># 安装virtualenv</span>
<span class="token comment"># 创建一个project</span>
<span class="token function">mkdir</span> project
<span class="token builtin class-name">cd</span> project
virtualenv venv  <span class="token comment"># 启动一个虚拟环境(名为:venv, 也可以带一些路径, 默认当前文件夹), 默认复制系统所有的第三方包</span>
virtualenv --no-site-packages venv  <span class="token comment"># 启动一个虚拟环境</span>
virtualenv venv <span class="token parameter variable">--python</span><span class="token operator">=</span>python3.6
,不包含任何第三方包
<span class="token builtin class-name">source</span> venv/bin/activate  <span class="token comment"># 生效一个虚拟环境</span>
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>which python
<span class="token operator">&gt;</span> /home<span class="token punctuation">..</span>./bin/python
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>deactivate  <span class="token comment"># 退出虚拟环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>python3.3+</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-m</span> venv
    positional arguments:
        ENV_DIR               A directory to create the environment in.
    optional arguments:
        -h, <span class="token parameter variable">--help</span>            show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
        --system-site-packages
                                Give the virtual environment access to the system
                                site-packages dir.
        <span class="token parameter variable">--symlinks</span>            Try to use symlinks rather than copies, when symlinks
                                are not the default <span class="token keyword">for</span> the platform.
        <span class="token parameter variable">--copies</span>              Try to use copies rather than symlinks, even when
                                symlinks are the default <span class="token keyword">for</span> the platform.
        <span class="token parameter variable">--clear</span>               Delete the contents of the environment directory <span class="token keyword">if</span> it
                                already exists, before environment creation.
        <span class="token parameter variable">--upgrade</span>             Upgrade the environment directory to use this version
                                of Python, assuming Python has been upgraded in-place.
        --without-pip         Skips installing or upgrading pip <span class="token keyword">in</span> the virtual
                                environment <span class="token punctuation">(</span>pip is bootstrapped by default<span class="token punctuation">)</span>
<span class="token comment"># 启动一个虚拟环境(名为:env_name, 也可以带一些路径, 默认当前文件夹), 默认复制系统所有的第三方包</span>
python3 <span class="token parameter variable">-m</span> venv ./path/env_name
<span class="token comment"># 创建一个project</span>
<span class="token builtin class-name">source</span> venv/bin/activate  <span class="token comment"># 生效一个虚拟环境</span>
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>which python
<span class="token operator">&gt;</span> /home<span class="token punctuation">..</span>./bin/python
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>deactivate  <span class="token comment"># 退出虚拟环境</span>
<span class="token comment"># 安装依赖包</span>
<span class="token function">sudo</span> pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>windows启动虚拟环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 直接命令行运行active文件执行</span>
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jizhu<span class="token operator">&gt;</span>task<span class="token punctuation">\\</span>mxt_blogs<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>activate
<span class="token punctuation">(</span>mxt_blogs<span class="token punctuation">)</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jizhu<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),k=a(`<h2 id="_2-pip-包管理" tabindex="-1"><a class="header-anchor" href="#_2-pip-包管理" aria-hidden="true">#</a> 2. pip 包管理</h2><ol><li><p>说明</p></li><li><p>使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 列出</span>
    pip list  <span class="token comment"># 列出所有的第三方包</span>
    pip freeze <span class="token operator">&gt;</span> requirement.txt  <span class="token comment"># 导出当前环境下的所有第三方包</span>
    
    <span class="token comment"># 安装</span>
    pip <span class="token function">install</span> requests  <span class="token comment"># 安装包 </span>
        <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple
    pip <span class="token function">install</span> <span class="token assign-left variable">requests</span><span class="token operator">==</span><span class="token number">3.6</span>.0  
    pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirement.txt  <span class="token comment"># 根据配置文件生成相同的环境</span>
    pip <span class="token function">install</span> git+https://github.com/xxx  <span class="token comment"># 安装github仓库的包</span>
    
    <span class="token comment"># 升级</span>
    pip <span class="token function">install</span> <span class="token parameter variable">-U</span> requests  
    pip <span class="token function">install</span> <span class="token parameter variable">-U</span> pip  <span class="token comment"># 升级pip</span>

    <span class="token comment"># 卸载</span>
    pip uninstall requests 
    pip uninstall <span class="token parameter variable">-r</span> requirements.txt

    <span class="token comment"># 显示包所在目录</span>
    pip show <span class="token parameter variable">-f</span> requests

    <span class="token comment"># 搜索包</span>
    pip search <span class="token operator">&lt;</span>搜索关键字<span class="token operator">&gt;</span>

    <span class="token comment"># 查询可升级的包</span>
    pip list <span class="token parameter variable">-o</span>

    <span class="token comment"># 下载包而不安装</span>
    pip <span class="token function">install</span> <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span>
    pip <span class="token function">install</span> <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>目录<span class="token operator">&gt;</span> <span class="token parameter variable">-r</span> requirements.txt

    <span class="token comment"># 打包</span>
    pip wheel <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span>

    <span class="token comment"># zsh错误匹配</span>
    <span class="token comment"># https://stackoverflow.com/questions/30539798/zsh-no-matches-found-requestssecurity</span>
    pip3 <span class="token function">install</span> <span class="token string">&#39;httpx[http2]&#39;</span>

    python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有的环境中, python3/2与pip没有绑定, 用pip/pip3 或python -m pip</p></li><li><p>指定安装源</p><ol><li><p>单次安装源</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    pip <span class="token function">install</span> <span class="token operator">&lt;</span>包名<span class="token operator">&gt;</span> <span class="token parameter variable">-i</span> http://pypi.douban.com/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>全局修改</p><ol><li>unix和macos: $HOME/.pip/pip.conf</li><li>windows: %HOME%\\pip\\pip.ini</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">[</span>global<span class="token punctuation">]</span>
    <span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">6000</span>
    index-url <span class="token operator">=</span> http://pypi.douban.com/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="_3-pipenv" tabindex="-1"><a class="header-anchor" href="#_3-pipenv" aria-hidden="true">#</a> 3. pipenv</h2><p>是python项目的依赖管理器</p><ul><li>根据pipfile自动寻找项目根目录</li><li>如果不存在,自动生成pipfile和pipfile.lock</li><li>自动在项目目录的.venv目录创建虚拟环境.</li><li>自动管理pipfile新安装和删除的包</li><li>自动更新pip</li></ul><p>使用pipenv代替pip安装包</p><h2 id="_4-pipenv-和autoenv的组合" tabindex="-1"><a class="header-anchor" href="#_4-pipenv-和autoenv的组合" aria-hidden="true">#</a> 4. pipenv 和autoenv的组合</h2><p>autoenv可以在切换文件目录的同时, 自动完成激活虚拟环境 <strong>用法</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> autoenv
<span class="token builtin class-name">source</span> /usr/local/bin/activate.sh

<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">touch</span> .env
<span class="token builtin class-name">echo</span> <span class="token string">&#39;source /home/xx/venv/bin/activate&#39;</span> <span class="token operator">&gt;</span> .env
<span class="token builtin class-name">cd</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>  <span class="token comment"># 就会自动激活虚拟环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-conda" tabindex="-1"><a class="header-anchor" href="#_5-conda" aria-hidden="true">#</a> 5. conda</h2><ol><li><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># miniconda</span>
<span class="token function">wget</span> https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
<span class="token function">bash</span> Miniconda3-latest-Linux-x86_64.sh

<span class="token comment"># conda</span>
<span class="token function">wget</span> https://repo.continuum.io/miniconda/Anaconda-latest-Linux-x86_64.sh
<span class="token function">bash</span> Anaconda-latest-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="学习emacs" tabindex="-1"><a class="header-anchor" href="#学习emacs" aria-hidden="true">#</a> 学习Emacs</h2><ul><li><p>安装</p></li><li><p>两种模式</p></li><li><p>GUI模式</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>emacs  <span class="token comment"># 默认启动GUI</span>
emacd <span class="token parameter variable">-nw</span> FILE  <span class="token comment"># 终端中启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Daemon模式</p></li><li><p>学习lisp</p></li></ul><h2 id="pycharm安装和使用" tabindex="-1"><a class="header-anchor" href="#pycharm安装和使用" aria-hidden="true">#</a> Pycharm安装和使用</h2><h2 id="使用ipython" tabindex="-1"><a class="header-anchor" href="#使用ipython" aria-hidden="true">#</a> 使用IPython</h2><h2 id="web开发环境配置" tabindex="-1"><a class="header-anchor" href="#web开发环境配置" aria-hidden="true">#</a> Web开发环境配置</h2><p>虚拟环境目录参考:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python3 <span class="token parameter variable">-m</span> venv /data/xiaoteng_venv

<span class="token builtin class-name">source</span> /data/xiaoteng_venv/bin/activate

pip freeze <span class="token operator">&gt;</span> /data/requirements.txt

pip <span class="token function">install</span> <span class="token parameter variable">-r</span> /data/requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function g(f,y){const e=c("ExternalLinkIcon");return l(),t("div",null,[r,d,v,u,n("ol",null,[n("li",null,[m,n("blockquote",null,[n("p",null,[s("参考 "),n("a",b,[s("https://docs.python.org/3.6/library/venv.html"),p(e)]),s(" The pyvenv script has been deprecated as of Python 3.6 in favor of using python3 -m venv to help prevent any potential confusion as to which Python interpreter a virtual environment will be based on.")])])]),h]),k])}const _=i(o,[["render",g],["__file","venv.html.vue"]]);export{_ as default};
