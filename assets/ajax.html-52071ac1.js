import{_ as i,Y as n,Z as e,a4 as l}from"./framework-957baa9a.js";const d={},s=l(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h1><p>Asynchronous JavaScript + XML</p><h2 id="http瓶颈" tabindex="-1"><a class="header-anchor" href="#http瓶颈" aria-hidden="true">#</a> HTTP瓶颈</h2><ol><li><p>表单提交<br> 一次操作渲染整个页面 有些操作将会增加带宽(点赞)<br> 有的操作会影响使用当前使用(视频网站的收藏\\点赞等)</p></li><li><p>内容的实时更新<br> 通知/私信等提醒</p></li></ol><h2 id="ajax的实现" tabindex="-1"><a class="header-anchor" href="#ajax的实现" aria-hidden="true">#</a> Ajax的实现</h2><p><strong>只做局部更新</strong></p><p>一个demo</p><h3 id="ajax函数" tabindex="-1"><a class="header-anchor" href="#ajax函数" aria-hidden="true">#</a> ajax函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var log = function() {
    console.log.apply(console, arguments)
}

var e = function(sel) {
    return document.querySelector(sel)
}

/* 
 ajax 函数
*/
var ajax = function(method, path, data, responseCallback) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(method, path, true)
    // 设置发送的数据的格式为 application/json
    // 这个不是必须的
    r.setRequestHeader(&#39;Content-Type&#39;, &#39;application/json&#39;)
    // 注册响应函数
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            // r.response 存的就是服务器发过来的放在 HTTP BODY 中的数据
            responseCallback(r.response)
        }
    }
    // 把数据转换为 json 格式字符串
    data = JSON.stringify(data)
    // 发送请求
    r.send(data)
}

// TODO API
// 获取所有 todo
var apiTodoAll = function(callback) {
    var path = &#39;/api/todo/all&#39;
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}

