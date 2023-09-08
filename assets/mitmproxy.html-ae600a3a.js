import{_ as e,Y as n,Z as s,a4 as i}from"./framework-957baa9a.js";const a={},r=i(`<h1 id="mitmproxy" tabindex="-1"><a class="header-anchor" href="#mitmproxy" aria-hidden="true">#</a> mitmproxy</h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h2><ol><li><p>mac</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> mitmproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://hub.docker.com/r/mitmproxy/mitmproxy/

<span class="token comment"># docker启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 mitmproxy/mitmproxy mitmdump

<span class="token comment"># 获取ca证书可以挂载磁盘</span>
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> ~/.mitmproxy:/home/mitmproxy/.mitmproxy <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 mitmproxy/mitmproxy mitmdump

<span class="token comment"># 启动mitmweb</span>
<span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-p</span> <span class="token number">127.0</span>.0.1:8081:8081 mitmproxy/mitmproxy mitmweb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2. 使用</h2><ol><li><p>客户端需信任CA证书</p><ul><li><p>证书位于 ./mitmproxy</p></li><li><p>mitmproxy-ca.pem # PEM格式的证书私钥</p></li><li><p>mitmproxy-ca-cert.p12 # PKCS12格式的证书，适用于Windows平台</p></li><li><p>mitmproxy-ca-cert.pem # PEM格式证书，适用于大多数非Windows平台</p></li><li><p>mitmproxy-ca-cert.cer # 与mitmproxy-ca-cert.pem相同，只是改变了后缀，适用于部分Android平台</p></li><li><p>mitmproxy-dhparam.pem # PEM格式的秘钥文件，用于增强SSL安全性</p></li><li><p>linux信任证书</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> .mitmproxy/
openssl x509 <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> mitmproxy-ca-cert.pem <span class="token parameter variable">-out</span> ./mitmproxy-ca-cert.crt
<span class="token function">sudo</span> <span class="token function">cp</span> mitmproxy-ca-cert.crt /usr/share/ca-certificates/extra/
<span class="token function">sudo</span> dpkg-reconfigure ca-certificates
<span class="token function">sudo</span> update-ca-certificates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>脚本内容</p><ul><li><p>script.py实践</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import mitmproxy.http
from mitmproxy import ctx
from mitmproxy.http import HTTPFlow as flow
                
class Ctrip:
    def __init__(self):
        self.num = 0
    
    def request(self, flow: mitmproxy.http.HTTPFlow):
        # 修改request请求，headers或者代理
        if &quot;xx.com&quot; in flow.request.url:
            flow.request.headers[&quot;User-Agent&quot;] = &#39;Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Mobile Safari/537.36&#39;
            return

    def response(self, flow: mitmproxy.http.HTTPFlow):
        # 修改响应
        if &quot;page/brands/&quot; in flow.request.url:
            # 将js代码注入到浏览器首页，防止无头浏览器被检测
            # 所需注入的js代码
            injected_javascript = &#39;&#39;&#39;
                // overwrite the \`languages\` property to use a custom getter
                Object.defineProperty(navigator, &quot;languages&quot;, {
                get: function() {
                    return [&quot;zh-CN&quot;,&quot;zh&quot;,&quot;zh-TW&quot;,&quot;en-US&quot;,&quot;en&quot;];
                }
                });

                // Overwrite the \`plugins\` property to use a custom getter.
                Object.defineProperty(navigator, &#39;plugins&#39;, {
                get: () =&gt; [1, 2, 3, 4, 5],
                });

                // Pass the Webdriver test
                Object.defineProperty(navigator, &#39;webdriver&#39;, {
                get: () =&gt; false,
                });


                // Pass the Chrome Test.
                // We can mock this in as much depth as we need for the test.
                window.navigator.chrome = {
                runtime: {},
                // etc.
                };

                // Pass the Permissions Test.
                const originalQuery = window.navigator.permissions.query;
                window.navigator.permissions.query = (parameters) =&gt; (
                parameters.name === &#39;notifications&#39; ?
                    Promise.resolve({ state: Notification.permission }) :
                    originalQuery(parameters)
                );
            &#39;&#39;&#39;
            html = flow.response.text
            html = html.replace(&#39;&lt;head&gt;&#39;, &#39;&lt;head&gt;&lt;script&gt;%s&lt;/script&gt;&#39; % injected_javascript)
            flow.response.text = str(html)

        # 处理响应
        if &quot;xx&quot; in flow.request.url:
            # http api
            host = flow.request.host
            sort = flow.request.query.get(&#39;sort&#39;)
            resp = flow.response.text
            headers = flow.request.headers
            # post方法的body
            content = flow.request.get_content()
            josn_post_data= json.loads(flow.request.get_content().decode(&#39;utf-8&#39;))
    
    # 直接拦截, 不握手
    def http_connect(self, flow: mitmproxy.http.HTTPFlow):
        if flow.request.host == &quot;www.google.com&quot;:
            flow.response = http.HTTPResponse.make(404)

addons = [Ctrip()]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>命令行启动脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mitmdump <span class="token parameter variable">-s</span> script.py

<span class="token comment"># 非登陆代理</span>
mitmdump <span class="token parameter variable">--mode</span> upstream:http://127.0.0.1:7890 <span class="token parameter variable">-s</span> mitm_for_script.py

<span class="token comment"># 使用阿布云代理, -p为指定代理端口</span>
mitmdump <span class="token parameter variable">--mode</span> upstream:http-dyn.abuyun.com:9020 --upstream-auth username:password <span class="token parameter variable">-s</span> mitm_for_script.py <span class="token parameter variable">-p</span> <span class="token number">8090</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),l=[r];function t(d,m){return n(),s("div",null,l)}const o=e(a,[["render",t],["__file","mitmproxy.html.vue"]]);export{o as default};
