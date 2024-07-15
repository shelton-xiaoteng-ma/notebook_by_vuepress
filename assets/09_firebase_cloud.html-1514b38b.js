import{_ as p,Y as o,Z as c,a0 as n,a1 as s,a2 as t,a4 as e,E as i}from"./framework-957baa9a.js";const l={},u=n("h1",{id:"_09-flutter-x-firebase-cloud-firestore",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_09-flutter-x-firebase-cloud-firestore","aria-hidden":"true"},"#"),s(" 09 Flutter x Firebase cloud firestore")],-1),r={href:"https://stackoverflow.com/questions/70919127/your-project-requires-a-newer-version-of-the-kotlin-gradle-plugin-android-stud",target:"_blank",rel:"noopener noreferrer"},d=e(`<h2 id="_1-flutter-route" tabindex="-1"><a class="header-anchor" href="#_1-flutter-route" aria-hidden="true">#</a> 1. Flutter route</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>···
<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token class-name">String</span> routeName <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;welcomeScreen&#39;</span></span><span class="token punctuation">;</span>
···

···
initialRoute<span class="token punctuation">:</span> <span class="token class-name">WelcomeScreen</span><span class="token punctuation">.</span>routeName<span class="token punctuation">,</span>
routes<span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token class-name">WelcomeScreen</span><span class="token punctuation">.</span>routeName<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">WelcomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token class-name">LoginScreen</span><span class="token punctuation">.</span>routeName<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">LoginScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token class-name">RegistrationScreen</span><span class="token punctuation">.</span>routeName<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">RegistrationScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token class-name">ChatScreen</span><span class="token punctuation">.</span>routeName<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">ChatScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
···
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-animations" tabindex="-1"><a class="header-anchor" href="#_2-animations" aria-hidden="true">#</a> 2. Animations</h2><ol><li><p>hero</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>  <span class="token class-name">Hero</span><span class="token punctuation">(</span>
    tag<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;logo&#39;</span></span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token class-name">Container</span><span class="token punctuation">(</span>
      height<span class="token punctuation">:</span> <span class="token number">200.0</span><span class="token punctuation">,</span>
      child<span class="token punctuation">:</span> <span class="token class-name">Image</span><span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;images/logo.png&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Animation and controller</p><ul><li><p>curve</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> _WelcomeScreenState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">WelcomeScreen</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span> <span class="token punctuation">{</span>
  late <span class="token class-name">AnimationController</span> controller<span class="token punctuation">;</span>
  late <span class="token class-name">Animation</span> animation<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    controller <span class="token operator">=</span> <span class="token class-name">AnimationController</span><span class="token punctuation">(</span>
      duration<span class="token punctuation">:</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>
        seconds<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      vsync<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    animation <span class="token operator">=</span> <span class="token class-name">CurvedAnimation</span><span class="token punctuation">(</span>parent<span class="token punctuation">:</span> controller<span class="token punctuation">,</span> curve<span class="token punctuation">:</span> <span class="token class-name">Curves</span><span class="token punctuation">.</span>decelerate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    controller<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    controller<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">print</span><span class="token punctuation">(</span>controller<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    controller<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
···
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tween</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> _WelcomeScreenState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">WelcomeScreen</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">with</span> <span class="token class-name">SingleTickerProviderStateMixin</span> <span class="token punctuation">{</span>
  late <span class="token class-name">AnimationController</span> controller<span class="token punctuation">;</span>
  late <span class="token class-name">Animation</span> animation<span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    controller <span class="token operator">=</span> <span class="token class-name">AnimationController</span><span class="token punctuation">(</span>
      duration<span class="token punctuation">:</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>
        seconds<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
      vsync<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// animation = CurvedAnimation(parent: controller, curve: Curves.decelerate);</span>
    animation <span class="token operator">=</span>
        <span class="token class-name">ColorTween</span><span class="token punctuation">(</span>begin<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">,</span> end<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>
    controller<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    controller<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">print</span><span class="token punctuation">(</span>animation<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
···
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="_3-dart" tabindex="-1"><a class="header-anchor" href="#_3-dart" aria-hidden="true">#</a> 3. dart</h2><ol><li><p>Mixins</p><blockquote><p>Mixins are a way of defining code that can be reused in multiple class hierarchies. They are intended to provide member implementations en masse.</p></blockquote></li></ol><h2 id="_4-firebase" tabindex="-1"><a class="header-anchor" href="#_4-firebase" aria-hidden="true">#</a> 4. Firebase</h2>`,7),k={start:"0"},v={href:"https://firebase.google.com/docs/flutter/setup?platform=android",target:"_blank",rel:"noopener noreferrer"},m={href:"https://stackoverflow.com/questions/70486658/no-firebase-app-has-been-created-call-firebase-initializeapp",target:"_blank",rel:"noopener noreferrer"},b=e(`<div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token class-name">WidgetsFlutterBinding</span><span class="token punctuation">.</span><span class="token function">ensureInitialized</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token class-name">Firebase</span><span class="token punctuation">.</span><span class="token function">initializeApp</span><span class="token punctuation">(</span>
    options<span class="token punctuation">:</span> <span class="token class-name">DefaultFirebaseOptions</span><span class="token punctuation">.</span>currentPlatform<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">runApp</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=n("li",null,[n("p",null,"Android Firebase Project Setup"),n("ul",null,[n("li",null,[s("applicationId: "),n("code",null,"android/app/build.gradle")])])],-1),f=n("li",null,[n("p",null,"iOS Firebase Project Setup"),n("ul",null,[n("li",null,[n("code",null,"/StudioProjects/flash_chat/ios/Podfile"),s(" change "),n("code",null,"platform :ios, '13.0'")])])],-1);function g(_,S){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("Your project requires a newer version of the Kotlin Gradle plugin. (Android Studio)"),t(a)])])]),d,n("ol",k,[n("li",null,[n("p",null,[n("a",v,[s("Add Firebase to your Flutter app"),t(a)])]),n("ul",null,[n("li",null,[n("p",null,[n("a",m,[s("call Firebase.initializeApp()"),t(a)])]),b])])]),h,f])])}const x=p(l,[["render",g],["__file","09_firebase_cloud.html.vue"]]);export{x as default};
