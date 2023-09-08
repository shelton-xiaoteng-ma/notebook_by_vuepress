import{_ as a,Y as n,Z as d,a0 as e,a1 as s}from"./framework-957baa9a.js";const h={},_=e("h1",{id:"sharding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sharding","aria-hidden":"true"},"#"),s(" Sharding")],-1),o=e("p",null,"当单表数据量较大（几十GB）或读写吞吐量大的时候，必须进行分片(Sharding)操作。MongoDB分片需要手动指定片键。好的片键需要尽量平滑，否则会出现数据在多个节点中倾斜，导致集群性能下降。直接用 _id作为片键的话，因为 _id是内含时间戳的，所以不是按次递增的，多个帖子都不建议以 _id作为片键。然而，mongodb在3.0(?)版里新增了哈希索引功能，哈希后的 _id是平均的，所以多数情况下，用hashed_id作为片键是好的选择。",-1),i=e("p",null,"下面的sharding流程最好在表为空的时候进行，否则有可能很慢：",-1),t=e("pre",null,[e("code",null,`\`\`\`shell
# 1.选择数据库
use kaola
# 2.打开该数据库分片功能
sh.enableSharding("kaola") 
# 3.片键需要指定一个索引，所以需要创建hashed_id索引。这行意思是以_id字段，在背景创建一个名叫_id_hashed的哈希值的索引。这一步根据该表数据量而定，有可能需要数小时
db.getCollection("kaola_page_detail").createIndex( { _id: "hashed" }, { name: "_id_hashed", background: true } )
# 4.指定该索引为片键
sh.shardCollection( "kaola.kaola_page_detail", { _id: "hashed" } )
# 5.以上命令运行成功后，可以用这个命令来check现在分片的状态
sh.status()
\`\`\`
`)],-1),l=[_,o,i,t];function r(c,g){return n(),d("div",null,l)}const k=a(h,[["render",r],["__file","sharding.html.vue"]]);export{k as default};
