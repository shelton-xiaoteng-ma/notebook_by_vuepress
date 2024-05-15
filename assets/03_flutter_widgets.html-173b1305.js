import{_ as l,Y as i,Z as p,a0 as n,a1 as s,a2 as t,a4 as e,E as o}from"./framework-957baa9a.js";const c={},u=n("h1",{id:"_03-flutter-widgets",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_03-flutter-widgets","aria-hidden":"true"},"#"),s(" 03 flutter widgets")],-1),r={href:"https://www.materialpalette.com/",target:"_blank",rel:"noopener noreferrer"},d=e('<ul><li>Hot reload/Hot restart</li><li>stateless/stateful widget</li><li>Container</li><li>SafeArea</li><li>Column &amp; Row widget</li><li>CircleAvatar</li><li>ListTile</li><li>Card</li><li>Divider</li><li>Icon</li><li>Font</li></ul><h2 id="_1-hot-reload-and-hot-restart" tabindex="-1"><a class="header-anchor" href="#_1-hot-reload-and-hot-restart" aria-hidden="true">#</a> 1. Hot reload and Hot restart</h2><h2 id="_2-container-widgets" tabindex="-1"><a class="header-anchor" href="#_2-container-widgets" aria-hidden="true">#</a> 2. container widgets</h2>',3),k={href:"https://docs.flutter.dev/ui/widgets",target:"_blank",rel:"noopener noreferrer"},v=e(`<ul><li><p>Container</p></li><li><p>SafeArea</p></li><li><p>Column &amp; Row widget</p></li><li><p>Expanded</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>body<span class="token punctuation">:</span> <span class="token class-name">SafeArea</span><span class="token punctuation">(</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
    color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Row</span><span class="token punctuation">(</span>
      <span class="token comment">// crossAxisAlignment: CrossAxisAlignment.end,</span>
      mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
      children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">Container</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span>
          width<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Expanded</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
              mainAxisAlignment<span class="token punctuation">:</span> <span class="token class-name">MainAxisAlignment</span><span class="token punctuation">.</span>center<span class="token punctuation">,</span>
              children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token class-name">Container</span><span class="token punctuation">(</span>
                  width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                  height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                  color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>yellow<span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token class-name">Container</span><span class="token punctuation">(</span>
                  width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                  height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                  color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">Container</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>blue<span class="token punctuation">,</span>
          width<span class="token punctuation">:</span> <span class="token number">100.0</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-custom-fonts" tabindex="-1"><a class="header-anchor" href="#_3-custom-fonts" aria-hidden="true">#</a> 3. Custom Fonts</h2>`,2),m={href:"https://fonts.google.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://pub.dev/packages/google_fonts",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flutter pub <span class="token function">add</span> google_fonts

<span class="token function">import</span> <span class="token string">&#39;package:google_fonts/google_fonts.dart&#39;</span><span class="token punctuation">;</span>

Text<span class="token punctuation">(</span>
  <span class="token string">&#39;Flutter Developer&#39;</span>.toUpperCase<span class="token punctuation">(</span><span class="token punctuation">)</span>,
  style: TextStyle<span class="token punctuation">(</span>
    fontSize: <span class="token number">20</span>,
    color: Colors.white,
    fontFamily: <span class="token string">&#39;Source Sans 3&#39;</span>,
  <span class="token punctuation">)</span>,
<span class="token punctuation">)</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={href:"https://docs.flutter.dev/cookbook/design/fonts#from-packages",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"_4-icon-widget",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-icon-widget","aria-hidden":"true"},"#"),s(" 4. Icon Widget")],-1),f={href:"https://api.flutter.dev/flutter/widgets/Icon-class.html",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Icon</span><span class="token punctuation">(</span>
  <span class="token class-name">Icons</span><span class="token punctuation">.</span>email<span class="token punctuation">,</span>
  color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=n("h2",{id:"_5-flutter-card-and-listtile",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-flutter-card-and-listtile","aria-hidden":"true"},"#"),s(" 5. Flutter Card and Listtile")],-1),C={href:"https://api.flutter.dev/flutter/material/Card-class.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://api.flutter.dev/flutter/material/ListTile-class.html",target:"_blank",rel:"noopener noreferrer"},I=e(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">Card</span><span class="token punctuation">(</span>
    margin<span class="token punctuation">:</span> <span class="token class-name">EdgeInsets</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
      leading<span class="token punctuation">:</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span>
        <span class="token class-name">Icons</span><span class="token punctuation">.</span>email<span class="token punctuation">,</span>
        color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
        <span class="token string-literal"><span class="token string">&#39;xxx@gmail.com&#39;</span></span><span class="token punctuation">,</span>
        style<span class="token punctuation">:</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>
          color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>teal<span class="token punctuation">.</span>shade800<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function S(T,y){const a=o("ExternalLinkIcon");return i(),p("div",null,[u,n("p",null,[n("a",r,[s("https://www.materialpalette.com/"),t(a)])]),d,n("p",null,[n("a",k,[s("Widget catalog Docs"),t(a)])]),v,n("ul",null,[n("li",null,[n("p",null,[n("a",m,[s("fonts.google.com"),t(a)])])]),n("li",null,[n("p",null,[n("a",b,[s("google_fonts"),t(a)])]),h]),n("li",null,[n("p",null,[n("a",g,[s("Use a custom font"),t(a)])])])]),_,n("ul",null,[n("li",null,[n("p",null,[n("a",f,[s("Icon Widget Class"),t(a)])]),w])]),x,n("ul",null,[n("li",null,[n("p",null,[n("a",C,[s("Card class"),t(a)])])]),n("li",null,[n("p",null,[n("a",A,[s("ListTile class"),t(a)])]),I])])])}const L=l(c,[["render",S],["__file","03_flutter_widgets.html.vue"]]);export{L as default};
