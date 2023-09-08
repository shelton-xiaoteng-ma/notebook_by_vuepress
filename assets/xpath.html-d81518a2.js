import{_ as s,Y as n,Z as a,a4 as t}from"./framework-957baa9a.js";const e={},l=t(`<h1 id="xpath" tabindex="-1"><a class="header-anchor" href="#xpath" aria-hidden="true">#</a> XPATH</h1><p>[TOC]</p><p>XPath即为XML路径语言（XML Path Language），它是一种用来确定XML文档中某部分位置的语言。 XPath基于XML的树状结构，提供在数据结构树中找寻节点的能力。</p><h2 id="_1-用法" tabindex="-1"><a class="header-anchor" href="#_1-用法" aria-hidden="true">#</a> 1. 用法</h2><ol><li><p>基本用法</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree
html <span class="token operator">=</span> response<span class="token punctuation">.</span>text  <span class="token comment"># requests和scrapy都可以, html要求是str</span>
page_source <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>html<span class="token punctuation">)</span>
tr <span class="token operator">=</span> page_source<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//div[@class=&quot;chunk&quot;]/table/tr[1]&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>page_source HTML方法有自动修正不全tag的功能, tostring()方法转成源文件, 为bytes类型, 需要decode为str</p></li><li><p>也可以直接读取文本文件进行解析</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree
html <span class="token operator">=</span> etree<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;./test.html&#39;</span><span class="token punctuation">,</span> etree<span class="token punctuation">.</span>HTMLParser<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> etree<span class="token punctuation">.</span>tostring<span class="token punctuation">(</span>html<span class="token punctuation">)</span>
<span class="token comment"># 可以转换编码问题</span>
result <span class="token operator">=</span> etree<span class="token punctuation">.</span>tostring<span class="token punctuation">(</span>html<span class="token punctuation">,</span> encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span> pretty_print <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>对于xml的响应</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree
page_source <span class="token operator">=</span> etree<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>response<span class="token punctuation">.</span>content<span class="token punctuation">)</span>  <span class="token comment"># requests</span>
page_source <span class="token operator">=</span> etree<span class="token punctuation">.</span>XML<span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span>  <span class="token comment"># scrapy</span>
<span class="token comment"># 如果使用text, &#39;可能报错: Unicode strings with encoding declaration are not supported. Please use bytes input or XML fragments without declaration&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-常用规则" tabindex="-1"><a class="header-anchor" href="#_2-常用规则" aria-hidden="true">#</a> 2. 常用规则</h2><ul><li><p>/ # 从当前节点选取所有子节点, 返回list</p></li><li><p>// # 从当前节点选取所有子孙节点, 返回list</p></li><li><p>. # 选取当前节点</p></li><li><p>.. # 选取当前节点的父节点</p></li><li><p>@ # 选取属性</p></li><li><p>[@] # 增加属性限定 如://div[@class=&quot;xx-name&quot;], 父节点下所有class是xx-name的div</p></li><li><p>/text() # 文本获取, 返回list</p></li><li><p>属性多值匹配 # 某个节点的属性有多个值, 比如<code>&lt;a class=&#39;li tag&#39;&gt;</code>,</p><ul><li>//li[contains(@class, &quot;li&quot;)] # 选择所有包含li的标签</li><li>//li[contains(@class, &quot;li&quot;) and contains(@class, &quot;tag&quot;)] # 能选择上面那个标签</li><li>//li[contains(@class, &quot;li&quot;) and @name=&quot;item&quot;] # 可以同时选择多个属性条件</li></ul></li><li><p>| 或操作</p><ul><li>//li[contains(@class, &quot;li&quot;)] | //li[@name=&quot;item&quot;] # 用法和and类似</li></ul></li><li><p>按序选择 # xpath的list选择是从1开始, last()表示最后一个</p></li><li><p>节点轴</p><ul><li>html = etree.HTML(text)</li><li>result = html.xpath(&#39;//li[1]/ancestor:😗&#39;) # 返回li的所有祖先节点, list</li><li>result = html.xpath(&#39;//li[1]/ancestor::div&#39;) # 返回li的所有div祖先节点, list</li><li>result = html.xpath(&#39;//li[1]/attribute:😗&#39;) # 返回li的所有属性值, list</li><li>result = html.xpath(&#39;//li[1]/child::a[@href=&quot;https://ask.hellobi.com/link1.html&quot;]&#39;) # 返回li的子节点a</li><li>result = html.xpath(&#39;//li[1]/descendant::span&#39;) # 返回li的所有span子孙节点, list</li><li>result = html.xpath(&#39;//li[1]/following:😗[2]&#39;) # 返回li的后续的第2个节点</li><li>result = html.xpath(&#39;//li[1]/following-sibling:😗&#39;) # 返回li的后续所有同级节点, list</li><li>result = html.xpath(&#39;//li[1]/preceding-sibling::h6[1]&#39;) # 返回li的前面的同级节点, list, [1]指最接近li[1]的, 依次往前</li></ul></li></ul>`,7),p=[l];function i(o,c){return n(),a("div",null,p)}const r=s(e,[["render",i],["__file","xpath.html.vue"]]);export{r as default};
