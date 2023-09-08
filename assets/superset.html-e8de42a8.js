import{_ as n,Y as t,Z as i,a0 as s,a1 as e,a2 as l,a4 as r,E as p}from"./framework-957baa9a.js";const c={},o=s("h1",{id:"superset",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#superset","aria-hidden":"true"},"#"),e(" superset")],-1),u=r(`<li><p>docker-superset cmd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用代理和访问localhost, 所以设置host</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token comment"># -p 8088:8088 \\</span>
    <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> superset <span class="token punctuation">\\</span>
    <span class="token parameter variable">--net</span> <span class="token function">host</span> <span class="token punctuation">\\</span>
    apache/superset

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> superset superset fab create-admin <span class="token punctuation">\\</span>
        <span class="token parameter variable">--username</span> admin <span class="token punctuation">\\</span>
        <span class="token parameter variable">--firstname</span> Superset <span class="token punctuation">\\</span>
        <span class="token parameter variable">--lastname</span> Admin <span class="token punctuation">\\</span>
        <span class="token parameter variable">--email</span> admin@superset.com <span class="token punctuation">\\</span>
        <span class="token parameter variable">--password</span> adminsuperset

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> superset superset db upgrade

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> superset superset load_examples

<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> superset superset init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),d=s("p",null,"dataset",-1),m=s("li",null,"mysql/sqlite ...",-1),v={href:"https://github.com/apache/superset/issues/8645",target:"_blank",rel:"noopener noreferrer"},b=s("blockquote",null,[s("p",null,"1 Join in SQL Lab - It will be stored in Superset internal database and the view will not be available outside Superset. 2 Create a view in source database by joining those tables and use the view inside Superset")],-1),k=s("li",null,"在superset创建view时, 入口create chart, run in SQL Lab",-1),h=s("li",null,[s("p",null,"How to add filters in superset dashboard?")],-1);function _(f,x){const a=p("ExternalLinkIcon");return t(),i("div",null,[o,s("ol",null,[u,s("li",null,[d,s("ol",null,[m,s("li",null,[s("a",v,[e("How do I join two tables in Superset ?"),l(a)]),b]),k])]),h])])}const g=n(c,[["render",_],["__file","superset.html.vue"]]);export{g as default};
