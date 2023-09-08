import{_ as n,Y as e,Z as i,a4 as a}from"./framework-957baa9a.js";const s={},d=a(`<h1 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy" aria-hidden="true">#</a> numpy</h1><p>n维的数组对象</p><ol><li><p>基本操作</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import numpy as np
na = np.array([1, 2, 3])
# 可以转换多维数组
na.dtype # 查看元素类型, 所以所有元素类型要一致
na1 = na.astype(&#39;str&#39;) # 转换类型
# 批量计算
na+1
na*na
na*2
# 索引取值和赋值, 0开始
na[2]
na[:-1]
na[2] = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>reshape, T转置, ufunc、sort</p></li></ol>`,3),l=[d];function r(c,t){return e(),i("div",null,l)}const v=n(s,[["render",r],["__file","numpy.html.vue"]]);export{v as default};
