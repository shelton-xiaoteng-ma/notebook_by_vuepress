import{_ as n,Y as c,Z as a,a0 as e,a2 as s,a3 as i,a1 as o,E as r}from"./framework-957baa9a.js";const l={},h=e("h1",{id:"cookies",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cookies","aria-hidden":"true"},"#"),o(" Cookies")],-1),d=e("p",null,"[TOC]",-1),_=e("h2",{id:"_1-set-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-set-cookie","aria-hidden":"true"},"#"),o(" 1. set cookie")],-1),k=e("ol",null,[e("li",null,"scrapy 自动管理cookie, 无需过多干预"),e("li",null,[o("refresh_cookie 因为scrapy启用cookie之后会不断合并response的set-cookie, 如果只希望发送是携带指定cookie, 可以使用"),e("code",null,"dont_merge_cookies")])],-1),u=e("h2",{id:"_2-get-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-get-cookie","aria-hidden":"true"},"#"),o(" 2. get cookie")],-1),p=e("h2",{id:"_3-get-set-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-get-set-cookie","aria-hidden":"true"},"#"),o(" 3. get set_cookie")],-1),f=e("pre",null,[e("code",null,`\`\`\`python
import requests
from http.cookies import SimpleCookie
res = requests.get('https://www.xiaohongshu.com/')
cookie = SimpleCookie(res.headers.get('Set-Cookie'))
for i in cookie.values():
    i.key
    i.value

# scrpay
cookies = response.headers.getlist('Set-Cookie')
for cookie in cookies:
    cookie = cookie.decode('utf-8')
    cookie_dict = SimpleCookie(cookie)
    for i in cookie_dict.values():
        i.key
        i.value
\`\`\`
`)],-1);function m(y,g){const t=r("RouterLink");return c(),a("div",null,[h,d,_,e("ol",null,[e("li",null,[s(t,{to:"/python/python_basic/requests.html##1"},{default:i(()=>[o("requests")]),_:1})]),e("li",null,[s(t,{to:"/python/python_basic/Scrapy/request-and-response.html##1"},{default:i(()=>[o("scrapy")]),_:1}),k])]),u,e("ol",null,[e("li",null,[s(t,{to:"/python/python_basic/requests.html##1"},{default:i(()=>[o("requests")]),_:1})]),e("li",null,[s(t,{to:"/python/python_basic/Scrapy/request-and-response.html##1"},{default:i(()=>[o("scrapy")]),_:1})])]),p,f])}const C=n(l,[["render",m],["__file","cookies.html.vue"]]);export{C as default};
