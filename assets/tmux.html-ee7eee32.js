import{_ as t,Y as i,Z as l,a0 as n,a1 as s,a2 as c,a4 as e,E as r}from"./framework-957baa9a.js";const o={},p=n("h1",{id:"tmux-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tmux-命令","aria-hidden":"true"},"#"),s(" tmux 命令")],-1),d=n("p",null,"tmux 采用c/s模型，输入tmux命令， 相当于开启了一个服务器（server），默认新建一个会话（session）,会话中默认新建一个窗口（window），窗口中默认新建一个面板（pane）。",-1),u=e(`<li><p>基本命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建一个session</span>
tmux <span class="token punctuation">[</span>new <span class="token parameter variable">-s</span> 会话名 <span class="token parameter variable">-n</span> 窗口名<span class="token punctuation">]</span>
<span class="token comment"># 默认进入第一个session</span>
tmux at <span class="token punctuation">[</span>-t 会话名<span class="token punctuation">]</span>
<span class="token comment"># 列出所有会话</span>
tmux <span class="token function">ls</span>
<span class="token comment"># 关闭指定会话， 还有kill-server， kill-window， kill-pane</span>
tmux kill-session <span class="token parameter variable">-t</span> 会话名
<span class="token comment"># 按下 ctr+b以后</span>
    s  列出所有会话
    c  创建窗口
    w  列出所有窗口
    <span class="token punctuation">[</span>  屏幕内滚动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),m={href:"https://serverok.in/tmux-create-new-window-on-current-directory",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vi ~/.tmux.conf</span>
<span class="token builtin class-name">bind</span> c new-window <span class="token parameter variable">-c</span> <span class="token string">&quot;#{pane_current_path}&quot;</span>
<span class="token builtin class-name">bind</span> <span class="token string">&#39;&quot;&#39;</span> split-window <span class="token parameter variable">-c</span> <span class="token string">&quot;#{pane_current_path}&quot;</span>
<span class="token builtin class-name">bind</span> % split-window <span class="token parameter variable">-h</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;#{pane_current_path}&quot;</span>

<span class="token comment"># 生效文件</span>
tmux source-file ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function b(k,_){const a=r("ExternalLinkIcon");return i(),l("div",null,[p,d,n("ol",null,[u,n("li",null,[n("p",null,[s("配置"),n("a",m,[s("tmux create new window on current directory"),c(a)])]),v])])])}const x=t(o,[["render",b],["__file","tmux.html.vue"]]);export{x as default};
