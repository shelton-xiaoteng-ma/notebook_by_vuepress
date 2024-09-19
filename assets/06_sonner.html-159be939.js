import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const e={},o=t(`<h1 id="_06-sonner" tabindex="-1"><a class="header-anchor" href="#_06-sonner" aria-hidden="true">#</a> 06 Sonner</h1><ol><li><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dlx shadcn@latest <span class="token function">add</span> sonner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/app/layout.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Toaster <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/components/ui/sonner&quot;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span>body
  className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>geistSans<span class="token punctuation">.</span>variable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>geistMono<span class="token punctuation">.</span>variable<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> antialiased</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>ConvexClientProvider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Toaster <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Modals <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ConvexClientProvider<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">...</span>

<span class="token comment">// src/features/workspaces/components/create-workspace-modal.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;sonner&quot;</span><span class="token punctuation">;</span>

<span class="token operator">...</span> 
<span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;Workspace created&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),p=[o];function i(c,l){return s(),a("div",null,p)}const u=n(e,[["render",i],["__file","06_sonner.html.vue"]]);export{u as default};
