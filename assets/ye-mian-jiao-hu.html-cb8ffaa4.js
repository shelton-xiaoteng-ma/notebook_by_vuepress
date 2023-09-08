import{_ as e,Y as i,Z as n,a4 as s}from"./framework-957baa9a.js";const a={},l=s(`<h1 id="页面交互" tabindex="-1"><a class="header-anchor" href="#页面交互" aria-hidden="true">#</a> 页面交互</h1><h2 id="_1-基本操作" tabindex="-1"><a class="header-anchor" href="#_1-基本操作" aria-hidden="true">#</a> 1. 基本操作</h2><p>选中元素后, 可以对元素操作如下:</p><ol><li>模拟按键 send_keys()</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.send_keys(&#39;some text&#39;, keys.ARROW_DOWN)  # 发送内容, 模拟按键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>清理<code>input</code>或<code>textarea</code>的内容</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.clear()    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>点击</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.click()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-填写表格" tabindex="-1"><a class="header-anchor" href="#_2-填写表格" aria-hidden="true">#</a> 2. 填写表格</h2><ol><li>选择下拉列表</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from selenium.webdriver.support.ui import Select

select = Select(driver.find_element_by_name(&#39;name&#39;))
select.select_by_index(index)  # 按索引选择
select.select_by_visible_text(&#39;text&#39;)  # 按显示内容选择
select.select_by_value(value)  # 按value选择

# 取消选择
select.deselect_all()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>提交表单</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>element.click()

# webdriver对每个元素都有submit()的方法, 如果对表单某个元素使用, 将找到最近的form并提交, 如果不再表单内, 将抛出异常
element.submit()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-一些js脚本" tabindex="-1"><a class="header-anchor" href="#_3-一些js脚本" aria-hidden="true">#</a> 3. 一些js脚本</h2><ol><li>执行js脚本的方法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>driver.execute_script(&quot;script.js&quot;)
driver.execute_script(&quot;arguments[0].value = &#39;你猜一下&#39;;&quot;, search_button)  #带参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>比如:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 移除某个标签class的hide部分
driver.execute_script(&quot;$(&#39;.button.load-more.hide&#39;).removeClass(&#39;hide&#39;)&quot;)
# 移除整个dom标签
driver.execute_script(&quot;$(&#39;#menuContent&#39;).remove()&quot;)
# 下拉到底部
driver.execute_script(&quot;window.scrollTo(0, document.body.scrollHeight);&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改element的属性, 一般使用js就可以</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new_class_name = &#39;new_class&#39;
driver.execute_script(&quot;$(&#39;.ratingcontent&#39;).class=argument[0]&quot;, new_class_name)
driver.execute_script(&quot;$(&#39;.ratingcontent&#39;).class=&#39;new_class&#39;&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-判断是否可见-最好用attribute判断-而不是is-displayed" tabindex="-1"><a class="header-anchor" href="#_4-判断是否可见-最好用attribute判断-而不是is-displayed" aria-hidden="true">#</a> 4. 判断是否可见, 最好用attribute判断, 而不是is_displayed()</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 习惯做法
if element.get_attribute(&#39;style&#39;) == &#39;display: none;&#39;:
    print(&#39;那么该元素在页面上看不到&#39;)
# 之前的做法
result = element.is_displayed()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),d=[l];function t(r,c){return i(),n("div",null,d)}const v=e(a,[["render",t],["__file","ye-mian-jiao-hu.html.vue"]]);export{v as default};
