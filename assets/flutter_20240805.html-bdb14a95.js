import{_ as s,Y as a,Z as e,$ as t,a0 as n,a1 as c,a4 as p}from"./framework-957baa9a.js";const l={},o=n("h1",{id:"day4-flutter开发日记-首页布局2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#day4-flutter开发日记-首页布局2","aria-hidden":"true"},"#"),c(" Day4 Flutter开发日记 | 首页布局2")],-1),i=n("p",null,"结束bottomNavigationBar之后, 实现首页的按钮",-1),u=p(`<ol><li><p>由于抖音播放视频是全屏, 所以不能使用appBar, 设置/推荐/搜索全部使用<code>Positioned</code></p></li><li><p>drawer的开启关闭</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 1</span>
<span class="token keyword">final</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ScaffoldState</span><span class="token punctuation">&gt;</span></span> _scaffoldKey <span class="token operator">=</span> <span class="token class-name">GlobalKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ScaffoldState</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
  <span class="token comment">// 2</span>
  key<span class="token punctuation">:</span> _scaffoldKey<span class="token punctuation">,</span>

  onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3</span>
    _scaffoldKey<span class="token punctuation">.</span>currentState<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>ListView</code>的设置</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">ListView</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
  <span class="token comment">// 从右往左排列</span>
  reverse<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//水平滑动</span>
  scrollDirection<span class="token punctuation">:</span> <span class="token class-name">Axis</span><span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function d(r,k){return a(),e("div",null,[o,i,t(" more "),u])}const v=s(l,[["render",d],["__file","flutter_20240805.html.vue"]]);export{v as default};
