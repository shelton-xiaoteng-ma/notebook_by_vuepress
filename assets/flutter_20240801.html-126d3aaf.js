import{_ as s,Y as i,Z as l,a0 as e,a1 as n,a2 as d,a4 as r,E as t}from"./framework-957baa9a.js";const o={},c=r(`<h1 id="_0-flutter开发日记-setup" tabindex="-1"><a class="header-anchor" href="#_0-flutter开发日记-setup" aria-hidden="true">#</a> 0 Flutter开发日记 | Setup</h1><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><ol><li><p>flutter</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Flutter <span class="token number">3.22</span>.3
Dart <span class="token number">3.4</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>开发工具</p><ul><li>Android Studio <code>Android Studio Jellyfish | 2023.3.1</code></li><li>simulator: iPhone 15 Pro Max</li></ul></li></ol><h2 id="项目启动" tabindex="-1"><a class="header-anchor" href="#项目启动" aria-hidden="true">#</a> 项目启动</h2><ol><li><p>项目位置: <code>~/StudioProjects/douyin_clone</code></p></li><li><p>包: <code>top.sheltonma</code></p></li><li><p>debug banner</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>···
<span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
    debugShowCheckedModeBanner<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;Flutter Demo&#39;</span></span><span class="token punctuation">,</span>
···
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目录结构</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree lib/

├── controllers
├── main.dart
├── models
└── views
    ├── screens
    │   └── auth
    │       └── login_screen.dart
    └── widgets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h2>`,6),u={href:"https://blog.csdn.net/shaoxiukun/article/details/130972439",target:"_blank",rel:"noopener noreferrer"};function p(v,h){const a=t("ExternalLinkIcon");return i(),l("div",null,[c,e("ol",null,[e("li",null,[n("iPhone真机测试弹窗, "),e("a",u,[n("无法打开“iproxy”，因为无法验证开发者"),d(a)])])])])}const b=s(o,[["render",p],["__file","flutter_20240801.html.vue"]]);export{b as default};
