import{_ as n,Y as s,Z as a,a4 as t}from"./framework-957baa9a.js";const p={},o=t(`<h1 id="javascript-async-and-http-requests" tabindex="-1"><a class="header-anchor" href="#javascript-async-and-http-requests" aria-hidden="true">#</a> JavaScript Async and HTTP Requests</h1><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><p>JSON, or JavaScript Object notation is a data interchange format.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Define a JSON object representing information about a person</span>
<span class="token keyword">const</span> personJSON <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;john@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;street&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123 Main St&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Anytown&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;country&quot;</span><span class="token operator">:</span> <span class="token string">&quot;USA&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Node.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Web Development&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;isStudent&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;workExperience&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Convert the JSON object to a string</span>
<span class="token keyword">const</span> jsonString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>personJSON<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> parsedJSON <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> parsedJSON<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-and-sync-execution" tabindex="-1"><a class="header-anchor" href="#async-and-sync-execution" aria-hidden="true">#</a> Async and Sync Execution</h2><p>Asynchronous:</p><ul><li>Callback functions <ul><li>Passed as arguments</li><li>Executed after a certain delay</li><li>Specifies execution tasks</li></ul></li><li>Promises <ul><li>Represents eventual completion or failure</li><li>Provides a clear and structured process</li></ul></li><li>async/await <ul><li>Introduced in ES2017</li></ul></li><li>Event loop <ul><li>check for tasks</li><li>Run tasks in added order</li></ul></li></ul><p>AJAX(Asynchronous JavaScript and XML)</p><p>XHR(Http Requests with XMLHttpRequest)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://www.example.com&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//handle response</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">&gt;=</span><span class="token number">200</span> and xhr<span class="token punctuation">.</span>status<span class="token operator">&lt;=</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">displayUser</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Error fetch data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//handle error</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Network error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","essential_json.html.vue"]]);export{r as default};
