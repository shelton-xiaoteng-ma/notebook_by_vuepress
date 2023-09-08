import{_ as e,Y as a,Z as i,a4 as d}from"./framework-957baa9a.js";const n={},r=d(`<h1 id="tar-解压缩命令" tabindex="-1"><a class="header-anchor" href="#tar-解压缩命令" aria-hidden="true">#</a> tar 解压缩命令</h1><h2 id="_1-压缩" tabindex="-1"><a class="header-anchor" href="#_1-压缩" aria-hidden="true">#</a> 1. 压缩</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> 20180725baike.tar.gz <span class="token number">2018</span>-07-25/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.. 1. options说明<br> -c //创建一个压缩文件 -z //具有gzip的属性, 一般gz结尾 -v //压缩过程显示档案 -f //后接压缩文件名, f必须在options的末尾</p><h2 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压" aria-hidden="true">#</a> 2. 解压</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -xzvf 20180725baike.tar.gz 2018-07-25/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.. - options说明 -x 解压缩文件指令 其他的对应上一条命令</p><h2 id="_3-分卷压缩" tabindex="-1"><a class="header-anchor" href="#_3-分卷压缩" aria-hidden="true">#</a> 3. 分卷压缩</h2><p>分卷实际上用到的是split命令,用来切割文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar cvzpf - baike | split -d -b 50m - baike.tar.gz.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明:</h3><ol><li>将eclipse文件夹分卷压缩</li><li><ul><li>表示命令的输入和输出参数</li></ul></li><li>每卷50m</li><li>baike.tar.gz. 是压缩文件的起始文件</li><li>压缩完以后会命名尾x00, x01, x02</li></ol><h2 id="_4-分卷解压" tabindex="-1"><a class="header-anchor" href="#_4-分卷解压" aria-hidden="true">#</a> 4. 分卷解压</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat baike.tar.gz.* &gt; eclipse.tar.gz  //先合并
tar -xzvf eclipse.tar.gz  //解压
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat baike.tar.gz.* | tar -xzvf   // 一步解决
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-批量解压" tabindex="-1"><a class="header-anchor" href="#_5-批量解压" aria-hidden="true">#</a> 5. 批量解压</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls *.tar.gz | xargs -n1 tar xzvf
# tar命令支持批量解压, 如 tar *, 所以要用脚本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-gzip-与-tar" tabindex="-1"><a class="header-anchor" href="#_6-gzip-与-tar" aria-hidden="true">#</a> 6. gzip 与 tar</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .tar文件相当于一个文件夹
# 压缩
gzip xx.tar  # 将自动生成xx.tar.gz的压缩文件, 并替换掉之前的xx.tar
# 解压
gzip -d xx.tar.gz  # 将解压文件为xx.tar并替换掉原来的xx.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-zip-unzip" tabindex="-1"><a class="header-anchor" href="#_7-zip-unzip" aria-hidden="true">#</a> 7. zip unzip</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -d 指定解压目录
unzip xxx.zip -d xxdir/

# -q 不显示过程, -r 递归压缩
zip -q -r html.zip /home/html
zip -q -r html.zip *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),s=[r];function t(l,c){return a(),i("div",null,s)}const v=e(n,[["render",t],["__file","tar.html.vue"]]);export{v as default};
