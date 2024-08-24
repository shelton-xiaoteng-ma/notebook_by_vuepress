import{_ as t,Y as o,Z as i,a0 as s,a1 as n,a2 as e,a4 as p,E as l}from"./framework-957baa9a.js";const c={},r=s("h1",{id:"vitepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vitepress","aria-hidden":"true"},"#"),n(" Vitepress")],-1),d=p(`<li><p>启动项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> shelton_vitepress <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable">$_</span>&quot;</span>
<span class="token function">pnpm</span> vitepress init

<span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置文档目录</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 所有文档集中在/docs目录下</span>
<span class="token comment">// config.mts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
    description<span class="token operator">:</span> <span class="token string">&quot;A VitePress Site&quot;</span><span class="token punctuation">,</span>
    srcDir<span class="token operator">:</span> <span class="token string">&quot;./docs/&quot;</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>图片位置<code>./docs/public</code></p></li><li><p>sidebar 和 nav</p></li><li><p>站内搜索</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        sidebar<span class="token punctuation">,</span>
        search<span class="token operator">:</span> <span class="token punctuation">{</span>
            provider<span class="token operator">:</span> <span class="token string">&#39;local&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,5),u={href:"https://github.com/shelton-xiaoteng-ma/shelton_vitepress/blob/main/.github/workflows/deploy-docs.yml",target:"_blank",rel:"noopener noreferrer"},v={href:"https://cpina.github.io/push-to-another-repository-docs/setup-using-ssh-deploy-keys.html#setup-ssh-deploy-keys",target:"_blank",rel:"noopener noreferrer"};function k(m,b){const a=l("ExternalLinkIcon");return o(),i("div",null,[r,s("ol",null,[d,s("li",null,[s("p",null,[n("部署github"),s("a",u,[n(".github/workflows/deploy-docs.yml"),e(a)])]),s("ul",null,[s("li",null,[n("参考: "),s("a",v,[n("push-to-another-repository-docs"),e(a)])])])])])])}const g=t(c,[["render",k],["__file","2024-08-24.html.vue"]]);export{g as default};
