import{_ as a,Y as t,Z as r,$ as o,a0 as e,a1 as n,a2 as i,a3 as c,a4 as u,E as l}from"./framework-957baa9a.js";const v={},m=e("h1",{id:"爬取使用protobuf作为传输格式的api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#爬取使用protobuf作为传输格式的api","aria-hidden":"true"},"#"),n(" 爬取使用Protobuf作为传输格式的api")],-1),b=e("p",null,"有的app接口使用protobuf传输数据, 看起来不直观, 不方便爬取",-1),p=e("h2",{id:"问题描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题描述","aria-hidden":"true"},"#"),n(" 问题描述")],-1),_=e("p",null,[n("接口抓包发现内容是二进制格式, charles能识别一些protobuf的内容, 但并不完全奏效. 看headers会发现"),e("code",null,'"content-type": "application/x-protobuf"')],-1),h=e("h2",{id:"解决方案",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决方案","aria-hidden":"true"},"#"),n(" 解决方案:")],-1),f=e("li",null,[n("注意事项 "),e("ul",null,[e("li",null,[n("抓包后charles不能正确解析protobuf格式, 可以右键使用: "),e("code",null,"View Response/Request As, Protocol Buffers")]),e("li",null,"通常服务器后台是兼容json传输的, 所以对于响应, 如果非必要, 直接修改接受json格式即可"),e("li",null,[n("对于repeat字段, python转换时"),e("code",null,"5:1 5:2"),n("会被转换成"),e("code",null,"5: [1, 2]"),n(", 所以尽量避免, 可以拆分请求")])])],-1),x=u(`<li><p>可以借助charles解析结构, 达到下面这种格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2: 120
3: &quot;v1:1&quot;
4: &quot;180a77e4-1917-4d18-9544-212ed0394c70&quot;
7 {
    3: 3
    17: 553
}
8: 2
12: 1
15: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后通过操作不同的请求来猜出对自己有用的参数, 不确定的可以默认格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &#39;limit&#39;: 120, 
    &#39;page&#39;: &#39;v1:3&#39;, 
    &#39;device_id&#39;: &#39;180a77e4-1917-4d18-9544-212ed0394c70&#39;, 
    &#39;filter&#39;: {
        &#39;field3&#39;: 3, 
        &#39;status&#39;: 1,
        &#39;status&#39;: 2,
        &#39;brand_id&#39;: 111,
        &#39;category_id&#39;: 775,
    }, 
    &#39;field8&#39;: 2, 
    &#39;field12&#39;: 1, 
    &#39;field15&#39;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>编写proto模版</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>message Filter {
    int32 field3 = 3;
    int32 status = 5;
    // repeated 在转换后 5:[1, 2], 不是 5:1 5:2 这种格式, 所以先不用repeated
    // repeated int32 status = 5;
    int32 brand_id = 7;
    int32 category_id = 17;
}
message Body {
    int32 limit = 2;
    string page = 3;
    string device_id = 4;
    Filter filter = 7;
    int32 field8 = 8;
    int32 field12 = 12;
    int32 field15 = 15;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),g={href:"https://github.com/maxiaoteng001/xiaoteng_demo/blob/master/src/protobuf/mercari_jp/test_mercari.py",target:"_blank",rel:"noopener noreferrer"},y=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`protoc --python_out=. xxx_request.proto
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function k(q,V){const s=l("RouterLink"),d=l("ExternalLinkIcon");return t(),r("div",null,[m,b,o(" more "),p,_,h,e("p",null,[n("python操作protobuf参考: "),i(s,{to:"/python/python_crawler/protobuf.html"},{default:c(()=>[n("Protobuf")]),_:1})]),e("ol",null,[f,e("li",null,[n("解析protobuf模版的思路 "),e("ul",null,[x,e("li",null,[e("p",null,[n("生成python文件方便调用, 参考: "),e("a",g,[n("mercari protobuf"),i(d)]),n(":")]),y])])])])])}const N=a(v,[["render",k],["__file","protobuf_mercari.html.vue"]]);export{N as default};
