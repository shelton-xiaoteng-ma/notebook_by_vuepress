import{_ as t,Y as a,Z as l,a0 as e,a1 as n}from"./framework-957baa9a.js";const o={},s=e("h1",{id:"html-实体",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#html-实体","aria-hidden":"true"},"#"),n(" HTML 实体")],-1),c=e("blockquote",null,[e("blockquote",null,[e("p",null,"有些字符，像(<)这类的，对HTML（标准通用标记语言下的一个应用）来说是有特殊意义的，所以这些字符是不允许在文本中使用的。要在HTML中显示(<)这个字符，我们就必须使用实体字符。")])],-1),r=e("p",null,"主要是爬台湾贸易数据网站和日本的网站，遇到html返回的以&#开头的字符，python的print输出自动转成字符串，但是没法处理，随发现html有转义的方法",-1),h=e("h2",{id:"_1-使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-使用","aria-hidden":"true"},"#"),n(" 1. 使用")],-1),_=e("pre",null,[e("code",null,`\`\`\`
    <a rel="nofollow" href="/%E6%B1%82%E4%BA%BA?q=%C2%A56,000,000&amp;l=%E7%B3%9F%E5%B1%8B%E9%83%A1" title="600&#x4E07;&#x5186; (11)">
        <span class="rbLabel">600&#19975;&#20870;</span>                  
        <span class="rbCount">(11)</span>
    </a> 

    from html import unescape
    unescape("200&#x4E07;&#x5186; (3156)")
    # 即可显示正常字符
\`\`\`
`)],-1),d=[s,c,r,h,_];function i(u,p){return a(),l("div",null,d)}const f=t(o,[["render",i],["__file","html.html.vue"]]);export{f as default};
