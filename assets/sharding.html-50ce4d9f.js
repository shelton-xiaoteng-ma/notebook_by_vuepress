const t=JSON.parse('{"key":"v-d9694646","path":"/database/mongodb/sharding.html","title":"Sharding","lang":"zh-CN","frontmatter":{"description":"当单表数据量较大（几十GB）或读写吞吐量大的时候，必须进行分片(Sharding)操作。MongoDB分片需要手动指定片键。好的片键需要尽量平滑，否则会出现数据在多个节点中倾斜，导致集群性能下降。直接用 id作为片键的话，因为 id是内含时间戳的，所以不是按次递增的，多个帖子都不建议以 id作为片键。然而，mongodb在3.0(?)版里新增了哈希索引...","head":[["meta",{"property":"og:url","content":"https://blog.maxiaoteng.xyz/database/mongodb/sharding.html"}],["meta",{"property":"og:site_name","content":"notebook"}],["meta",{"property":"og:title","content":"Sharding"}],["meta",{"property":"og:description","content":"当单表数据量较大（几十GB）或读写吞吐量大的时候，必须进行分片(Sharding)操作。MongoDB分片需要手动指定片键。好的片键需要尽量平滑，否则会出现数据在多个节点中倾斜，导致集群性能下降。直接用 id作为片键的话，因为 id是内含时间戳的，所以不是按次递增的，多个帖子都不建议以 id作为片键。然而，mongodb在3.0(?)版里新增了哈希索引..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-07-12T04:01:54.000Z"}],["meta",{"property":"article:author","content":"马晓腾"}],["meta",{"property":"article:modified_time","content":"2022-07-12T04:01:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sharding\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-07-12T04:01:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"马晓腾\\",\\"url\\":\\"https://maxiaoteng.xyz\\"}]}"]]},"headers":[],"git":{"createdTime":1657598514000,"updatedTime":1657598514000,"contributors":[{"name":"maxiaoteng","email":"jizhuwo00@hotmail.com","commits":1}]},"readingTime":{"minutes":1.07,"words":322},"filePathRelative":"database/mongodb/sharding.md","localizedDate":"2022年7月12日","excerpt":"","autoDesc":true}');export{t as data};