// 增加一个 todo
var apiTodoAdd = function(form, callback) {
    var path = &#39;/api/todo/add&#39;
    ajax(&#39;POST&#39;, path, form, callback)
}

// 删除一个 todo
var apiTodoDelete = function(id, callback) {
    var path = &#39;/api/todo/delete?id=&#39; + id
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
    //    get(path, callback)
}

// 更新一个 todo
var apiTodoUpdate = function(form, callback) {
    var path = &#39;/api/todo/update&#39;
    ajax(&#39;POST&#39;, path, form, callback)
    //    post(path, form, callback)
}

// load weibo all
var apiWeiboAll = function(callback) {
    var path = &#39;/weibo/all&#39;
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}

// 增加一个 微博
var apiWeiboAdd = function(form, callback) {
    var path = &#39;/weibo/add&#39;
    ajax(&#39;POST&#39;, path, form, callback)
}

// 删除一个微博
var apiWeiboDelete = function(weibo_id, callback) {
    var path = &#39;/weibo/delete?id=&#39;+weibo_id
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}

// 更新一个微博
var apiWeiboUpdate = function(form, callback) {
   var path = &#39;/weibo/update&#39;
   ajax(&#39;POST&#39;, path, form, callback)
}

// 增加一条微博评论
var apiCommentAdd = function(form, callback){
    var path = &#39;/weibo/commentAdd&#39;
    ajax(&#39;POST&#39;, path, form, callback)
}

// 删除一条微博评论
var apiCommentDelete = function(comment_id, callback){
    var path = &#39;/weibo/commentDelete?id=&#39;+comment_id
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具体操作dom" tabindex="-1"><a class="header-anchor" href="#具体操作dom" aria-hidden="true">#</a> 具体操作dom</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var timeString = function(timestamp) {
    t = new Date(timestamp * 1000)
    t = t.toLocaleString(&#39;ja-JP&#39;)
    return t
}

var commentsTemplate = function(comments) {
    var html = &#39;&#39;
    for(var i = 0; i &lt; comments.length; i++) {
        var c = comments[i]
        var t = \`
            &lt;div class=&#39;comment-form&#39; id=&#39;comment-id-\${c.id}&#39; data-id=\${c.id}&gt;
                &lt;br&gt;
                [\${c.username}]:\${c.content}
                &lt;br&gt;
                &lt;span&gt;[创建时间]: \${timeString(c.ct)}&lt;/span&gt;
                &lt;button class=&#39;comment-delete&#39;&gt;删除评论&lt;/button&gt;
            &lt;/div&gt;
        \`
        html += t
    }
    return html
}

var WeiboTemplate = function(Weibo) {
    var content = Weibo.content
    var id = Weibo.id
    var ct = Weibo.ct
    var visitor = Weibo.visitor
    var comments = commentsTemplate(Weibo.comments)
    var t = \`
        &lt;div class=&#39;Weibo-cell&#39; id=&#39;Weibo-\${id}&#39; data-id=\${id}&gt;
            &lt;div class=&#39;Weibo-single&#39;&gt;
                [\${visitor}]: &lt;span class=&#39;Weibo-content&#39;&gt;\${content}&lt;/span&gt;
                &lt;br&gt;
                &lt;span&gt;[留言时间]: \${timeString(ct)}&lt;/span&gt;
                &lt;br&gt;&lt;br&gt;
            &lt;/div&gt;
            &lt;button class=&quot;Weibo-delete&quot;&gt;删除留言&lt;/button&gt;
            &lt;button class=&quot;Weibo-edit&quot;&gt;编辑留言&lt;/button&gt;
            &lt;div class=&quot;comment-list&quot;&gt;
                现有评论: \${comments}
            &lt;/div&gt;
            &lt;div class=&quot;comment-form&quot;&gt;
                &lt;input type=&quot;hidden&quot; name=&quot;weibo_id&quot; value=&quot;&quot;&gt;
                &lt;br&gt;
                评论内容:&lt;input class=&#39;comment-content&#39;name=&quot;content&quot;&gt;
                &lt;br&gt;&lt;br&gt;
                评论人(默认匿名):&lt;input class=&#39;comment-username&#39; name=&#39;username&#39;&gt;
                &lt;br&gt;&lt;br&gt;
                &lt;button class=&quot;comment-add&quot;&gt;添加评论&lt;/button&gt;
            &lt;/div&gt;
            &lt;p&gt;============================================================&lt;/p&gt;
        &lt;/div&gt;
    \`
    return t
}

var insertWeibo = function(Weibo) {
    var WeiboCell = WeiboTemplate(Weibo)
    // log(&#39;单个微博html标签&#39;, WeiboCell)
    // 插入 Weibo-list
    var WeiboList = e(&#39;.Weibo-list&#39;)
    WeiboList.insertAdjacentHTML(&#39;beforeend&#39;, WeiboCell)
}

var insertEditForm = function(cell, content) {
    var form = \`
        &lt;div class=&#39;Weibo-edit-form&#39;&gt;
            &lt;input class=&quot;Weibo-edit-input&quot;&gt;
            // &lt;button class=&#39;Weibo-update&#39;&gt;更新&lt;/button&gt;
        &lt;/div&gt;
    \`
    cell.insertAdjacentHTML(&#39;afterBegin&#39;, form)
    var input = e(&#39;.Weibo-edit-input&#39;)
    input.value = content
}

var loadWeibos = function() {
        // 调用 ajax api 来载入数据
    apiWeiboAll(function(r) {
        // console.log(&#39;load all&#39;, r)
        // 解析为 数组
        var Weibos = JSON.parse(r)
        // 循环添加到页面中
        for(var i = 0; i &lt; Weibos.length; i++) {
            var Weibo = Weibos[i]
            insertWeibo(Weibo)
        }
    })
}

var bindEventWeiboAdd = function() {
    var b = e(&#39;#id-button-add-weibo&#39;)
    // 注意, 第二个参数可以直接给出定义函数
    b.addEventListener(&#39;click&#39;, function(){
        var input1 = e(&#39;#id-input-weibo&#39;)
        var content = input1.value
        var input2 = e(&#39;#id-visitor-weibo&#39;)
        var visitor = input2.value
        log(&#39;click add&#39;, content, visitor)
        var form = {
            &#39;content&#39;: content,
            &#39;visitor&#39;: visitor,
        }
        input1.value = &#39;&#39;
        input2.value = &#39;&#39;
        if(content.length&gt;2){
            apiWeiboAdd(form, function(r) {
                // 收到返回的数据, 插入到页面中
                var Weibo = JSON.parse(r)
                insertWeibo(Weibo)
            })
        }
        else{
            alert(&quot;留言内容太少了吧!&quot;)
        }
    })
}

var bindEventWeiboDelete = function() {
    var WeiboList = e(&#39;.Weibo-list&#39;)
    // 注意, 第二个参数可以直接给出定义函数
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&#39;Weibo-delete&#39;)){
            // 删除这个 Weibo
            var WeiboCell = self.parentElement
            var Weibo_id = WeiboCell.dataset.id
            log(&#39;点击到了删除按钮, 微博id是:&#39;, Weibo_id)
            apiWeiboDelete(Weibo_id, function(r){
                log(&#39;删除成功&#39;, Weibo_id)
                var return_wb = JSON.parse(r)
                if(return_wb.id==Weibo_id){
                    WeiboCell.remove()
                }
            })
        }
    })
}

var bindEventWeiboEdit = function() {
    var WeiboList = e(&#39;.Weibo-list&#39;)
    // 注意, 第二个参数可以直接给出定义函数
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&#39;Weibo-edit&#39;)){
            // 删除这个 Weibo
            var WeiboCell = self.parentElement
            // 从微博cell中选出展示微博内容的那部分,缩小了查找范围
            var weibo_content = WeiboCell.querySelector(&#39;.Weibo-content&#39;)
            var content = weibo_content.innerHTML
            // 将原来的展示内容改为修改框
            weibo_content.parentElement.style.display=&quot;none&quot;
            // 插入更新框
            insertEditForm(WeiboCell, content)
        }
    })
}

var bindEventWeiboUpdate = function() {
    var WeiboList = e(&#39;.Weibo-list&#39;)
    // 注意, 第二个参数可以直接给出定义函数
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&#39;Weibo-update&#39;)){
            log(&#39;点击了 update &#39;)
            //
            var editForm = self.parentElement
            // querySelector 是 DOM 元素的方法
            // document.querySelector 中的 document 是所有元素的祖先元素
            var input = editForm.querySelector(&#39;.Weibo-edit-input&#39;)
            var content = input.value
            // 用 closest 方法可以找到最近的直系父节点
            var WeiboCell = self.closest(&#39;.Weibo-cell&#39;)
            var Weibo_id = WeiboCell.dataset.id
            var form = {
                &#39;id&#39;: Weibo_id,
                &#39;content&#39;: content,
            }
            apiWeiboUpdate(form, function(r){
                log(&#39;更新成功&#39;, Weibo_id)
                var Weibo = JSON.parse(r)
                log(Weibo)
                var selector = &#39;#Weibo-&#39; + Weibo.id
                var WeiboCell = e(selector)
                var contentSpan = WeiboCell.querySelector(&#39;.Weibo-content&#39;)
                contentSpan.innerHTML = Weibo.content
                // 显示微博内容框
                contentSpan.parentElement.style.display=&quot;&quot;
                // 将编辑框删除
                var edit_form = WeiboCell.querySelector(&quot;.Weibo-edit-form&quot;)
                edit_form.remove()
                //  WeiboCell.remove()
            })
        }
    })
}


// 插入评论函数
var insertCommentCell = function(comment){
    var comments = [comment]
    var commentCell = commentsTemplate(comments)
    var weibo_id = comment.weibo_id
    var weiboCell = e(&#39;#Weibo-&#39; + weibo_id)
    // log(&#39;weiboCell:&#39;, weiboCell)
    var commentsList = weiboCell.querySelector(&#39;.comment-list&#39;)
    commentsList.insertAdjacentHTML(&#39;beforeend&#39;, commentCell)
}


// 绑定添加评论事件
var bindEventCommentAdd = function(){
    var WeiboList = e(&#39;.Weibo-list&#39;)
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&quot;comment-add&quot;)){
            // log(&#39;点击到了评论按钮&#39;, self)
            var comment_form = self.parentElement
            var input1 = comment_form.querySelector(&#39;.comment-content&#39;)
            var comment_content = input1.value
            var input2 = comment_form.querySelector(&#39;.comment-username&#39;)
            var comment_username= input2.value
            var WeiboCell = comment_form.parentElement
            var Weibo_id = WeiboCell.dataset.id
            // log(&#39;当前微博的id&#39;, Weibo_id)
            var form = {
              &#39;weibo_id&#39;: Weibo_id,
              &#39;content&#39;: comment_content,
              &#39;username&#39;: comment_username,
            }
            input1.value = &#39;&#39;
            input2.value = &#39;&#39;
            if(comment_content.length&gt;0){
                apiCommentAdd(form, function(r){
                    // 收到响应, 先log出来
                    var new_comment = JSON.parse(r)
                    // log(&#39;评论已添加&#39;, new_comment)
                    insertCommentCell(new_comment)
                })
            }else{
                alert(&#39;评论内容不可为空&#39;)
            }
        }
    })
}


// 绑定删除评论事件
var bindEventCommentDelete = function(){
    var WeiboList = e(&#39;.Weibo-list&#39;)
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&quot;comment-delete&quot;)){
            log(&#39;点击到了删除评论按钮&#39;, self)
            var comment_form = self.parentElement
            comment_id = comment_form.dataset.id
            log(&#39;报告,当前要删除的评论id&#39;, comment_id)
            apiCommentDelete(comment_id, function(r){
                var delete_comment = JSON.parse(r)
                comment_form = e(&#39;#comment-id-&#39;+comment_id)
                // log(&#39;报告,我要移除的评论标签:&#39;, comment_form)
                comment_form.remove()
            })
        }
    })
}


var bindEvents = function() {
    bindEventWeiboAdd()
    bindEventWeiboDelete()
//    bindEventWeiboEdit()
//    bindEventWeiboUpdate()
    bindEventCommentAdd()
//    bindEventCommentDelete()
}


var __main = function() {
    bindEvents()
    loadWeibos()
}

__main()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v=[s];function a(r,t){return n(),e("div",null,v)}const m=i(d,[["render",a],["__file","ajax.html.vue"]]);export{m as default};
