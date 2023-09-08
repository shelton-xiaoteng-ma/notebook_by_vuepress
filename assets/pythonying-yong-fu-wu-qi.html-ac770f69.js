import{_ as e,Y as n,Z as i,a4 as a}from"./framework-957baa9a.js";const r={},t=a(`<h1 id="python-应用服务器" tabindex="-1"><a class="header-anchor" href="#python-应用服务器" aria-hidden="true">#</a> Python 应用服务器</h1><h2 id="wsgi协议" tabindex="-1"><a class="header-anchor" href="#wsgi协议" aria-hidden="true">#</a> WSGI协议</h2><p>(Python Web Server Gateway Interface)</p><ul><li>Web框架和Web服务器之间进行通信, 如果在设计时他们不匹配, 那选择框架就会限制服务器的选择.</li><li>WSGI在PEP 333中定义并被许多框架实现, 规定了Web服务器与Web应用程序/框架之间推荐的标准接口, 确保Web应用程序在不同的Web服务器之间具有可移植性.</li><li>WSGI协议,使Web开发者能够任意选择自己的组合, 而Web服务器和Web框架的开发者也可以把精力集中到各自的领域.</li></ul><h2 id="常见的wsgi容器-gunicorn" tabindex="-1"><a class="header-anchor" href="#常见的wsgi容器-gunicorn" aria-hidden="true">#</a> 常见的WSGI容器- Gunicorn</h2><p>易于配置, 兼容性好, CPU消耗少</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Work模式
1. 同步worker: 默认模式, 一次只处理一个请求
2. 异步Worker: 通过Eventlet, Gevent实现异步模式
3. 异步IO Worker: 目前支持gthread和gaiohttp两种模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 启动命令
# &gt; gunicorn [OPTIONS] MODULE_NAME: VARIABLE_NAME
&gt; gunicorn --workers=3 section19.app:app -b 0.0.0.0:9000
# worker 个数: 推荐cpu个数*2 +1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d=[t];function s(l,c){return n(),i("div",null,d)}const u=e(r,[["render",s],["__file","pythonying-yong-fu-wu-qi.html.vue"]]);export{u as default};
