import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const p={},e=t(`<h1 id="_05-workspace" tabindex="-1"><a class="header-anchor" href="#_05-workspace" aria-hidden="true">#</a> 05 workspace</h1><ol start="0"><li><p>package</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> jotai
<span class="token function">pnpm</span> dlx shadcn@latest <span class="token function">add</span> dialog
<span class="token function">pnpm</span> dlx shadcn@latest <span class="token function">add</span> soner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>schema</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/schema.ts</span>
<span class="token comment">// convex 自动创建表</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineSchema<span class="token punctuation">,</span> defineTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> authTables <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@convex-dev/auth/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/values&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">defineSchema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token operator">...</span>authTables<span class="token punctuation">,</span>
workspaces<span class="token operator">:</span> <span class="token function">defineTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    userId<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    joinCode<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> schema<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>convex api</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/workspaces.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getAuthUserId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@convex-dev/auth/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/values&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mutation<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./_generated/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> create <span class="token operator">=</span> <span class="token function">mutation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> joinCode <span class="token operator">=</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAuthUserId</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Unauthorization&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> workspaceId <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;workspaces&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> args<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      userId<span class="token punctuation">,</span>
      joinCode<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> workspaceId<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> get <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;workspaces&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义hook/api</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/features/workspaces/api/use-get-workspaces.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> api <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../../convex/_generated/api&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useGetWrokspaces</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>workspaces<span class="token punctuation">.</span>get<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isLoading <span class="token operator">=</span> data <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>模态框modal, 封装后<code>&lt;Modals /&gt;</code>添加到layout.tsx</p><blockquote><p>使用模态框（Modal）主要是为了在用户界面上展示临时内容，同时不离开当前页面。这种设计在提高用户体验和保持界面简洁的情况下非常有用</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/app/layout.tsx</span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span>ConvexClientProvider<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Toaster <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Modals <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ConvexClientProvider<span class="token operator">&gt;</span>
<span class="token operator">...</span>

<span class="token comment">// src/features/workspaces/components/create-workspace-modal.tsx</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">CreateWrokspaceModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 模态框封装</span>
<span class="token comment">// src/components/modals.tsx</span>
<span class="token string">&quot;use client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateWrokspaceModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/features/workspaces/components/create-workspace-modal&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Modals</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>mounted<span class="token punctuation">,</span> setMounted<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setMounted</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mounted<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>CreateWrokspaceModal <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>动态路径</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/app/workspace/[workspaceId]/page.tsx</span>
<span class="token keyword">interface</span> <span class="token class-name">WorkspaceIdPageProps</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    workspaceId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">WorkspaceIdPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>params<span class="token punctuation">}</span><span class="token operator">:</span> WorkspaceIdPageProps<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>params<span class="token punctuation">.</span>workspaceId<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> WorkspaceIdPage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>路由跳转</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/features/workspaces/components/create-workspace-modal.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/navigation&quot;</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">CreateWrokspaceModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
  <span class="token comment">// push replace refresh ...</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/workspace/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>jotai</code> 状态管理</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 1. atom(false): 创建了一个名为 modalState 的 atom，初始值为 false。 也可以为数字,比如 0</span>
<span class="token comment">// 2. useAtom(modalState): 返回一个包含 [value, setter] 的数组，第一个元素是 atom 的当前值（类似于 useState, open/close/count 都可以），第二个元素是用于更新 atom 的 setter 函数。 </span>
<span class="token comment">// src/features/workspaces/store/use-create-workspace-modal.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> atom<span class="token punctuation">,</span> useAtom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;jotai&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> modalState <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCreateWrokspaceModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useAtom</span><span class="token punctuation">(</span>modalState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// src/features/workspaces/components/create-workspace-modal.tsx</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">CreateWrokspaceModal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> setOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useCreateWrokspaceModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Dialog open<span class="token operator">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span> onOpenChange<span class="token operator">=</span><span class="token punctuation">{</span>handleClose<span class="token punctuation">}</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/app/page.tsx</span>
<span class="token string">&quot;use client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useCreateWrokspaceModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/features/workspaces/store/use-create-workspace-modal&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> setOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useCreateWrokspaceModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;loading&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>workspaceId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Redirect to workspace&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/workspace/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>workspaceId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Open creation modal&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>workspaceId<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> open<span class="token punctuation">,</span> setOpen<span class="token punctuation">,</span> router<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>UserButton <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","05_workspace.html.vue"]]);export{r as default};
