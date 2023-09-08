import{_ as e,Y as i,Z as n,a4 as d}from"./framework-957baa9a.js";const l={},a=d(`<h1 id="mongo-shell" tabindex="-1"><a class="header-anchor" href="#mongo-shell" aria-hidden="true">#</a> Mongo Shell</h1><ol><li><p>进入shell</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongo  # 直接进入, 默认端口27017的数据库
mongo --port=27010  # 指定端口的数据库
mongo host:port/admin -u root -p password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>基本操作</p></li></ol><ul><li><p>查看版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.version()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>登陆</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use db_name  # 登陆admin, use admin
db.auth(&quot;username&quot;,&quot;password&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看操作命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.help()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看数据库列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>切换或创建数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use db_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>显示所有用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>显示当前数据库的集合</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show collections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>显示集合操作命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.yourCollection.help()
# 比如
db.readme.help()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>显示当前所用的数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>其他操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.find()
db.collection.find().count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; exit
bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="3"><li>数据导出导入<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导出csv
mongoexport --host xx --port xx -u root -p xx --authenticationDatabase admin --db HotelRoomCounts --collection CtripRoomCounts --csv --out CtripRoomCounts.csv --fields &#39;hotelId,address,city,lat,lng,name,room_counts&#39;

# 导出其他文件
mongoexport --host xx --port xx -u root -p xx --authenticationDatabase admin --db HotelRoomCounts --collection CtripRoomCounts -o co.dat

# 导入
mongoimport --host xx --port xx -u root -p xx --authenticationDatabase admin --db HotelRoomCounts --collection CtripRoomCounts --upsert file_name
# 发现其实这种导入有些问题，推荐使用python手动导入，起因是我通过导出添加唯一索引再导入去重，能够将满足要求的导入，其他的数据会停在外面，进程也不结束。
# 而且Python导入也更快一些， 4w条insert_many
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),s=[a];function t(o,r){return i(),n("div",null,s)}const u=e(l,[["render",t],["__file","mongo_shell.html.vue"]]);export{u as default};
