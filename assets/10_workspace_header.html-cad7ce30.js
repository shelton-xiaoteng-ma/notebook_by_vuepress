import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const p={},e=t(`<h1 id="_10-workspace-header" tabindex="-1"><a class="header-anchor" href="#_10-workspace-header" aria-hidden="true">#</a> 10 Workspace Header</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dlx shadcn@latest <span class="token function">add</span> resizable tooltip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_1-api" tabindex="-1"><a class="header-anchor" href="#_1-api" aria-hidden="true">#</a> 1 api</h2><ol><li><p>members</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/members.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getAuthUserId <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@convex-dev/auth/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> v <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/values&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./_generated/server&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span> workspaceId<span class="token operator">:</span> v<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;workspaces&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAuthUserId</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> member <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>db
      <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;members&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">withIndex</span><span class="token punctuation">(</span><span class="token string">&quot;by_workspace_id_user_id&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        q<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;workspaceId&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>workspaceId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>member<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> member<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>hooks/useCurrentMember</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/features/members/api/use-current-member.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;convex/react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> api <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../../convex/_generated/api&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Id <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../../convex/_generated/dataModel&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">UseCurrentMemberProps</span> <span class="token punctuation">{</span>
  workspaceId<span class="token operator">:</span> Id<span class="token operator">&lt;</span><span class="token string">&quot;workspaces&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCurrentMember</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> workspaceId <span class="token punctuation">}</span><span class="token operator">:</span> UseCurrentMemberProps<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>members<span class="token punctuation">.</span>current<span class="token punctuation">,</span> <span class="token punctuation">{</span> workspaceId <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isLoading <span class="token operator">=</span> data <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> isLoading <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-components-resizable-tooltip-hint" tabindex="-1"><a class="header-anchor" href="#_2-components-resizable-tooltip-hint" aria-hidden="true">#</a> 2. Components: [resizable, tooltip, hint]</h2><ol><li><p>resizable</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/app/workspace/[workspaceId]/layout.tsx</span>
<span class="token string">&quot;use client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ResizableHandle<span class="token punctuation">,</span>
  ResizablePanel<span class="token punctuation">,</span>
  ResizablePanelGroup<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/components/ui/resizable&quot;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>

<span class="token keyword">const</span> <span class="token function-variable function">WorkspaceIdLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token operator">:</span> WorkspaceIdLayoutProps<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;h-full&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Toolbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;flex h-[calc(100vh-40px)]&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Sidebar <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ResizablePanelGroup
          direction<span class="token operator">=</span><span class="token string">&quot;horizontal&quot;</span>
          autoSaveId<span class="token operator">=</span><span class="token string">&quot;ca-workspace-layout&quot;</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ResizablePanel
            defaultSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span>
            minSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token string">&quot;bg-[#5E2C5F]&quot;</span>
          <span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>WorkspaceSidebar <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ResizablePanel<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ResizableHandle withHandle <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ResizablePanel minSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ResizablePanel<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ResizablePanelGroup<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> WorkspaceIdLayout<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>hint/tooltip</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token string">&quot;use client&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Tooltip<span class="token punctuation">,</span>
  TooltipContent<span class="token punctuation">,</span>
  TooltipProvider<span class="token punctuation">,</span>
  TooltipTrigger<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./ui/tooltip&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">HintProps</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  side<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;right&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;bottom&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">;</span>
  align<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;start&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;center&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;end&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Hint</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token punctuation">,</span> children<span class="token punctuation">,</span> side<span class="token punctuation">,</span> align <span class="token punctuation">}</span><span class="token operator">:</span> HintProps<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>TooltipProvider<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Tooltip delayDuration<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>TooltipTrigger asChild<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>TooltipTrigger<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>TooltipContent
          side<span class="token operator">=</span><span class="token punctuation">{</span>side<span class="token punctuation">}</span>
          align<span class="token operator">=</span><span class="token punctuation">{</span>align<span class="token punctuation">}</span>
          className<span class="token operator">=</span><span class="token string">&quot;bg-black text-white border border-white/5&quot;</span>
        <span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;font-medium text-xs&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>TooltipContent<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Tooltip<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>TooltipProvider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// src/app/workspace/[workspaceId]/workspace-header.tsx</span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span>Hint label<span class="token operator">=</span><span class="token string">&quot;New message&quot;</span> side<span class="token operator">=</span><span class="token string">&quot;bottom&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">&quot;transparent&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;iconSm&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>SquarePen className<span class="token operator">=</span><span class="token string">&quot;size-4&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Hint<span class="token operator">&gt;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","10_workspace_header.html.vue"]]);export{u as default};
