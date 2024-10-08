import{_ as t,Y as e,Z as p,a0 as n,a1 as s,a2 as o,a4 as c,E as l}from"./framework-957baa9a.js";const i={},r=n("h1",{id:"_12-channels-members",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_12-channels-members","aria-hidden":"true"},"#"),s(" 12 channels & members")],-1),u={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/3dd7412148d6f583d582592d605d9265feef9e76",target:"_blank",rel:"noopener noreferrer"},d=c(`<ol><li><p>新增channels表 <code>convex/channels.ts</code></p></li><li><p>表关联查询<code>convex/members.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/members.ts</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> populateUser <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> QueryCtx<span class="token punctuation">,</span> id<span class="token operator">:</span> Id<span class="token operator">&lt;</span><span class="token string">&quot;users&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ctx<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> members <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> member <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">populateUser</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> member<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    members<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>member<span class="token punctuation">,</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> members<span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义variants</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/app/workspace/[workspaceId]/sidebar-item.tsx</span>
<span class="token keyword">const</span> sidebarItemVariants <span class="token operator">=</span> <span class="token function">cva</span><span class="token punctuation">(</span>
  <span class="token string">&quot;flex items-center gap-1.5 justify-start font-normal h-7 px-[18px] text-sm overflow-hidden&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    variants<span class="token operator">:</span> <span class="token punctuation">{</span>
      variant<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;text-[#f9edffcc]&quot;</span><span class="token punctuation">,</span>
        active<span class="token operator">:</span> <span class="token string">&quot;text-[#481349] bg-white/90 hover:bg-white/90&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    defaultVariants<span class="token operator">:</span> <span class="token punctuation">{</span> variant<span class="token operator">:</span> <span class="token string">&quot;default&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
<span class="token operator">&lt;</span>Button
  variant<span class="token operator">=</span><span class="token string">&quot;transparent&quot;</span>
  size<span class="token operator">=</span><span class="token string">&quot;sm&quot;</span>
  className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span><span class="token function">sidebarItemVariants</span><span class="token punctuation">(</span><span class="token punctuation">{</span> variant <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
  asChild
<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>

<span class="token comment">// 使用</span>
<span class="token operator">&lt;</span>SidebarItem
  label<span class="token operator">=</span><span class="token string">&quot;Threads&quot;</span>
  icon<span class="token operator">=</span><span class="token punctuation">{</span>MessageSquareText<span class="token punctuation">}</span>
  id<span class="token operator">=</span><span class="token string">&quot;threads&quot;</span>
  variant<span class="token operator">=</span><span class="token string">&quot;active&quot;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>react-use</code> 之 useToggle, 及按钮旋转</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// pnpm install react-use</span>
<span class="token comment">// src/app/workspace/[workspaceId]/user-item.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useToggle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-use&quot;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>on<span class="token punctuation">,</span> toggle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useToggle</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>Button
  variant<span class="token operator">=</span><span class="token string">&quot;transparent&quot;</span>
  className<span class="token operator">=</span><span class="token string">&quot;p-0.5 text-sm text-[#f9edffcc] shrink-0 size-6&quot;</span>
  onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggle<span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>FaCaretDown
    className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span><span class="token string">&quot;size-4 transition-transform&quot;</span><span class="token punctuation">,</span> <span class="token operator">!</span>on <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;-rotate-90&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>group实现加号悬停显示<code>group-hover:opacity-100</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/app/workspace/[workspaceId]/workspace-section.tsx</span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex items-center px-3.5 group&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Button
    variant<span class="token operator">=</span><span class="token string">&quot;transparent&quot;</span>
    className<span class="token operator">=</span><span class="token string">&quot;p-0.5 text-sm text-[#f9edffcc] shrink-0 size-6&quot;</span>
    onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggle<span class="token punctuation">}</span>
  <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>FaCaretDown
      className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span><span class="token string">&quot;size-4 transition-transform&quot;</span><span class="token punctuation">,</span> <span class="token operator">!</span>on <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;-rotate-90&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Button
    variant<span class="token operator">=</span><span class="token string">&quot;transparent&quot;</span>
    size<span class="token operator">=</span><span class="token string">&quot;sm&quot;</span>
    className<span class="token operator">=</span><span class="token string">&quot;group px-1.5 text-sm text-[#f9edffcc] h-[28px] justify-start overflow-hidden items-center&quot;</span>
  <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">&quot;truncate&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span>onNew <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Hint label<span class="token operator">=</span><span class="token punctuation">{</span>hint<span class="token punctuation">}</span> side<span class="token operator">=</span><span class="token string">&quot;top&quot;</span> align<span class="token operator">=</span><span class="token string">&quot;center&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button
        onClick<span class="token operator">=</span><span class="token punctuation">{</span>onNew<span class="token punctuation">}</span>
        variant<span class="token operator">=</span><span class="token string">&quot;transparent&quot;</span>
        size<span class="token operator">=</span><span class="token string">&quot;iconSm&quot;</span>
        className<span class="token operator">=</span><span class="token string">&quot;opacity-0 group-hover:opacity-100 transition-opacity ml-auto p-0.5 text-sm text-[#f9edffcc] size-6 shrink-0&quot;</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Plus className<span class="token operator">=</span><span class="token string">&quot;size-5&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Hint<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function k(v,m){const a=l("ExternalLinkIcon");return e(),p("div",null,[r,n("p",null,[s("github 提交记录: "),n("a",u,[s("channels&members"),o(a)])]),d])}const g=t(i,[["render",k],["__file","12_channels_members.html.vue"]]);export{g as default};
