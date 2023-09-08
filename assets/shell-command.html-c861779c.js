import{_ as e,Y as i,Z as n,a4 as a}from"./framework-957baa9a.js";const d={},l=a(`<h1 id="shell命令" tabindex="-1"><a class="header-anchor" href="#shell命令" aria-hidden="true">#</a> Shell命令</h1><h2 id="开头" tabindex="-1"><a class="header-anchor" href="#开头" aria-hidden="true">#</a> 开头</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>脚本以.sh结尾, 并且要使用<code>chmod +x filename.sh</code>来使文件为可执行脚本</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>注释以&quot; # &quot; 来开始, 占据一行</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><ol><li><p>定义变量时,变量名不加美元符号($)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">&quot;shell&quot;</span> 
变量名和等号之间不能有空格, 除了显式赋值, 还可以用语句赋值
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">&#39;ls /etc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用变量用\${}表示(花括号虽然可以不用, 但尽量使用)</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;a is \${a}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="等待sleep" tabindex="-1"><a class="header-anchor" href="#等待sleep" aria-hidden="true">#</a> 等待sleep</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sleep 5  # 默认为秒
sleep 5s
sleep 5m
sleep 5h
sleep 5d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>单引号的变量和转义字符是无效的, 只会原样输出</p><p>双引号可以有变量和转义字符, 比如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>your_name=&#39;qinjx&#39;
str=&quot;Hello, I know your are \\&quot;$your_name\\&quot;! \\n&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>使用export导入环境变量, 命令可以直接使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 运行命令的两种方法

/usr/bin/python /XXX/xx.py

export

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell流程控制" tabindex="-1"><a class="header-anchor" href="#shell流程控制" aria-hidden="true">#</a> shell流程控制</h2><ol><li>if语句</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if condition
then
    comamnd1
    command2
    command3
elif condition2
    command4
else
    command5
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>for</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for var in item1 item2... itemn
do
    command1
    ...
    commandn
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>while</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while condition
do 
    command
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并行运行多个命令" tabindex="-1"><a class="header-anchor" href="#并行运行多个命令" aria-hidden="true">#</a> 并行运行多个命令</h2><p>&amp;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
# 启动爬虫
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 0 &gt;/dev/null 2&gt;&amp;1 &amp;
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 1 &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解释</strong>:</p><ul><li>最后的 <code>&amp;</code>符号可以使命令并行运行</li><li><code>&gt;</code>重定向符号</li><li><code>/dev/null</code> # 代表空设备文件</li><li><code>2&gt;</code> # 代表stderr标准错误</li><li><code>&amp;1</code> # 中的&amp;表示等同,就是2的输出等同于标准输出</li><li><code>1</code> # 表示系统标准输出 <code>&gt;/dev/null</code>等同于<code>1&gt;/dev/null</code></li><li><code>&gt;/dev/null 2&gt;&amp;1</code> # 表示正常输出重定向到null, 错误输出重定向到1, 也是null</li><li><code>2&gt;&amp;1 &gt;/dev/null</code> # 表示错误输出重定向到1, 即屏幕, 然后正确输出重定向到null</li></ul><h2 id="sh样本" tabindex="-1"><a class="header-anchor" href="#sh样本" aria-hidden="true">#</a> sh样本</h2><p>兼容crontab的运行, 设置全面的环境变量和路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh  # 指定脚本解释器

# 生效当前用户的配置, 通常用在crontab中
source ~/.bash_profile
source /etc/profile

# 添加环境变量, 比如scrapy创建在了/usr/local/bin
# 可以通过echo $PATH来测试是否添加成功
SCRAPY_HOME=/usr/local/bin
export SCRAPY_HOME

PATH=$PATH:$SCRAPY_HOME
export PATH

# 生效虚拟环境
source /data2/home/maxiaoteng/miniconda3/bin/activate /data2/home/maxiaoteng/miniconda3/envs/sjy_conda

# 切换到目录下
cd /home/ec2-user/uber/crawler/python/zomato/
# 启动爬虫
/usr/bin/python3 zomato_apac.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
# 启动爬虫
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 0 &gt;/dev/null 2&gt;&amp;1 &amp;
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 1 &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对目录和文件的操作" tabindex="-1"><a class="header-anchor" href="#对目录和文件的操作" aria-hidden="true">#</a> 对目录和文件的操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>判断操作
#!/bin/bash
# 如果数据文件存在,先删除
data_path=/home/maxiaoteng/ss.txt
if [ ! -f $data_path ];then
  echo 不存在
else
  echo 存在, 我删掉了
  rm -f $data_path
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-d # 判断目录是否存在
-f # 判断文件是否存在
-x # 判断路径是否存在并有可执行权限
-n # 判断变量是否为空
    if [ ! -n $var ] ; then
        echo var 变量为空
    fi
=  # 判断变量是否相等
    if [ $var1 = $var2 ]; then
        echo var1和var2相等
    fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h2><ul><li><code>syntax error: unexpected end of file</code>错误 <ul><li>是因为<code>\\r\\n</code>不兼容引起的</li><li>解决: <code>dos2unix file.sh</code></li></ul></li></ul>`,40),s=[l];function r(c,t){return i(),n("div",null,s)}const u=e(d,[["render",r],["__file","shell-command.html.vue"]]);export{u as default};
