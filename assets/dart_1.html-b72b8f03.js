import{_ as n,Y as o,Z as d,a0 as e,a1 as a,a2 as r,a4 as l,E as i}from"./framework-957baa9a.js";const s={},c=e("h1",{id:"浅尝dart",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#浅尝dart","aria-hidden":"true"},"#"),a(" 浅尝dart")],-1),h=e("p",null,"为什么学习dart?",-1),u=e("p",null,"编程语言风格迥异, 尝试这些语言, 可以改善自己的思考能力, 也会在解决问题时提供更多的方案",-1),_=e("p",null,"学习方式",-1),f={href:"https://dart.dev/language",target:"_blank",rel:"noopener noreferrer"},p={href:"https://dart.dev/guides/libraries/library-tour",target:"_blank",rel:"noopener noreferrer"},b={href:"https://dart.dev/codelabs/dart-cheatsheet",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="学习" tabindex="-1"><a class="header-anchor" href="#学习" aria-hidden="true">#</a> 学习</h2><h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main()</h3><pre><code>\`\`\`dart
// hello world
void main() {
    print(&#39;Hello, World!&#39;);
}
\`\`\`
</code></pre><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>dart作为类型安全语言, 通过静态和运行时检查确保类型不变, 声明变量时可以不指明类型, 可以推断出类型</p><pre><code>\`\`\`dart
var name = &#39;Voyager I&#39;;
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = [&#39;Jupiter&#39;, &#39;Saturn&#39;, &#39;Uranus&#39;, &#39;Neptune&#39;];
var image = {
    &#39;tags&#39;: [&#39;saturn&#39;],
    &#39;url&#39;: &#39;//path/to/saturn.jpg&#39;
};
\`\`\`
</code></pre><h3 id="null-safety" tabindex="-1"><a class="header-anchor" href="#null-safety" aria-hidden="true">#</a> Null safety</h3>`,7),v={href:"https://dart.dev/null-safety",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"var i = 42;",-1),y=e("code",null,"int? aNullableInt = null;",-1),x=l('<ul><li>Code should be safe by default.</li><li>Null safe code should be easy to write.</li><li>The resulting null safe code should be fully sound.</li></ul><h3 id="主要概念" tabindex="-1"><a class="header-anchor" href="#主要概念" aria-hidden="true">#</a> 主要概念</h3><ul><li>可放入变量的都是对象(object), 每个对象都是类的实例, numbers, functions, null都是实例</li><li>尽管dart是强类型, 但是类型注释是可选的, 因为dart推断类型</li><li>如果生效了null safety, 变量不应该表示为null, 如果想, 可以<code>int? i=null;</code>, 如果表达式永远不会是null, dart报错, 可以<code>int i = nullableButNotNullInt!;</code></li><li>如果想显式表示任何类型都可以, <code>Object?</code></li><li>支持泛型<code>generic type</code>, <code>List&lt;int&gt; or List&lt;Object&gt;</code></li><li>支持top-level functions(比如main()), 类方法和实例方法, 也包括匿名方法(nested or local functions)</li><li>op-level variables, 也包括类/对象变量(fields or properties)</li><li><code>_</code>开头的变量是库私有</li><li>变量名开头为<code>_</code>和字符, 之后可以包含<code>_</code>, 字符和数字</li><li>包含语句和表达式, 表达式里不能包含语句</li><li>包含errors, warnings</li></ul>',3);function N(k,I){const t=i("ExternalLinkIcon");return o(),d("div",null,[c,h,u,_,e("p",null,[a("先从官方文档"),e("a",f,[a("Introduction to Dart"),r(t)]),a("开始")]),e("p",null,[a("核心库学习: "),e("a",p,[a("library tour"),r(t)])]),e("p",null,[a("上手练习: "),e("a",b,[a("Dart cheatsheet codelab"),r(t)])]),m,e("p",null,[a("2.12之后引入"),e("a",v,[a("Null safety"),r(t)]),a(", 要求所有变量都不为空, "),g,a(", 如果显式表明变量可以为空, "),y]),x])}const V=n(s,[["render",N],["__file","dart_1.html.vue"]]);export{V as default};
