import{_ as a,Y as o,Z as i,a0 as e,a1 as n,a2 as s,a4 as r,E as l}from"./framework-957baa9a.js";const d={},c=e("h1",{id:"javascript-essentials",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#javascript-essentials","aria-hidden":"true"},"#"),n(" JavaScript Essentials")],-1),u=e("h2",{id:"linter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linter","aria-hidden":"true"},"#"),n(" linter")],-1),p={href:"https://github.com/xojs/xo",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"Avoid declaring global variables and functions.",-1),v=r(`<h2 id="data-types-and-variables" tabindex="-1"><a class="header-anchor" href="#data-types-and-variables" aria-hidden="true">#</a> Data Types and variables</h2><p>Declaration:</p><ul><li>var has a function-level scope</li><li>let was introduced in ES6 and provides block-level scoping</li><li>const was also introduced in ES6 and is used to declare constant values, and has block-level scoping</li></ul><p>Data types:</p><ul><li>primitive types: string, number(integer, float), boolean, Undefine, Null.</li><li>composite types: Array, Objects.</li></ul><h2 id="operators-and-expressions" tabindex="-1"><a class="header-anchor" href="#operators-and-expressions" aria-hidden="true">#</a> Operators and Expressions</h2><p>Operators:</p><ul><li>arithmetic operators: addition, subtraction, multiplication, division, modulus.</li><li>comparison operators: equality, inequality, strict equality, strict inequality, less than, greater than, less than or equal to, greater than or equal to.</li><li>logical operators: and, or , not</li><li>assignment operators: equal, plus equal</li><li>unary operators: increment, decrement</li><li>typeof operators: return Undefined, Object(objects, arrays, null), Boolean, Number, String</li></ul><h2 id="control-flow-and-conditional-statements" tabindex="-1"><a class="header-anchor" href="#control-flow-and-conditional-statements" aria-hidden="true">#</a> Control Flow and Conditional Statements</h2><p>Conditional Statements:</p><ul><li>if, else if, else, Nested if</li><li>switch: execute code based on the first matching case</li><li>ternary: a concise way to write conditional statements, <code>let canVote = age&gt;=18 ? &quot;True&quot; : &quot;No&quot;</code></li></ul><p>For:</p><ul><li>Make decisions</li><li>Execute actions</li><li>Provide personalized experience</li></ul><h2 id="looping-and-iteration" tabindex="-1"><a class="header-anchor" href="#looping-and-iteration" aria-hidden="true">#</a> Looping and Iteration</h2><p>Execute a block of code repeatedly, while, for, do while</p><h2 id="function-closure-and-function-hoisting" tabindex="-1"><a class="header-anchor" href="#function-closure-and-function-hoisting" aria-hidden="true">#</a> Function Closure and Function Hoisting</h2><p>Closure allow you to retain variable access, create private variables, implement data hiding, maintain state.</p><p>demo:</p><pre><code>\`\`\`js
//original function
function add(a, b){
    return a+b;
}

//ECMA format
const add = (a, b) =&gt; a+b;
\`\`\`
</code></pre><h2 id="events-in-javascript" tabindex="-1"><a class="header-anchor" href="#events-in-javascript" aria-hidden="true">#</a> Events in JavaScript</h2><p>Events: click, mouse over, keydown, and change, addEventListener demo</p><pre><code>\`\`\`js
// addEventListener
const button = document.getElementById(&#39;myButton&#39;);
button.addEventListener(&#39;click&#39;, handleButtonClick);

//Mouse events
document.getElementById(&#39;clickButton&#39;).addEventListener(&#39;click&#39;, function() {
    alert(&#39;Button clicked!&#39;);
});

moveArea.addEventListener(&#39;mousemove&#39;, function(event) {
    console.log(\`Mouse coordinates - X: \${event.clientX}, Y: \${event.clientY}\`);
});

//Keyboard events
keyInput.addEventListener(&#39;keydown&#39;, function() {
    console.log(&#39;Key pressed down!&#39;);
});
keyInput.addEventListener(&#39;keyup&#39;, function() {
    console.log(&#39;Key released!&#39;);
});
pressInput.addEventListener(&#39;keypress&#39;, function() {
    console.log(&#39;Key pressed!&#39;);
});

//Submit event
document.getElementById(&#39;myForm&#39;).addEventListener(&#39;submit&#39;, function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log(&#39;Form submitted!&#39;);
});

//Change event
//Focus event
textInput.addEventListener(&#39;focus&#39;, function() {
    console.log(&#39;Input focused&#39;);
});
textInput.addEventListener(&#39;blur&#39;, function() {
    console.log(&#39;Input blurred&#39;);
});

//Window events
window.addEventListener(&#39;load&#39;, function() {
    console.log(&#39;Page and all resources loaded&#39;);
});
window.addEventListener(&#39;resize&#39;, function() {
    console.log(&#39;Window resized&#39;);
});
window.addEventListener(&#39;scroll&#39;, function() {
    console.log(&#39;Document scrolled&#39;);
});
\`\`\`
</code></pre>`,22);function f(m,b){const t=l("ExternalLinkIcon");return o(),i("div",null,[c,u,e("ul",null,[e("li",null,[n("linters like "),e("a",p,[n("XO"),s(t)])]),h]),v])}const y=a(d,[["render",f],["__file","basic.html.vue"]]);export{y as default};
