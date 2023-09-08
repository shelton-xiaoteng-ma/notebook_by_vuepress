import{_ as i,Y as e,Z as n,a4 as d}from"./framework-957baa9a.js";const a={},s=d(`<h1 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h1><p>[TOC]</p><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><p>两个主要的数据结构，Series和DataFrame</p><h3 id="_1-series" tabindex="-1"><a class="header-anchor" href="#_1-series" aria-hidden="true">#</a> 1. Series</h3><p>类似array和numpy, 一维带有数据标签</p><ol><li><p>基本使用</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import pandas as pd
pa = pd.Series([1, 2, 3, 4, 5])
# 自定义索引
pa = pd.Series([1, 2, 3, 4, 5], index=[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;])
# 查看索引
pa.index
# 查看数据
pa[&#39;a&#39;]
pa[[&#39;a&#39;, &#39;b&#39;]]

# 自动解析字典
dd = {
    &#39;lulu&#39;: &#39;lluu&#39;,
    &#39;qinqin&#39;: &#39;qqiinn&#39;,
}
pdd = pd.Series(dd)
# 也可以指定索引, 不存在的自动表示Nan
pdd = pd.Series(dd, index={&#39;lulu&#39;, &#39;qinqin&#39;, &#39;c&#39;})

# to_frame()
df_lng.to_frame()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>其他</p></li></ol><h3 id="_2-dataframe" tabindex="-1"><a class="header-anchor" href="#_2-dataframe" aria-hidden="true">#</a> 2. DataFrame</h3><p>类似表格的数据结构, 既有行索引, 也有列索引</p><ol><li><p>基本使用</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 传入字典
dict = {
    &#39;name&#39;: [&#39;张三&#39;, &#39;李四&#39;],
    &#39;sex&#39;: [&#39;男&#39;, &#39;女&#39;],
    &#39;age&#39;: [&#39;21&#39;, &#39;76&#39;],
}
df = pd.DataFrame(dict)
df.info()
df.head()
df.tail()

# 增加/修改表头
all_df.columns=[&#39;store&#39;, &#39;lat&#39;, &#39;lng&#39;, &#39;ts&#39;, &#39;cnt&#39;]


# 类型转换
df.age = df.age.astype(&#39;str&#39;)
df[&#39;origin_lat&#39;] = df[&#39;origin_lat&#39;].astype(float, errors = &#39;raise&#39;)
df[&#39;a&#39;] = pd.to_numeric(df[&#39;a&#39;],errors = &#39;coerce&#39;)

# 格式清洗 other_key可选参数
def cut_word(word, other_key=None):
    return str(word)+&#39;_&#39;
df_duplicates.salary.apply(cut_word, other_key=1)

# 生成新的列
df[&#39;B&#39;] = df[&#39;A&#39;].map(lambda a : 1 if a&gt;0 else 0)

# df选取列的方式
df[&#39;age&#39;]   # 返回Series
df[[&#39;age&#39;, &#39;name&#39;]]   # 返回Series
# 选取行
df.ix[0]   
df.iloc[0]   
df.loc[0]   # 用于通过标签选取, 没有标签的df和iloc通用   
df[1:2]
# 行列共同选择
df.ix[&#39;a&#39;, &#39;age&#39;]
df.ix[[&#39;a&#39;, &#39;c&#39;], &#39;age&#39;]
df.ix[[&#39;a&#39;: &#39;c&#39;], &#39;age&#39;]

# 修改和新增列
df[&#39;age&#39;] = [1, 2]
df[&#39;age&#39;] = &#39;2&#39;
df.age = &#39;2&#39;

# 判断
df.sex == &#39;男&#39;  # 返回series, True or False
df[(df.sex==&#39;男&#39;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查询</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 类sql语句
df.query(&#39;(age==18 and sex==&quot;男&quot;) &amp; (age&gt;18 and sex==&quot;女&quot;)&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>计算</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># distinct
df.age.unique()
len(df.age.unique())

# 排序 axis=0 按column排序, axis=1按index排序, inplace=True 直接替换
df_batch.sort_values(by=&#39;multiplier&#39;, axis=0)

# 去重 drop_duplicates
df_duplicates = df.drop_duplicates(subset=&#39;age&#39;, keep=&#39;first&#39;)


# 平均计算/统一行的多列计算, axis=1表示用在行
def avg_dup_colum(line):
    return (line.x + line.y)/2
df_duplicates[&#39;avg_data&#39;] = df_duplicates.apply(avg_dup_colum, axis=1)
# lambda函数
df_duplicates[&#39;avg_data&#39;] = df_duplicates.apply(lambda x:(x.x+x.y)/2, axis=1)

# 聚合group by
# 等价 group by city, count(1), order by cnt desc
df.city.value_counts()

# 聚合分组计算
df.groupby([&#39;market_shopNo&#39;])[&#39;origin_lat&#39;].median()    # 类型为series, 需要执行series.to_frame()转换成dataframe

# 合并df, join默认 
pd.concat([df_lat.to_frame(), df_lng.to_frame(), df_ts.to_frame()], axis=1, join=&quot;inner&quot;)

# index to column / column to index
df.set_index(&#39;ts&#39;)
df[&#39;index1&#39;] = df.index
df.reset_index(level=0, inplace=True)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="载入数据" tabindex="-1"><a class="header-anchor" href="#载入数据" aria-hidden="true">#</a> 载入数据</h2><ol><li><p>read_csv</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>pd.read_csv(file_path, encoding=&#39;utf-8&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>read_excel</p></li><li><p>read_table</p></li><li><p>read_sql</p></li></ol>`,12),l=[s];function r(v,c){return e(),n("div",null,l)}const m=i(a,[["render",r],["__file","pandas.html.vue"]]);export{m as default};
