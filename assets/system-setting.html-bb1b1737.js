import{_ as e,Y as n,Z as i,a4 as s}from"./framework-957baa9a.js";const d={},l=s(`<h1 id="系统设置" tabindex="-1"><a class="header-anchor" href="#系统设置" aria-hidden="true">#</a> 系统设置</h1><h2 id="_1-修改dns" tabindex="-1"><a class="header-anchor" href="#_1-修改dns" aria-hidden="true">#</a> 1. 修改dns</h2><pre><code>\`\`\`
vim /etc/resolv.conf
nameserver 172.24.73.130
nameserver 172.24.73.131
\`\`\`
</code></pre><ul><li>centos7引入新的机制 重启服务</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查询 
nmcli connection show
    &gt; 显示:
    NAME    UUID    TYPE    DEVICE
    em1 5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03    802-3-ethernet  em1

# 添加配置
nmcli con mod em01 ipv4.dns &quot;114.114.114.114 8.8.8.8&quot;

# 重启服务
nmcli con up em1

## 注意: em1对应show命令查询的name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Ubuntu修改方式:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /etc/resolvconf/resolv.conf.d/base
    # 添加多条
    nameserver 8.8.8.8
    nameserver 8.8.8.8
# 执行如下, /etc/resolv.conf 便发生了更改
resolvconf -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法三, 简单粗暴</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 将文件变成只读, 修改成自己期望的即可
chattr +i /etc/resolv.conf
chattr -i /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自启动" tabindex="-1"><a class="header-anchor" href="#_2-自启动" aria-hidden="true">#</a> 2. 自启动</h2><ol><li><p>chkconfig 查看自启动的服务</p></li><li><p>生效禁用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl disable/enable squid.service
# 禁用输出 Removed symlink /etc/systemd/system/multi-user.target.wants/squid.service.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),a=[l];function r(c,t){return n(),i("div",null,a)}const u=e(d,[["render",r],["__file","system-setting.html.vue"]]);export{u as default};
