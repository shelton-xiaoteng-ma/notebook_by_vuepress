import{_ as e,Y as t,Z as i,a0 as l,a1 as o}from"./framework-957baa9a.js";const n={},s=l("h1",{id:"mysql-optimization",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#mysql-optimization","aria-hidden":"true"},"#"),o(" mysql_optimization")],-1),a=l("ol",null,[l("li",null,[o("查询时优先考虑降低查询结果的大小 "),l("ol",null,[l("li",null,"比如：group_by > join"),l("li",null,"select 出需要的信息减少表容量")])]),l("li",null,[o("查看后台进程 "),l("ol",null,[l("li",null,"show full processlist;"),l("li",null,"select * from information_schema.innodb_trx\\G")])])],-1),_=[s,a];function c(r,m){return t(),i("div",null,_)}const d=e(n,[["render",c],["__file","mysql_optimization.html.vue"]]);export{d as default};
