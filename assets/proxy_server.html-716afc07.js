import{_ as p,Y as o,Z as i,a0 as s,a1 as n,a2 as e,a4 as t,E as l}from"./framework-957baa9a.js";const c={},r=t(`<h1 id="代理服务器" tabindex="-1"><a class="header-anchor" href="#代理服务器" aria-hidden="true">#</a> 代理服务器</h1><p>[TOC]</p><h2 id="_1-使用squid配置代理服务器" tabindex="-1"><a class="header-anchor" href="#_1-使用squid配置代理服务器" aria-hidden="true">#</a> 1. 使用Squid配置代理服务器</h2><p>系统为CentOS</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># yum 安装squid</span>
sudo yum <span class="token operator">-</span>y install squid
<span class="token comment"># 设置开机启动</span>
sudo chkconfig <span class="token operator">-</span><span class="token operator">-</span>level <span class="token number">35</span> squid on  <span class="token comment"># 在35级别上自动运行squid服务</span>
<span class="token comment"># 修改配置文件</span>
sudo vi <span class="token operator">/</span>etc<span class="token operator">/</span>squid<span class="token operator">/</span>squid<span class="token punctuation">.</span>conf
    http_access allow !Safe_ports    <span class="token comment">#deny改成allow</span>
    http_access allow CONNECT !SSL_ports  <span class="token comment">#deny改成allow</span>
    http_access allow <span class="token builtin">all</span>  <span class="token comment">#deny改成allow</span>
    http_port <span class="token number">27233</span>  <span class="token comment"># 默认3128</span>
<span class="token comment"># 启动Squid</span>
sudo service squid start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-爬虫使用代理" tabindex="-1"><a class="header-anchor" href="#_2-爬虫使用代理" aria-hidden="true">#</a> 2. 爬虫使用代理</h2><ol><li><p>requests使用代理</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
proxies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;http&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://53.53.171.25:27233&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://52.56.161.222:27233&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
url <span class="token operator">=</span> <span class="token string">&#39;http://ip.filefab.com/index.php&#39;</span>
res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> proxies<span class="token operator">=</span>proxies<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>scrapy使用代理</p><ol><li><p>第一种，在spier的Request中添加</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 初始化start_requests</span>
<span class="token keyword">def</span> <span class="token function">start_requests</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    proxies <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;http&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://53.53.171.25:27233&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://52.56.161.222:27233&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    url <span class="token operator">=</span> <span class="token string">&#39;http://ip.filefab.com/index.php&#39;</span>
    request <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token punctuation">,</span> callback<span class="token operator">=</span>self<span class="token punctuation">.</span>parse<span class="token punctuation">)</span>
    <span class="token keyword">if</span> url<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;http://&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        request<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&#39;proxy&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span> proxies<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>          <span class="token comment"># http代理</span>
    <span class="token keyword">elif</span> url<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;https://&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        request<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&#39;proxy&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span> proxies<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第二种，scrapy代理使用中间件((参考dianping的配置)</p><ol><li><p>在中间件中创建proxy，下面展示了接入阿布云代理的方法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># 在middlewares.py中增加一个类，取名：ProxyMiddleware即代理中间件</span>
    <span class="token comment"># 添加阿布云代理</span>
    <span class="token keyword">import</span> base64
    <span class="token comment"># 代理服务器</span>
    proxyServer <span class="token operator">=</span> <span class="token string">&quot;http://http-dyn.abuyun.com:9020&quot;</span>
    <span class="token comment"># 代理隧道验证信息</span>
    proxyUser <span class="token operator">=</span> <span class="token string">&quot;HUxxGD&quot;</span>
    proxyPass <span class="token operator">=</span> <span class="token string">&quot;60xx35&quot;</span>
    <span class="token comment"># for Python2</span>
    <span class="token comment"># proxyAuth = &quot;Basic &quot; + base64.b64encode(proxyUser + &quot;:&quot; + proxyPass)</span>
    <span class="token comment"># for Python3</span>
    proxyAuth <span class="token operator">=</span> <span class="token string">&quot;Basic &quot;</span> <span class="token operator">+</span> base64<span class="token punctuation">.</span>urlsafe_b64encode<span class="token punctuation">(</span><span class="token builtin">bytes</span><span class="token punctuation">(</span><span class="token punctuation">(</span>proxyUser <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> proxyPass<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;ascii&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">class</span> <span class="token class-name">ProxyMiddleware</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">process_request</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">,</span> spider<span class="token punctuation">)</span><span class="token punctuation">:</span>
            request<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&quot;proxy&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> proxyServer
            request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Proxy-Authorization&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> proxyAuth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>settings.py中生效配置的中间件即可</p></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    DOWNLOADER_MIDDLEWARES <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;dianping.middlewares.UAMiddleware&#39;</span><span class="token punctuation">:</span> <span class="token number">545</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="搭建4g代理" tabindex="-1"><a class="header-anchor" href="#搭建4g代理" aria-hidden="true">#</a> 搭建4G代理</h2>`,8),u={href:"https://cuiqingcai.com/7540.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.csdn.net/u012731379/article/details/78744757",target:"_blank",rel:"noopener noreferrer"},v=t(`<li><p>工具</p><ul><li>4G上网卡()</li><li>宿主机linux</li><li>docker, centos7</li></ul></li><li><p>docker配置, 单个docker容器实现一个网卡的代理</p><ol><li><p>启动demo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> demo <span class="token parameter variable">--privileged</span> <span class="token parameter variable">-p</span> <span class="token number">3128</span>:3128 <span class="token parameter variable">-v</span> /dev/bus/usb:/dev/bus/usb centos:7 <span class="token function">bash</span>
<span class="token comment"># - v 映射宿主机usb到容器, 其实开了特权模式就不需要了</span>
<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> demo <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## docker</span>
<span class="token comment"># 删掉 -net 0.0.0.0 eth0 的路由, 不然拨号之后无法上网</span>
route del <span class="token parameter variable">-net</span> <span class="token number">0.0</span>.0.0 eth0
<span class="token comment"># 安装必要的服务</span>
<span class="token function">apt</span> <span class="token function">install</span>  net-tools wvdial squid <span class="token function">vim</span>
<span class="token comment"># 不是必要的服务</span>
<span class="token function">apt</span> <span class="token function">install</span> iputils-ping

<span class="token comment"># 配置 wvdial: vim /etc/wvdial.conf</span>
    <span class="token comment"># 可以新加一组配置, [Dialer SG75-01]</span>
    <span class="token punctuation">[</span>Dialer SG75-01<span class="token punctuation">]</span>
    Init1 <span class="token operator">=</span> ATZ
    Init2 <span class="token operator">=</span> ATQ V1 E1 <span class="token assign-left variable">S0</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span>C1 <span class="token operator">&amp;</span>D2 +FCLASS<span class="token operator">=</span><span class="token number">0</span>
    Init3 <span class="token operator">=</span> ATE0V1
    Init4 <span class="token operator">=</span> <span class="token assign-left variable">ATS0</span><span class="token operator">=</span><span class="token number">0</span>
    Init5 <span class="token operator">=</span> AT+CGDCONT<span class="token operator">=</span><span class="token number">1</span>, <span class="token string">&quot;IP&quot;</span>, <span class="token string">&quot;3GNET&quot;</span>
    <span class="token comment"># 这里 APN Init5中的 3GNET, 所以可以不填</span>
    <span class="token comment"># APN = 3GNET</span>
    Init6 <span class="token operator">=</span> AT+CFUN<span class="token operator">=</span><span class="token number">1</span>
    Modem Type <span class="token operator">=</span> Analog Modem
    <span class="token comment"># 波特率常见是 9600, 115200, 460800</span>
    Baud <span class="token operator">=</span> <span class="token number">115200</span>
    New PPPD <span class="token operator">=</span> <span class="token function">yes</span>
    <span class="token comment"># Modem 一般为一组 ttyUSB* 中的第一个</span>
    Modem <span class="token operator">=</span> /dev/ttyUSB0
    ISDN <span class="token operator">=</span> <span class="token number">0</span>
    Phone <span class="token operator">=</span> *99<span class="token comment">#</span>
    <span class="token comment"># 用户名, 密码可以不填</span>
    Username <span class="token operator">=</span> username
    Password <span class="token operator">=</span> password
    Stupid Mode <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># wvdial拨号, 可以配置多组</span>
wvdial SG75-01

<span class="token comment"># 配置 squid</span>
<span class="token comment"># 代理访问授权</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http_access allow all&quot;</span> <span class="token operator">&gt;</span> /etc/squid/squid.conf.tmp
<span class="token function">cat</span> /etc/squid/squid.conf <span class="token operator">&gt;&gt;</span> etc/squid/squid.conf
<span class="token function">mv</span> /etc/squid/squid.conf.tmp /etc/squid/squid.conf
<span class="token comment"># 关闭一些 header</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;via off&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;forwarded_for delete&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token comment"># 等同下面的方式</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;request_header_access Via deny all&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;request_header_access X-Forwarded-For deny all&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token comment"># 设置超时</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;request_timeout 2 minutes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;write_timeout 2 minutes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;read_timeout 2 minutes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token comment"># 关闭日志/缓存</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;access_log none&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_store_log none&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_log /dev/null&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;logfile_rotate 0&quot;</span> <span class="token operator">&gt;&gt;</span>  /dev/squid/squid.conf
<span class="token comment"># 下面两个配置高版本不兼容, 低版本可以用</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_dir no-store &quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_mem 0MB&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf

<span class="token comment"># 更改默认路由, 默认使用4G的网卡上网</span>
<span class="token comment"># 如果没有改默认路由的话，在不指定网卡的情况下，4G 网卡并不会被使用到，因为默认路由指向的是 Docker 自身的虚拟网卡，那个网卡通向你原本的内网环境。也就是说，IP 不会变</span>
route del <span class="token parameter variable">-net</span> <span class="token number">0.0</span>.0.0 eth0
route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">0.0</span>.0.0 ppp0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> 
<span class="token comment"># 把运行中的 docker 做的修改, 提交成一个镜像</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&#39;wvdial_4G_centos&#39;</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&#39;xiaoteng&#39;</span> d5e87290836d xiaoteng/wvdial_4g:v1
<span class="token comment"># 使用自定义提交的镜像运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> for_4g_1 <span class="token parameter variable">-privileged</span> xiaoteng/wvdial_4g:v1 <span class="token function">bash</span>
<span class="token comment"># 如果需要在别的机器上运行, 可以直接导出镜像文件</span>
<span class="token comment"># 导出镜像</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> 82xxxxx <span class="token operator">&gt;</span> wvdial_4G_v1.image
<span class="token comment"># 导入镜像文件</span>
<span class="token function">docker</span> <span class="token function">import</span> wvdial_4G_v1.image zhipeng/wvidal:v1
<span class="token comment"># 或者保存镜像</span>
<span class="token function">docker</span> save 82xxxxx <span class="token operator">&gt;</span> wvdial_4G_v1.image
<span class="token function">docker</span> load wvdial_4G_v1.image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动流程</p></li></ol></li>`,2),m=s("p",null,"直接从python脚本实现随机选择网卡",-1),k={href:"https://stackoverflow.com/questions/12585317/requests-bind-to-an-ip",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/u012731379/article/details/78711549",target:"_blank",rel:"noopener noreferrer"},h=t('<h2 id="使用aws服务器做代理" tabindex="-1"><a class="header-anchor" href="#使用aws服务器做代理" aria-hidden="true">#</a> 使用aws服务器做代理</h2><ol><li>为服务器配置squid, 设置自启动后打包镜像</li><li>推荐地区: <ul><li>sa-east-1 南美洲（圣保罗）</li><li>ap-northeast-1 亚太地区（东京）</li><li>eu-central-1 欧洲（法兰克福）</li><li>af-south-1 非洲（开普敦）</li><li>ca-central-1 加拿大（中部）</li></ul></li><li>提工单申请弹性ip限额30+, (默认5个ip)</li><li>开启实例 <ul><li>实例类型: t3a.nano</li><li>开启解/绑弹性ip等权限</li></ul></li></ol>',2);function q(g,f){const a=l("ExternalLinkIcon");return o(),i("div",null,[r,s("p",null,[n("参考: 1. "),s("a",u,[n("https://cuiqingcai.com/7540.html"),e(a)]),n(" 2. "),s("a",d,[n("https://blog.csdn.net/u012731379/article/details/78744757"),e(a)])]),s("ol",null,[v,s("li",null,[m,s("ol",null,[s("li",null,[s("a",k,[n("https://stackoverflow.com/questions/12585317/requests-bind-to-an-ip"),e(a)])]),s("li",null,[s("a",b,[n("https://blog.csdn.net/u012731379/article/details/78711549"),e(a)])])])])]),h])}const x=p(c,[["render",q],["__file","proxy_server.html.vue"]]);export{x as default};
