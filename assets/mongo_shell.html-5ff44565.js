import{_ as a,Y as s,Z as e,a4 as n}from"./framework-957baa9a.js";const l={},i=n(`<h1 id="mongo-shell" tabindex="-1"><a class="header-anchor" href="#mongo-shell" aria-hidden="true">#</a> Mongo Shell</h1><ol><li><p>进入shell</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongo  <span class="token comment"># 直接进入, 默认端口27017的数据库</span>
mongo <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">27010</span>  <span class="token comment"># 指定端口的数据库</span>
mongo host:port/admin <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基本操作</p><ul><li><p>查看版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.version<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>登陆</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
use db_name  <span class="token comment"># 登陆admin, use admin</span>
db.auth<span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span>,<span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看操作命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.help<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看数据库列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>切换或创建数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>use db_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>显示所有用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>显示当前数据库的集合</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show collections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>显示集合操作命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.yourCollection.help<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 比如</span>
db.readme.help<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示当前所用的数据库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>其他操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span>
db.collection.find<span class="token punctuation">(</span><span class="token punctuation">)</span>.count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>数据导出导入</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 导出csv</span>
mongoexport <span class="token parameter variable">--host</span> xx <span class="token parameter variable">--port</span> xx <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> xx <span class="token parameter variable">--authenticationDatabase</span> admin <span class="token parameter variable">--db</span> HotelRoomCounts <span class="token parameter variable">--collection</span> CtripRoomCounts <span class="token parameter variable">--csv</span> <span class="token parameter variable">--out</span> CtripRoomCounts.csv <span class="token parameter variable">--fields</span> <span class="token string">&#39;hotelId,address,city,lat,lng,name,room_counts&#39;</span>

<span class="token comment"># 导出其他文件</span>
mongoexport <span class="token parameter variable">--host</span> xx <span class="token parameter variable">--port</span> xx <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> xx <span class="token parameter variable">--authenticationDatabase</span> admin <span class="token parameter variable">--db</span> HotelRoomCounts <span class="token parameter variable">--collection</span> CtripRoomCounts <span class="token parameter variable">-o</span> co.dat

<span class="token comment"># 导入</span>
mongoimport <span class="token parameter variable">--host</span> xx <span class="token parameter variable">--port</span> xx <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span> xx <span class="token parameter variable">--authenticationDatabase</span> admin <span class="token parameter variable">--db</span> HotelRoomCounts <span class="token parameter variable">--collection</span> CtripRoomCounts <span class="token parameter variable">--upsert</span> file_name
<span class="token comment"># 发现其实这种导入有些问题，推荐使用python手动导入，起因是我通过导出添加唯一索引再导入去重，能够将满足要求的导入，其他的数据会停在外面，进程也不结束。</span>
<span class="token comment"># 而且Python导入也更快一些， 4w条insert_many</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),t=[i];function o(p,r){return s(),e("div",null,t)}const c=a(l,[["render",o],["__file","mongo_shell.html.vue"]]);export{c as default};
