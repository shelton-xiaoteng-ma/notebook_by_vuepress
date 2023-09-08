import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const t={},p=e(`<h1 id="schema-序列化" tabindex="-1"><a class="header-anchor" href="#schema-序列化" aria-hidden="true">#</a> schema 序列化</h1><p>对于<code>pyspark.sql.dataframe.DataFrame</code>的schema, 为了准确读取数据, 同时避免硬编码在代码中, 方便通用数据复用, 考虑持久化后存储</p><ol><li><p>schema to json</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># schema: pyspark.sql.types.StructType</span>
<span class="token comment"># json: str</span>
df<span class="token punctuation">.</span>schema<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>json to schema</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># json_str: str</span>
<span class="token keyword">import</span> json
<span class="token keyword">from</span> pyspark<span class="token punctuation">.</span>sql<span class="token punctuation">.</span>types <span class="token keyword">import</span> StructType

schemaFromJson <span class="token operator">=</span> StructType<span class="token punctuation">.</span>fromJson<span class="token punctuation">(</span>json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>df0<span class="token punctuation">.</span>schema<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>sample_data<span class="token punctuation">,</span>schemaFromJson<span class="token punctuation">)</span>
df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","schema.html.vue"]]);export{r as default};
