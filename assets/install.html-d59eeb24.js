import{_ as e,Y as i,Z as n,a4 as l}from"./framework-957baa9a.js";const s={},a=l(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><ol><li>debian ubuntu安装<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
echo &#39;安装解压缩软件&#39;
apt-get install aptitude -y
aptitude install bzip2 tar xz-utils gcc -y
echo &#39;安装依赖&#39;
sudo aptitude install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev -y
curl -O https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz
tar -xf Python-3.8.2.tar.xz
cd Python-3.8.2 &amp;&amp; ./configure --enable-optimizations
make -j 4
sudo make altinstall
echo &#39;install success&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>centos</li></ol>`,2),t=[a];function d(c,r){return i(),n("div",null,t)}const v=e(s,[["render",d],["__file","install.html.vue"]]);export{v as default};
