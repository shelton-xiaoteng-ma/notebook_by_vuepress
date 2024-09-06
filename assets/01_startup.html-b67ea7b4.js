import{_ as s,Y as n,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},i=e(`<h1 id="_01-startup" tabindex="-1"><a class="header-anchor" href="#_01-startup" aria-hidden="true">#</a> 01 startup</h1><ol><li><p>系统环境</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token operator">&gt;&gt;</span> v22.7.0

npx <span class="token parameter variable">-v</span>
<span class="token operator">&gt;&gt;</span> <span class="token number">10.8</span>.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-next-app@latest slack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> slack
<span class="token function">pnpm</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_02-shadcn-basic" tabindex="-1"><a class="header-anchor" href="#_02-shadcn-basic" aria-hidden="true">#</a> 02 shadcn basic</h2><ol start="0"><li><p>vscode安装插件</p><ul><li><code>Tailwind CSS IntelliSense</code></li><li><code>Simple React Snippets</code></li><li><code>Error Lens</code></li><li><code>Color Highlight</code></li></ul></li><li><p>init</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx shadcn@latest init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加组建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 对应路径/src/components/ui/button.tsx
<span class="token function">pnpm</span> dlx shadcn@latest <span class="token function">add</span> button
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义variant</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// /src/components/ui/button.tsx</span>
<span class="token comment">// bg-emerald-500/80 背景颜色emerald/颜色浓度500/透明80</span>
<span class="token keyword">const</span> buttonVariants <span class="token operator">=</span> <span class="token function">cva</span><span class="token punctuation">(</span>
  <span class="token string">&quot;inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    variants<span class="token operator">:</span> <span class="token punctuation">{</span>
      variant<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;bg-primary text-primary-foreground hover:bg-primary/90&quot;</span><span class="token punctuation">,</span>
        destructive<span class="token operator">:</span>
          <span class="token string">&quot;bg-destructive text-destructive-foreground hover:bg-destructive/90&quot;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
        slack<span class="token operator">:</span> <span class="token string">&quot;bg-emerald-500 text-white hover:bg-emerald-500/80&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/components/ui/button&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;font-bold text-9xl text-red-500&quot;</span><span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">&quot;destructive&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;lg&quot;</span><span class="token operator">&gt;</span>destructive<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),o=[i];function l(p,c){return n(),a("div",null,o)}const d=s(t,[["render",l],["__file","01_startup.html.vue"]]);export{d as default};
