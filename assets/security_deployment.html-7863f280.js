import{_ as e,Y as t,Z as i,a0 as n,a1 as s,a2 as o,a4 as l,E as c}from"./framework-957baa9a.js";const p={},u=n("h1",{id:"安全设置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安全设置","aria-hidden":"true"},"#"),s(" 安全设置")],-1),d={href:"http://www.mongoing.com/archives/631",target:"_blank",rel:"noopener noreferrer"},r=l(`<h2 id="创建管理员用户" tabindex="-1"><a class="header-anchor" href="#创建管理员用户" aria-hidden="true">#</a> 创建管理员用户</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ mongo  <span class="token comment"># 进入mongodb shell</span>

<span class="token operator">&gt;</span> use admin <span class="token comment"># 进入admin 数据库</span>

<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&quot;maxiaoteng&quot;</span>,pwd:<span class="token string">&quot;******&quot;</span>,roles:<span class="token punctuation">[</span><span class="token punctuation">{</span>role:<span class="token string">&quot;root&quot;</span>,db:<span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment"># admin是用户的身份验证数据库, 用户在当前数据库进行验证, 但也可以在其他数据库有角色</span>

<span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>

  Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;maxiaoteng&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;admin&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置启动安全认证" tabindex="-1"><a class="header-anchor" href="#配置启动安全认证" aria-hidden="true">#</a> 配置启动安全认证</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/mongod.conf

<span class="token comment"># 更改默认端口为27010</span>
port <span class="token builtin class-name">:</span> <span class="token number">27010</span>

<span class="token comment"># 生效认证</span>
<span class="token comment"># 2.6 3.2 3.6 以上版本用法</span>
security:
  authorization: enabled

<span class="token comment"># 重启生效</span>
<span class="token function">sudo</span> <span class="token function">service</span> mongod restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongo <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">27010</span>  <span class="token comment"># 进入mongo shell</span>

show dbs  

<span class="token comment"># 显示结果</span>
<span class="token number">2018</span>-09-11T08:27:32.759+0000 E QUERY    <span class="token punctuation">[</span>js<span class="token punctuation">]</span> Error: listDatabases failed:<span class="token punctuation">{</span>
    <span class="token string">&quot;ok&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;errmsg&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;command listDatabases requires authentication&quot;</span>,
    <span class="token string">&quot;code&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">13</span>,
    <span class="token string">&quot;codeName&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;Unauthorized&quot;</span>
<span class="token punctuation">}</span> <span class="token builtin class-name">:</span>
<span class="token comment"># 说明登陆失败, </span>

db.auth<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span>,<span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 返回1 说明登陆成功</span>

**注意: 登陆认证某个数据库时, 要先<span class="token variable"><span class="token variable">\`</span>use db<span class="token variable">\`</span></span>, 然后再执行auth**
use admin
db.auth<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span>,<span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加数据库用户" tabindex="-1"><a class="header-anchor" href="#添加数据库用户" aria-hidden="true">#</a> 添加数据库用户</h2><p>用户可以访问特定数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># mongo shell下</span>
<span class="token operator">&gt;</span> use ifood
<span class="token operator">&gt;</span> db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user: <span class="token string">&quot;testdb1u1&quot;</span>, pwd: <span class="token string">&quot;xyz123&quot;</span>, roles: <span class="token punctuation">[</span><span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;testdb1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">###显示:</span>
Successfully added user: <span class="token punctuation">{</span>
    <span class="token string">&quot;user&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;yunfutech&quot;</span>,
    <span class="token string">&quot;roles&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;role&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;dbOwner&quot;</span>,
            <span class="token string">&quot;db&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ifood&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pymongo连接" tabindex="-1"><a class="header-anchor" href="#pymongo连接" aria-hidden="true">#</a> pymongo连接</h2><p>见pymongo</p>`,11);function m(v,b){const a=c("ExternalLinkIcon");return t(),i("div",null,[u,n("p",null,[s("对于mongodb的安全部署, 可以参考一篇文章: "),n("a",d,[s("安全部署MongoDB最佳实践"),o(a)])]),r])}const g=e(p,[["render",m],["__file","security_deployment.html.vue"]]);export{g as default};
