import{_ as o,Y as t,Z as l,a0 as e,a1 as a,a2 as i,a4 as s,E as r}from"./framework-957baa9a.js";const d={},c=e("h1",{id:"_02-create-flutter-project-from-scratch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_02-create-flutter-project-from-scratch","aria-hidden":"true"},"#"),a(" 02 Create Flutter Project from Scratch")],-1),p=e("p",null,"company domin: sheltonma.top",-1),h=e("h2",{id:"widget",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#widget","aria-hidden":"true"},"#"),a(" Widget")],-1),u={href:"https://api.flutter.dev/flutter/material/Scaffold-class.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>demo</p><pre><code>\`\`\`dart
// lib/main.dart
import &#39;package:flutter/material.dart&#39;;

// This main function is the starting point for all flutter apps.
void main() {
runApp(
  MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text(
          &#39;I am rich&#39;,
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.blue[900],
      ),
      body: Center(
        child: Image(
          image: AssetImage(&#39;images/diamond.png&#39;),
        ),
      ),
      backgroundColor: Colors.blueGrey[900],
    ),
  ),
);
}
\`\`\`
</code></pre><h2 id="_1-work-with-assets" tabindex="-1"><a class="header-anchor" href="#_1-work-with-assets" aria-hidden="true">#</a> 1. work with Assets</h2><ol><li><p>create directory as images.</p></li><li><p>add png in images</p></li><li><p>config pubspec.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># in pubspec.yaml</span>
<span class="token key atrule">assets</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> images/diamond.png
    <span class="token punctuation">-</span> images/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>use images in fultter</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>child<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">(</span>
    image<span class="token punctuation">:</span> <span class="token class-name">AssetImage</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;images/diamond.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-add-app-icon" tabindex="-1"><a class="header-anchor" href="#_2-add-app-icon" aria-hidden="true">#</a> 2. Add app icon</h2>`,5),_={href:"https://www.appicon.co/",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"for-android",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#for-android","aria-hidden":"true"},"#"),a(" For Android")],-1),g=e("li",null,[a("mipmap path: "),e("code",null,"~/StudioProjects/i_am_rich/android/app/src/main")],-1),b=e("li",null,"copy all mipmap directories to mipmap path.",-1),v={href:"https://github.com/flutter/flutter-intellij/issues/7103",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[e("code",null,"android/app/src/main/res"),a(" > right click > new > image asset")],-1),y=e("li",null,"past your png to asset path",-1),x=e("li",null,"adjust and save",-1),w=s('<h3 id="for-ios" tabindex="-1"><a class="header-anchor" href="#for-ios" aria-hidden="true">#</a> For IOS</h3><p>exchange <code>~/StudioProjects/i_am_rich/ios/Runner/Assets.xcassets</code></p><h2 id="_3-deploy-app-on-physical-device" tabindex="-1"><a class="header-anchor" href="#_3-deploy-app-on-physical-device" aria-hidden="true">#</a> 3. Deploy app on physical device</h2><h3 id="deploy-on-android-phone" tabindex="-1"><a class="header-anchor" href="#deploy-on-android-phone" aria-hidden="true">#</a> Deploy on Android phone</h3><ol><li>open developer options</li><li>enable USB debugging</li><li>enable Install via USB</li></ol><h3 id="deploy-on-iphone" tabindex="-1"><a class="header-anchor" href="#deploy-on-iphone" aria-hidden="true">#</a> Deploy on iPhone</h3>',6),S={href:"https://docs.flutter.dev/get-started/install/macos/mobile-ios?tab=physical#configure-your-target-ios-device",target:"_blank",rel:"noopener noreferrer"};function A(I,C){const n=r("ExternalLinkIcon");return t(),l("div",null,[c,p,h,e("p",null,[a("Scaffold: "),e("a",u,[a("Scaffold-class"),i(n)])]),m,e("ul",null,[e("li",null,[e("a",_,[a("appicon.co"),i(n)]),a(" generate icon")])]),f,e("ol",null,[g,b,e("li",null,[a("adjust icon "),e("ul",null,[e("li",null,[a("android > right click > flutter > open android module in Android Studio "),e("ul",null,[e("li",null,[a("or open android fold in new window, "),e("a",v,[a('Flutter: unable to "Open Android Module in Android Studio"'),i(n)])])])]),k,y,x])])]),w,e("p",null,[e("a",S,[a("Configure your target iOS device"),i(n)])])])}const B=o(d,[["render",A],["__file","02Iamrich.html.vue"]]);export{B as default};
