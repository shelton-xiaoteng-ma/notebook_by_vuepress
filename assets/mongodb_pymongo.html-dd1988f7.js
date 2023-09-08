import{_ as e,Y as n,Z as i,a4 as d}from"./framework-957baa9a.js";const l={},s=d(`<h1 id="数据库-pymongo" tabindex="-1"><a class="header-anchor" href="#数据库-pymongo" aria-hidden="true">#</a> 数据库 pymongo</h1><h2 id="_1-数据库操作" tabindex="-1"><a class="header-anchor" href="#_1-数据库操作" aria-hidden="true">#</a> 1. 数据库操作</h2><h3 id="_1-连接" tabindex="-1"><a class="header-anchor" href="#_1-连接" aria-hidden="true">#</a> 1. 连接</h3><ul><li><strong>默认连接</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dbconfig = {
    &#39;host&#39;: MONGODB_SERVER,
    &quot;port&quot;: MONGODB_PORT,
    &#39;database&#39;: MONGODB_DATABASE,
}

class Mongodb(object):

    # 初始化
    def __init__(self, dbconfig):
        self.host = dbconfig.get(&#39;host&#39;)
        self.port = dbconfig.get(&#39;port&#39;)
        self.database = dbconfig.get(&#39;database&#39;)
        self._client = pymongo.MongoClient(self.host, self.port)
        self._db = self._client[self.database]


    # 退出
    def __exit__(self):
        self._client.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>用户名密码连接</strong></li></ul><blockquote><p>方法1</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client = pymongo.MongoClient(host, port)
db = client.mydb
db.authenticate(user, password)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方法2</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uri = &quot;mongodb://{username}:{password}@{host}:{port}/{db_name}?authMechanism=MONGODB-CR&quot;.format(username=user_name,password=user_pwd,host=host,port=port,db_name=db_name)
mongo_client = pymongo.MongoClient(uri)
mongo_db = mongo_client[db_name]
mongo_coll = mongo_db[coll_name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>**密钥连接 **</li></ul><h3 id="_2-查看数据库信息" tabindex="-1"><a class="header-anchor" href="#_2-查看数据库信息" aria-hidden="true">#</a> 2. 查看数据库信息</h3><p><strong>查看数据库的文档</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection_names(include_system_collections=False)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h1 id="_2-集合操作" tabindex="-1"><a class="header-anchor" href="#_2-集合操作" aria-hidden="true">#</a> 2. 集合操作</h1><h3 id="_1-获取集合" tabindex="-1"><a class="header-anchor" href="#_1-获取集合" aria-hidden="true">#</a> 1. 获取集合</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def get_collection(self, name):
    collection = self.db[name]
    # collection = self.db.name
    # 获取集合时, 如果name == &#39;test&#39;
    # 也可写成: collection = self.db.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-删除集合" tabindex="-1"><a class="header-anchor" href="#_2-删除集合" aria-hidden="true">#</a> 2. 删除集合</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name = &#39;test&#39;
db.drop_collection(name)
// 或者 

collection = db[name]
collection.drop()  # 成功返回true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-统计" tabindex="-1"><a class="header-anchor" href="#_3-统计" aria-hidden="true">#</a> 3. 统计</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>num = collection.count_documents()   # 集合的count() 方法返回集合中文档的个数

num = collection.find(query),count()  # 和上面的速度是一样快的

num = collection.update_many(...).modified_count()  # 查看更新操作修改了多少行

num = collection.deleted_many(...).deleted_count()  # 查看操作删除了多少行

num = collection.insert_many(...).inserted_count()  # 查看插入了多少行

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-文档操作" tabindex="-1"><a class="header-anchor" href="#_3-文档操作" aria-hidden="true">#</a> 3. 文档操作</h2><h3 id="_1-插入文档" tabindex="-1"><a class="header-anchor" href="#_1-插入文档" aria-hidden="true">#</a> 1. 插入文档</h3><ol><li><p><strong>插入一条</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>item = {
    &#39;name&#39;: &#39;xxx&#39;,
    &#39;age&#39;: 22
}

insert_id = collection.insert_one(item).inserted_id  
// 返回InsertOneResult实例, 就是item增加了inserted_id, 最终返回: ObjectId(&#39;...&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>批量插入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>items = [
    {...}, 
    {...},
    ...
]
result = collection.insert_many(items)
// result 是一个InsertManyResult实例，支持迭代
# 如果插入时数据库有唯一约束，可以添加ordered为无序，使用try except来忽略重复插入的异常，其他的就可以继续插入
result = collection.insert_many(items, ordered=False)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>批量不重复插入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for r in rs:
    query = {
        &quot;unique_colum&quot;: r.get(&#39;unique_colum&#39;), 
    }
    update = {
        &quot;$set&quot;: r,
    }
    rs = collection.find_one_and_update(query, update, upsert=True)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_2-修改" tabindex="-1"><a class="header-anchor" href="#_2-修改" aria-hidden="true">#</a> 2. 修改</h3><p>参考： https://blog.csdn.net/user_longling/article/details/52398667 update共有四个参数： - query # 条件 - updata # 更新内容 - upsert # 默认false，如果不存在要插入，则为true - multi # 默认false，要修改所有符合条件的查询，则为true</p><ol><li><p>基本操作， updata是一个完整的值，将整个document修改</p></li><li><p>不存在插入，存在则不操作 &quot;$setOnInsert&quot;</p></li><li><p>修改某个key，有则修改，没有就新增 &quot;$set&quot; <strong>修改符合条件的第一条</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {
    &quot;name&quot;: &quot;xxx&quot;
}

newvalue = {
    &quot;$set&quot;: {
        &quot;name&quot;: &quot;sss&quot;
    }
}
collection.update_one(query, newvalue)  # 修改单条
result = collection.update_many(query, newvalue)  # 修改多条
result.modified_count()   # 返回修改内容的数量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除某个键 &quot;$unset&quot;</p></li><li><p>增加计算 &quot;$inc&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    newvalue = {
        &quot;$inc&quot;: {
            &quot;key&quot; : 3,  # 或者-7
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>&quot;$push&quot; # field的值必须是list</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    updata = {
        &quot;$push&quot;: {
            &quot;field&quot;: &quot;value&quot;,
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>&quot;pushAll&quot; # 将list的每个值push进去，和push区别</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    pushall接受list，将每个值放到目标数组中
    如果push一个list，list将作为整体加入到目标数组中
    原始：[&#39;aa&#39;, &#39;bb&#39;]
    push [&#39;cc&#39;, &#39;dd&#39;]   # 结果 [&#39;aa&#39;, &#39;bb&#39;，[&#39;cc&#39;, &#39;dd&#39;]]
    pushall [&#39;cc&#39;, &#39;dd&#39;]   # 结果 [&#39;aa&#39;, &#39;bb&#39;，&#39;cc&#39;, &#39;dd&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-查询文档" tabindex="-1"><a class="header-anchor" href="#_3-查询文档" aria-hidden="true">#</a> 3. 查询文档</h3><ol><li><p><strong>查询第一条</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {
    &#39;kk&#39;: &#39;vv&#39;,
    ...
}
collection.find_one(query)
// 返回一个dict, 没有符合条件, 返回None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>查询多条</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>result = collection.find(query)
#　**注意:** 此处返回result类型\`&lt;pymongo.cursor.Cursor object at 0x0000000002C6DBE0&gt;\`是可迭代对象,可以使用list(result)转换, 也可以使用for循环迭代

num = result.count()   # Cursor有一个count方法, 返回查询结果的个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>范围查询</strong> 参考： https://blog.csdn.net/yangguangxiadeshu/article/details/45096007</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {
    &quot;date&quot;: {
        # 范围查询
        &quot;$gt&quot;: d,   # 大于
        &quot;$lt&quot;: d,   # 小于
        &quot;$gte&quot;: d,   # 大于等于
        &quot;$lte&quot;: d,   # 小于等于
        &quot;$ne&quot;: d,   # 不等于
    },
    &quot;value1&quot;: {  
        # 并列查询
        &quot;$lt&quot;: 20,   # 小于
        &quot;$gte&quot;: 3,   # 大于等于
    },
    &quot;value2&quot;: {  
        # in or not in
        &quot;$in&quot;: [2, 3], 
        &quot;$nin&quot;: [2, 3],   
    },
    &quot;value3&quot;: {  
        # 取模运算
        &quot;$mod&quot;: [10, 1],   # 等价于 value3 % 10 == 1
    },
    &quot;value4&quot;: {  
        # list大小
        &quot;$size&quot;: 5,   # value4这个list的大小，官网不建议查找size的范围，如果想要找size&lt;5, 建议创建一个字段来保存元素的数量
    },
    &quot;value5&quot;: {  
        # 是否存在
        &quot;$exists&quot;: true,   # 存在
        &quot;$exists&quot;: false,   # 不存在
    },
    &quot;value6&quot;: {  
        # 类型判断
        &quot;$type&quot;: 2,   # string, 基于bson来判断，
        &quot;$type&quot;: 16,   # int
        &quot;$gte&quot;: 3,   # 大于等于
    },
    &quot;value7&quot;: {  
        # 元素匹配,针对list类型
        &quot;$elemMath&quot;:{
            a : 1, 
            b : {
                &quot;$gt&quot;: 2
            }
        }
    },
    &quot;value8.name&quot;: {  
        # 嵌入对象查询,直接使用.即可
        &quot;name_target&quot;,
    }
}
result = collection.find(query)  # 查询结果
result.sort(&#39;name&#39;)  # 升序排序
result.sort(&#39;name&#39;, -1)  # 降序排序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>随机查询</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = [{
    &#39;$sample&#39;: {
        &quot;size&quot;: 2,
    },
}]
rs = list(collection.aggregate(pipeline=query))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>过滤显示</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter = {
    &#39;id&#39;: 0,  # 0表示不显示, 1表示显示, 0和1只能存在一种
    &#39;url&#39;: 0,
}
result = collection.find({}, filter)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_4-删除" tabindex="-1"><a class="header-anchor" href="#_4-删除" aria-hidden="true">#</a> 4. 删除</h3><ol><li><p><strong>删除一条</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {&quot;name&quot;: &quot;maxiaoteng&quot;}
collection.delete_one(query)  # 删除符合条件的第一条
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>删除多条</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {
    &quot;name&quot;: {
        &quot;$regex&quot;: &quot;^F&quot;  # 使用正则表达式:name中以F开头的
    }
}
x = collection.delete_many(query)
count = x.deleted_count  # 返回删除文档的个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>删除所有</strong><br> query = {} # 即可</p></li></ol><hr><h2 id="_4-创建索引" tabindex="-1"><a class="header-anchor" href="#_4-创建索引" aria-hidden="true">#</a> 4. 创建索引</h2><p>添加索引可以加快查询速度</p><ul><li>使用mongoShell操作，使用<code>3.0</code>之后版本</li></ul><pre><code>\`\`\`
    # 创建索引，1表示升序，-1表示降序
    # option
    # 1. 创建索引
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1})

    # 2. 组合索引
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1, &quot;age&quot;: -1})

    # 3. 后台创建索引
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1, &quot;age&quot;: -1}, {&quot;background&quot;: 1})

    # 4. 查看索引
    db.COLLECTION_NAME.getIndexes()
    db.COLLECTION_NAME.getIndexkeys()

    # 5. 删除索引,根据name
    db.COLLECTION_NAME.dropIndex(&quot;name_1&quot;)
    db.COLLECTION_NAME.dropIndex(&quot;name_1_age_1&quot;)
    db.COLLECTION_NAME.dropIndexes()    # 删除所有索引

    # 6. 创建唯一索引
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1, &quot;age&quot;: -1}, {unique: true})

    # 7. 修改索引
    db.COLLECTION_NAME.reIndex({&quot;name&quot;:1, &quot;age&quot;: -1})
    # 将数据插入带有唯一约束的表中，在insert_many中设置ordered=false

    # pymongo创建
    result = collection.create_index([(&#39;user_id&#39;, pymongo.ASCENDING)], unique=True)
    // user_id的值为递增, 且唯一, 之后再插入, 则抛出错误
\`\`\`
</code></pre><hr><h2 id="同步操作" tabindex="-1"><a class="header-anchor" href="#同步操作" aria-hidden="true">#</a> 同步操作</h2><p>find_one_and_update find_one_and_replace find_one_and_delete</p><hr><h2 id="mongodb中的正则表达式" tabindex="-1"><a class="header-anchor" href="#mongodb中的正则表达式" aria-hidden="true">#</a> mongodb中的正则表达式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {
    &#39;name&#39;: {
        &quot;$regex&quot;: &quot;^f&quot;, # 以f开头的
        &quot;$regex&quot;: &quot;f&quot;,  # 包含f的
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="mongodb中的范围查询" tabindex="-1"><a class="header-anchor" href="#mongodb中的范围查询" aria-hidden="true">#</a> mongodb中的范围查询</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query = {
    &#39;age&#39;: {
        &quot;$gt&quot;: 25,  # 大于25岁
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="心得" tabindex="-1"><a class="header-anchor" href="#心得" aria-hidden="true">#</a> 心得</h2><p>请使用最新的, 且规范的方法来操作. 比如:</p><ul><li>统计使用collection.find().count(),</li><li>增删改查使用xx_one 和 xx_many, 模糊的update, insert等已经被弃用.</li><li>查询并更新使用find_one_and_update(), delete, replace... 还可以根据参数, 选择返回的是修改前还是修改后的内容</li><li>避免重复插入的方法: 一个一个插入, 每次插入时使用find_one_and_update(query, update, upsert=True).(即不存在则插入, 存在则更新)</li></ul><h2 id="值的比较" tabindex="-1"><a class="header-anchor" href="#值的比较" aria-hidden="true">#</a> 值的比较</h2><p>比较</p><table><thead><tr><th></th><th>MongoDB</th><th>pymongo</th></tr></thead><tbody><tr><td>1</td><td>true</td><td>True</td></tr><tr><td>2</td><td>false</td><td>False</td></tr><tr><td>3</td><td>null/不存在</td><td>None</td></tr></tbody></table>`,54),a=[s];function t(u,r){return n(),i("div",null,a)}const o=e(l,[["render",t],["__file","mongodb_pymongo.html.vue"]]);export{o as default};
