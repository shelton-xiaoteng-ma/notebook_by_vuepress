import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const l={},i=e(`<h1 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> other</h1><ol><li><p>为终端设置代理</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>set http_proxy=http://127.0.0.1:1080
set https_proxy=http://127.0.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看ip</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 已被弃用
ifconfig: command not found
#等价于
ip addr show
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>diff</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code># 比较文件
diff file1 file2
# 比较文件夹
diff -urNa dir1 dir2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>curl</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>curl -O http://mirror.bit.edu.cn/apache/kafka/2.1.0/kafka_2.11-2.1.0.tgz  # 用于下载文件，按服务器上的文件名保存

curl -o filename url     # 文件下载后重命名为filename 
curl -C 200 url     # 支持断点续传, 200为最小片段
curl --interface ppp0(192.168.0.0) https://httpbin.org/ip   # 指定网络出口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>wget</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>wget -c -b https://www1.ncdc.noaa.gov/pub/data/ghcn/daily/by_year/2020.csv.gz
-c 断点续传
-b 后台运行
# 添加代理
-e &quot;http_proxy=http://10.40.36.196:3389&quot; https://github.com/yichengchen/clashX/releases/download/1.31.3/ClashX.dmg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>scp</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>scp src_dir target_dir

# eg:
scp -l 1000 -r /root/2021.csv.gz xiaoteng@10.9.62.123:/home/xiaoteng/code/aspex_codes/src/utils/

-r 迁移目录
-l 限制带宽, Kbit/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_1-top命令" tabindex="-1"><a class="header-anchor" href="#_1-top命令" aria-hidden="true">#</a> 1. top命令</h2><ol><li><p>查看内存占用等</p><ol><li>使用 e/E 切换内存显示的单位</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>    top

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-查看端口命令" tabindex="-1"><a class="header-anchor" href="#_2-查看端口命令" aria-hidden="true">#</a> 2. 查看端口命令</h2><ol><li><p>netstat</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span>  <span class="token comment"># 用于显示tcp, udp的端口和进程的相关情况</span>
    <span class="token parameter variable">-t</span> <span class="token punctuation">(</span>tcp<span class="token punctuation">)</span> 仅显示tcp相关选项
    <span class="token parameter variable">-u</span> <span class="token punctuation">(</span>udp<span class="token punctuation">)</span>仅显示udp相关选项
    <span class="token parameter variable">-n</span> 拒绝显示别名，能显示数字的全部转化为数字
    <span class="token parameter variable">-l</span> 仅列出在Listen<span class="token punctuation">(</span>监听<span class="token punctuation">)</span>的服务状态
    <span class="token parameter variable">-p</span> 显示建立相关链接的程序名
<span class="token function">netstat</span> <span class="token parameter variable">-tunlp</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">8000</span>   <span class="token comment"># 查看8000端口的占用情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>lsof 是一个列出当前系统打开文件的工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span>
<span class="token function">lsof</span> -i:8080：查看8080端口占用
<span class="token function">lsof</span> abc.txt：显示开启文件abc.txt的进程
<span class="token function">lsof</span> <span class="token parameter variable">-c</span> abc：显示abc进程现在打开的文件
<span class="token function">lsof</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-p</span> <span class="token number">1234</span>：列出进程号为1234的进程所打开的文件
<span class="token function">lsof</span> <span class="token parameter variable">-g</span> gid：显示归属gid的进程情况
<span class="token function">lsof</span> +d /usr/local/：显示目录下被进程开启的文件
<span class="token function">lsof</span> +D /usr/local/：同上，但是会搜索目录下的目录，时间较长
<span class="token function">lsof</span> <span class="token parameter variable">-d</span> <span class="token number">4</span>：显示使用fd为4的进程
<span class="token function">lsof</span> <span class="token parameter variable">-i</span> -U：显示所有打开的端口和UNIX domain文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_3-kill命令" tabindex="-1"><a class="header-anchor" href="#_3-kill命令" aria-hidden="true">#</a> 3. kill命令</h2><ol><li><p>netstat查看到占用,使用kill杀掉进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-9</span> pid
<span class="token function">kill</span> pid
<span class="token function">kill</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>给予root权限，文件夹的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> ./dir/*
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span>  maxiaoteng ./dir/*  <span class="token comment"># 修文件所有人</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-快捷键" tabindex="-1"><a class="header-anchor" href="#_4-快捷键" aria-hidden="true">#</a> 4. 快捷键</h2><ol><li><p>删除整行 ctrl+u</p></li><li><p>删除前一个单词 ctrl+w</p></li><li><p>不删除直接下一行重新输入 ctrl+c</p></li></ol><h2 id="_5-运维命令" tabindex="-1"><a class="header-anchor" href="#_5-运维命令" aria-hidden="true">#</a> 5. 运维命令</h2><ol><li><p>一条命令杀进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> -efww<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> <span class="token string">&#39;process_test.py&#39;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">9</span>-15<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ps -ef 查看所有进程命令</li><li>grep -w 是强制PATTERN仅完全匹配字符</li><li>grep -v grep 列出的进程中去除含有grep的进程</li><li>grep -A/-B/-C 20 过滤时会展示目标行前/后/前后 20条内容</li><li>grep -E &#39;成功|失败&#39; 使用正则匹配目标行</li><li>cut -c 9-15 截取pid号</li><li>kill -9 强行杀掉制定进程(通过杀掉关联进程)</li><li>ps -ef|grep -wv &#39;bash|mitmdump&#39; 同时不包含bash和mitmdump</li></ul></li></ol><h2 id="_6-语言问题" tabindex="-1"><a class="header-anchor" href="#_6-语言问题" aria-hidden="true">#</a> 6. 语言问题</h2><p>nas是debian系统, 无法输入和显示中文</p><ol><li><p>添加语言支持</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> locale
    locales dpkg-reconfigure locales
    <span class="token comment"># 选择Zh开头的</span>
    <span class="token comment"># 输入法不一定需要</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置locale</p><ol><li><p>默认locale: /etc/default/locale</p></li><li><p>~/.bashrc 优先级最高, 在这里设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">LC_CTYP</span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_NUMERIC</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_TIME</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">LC_COLLATE</span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_MONETARY</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">LC_MESSAGES</span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_PAPER</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_NAME</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ADDRESS</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_TELEPHONE</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_MEASUREMENT</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_IDENTIFICATION</span></span><span class="token operator">=</span><span class="token string">&quot;en_US.UTF-8&quot;</span>
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>生效</p><ol><li>source ~/.bashrc</li></ol></li></ol><h2 id="_7-debian设置时区" tabindex="-1"><a class="header-anchor" href="#_7-debian设置时区" aria-hidden="true">#</a> 7. debian设置时区</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vim /etc/timezone</span>
Asia/Shanghai

<span class="token comment"># ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
或者
<span class="token comment"># cp -a /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[i];function p(c,o){return s(),a("div",null,t)}const d=n(l,[["render",p],["__file","other.html.vue"]]);export{d as default};
