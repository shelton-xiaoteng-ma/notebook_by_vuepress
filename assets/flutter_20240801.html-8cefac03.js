import{_ as e,Y as n,Z as a,a4 as s}from"./framework-957baa9a.js";const i={},l=s(`<h1 id="_0-flutter开发日记-setup" tabindex="-1"><a class="header-anchor" href="#_0-flutter开发日记-setup" aria-hidden="true">#</a> 0 Flutter开发日记 | Setup</h1><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2><ol><li><p>flutter</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Flutter <span class="token number">3.22</span>.3
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),d=[l];function t(r,c){return n(),a("div",null,d)}const u=e(i,[["render",t],["__file","flutter_20240801.html.vue"]]);export{u as default};
