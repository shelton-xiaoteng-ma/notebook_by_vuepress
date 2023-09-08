import{_ as d,Y as s,Z as a,a0 as e,a1 as n,a2 as t,a4 as l,E as u}from"./framework-957baa9a.js";const r={},o=e("h1",{id:"安全设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安全设置","aria-hidden":"true"},"#"),n(" 安全设置")],-1),v={href:"http://www.mongoing.com/archives/631",target:"_blank",rel:"noopener noreferrer"},c=l(`<h2 id="创建管理员用户" tabindex="-1"><a class="header-anchor" href="#创建管理员用户" aria-hidden="true">#</a> 创建管理员用户</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ mongo  # 进入mongodb shell

&gt; use admin # 进入admin 数据库

&gt; db.createUser({user:&quot;maxiaoteng&quot;,pwd:&quot;******&quot;,roles:[{role:&quot;root&quot;,db:&quot;admin&quot;}]})
  # admin是用户的身份验证数据库, 用户在当前数据库进行验证, 但也可以在其他数据库有角色

&gt; exit

  Successfully added user: {
	&quot;user&quot; : &quot;maxiaoteng&quot;,
	&quot;roles&quot; : [
		{
			&quot;role&quot; : &quot;root&quot;,
			&quot;db&quot; : &quot;admin&quot;
		}
	]
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置启动安全认证" tabindex="-1"><a class="header-anchor" href="#配置启动安全认证" aria-hidden="true">#</a> 配置启动安全认证</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo nano /etc/mongod.conf

# 更改默认端口为27010
port : 27010

# 生效认证
# 2.6 3.2 3.6 以上版本用法
security:
  authorization: enabled

# 重启生效
sudo service mongod restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongo --port=27010  # 进入mongo shell

show dbs  

# 显示结果
2018-09-11T08:27:32.759+0000 E QUERY    [js] Error: listDatabases failed:{
	&quot;ok&quot; : 0,
	&quot;errmsg&quot; : &quot;command listDatabases requires authentication&quot;,
	&quot;code&quot; : 13,
	&quot;codeName&quot; : &quot;Unauthorized&quot;
} :
# 说明登陆失败, 

db.auth(&quot;username&quot;,&quot;password&quot;)
# 返回1 说明登陆成功

**注意: 登陆认证某个数据库时, 要先\`use db\`, 然后再执行auth**
use admin
db.auth(&quot;username&quot;,&quot;password&quot;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加数据库用户" tabindex="-1"><a class="header-anchor" href="#添加数据库用户" aria-hidden="true">#</a> 添加数据库用户</h2><p>用户可以访问特定数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mongo shell下
&gt; use ifood
&gt; db.createUser({user: &quot;testdb1u1&quot;, pwd: &quot;xyz123&quot;, roles: [{ role: &quot;dbOwner&quot;, db: &quot;testdb1&quot; }]})

###显示:
Successfully added user: {
	&quot;user&quot; : &quot;yunfutech&quot;,
	&quot;roles&quot; : [
		{
			&quot;role&quot; : &quot;dbOwner&quot;,
			&quot;db&quot; : &quot;ifood&quot;
		}
	]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pymongo连接" tabindex="-1"><a class="header-anchor" href="#pymongo连接" aria-hidden="true">#</a> pymongo连接</h2><p>见pymongo</p>`,11);function m(b,q){const i=u("ExternalLinkIcon");return s(),a("div",null,[o,e("p",null,[n("对于mongodb的安全部署, 可以参考一篇文章: "),e("a",v,[n("安全部署MongoDB最佳实践"),t(i)])]),c])}const g=d(r,[["render",m],["__file","security_deployment.html.vue"]]);export{g as default};
