import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const i={},l=e(`<h1 id="amazon-linux" tabindex="-1"><a class="header-anchor" href="#amazon-linux" aria-hidden="true">#</a> amazon_linux</h1><ol><li><p>yum说明</p><p>Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装</p></li><li><p>安装并启用EPEL rpm软件包</p><p>ELEP: Extra Packages for Enterprise Linux的简称，是为企业级Linux提供的一组高质量的额外软件包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> –y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
<span class="token comment"># 安装软件包</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> python36  <span class="token comment"># -y为自动应答</span>

<span class="token comment"># 升级软件包</span>
<span class="token function">sudo</span> yum check-update  <span class="token comment"># 检查更新</span>
<span class="token function">sudo</span> yum update  <span class="token comment"># 升级所有</span>
<span class="token function">sudo</span> yum update tomcat  <span class="token comment"># 升级特定软件包</span>

<span class="token comment"># 查看已安装软件</span>
yum list installed

<span class="token comment"># 查看软件包的描述信息</span>
yum info tomcat

<span class="token comment"># 卸载软件包</span>
<span class="token function">sudo</span> yum remove tomcat

<span class="token function">sudo</span> yum list<span class="token operator">|</span> <span class="token function">grep</span> python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装python36 和 pip</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> python36
<span class="token comment"># 虽然3.4之后默认包含pip, 但我的版本太纯净没有pip</span>
python36 <span class="token parameter variable">-m</span> pip <span class="token parameter variable">--version</span>
<span class="token operator">&gt;</span> /usr/bin/python36: No module named pip
<span class="token comment"># 安装pip</span>
<span class="token function">sudo</span> <span class="token function">wget</span> https://bootstrap.pypa.io/get-pip.py
<span class="token function">sudo</span> python3.6 get-pip.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),t=[l];function o(p,c){return s(),a("div",null,t)}const u=n(i,[["render",o],["__file","amazon_linux.html.vue"]]);export{u as default};
