import{_ as p,Y as o,Z as c,a0 as n,a1 as s,a2 as e,a4 as t,E as i}from"./framework-957baa9a.js";const l={},u=n("h1",{id:"_17-messages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_17-messages","aria-hidden":"true"},"#"),s(" 17 Messages")],-1),r=n("h2",{id:"_1-messages-get-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-messages-get-api","aria-hidden":"true"},"#"),s(" 1. messages get api")],-1),d={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/8b6a5e157a42b94eef29105e322ec874c4ea2589",target:"_blank",rel:"noopener noreferrer"},k=t(`<ol><li><p>convex api</p><ol><li><p>paginationOptsValidator</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// convex/messages.ts</span>
<span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>db
<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;messages&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">withIndex</span><span class="token punctuation">(</span><span class="token string">&quot;by_channel_id_parent_message_id_conversation_id&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>q<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  q
    <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;channelId&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>channelId<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;parentMessageId&quot;</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span>parentMessageId<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;conversationId&quot;</span><span class="token punctuation">,</span> _conversationId<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token string">&quot;desc&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">paginate</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>paginationOpts<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>populate data</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>results<span class="token punctuation">,</span>
  page<span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
      results<span class="token punctuation">.</span>page<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>usePaginatedQuery</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/features/messages/api/use-get-messages.ts</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> results<span class="token punctuation">,</span> status<span class="token punctuation">,</span> loadMore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePaginatedQuery</span><span class="token punctuation">(</span>
  api<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>get<span class="token punctuation">,</span>
  <span class="token punctuation">{</span> channelId<span class="token punctuation">,</span> conversationId<span class="token punctuation">,</span> parentMessageId <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> initialNumItems<span class="token operator">:</span> <span class="token constant">BATCH_SIZE</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-messagelist-component" tabindex="-1"><a class="header-anchor" href="#_2-messagelist-component" aria-hidden="true">#</a> 2. MessageList component</h2>`,2),m={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/653c5250fae5d0ec025a61102430de43db30129c",target:"_blank",rel:"noopener noreferrer"},v=t(`<ol start="0"><li><p>install packages</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> date-fns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>Thumbnail: src/components/thumbnail.tsx</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 通过max-w-[360px]限制尺寸</span>
<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-zoom-in&quot;</span><span class="token operator">&gt;</span>

<span class="token comment">// 放大后透明无边框</span>
className<span class="token operator">=</span><span class="token string">&quot;max-w-[800px] border-none bg-transparent p-0 shadow-none&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Renderer: src/components/renderer.tsx</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>quill<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> contents <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
quill<span class="token punctuation">.</span><span class="token function">setContents</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isEmpty <span class="token operator">=</span>
  quill
    <span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(.|\\n)*?&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">setIsEmpty</span><span class="token punctuation">(</span>isEmpty<span class="token punctuation">)</span><span class="token punctuation">;</span>
container<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> quill<span class="token punctuation">.</span>root<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Message: src/components/message.tsx</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">formatFullTime</span> <span class="token operator">=</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">isToday</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;Today&quot;</span> <span class="token operator">:</span> <span class="token function">isYesterday</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;Yesterday&quot;</span> <span class="token operator">:</span> <span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token string">&quot;MMM d, yyyy&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token string">&quot;hh:mm&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// groupedMessages</span>

<span class="token comment">// compact message</span>
<span class="token keyword">const</span> previousMessage <span class="token operator">=</span> messages<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> isCompact <span class="token operator">=</span>
  previousMessage <span class="token operator">&amp;&amp;</span>
  previousMessage<span class="token punctuation">.</span>user<span class="token punctuation">.</span>_id <span class="token operator">===</span> message<span class="token punctuation">.</span>user<span class="token punctuation">.</span>_id <span class="token operator">&amp;&amp;</span>
  <span class="token function">differenceInMinutes</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>_creationTime<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>previousMessage<span class="token punctuation">.</span>_creationTime<span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token constant">TIME_THRESHOLD</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_3-channelhero" tabindex="-1"><a class="header-anchor" href="#_3-channelhero" aria-hidden="true">#</a> 3. ChannelHero</h2>`,2),g={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/8640ce7d2811b6a45642cf3e03281738f1f190e1",target:"_blank",rel:"noopener noreferrer"},b=t(`<ol><li><p><code>ChannelHero: src/components/channel-hero.tsx</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;mt-[88px] mx-5 mb-4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;text-2xl font-bold flex items-center mb-2&quot;</span><span class="token operator">&gt;</span># <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;font-normal text-slate-800 mb-4&quot;</span><span class="token operator">&gt;</span>
      This channel was created on<span class="token punctuation">{</span><span class="token string">&quot; &quot;</span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>creationTime<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;MMMM do, yyyy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">.</span> This <span class="token keyword">is</span> the very
      beginning <span class="token keyword">of</span> the <span class="token operator">&lt;</span>strong<span class="token operator">&gt;</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span> channel<span class="token punctuation">.</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-message-toolbar" tabindex="-1"><a class="header-anchor" href="#_4-message-toolbar" aria-hidden="true">#</a> 4. Message toolbar</h2><p>问题: 添加reaction时弹出Popover, 选择emoji表情时, 会移动到另一个Message内, 此时当前Message会变透明, e emoji也会看不到?</p><blockquote><p><code>src/components/emoji-popover.tsx</code>通过修改PopoverContent的z-index, 使弹出的Pick位于最高层<code>&lt;PopoverContent className=&quot;p-0 w-full border-none shadow-none z-10&quot;&gt;</code>, group-hover也就继续生效, 保持不透明</p></blockquote><h2 id="_5-edit-delete-message-feature" tabindex="-1"><a class="header-anchor" href="#_5-edit-delete-message-feature" aria-hidden="true">#</a> 5. Edit &amp; delete message feature</h2>`,5),h={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/5e511206c45a2aae06cb34261113805faeb7aab6",target:"_blank",rel:"noopener noreferrer"},f=t(`<ol><li><p>message api <code>convex/messages.ts</code></p></li><li><p>编辑和删除效果</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">cn</span><span class="token punctuation">(</span>
  <span class="token string">&quot;flex flex-col gap-2 p-1.5 px-5 hover:bg-gray-100/60 group relative&quot;</span><span class="token punctuation">,</span>
  isEditing <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;bg-[#f2c74433] hover:bg-[#f2c74433]&quot;</span><span class="token punctuation">,</span>
  isRemovingMessage <span class="token operator">&amp;&amp;</span>
    <span class="token string">&quot;bg-rose-500/50 transform transition-all scale-y-0 origin-bottom duration-200&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>...</p>`,2);function _(x,y){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[s("github提交记录: "),n("a",d,[s("get messages"),e(a)])]),k,n("p",null,[s("github提交记录: "),n("a",m,[s("message list"),e(a)])]),v,n("p",null,[s("github提交记录: "),n("a",g,[s("ChannelHero"),e(a)])]),b,n("p",null,[s("github提交记录: "),n("a",h,[s("Edit & delete message feature"),e(a)])]),f])}const w=p(l,[["render",_],["__file","17_messages.html.vue"]]);export{w as default};