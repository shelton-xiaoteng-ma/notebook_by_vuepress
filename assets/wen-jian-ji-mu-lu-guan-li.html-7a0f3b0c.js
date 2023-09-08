import{_ as e,Y as i,Z as a,a4 as d}from"./framework-957baa9a.js";const n={},l=d(`<h1 id="文件及目录管理" tabindex="-1"><a class="header-anchor" href="#文件及目录管理" aria-hidden="true">#</a> 文件及目录管理</h1><h2 id="创建和删除" tabindex="-1"><a class="header-anchor" href="#创建和删除" aria-hidden="true">#</a> 创建和删除</h2><ul><li>创建: mkdir</li><li>删除: rm</li><li>删除非空目录: rm -r file_name</li><li>删除日志: rm *log</li><li>移动: mv</li><li>复制: cp</li><li>复制目录: cp -r</li></ul><p>查看当下目录文件个数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find ./ |wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制目录:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp -r source_dir dest_dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="目录切换" tabindex="-1"><a class="header-anchor" href="#目录切换" aria-hidden="true">#</a> 目录切换</h2><ul><li>切换位置: cd</li><li>切换上一级: cd .. 或: cd -</li><li>切换到home: cd ~ or cd</li><li>显示当前路径: pwd</li><li>更改当前工作路径为path: cd path</li></ul><h2 id="列出目录项" tabindex="-1"><a class="header-anchor" href="#列出目录项" aria-hidden="true">#</a> 列出目录项</h2><ul><li>ls</li><li>按时间排序, 以列表方式显示: ls -lrt</li></ul><h2 id="查找目录和文件-find-location" tabindex="-1"><a class="header-anchor" href="#查找目录和文件-find-location" aria-hidden="true">#</a> 查找目录和文件 find/location</h2><p>搜寻文件或目录:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find ./ -name &#39;core*&#39; | xargs file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找目标文件夹是否有obj文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find ./ -name &#39;*.o&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>递归删除目录及子目录的.o文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find ./ -name &#39;*.o&#39; -exec rm {} \\

find ./xx/2022/2[2-9]/ -delete
find ./xx/2022/2[2-9]/ -name &#39;*.csv.gz&#39; -delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>find</strong>是实时查找, 要想更快, 可以使用location<br><strong>location</strong>为文件系统建立索引数据库, 需要定期更新</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location string   # 寻找包含string的路径
updatedb  # 更新索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看文件内容" tabindex="-1"><a class="header-anchor" href="#查看文件内容" aria-hidden="true">#</a> 查看文件内容</h2><p><strong>cat, vi, head, tail, more</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat -n  # 显示的同时显示行号

ls -al | more  # 按页显示列表内容

# 查看前10行
head -10 file_name

# 显示文件第一行
head -1 file_name

# 查看文件差距:
diff file1 file2

# 查看后10行
tail -10 file_name

# 动态显示文本更新
tail -f file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变文件和目录权限" tabindex="-1"><a class="header-anchor" href="#改变文件和目录权限" aria-hidden="true">#</a> 改变文件和目录权限</h2><ul><li>chmod 改变文件读写执行属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod a+x myscript

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件创建别名-创建软链接-硬链接" tabindex="-1"><a class="header-anchor" href="#文件创建别名-创建软链接-硬链接" aria-hidden="true">#</a> 文件创建别名, 创建软链接/硬链接</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln cc ccAgain : 硬链接, 删除一个, 另一个仍能找到
ln -s cc ccNew : 软链接, 删除源, 另一个无法使用 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管道和重定向" tabindex="-1"><a class="header-anchor" href="#管道和重定向" aria-hidden="true">#</a> 管道和重定向</h2><ul><li>批处理命令连接执行使用<code>|</code></li><li>串联使用分号<code>;</code></li><li>前面成功才执行,否则不执行使用<code>&amp;&amp;</code></li><li>前面失败, 后面才执行使用<code>||</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls /etc &amp;&amp; echo suss! || echo failed.

等价:
if ls /etc; then echo suss; else echo fail; fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重定向</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls /etc &gt; list 2&gt; &amp;1  # 将标准输出和标准错误输出重定向到同一文件

等价:
ls /etc &amp;&gt; list

echo aa &gt;&gt; a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清空文件:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>: &gt; a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a> 设置环境变量</h2><p>.profile文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PATH=$APPDIR:/opt/app/soft/bin:$PATH:/usr/local/bin:$TUXDIR/bin:$ORACLE_HOME/bin;export PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="应用举例" tabindex="-1"><a class="header-anchor" href="#应用举例" aria-hidden="true">#</a> 应用举例</h2><p>查看文件中包含AAA 不包含BBB 的文件行数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat log.log |grep AAA | grep -v BBB | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41),s=[l];function r(t,c){return i(),a("div",null,s)}const v=e(n,[["render",r],["__file","wen-jian-ji-mu-lu-guan-li.html.vue"]]);export{v as default};
