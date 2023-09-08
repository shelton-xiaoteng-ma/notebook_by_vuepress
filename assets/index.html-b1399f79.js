import{_ as s,Y as n,Z as a,a4 as e}from"./framework-957baa9a.js";const l={},i=e(`<h1 id="腾讯云配置" tabindex="-1"><a class="header-anchor" href="#腾讯云配置" aria-hidden="true">#</a> 腾讯云配置</h1><ol><li><p>添加用户</p><ul><li>添加用户: xiaoteng sudoer</li><li>更改密码: passwd xiaoteng</li></ul></li><li><p>安装git/tmux/clash</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span> tmux

<span class="token comment"># clash, 默认端口8888</span>
<span class="token function">mkdir</span> clash
<span class="token builtin class-name">cd</span> clash
<span class="token function">wget</span> https://github.com/Dreamacro/clash/releases/download/premium/clash-linux-amd64-2022.11.25.gz
<span class="token function">gzip</span> <span class="token parameter variable">-d</span> clash-linux-amd64-2022.11.25.gz
<span class="token function">sudo</span> <span class="token function">chmod</span> +x clash-linux-amd64-2022.11.25
./clash-linux-amd64-2022.11.25 <span class="token operator">&amp;</span>

<span class="token comment"># 定时更新配置文件</span>
<span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token number">2</span> <span class="token number">5</span> * * * <span class="token function">curl</span> https://dler.cloud/subscribe/xxx?clash<span class="token operator">=</span>ss <span class="token operator">&gt;</span>~/.config/clash/config.yaml

<span class="token comment"># vi .bashrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;127.0.0.1:8888&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;127.0.0.1:8888&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">&quot;localhost, 127.0.0.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="系统设置" tabindex="-1"><a class="header-anchor" href="#系统设置" aria-hidden="true">#</a> 系统设置</h2><ol><li><p>开机自启动</p><ol><li><p>脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># execute some commands on boot</span>
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
<span class="token comment"># docker_mysql自启动</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;更新代理&quot;</span>
<span class="token function">curl</span> https://dler.cloud/subscribe/xxx?clash<span class="token operator">=</span>ss <span class="token operator">&gt;</span>/home/xiaoteng/.config/clash/config.yaml

<span class="token builtin class-name">echo</span> <span class="token string">&quot;启动clash&quot;</span>
<span class="token builtin class-name">cd</span> /home/xiaoteng/clash/ <span class="token operator">&amp;&amp;</span> <span class="token function">nohup</span> ./clash-linux-amd64-2022.11.25 <span class="token operator">&amp;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;启动爬虫&quot;</span>
<span class="token builtin class-name">cd</span> /home/xiaoteng/code/someSpiders <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置centos7</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /home/xiaoteng/code/execute_commands_on_boot.sh
<span class="token function">chmod</span> +x execute_commands_on_boot.sh
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /etc/rc.d/rc.local
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/rc.d/rc.local
<span class="token comment"># /home/xiaoteng/code/execute_commands_on_boot.sh &gt;/tmp/custom_run.log 2&gt;&amp;1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>使用系统代理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vi ~/.bashrc</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;127.0.0.1:8888&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">https_proxy</span><span class="token operator">=</span><span class="token string">&quot;127.0.0.1:8888&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">&quot;localhost, 127.0.0.1&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;当发现无法访问网络时, 一般是clash启动失败, 系统代理失效, 需要执行 unset http_proxy https_proxy &quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),o=[i];function t(c,p){return n(),a("div",null,o)}const d=s(l,[["render",t],["__file","index.html.vue"]]);export{d as default};
