import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const p="/images/flutter_01.png",c={},e=t(`<h1 id="_2-flutter开发日记-首页布局" tabindex="-1"><a class="header-anchor" href="#_2-flutter开发日记-首页布局" aria-hidden="true">#</a> 2 Flutter开发日记 | 首页布局</h1><ol><li><p><code>BottomNavigationBar</code> 导航栏</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      bottomNavigationBar<span class="token punctuation">:</span> <span class="token class-name">BottomNavigationBar</span><span class="token punctuation">(</span>
        onTap<span class="token punctuation">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            idx <span class="token operator">=</span> value<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 超过3个以上需要设置</span>
        type<span class="token punctuation">:</span> <span class="token class-name">BottomNavigationBarType</span><span class="token punctuation">.</span>fixed<span class="token punctuation">,</span>
        mouseCursor<span class="token punctuation">:</span> <span class="token class-name">MouseCursor</span><span class="token punctuation">.</span>defer<span class="token punctuation">,</span>
        currentIndex<span class="token punctuation">:</span> idx<span class="token punctuation">,</span>
        items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
            <span class="token comment">// icon: Icon(Icons.home),</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">.</span><span class="token function">shrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;首页&#39;</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
            <span class="token comment">// icon: Icon(Icons.people),</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">.</span><span class="token function">shrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;朋友&#39;</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
            <span class="token comment">// icon: Icon(Icons.add),</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">CustomPlusIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;&#39;</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
            <span class="token comment">// icon: Icon(Icons.sms),</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">.</span><span class="token function">shrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;消息&#39;</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">BottomNavigationBarItem</span><span class="token punctuation">(</span>
            <span class="token comment">// icon: Icon(Icons.account_circle),</span>
            icon<span class="token punctuation">:</span> <span class="token class-name">SizedBox</span><span class="token punctuation">.</span><span class="token function">shrink</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;我&#39;</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token punctuation">:</span> pages<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义抖音发布按钮 <img src="`+p+`" alt="flutter"></p></li></ol><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token keyword">return</span> <span class="token class-name">SizedBox</span><span class="token punctuation">(</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
      width<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      height<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
      decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
        color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>black<span class="token punctuation">,</span>
        borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Padding</span><span class="token punctuation">(</span>
        padding<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
          decoration<span class="token punctuation">:</span> <span class="token class-name">BoxDecoration</span><span class="token punctuation">(</span>
            color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span>
            borderRadius<span class="token punctuation">:</span> <span class="token class-name">BorderRadius</span><span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span>
            <span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">,</span>
            size<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>black<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function i(l,u){return s(),a("div",null,o)}const d=n(c,[["render",i],["__file","flutter_2024080201.html.vue"]]);export{d as default};
