import{_ as s,Y as n,Z as a,a4 as t}from"./framework-957baa9a.js";const e={},o=t(`<h1 id="_02-shadcn" tabindex="-1"><a class="header-anchor" href="#_02-shadcn" aria-hidden="true">#</a> 02 shadcn</h1><h2 id="_1-shadcn-basic" tabindex="-1"><a class="header-anchor" href="#_1-shadcn-basic" aria-hidden="true">#</a> 1 shadcn basic</h2><ol start="0"><li><p>vscode安装插件</p><ul><li><code>Tailwind CSS IntelliSense</code></li><li><code>Simple React Snippets</code></li><li><code>Error Lens</code></li><li><code>Color Highlight</code></li></ul></li><li><p>init</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx shadcn@latest init
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-更多组件" tabindex="-1"><a class="header-anchor" href="#_2-更多组件" aria-hidden="true">#</a> 2 更多组件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dlx shadcn@latest <span class="token function">add</span> card input separator
<span class="token function">pnpm</span> <span class="token function">add</span> react-icons
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-其他问题" tabindex="-1"><a class="header-anchor" href="#_3-其他问题" aria-hidden="true">#</a> 3 其他问题</h2><ol><li><p>部分效果未生效, 在 tailwind.config.js 中，确保正确配置了 content 选项。Next.js 使用 .jsx 和 .tsx 文件，所以 content 配置应该包括这些文件路径，以便 Tailwind 能扫描它们的类名。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// /slack/tailwind.config.ts</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tailwindcss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span> Config <span class="token operator">=</span> <span class="token punctuation">{</span>
    darkMode<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/pages/**/*.{js,ts,jsx,tsx,mdx}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/components/**/*.{js,ts,jsx,tsx,mdx}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/app/**/*.{js,ts,jsx,tsx,mdx}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/features/**/*.{js,ts,jsx,tsx,mdx}&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-tailwind-css-速览" tabindex="-1"><a class="header-anchor" href="#_4-tailwind-css-速览" aria-hidden="true">#</a> 4 Tailwind CSS 速览</h2><ol><li><p>常用</p><table><thead><tr><th style="text-align:left;">功能</th><th style="text-align:left;">类名示例</th></tr></thead><tbody><tr><td style="text-align:left;">背景颜色</td><td style="text-align:left;">bg-red-500</td></tr><tr><td style="text-align:left;">文本颜色</td><td style="text-align:left;">text-blue-700</td></tr><tr><td style="text-align:left;">外边距</td><td style="text-align:left;">m-4、mt-2</td></tr><tr><td style="text-align:left;">内边距</td><td style="text-align:left;">p-4、px-2</td></tr><tr><td style="text-align:left;">对齐方式</td><td style="text-align:left;">text-center、flex justify-end</td></tr><tr><td style="text-align:left;">字体粗细</td><td style="text-align:left;">font-bold、font-light</td></tr><tr><td style="text-align:left;">阴影效果</td><td style="text-align:left;">shadow-lg</td></tr><tr><td style="text-align:left;">宽度</td><td style="text-align:left;">w-1/2, w-full</td></tr><tr><td style="text-align:left;">显示隐藏</td><td style="text-align:left;">block、hidden</td></tr></tbody></table><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;bg-blue-500 text-white&quot;</span><span class="token operator">&gt;</span>蓝色背景，白色文本<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-red-500&quot;</span><span class="token operator">&gt;</span>红色文本<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">// 尺寸 (Spacing)</span>
<span class="token comment">// Margin: m-{size}</span>
<span class="token comment">// Padding: p-{size}</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;m-4 p-2&quot;</span><span class="token operator">&gt;</span>边距和内边距<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mt-2 mb-4 ml-6 mr-8&quot;</span><span class="token operator">&gt;</span>单独设置边距<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// 布局 (Layout)</span>
<span class="token comment">// Flexbox:</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;flex justify-center items-center&quot;</span><span class="token operator">&gt;</span>居中对齐<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">// Grid:</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;grid grid-cols-3 gap-4&quot;</span><span class="token operator">&gt;</span>三列布局<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// 边框 (Borders)</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;border border-gray-300 rounded-lg&quot;</span><span class="token operator">&gt;</span>带边框的元素<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// 圆角 (Border Radius)</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;rounded-full&quot;</span><span class="token operator">&gt;</span>圆形元素<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;rounded-lg&quot;</span><span class="token operator">&gt;</span>大圆角<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// 字体 (Typography)</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-xl font-bold&quot;</span><span class="token operator">&gt;</span>加粗大字体<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-center&quot;</span><span class="token operator">&gt;</span>居中文本<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// 阴影 (Shadows)</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;shadow-md&quot;</span><span class="token operator">&gt;</span>中等阴影<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>响应式设计 使用前缀指定断点<code>&lt;div class=&quot;text-sm md:text-lg&quot;&gt;小屏幕小字体，大屏幕大字体&lt;/div&gt;</code>：</p><ul><li>sm: (最小宽度 640px)</li><li>md: (最小宽度 768px)</li><li>lg: (最小宽度 1024px)</li><li>xl: (最小宽度 1280px)</li></ul></li><li><p>伪类</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;hover:bg-blue-600&quot;</span><span class="token operator">&gt;</span>悬停时改变背景色<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>input <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;focus:ring-2 focus:ring-blue-500&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// tailwind.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token punctuation">{</span>
    extend<span class="token operator">:</span> <span class="token punctuation">{</span>
      colors<span class="token operator">:</span> <span class="token punctuation">{</span>
        customColor<span class="token operator">:</span> <span class="token string">&#39;#ff5733&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9),p=[o];function l(i,r){return n(),a("div",null,p)}const d=s(e,[["render",l],["__file","02_shadcn.html.vue"]]);export{d as default};
