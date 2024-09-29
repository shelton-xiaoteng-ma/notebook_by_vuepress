import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const p={},o=t(`<h1 id="_09-members" tabindex="-1"><a class="header-anchor" href="#_09-members" aria-hidden="true">#</a> 09 members</h1><ol><li><p>schema</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/schema.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authTables <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@convex-dev/auth/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineSchema<span class="token punctuation">,</span> defineTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/values&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">defineSchema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>authTables<span class="token punctuation">,</span>
  <span class="token operator">...</span>
  members<span class="token operator">:</span> <span class="token function">defineTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    userId<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    workspaceId<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;workspaces&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    role<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span><span class="token function">literal</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span><span class="token function">literal</span><span class="token punctuation">(</span><span class="token string">&quot;member&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;by_user_id&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;by_workspace_id&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;workspaceId&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;by_workspace_id_user_id&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;workspaceId&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;userId&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> schema<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>api, 带索引查询</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/workspaces.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAuthUserId</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> members <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>db
      <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;members&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">withIndex</span><span class="token punctuation">(</span><span class="token string">&quot;by_user_id&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> workspaceIds <span class="token operator">=</span> members<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> member<span class="token punctuation">.</span>workspaceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> workspaces <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> workspaceId <span class="token keyword">of</span> workspaceIds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> workspace <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>workspaceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>workspace<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        workspaces<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>workspace<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> workspaces<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>generateJoinCode</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">generateJoinCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token string">&quot;01234567890abcdefghijklmnopqrstuvwxyz&quot;</span><span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> code<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","09_members.html.vue"]]);export{k as default};
