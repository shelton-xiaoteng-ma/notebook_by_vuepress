import{_ as e,Y as i,Z as l,a4 as s}from"./framework-957baa9a.js";const n={},a=s(`<h1 id="history命令" tabindex="-1"><a class="header-anchor" href="#history命令" aria-hidden="true">#</a> history命令</h1><p>参考： https://linuxtoy.org/archives/history-command-usage-examples.html</p><ol><li>history # 列出所有的历史命令，相当于cat了一个文件</li><li>ctrl + R # 在历史命令中搜索， enter直接执行，方向键会进入修改</li><li>执行上一条命令的四种方法： <ol><li>↑</li><li>！！</li><li>！-1</li><li>Ctrl + P</li></ol></li><li>配置<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vi ~/.bash_profile

# 配置保存历史命令的总行数
HISTSIZE=450
HISTFILESIZE=450
# 历史命令的文件保存位置
HISTFILE=/root/.commandline_warrior

# 历史命令是否去重
HISTCONTROL=ignoredups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>由于history相当于cat了保存历史命令的文件，所以可以执行一些常规用法<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. history | grep xx    # 过滤制定的命令
2. history | tail -5    # 显示最后5条命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>剔除历史文件中重复的命令<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># export HISTCONTROL=erasedups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>清楚历史记录<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># history -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,3),d=[a];function t(r,c){return i(),l("div",null,d)}const v=e(n,[["render",t],["__file","history.html.vue"]]);export{v as default};
