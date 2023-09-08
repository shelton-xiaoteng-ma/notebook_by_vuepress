import{_ as a,Y as d,Z as u,a0 as l,a1 as n,a2 as e,a3 as r,a4 as i,E as s}from"./framework-957baa9a.js";const c="/images/http_01.jpg",h="/images/django_01.png",_={},p=l("h1",{id:"面试汇总",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#面试汇总","aria-hidden":"true"},"#"),n(" 面试汇总")],-1),m=l("hr",null,null,-1),f=l("h2",{id:"http基础",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#http基础","aria-hidden":"true"},"#"),n(" HTTP基础")],-1),g={href:"https://blog.csdn.net/qzcsu/article/details/72861891",target:"_blank",rel:"noopener noreferrer"},b=i('<ol><li><p>示意图解析 <img src="'+c+'" alt="01"></p><ul><li>客户端–发送带有 SYN 标志的数据包–一次握手–服务端</li><li>服务端–发送带有 SYN/ACK 标志的数据包–二次握手–客户端</li><li>客户端–发送带有带有 ACK 标志的数据包–三次握手–服务端</li></ul></li><li><p>为什么三次握手? 三次握手的目的是建立可靠的通信信道，说到通讯，简单来说就是数据的发送与接收，而三次握手最主要的目的就是<strong>双方确认自己与对方的发送与接收是正常的。</strong></p><ul><li>第一次握手：Client 什么都不能确认；Server 确认了对方发送正常，自己接收正常。</li><li>第二次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己接收正常，对方发送正常</li><li>第三次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己发送、接收正常，对方发送接收正常</li></ul></li><li><p>为什么断开要四次? 断开一个 TCP 连接则需要“四次挥手”：</p><ol><li>客户端-发送一个 FIN，用来关闭客户端到服务器的数据传送</li><li>服务器-收到这个 FIN，它发回一 个 ACK，确认序号为收到的序号加1 。和 SYN 一样，一个 FIN 将占用一个序号</li><li>服务器-关闭与客户端的连接，发送一个FIN给客户端</li><li>客户端-发回 ACK 报文确认，并将确认序号设置为收到序号加1</li></ol></li></ol>',1),k=i("<li><p>转发(Forward)和重定向(Redirect)</p><ul><li>转发是服务器行为, 服务器访问一个url,然后将内容返回给浏览器</li><li>重定向是客户端(浏览器)根据服务器返回的状态吗,配合Location进行重定向</li><li>从数据来看, forward能够共享request的数据</li><li>从效率来看, forward比redirect高</li><li>从客户端来看, forward不能察觉</li><li>使用上, 一般转发用于登录后,根据用户角色转发到相应模块. 跳转用于注销登录后跳转首页或其他页面</li></ul></li><li><p>从浏览器输入url到显示页面, 整个过程会使用哪些协议?</p><ol><li>DNS解析. <ul><li>浏览器查找域名的IP地址</li><li>DNS查找过程: 浏览器缓存,路由器缓存,DNS缓存</li></ul></li><li>与服务器建立TCP连接</li><li>发送HTTP请求</li><li>服务器处理请求并返回报文</li><li>浏览器解析渲染页面</li><li>链接结束</li></ol></li><li><p>为什么要使用线程池, 使用线程池的好处:</p><ul><li>降低资源消耗。 通过重复利用已创建的线程降低线程创建和销毁造成的消耗。</li><li>提高响应速度。 当任务到达时，任务可以不需要的等到线程创建就能立即执行。</li><li>提高线程的可管理性。 线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</li></ul></li>",3),x=l("hr",null,null,-1),y=l("h2",{id:"python基础",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#python基础","aria-hidden":"true"},"#"),n(" Python基础")],-1),w=l("li",null,[l("p",null,"常用库"),l("ul",null,[l("li",null,"requests"),l("li",null,"hashlib"),l("li",null,"demjson | json"),l("li",null,"bs4"),l("li",null,"lxml"),l("li",null,"selenium")])],-1),N=l("p",null,"Python进程的内存结构",-1),P={href:"https://www.jianshu.com/p/4e1c751d85f8",target:"_blank",rel:"noopener noreferrer"},v=l("ol",null,[l("li",null,"text (code segment/text segment) 存放程序执行代码的一块内存区域,也包含一些只读常量."),l("li",null,"data 通常用来存放程序中已初始化的全局变量数据,属于静态内存分配"),l("li",null,"bss (Block Started by Symbol) 通常用来存放程序中未初始化的全局变量"),l("li",null,"堆(heap) 堆用于存放动态变量, 大小不固定,可动态扩张"),l("li",null,"栈(stack)")],-1),S=l("p",null,"Python的垃圾回收机制",-1),T={href:"https://www.jianshu.com/p/1e375fb40506",target:"_blank",rel:"noopener noreferrer"},j=i("<ol><li>Python采用Garbage collection垃圾收集机制，以<code>引用计数</code>为主,<code>标记-清除</code>和<code>分代收集</code>两种机制为辅</li><li>对于<code>引用计数</code>机制,每个对象都是一个<code>PyObject</code>结构体,包含ob_refcnt作为引用计数,当ob_refcnt为0时,将被GC回收. <ul><li>√简单</li><li>√实时性, 平摊内存回收的时间</li><li>X维护引用计数占用资源</li><li>X循环引用会导致永久占用</li></ul></li></ol>",1),C=l("li",null,[l("p",null,"小的知识点"),l("p",null,"Float类型高精度转低精度"),l("pre",null,[l("code",null," ```Python\n     # 字符串化：\n     d = ({:0.2f}).format(f)\n     # round内置函数\n     round(d, 2) \n ```\n")]),l("p",null,"快速排序sorted"),l("pre",null,[l("code",null,` \`\`\`Python
     # list

     x = [2, 9, 100, -1]
     sorted(x, reverse=True) 
     >> [100, 9, 2, -1]
     # 但是x不变 , reverse=True为降序

     # 如果x是复杂元祖
     x = [(2, 9), (100, -1)]
     sorted(x, reverse=True, key= lambda item: item[1])

     # lambda表达式
     lambda item: item[1]
     ## 等价
     def f(item):
         return item[1] 

     # dict

     x = [{'a':1}, {'b', 24}, {'c':44}, {'d':64}, {'e': 5}]
     # 默认按key排序
     sorted(x, reverse=True)
     # 按value排序需指定key
     sorted(x, reverse=True, key=lambda k: x[k])
 \`\`\`
`)]),l("p",null,"*args 和 ** kwargs"),l("pre",null,[l("code",null,` \`\`\`python
     # *args 接收若干个(0-N)值
     def fun(*args):
         for arg in args:
             print arg
     fun(2, 3)
     fun(*[2, 3])
     # *[2, 3, 5] 等价与 2, 3, 5

     # **kwargs 接收若干个(0-N)key=value
     def fun(**kwargs):
         for key in kwargs:
             print(key, kwargs.get(key))
             # 此时的kwargs将输入参数转成了dict
     fun(name='XX', age=18)
     fun(**{"name":"xx", "age":18})
     
     # **{"name":"xx", "age":18}  等价与  name='XX', age=18
     def demo(*args, **kwargs):
         print(args, kwargs)
     
     >>> demo(2, 3, 5, name='mm', **{"age": 8})
     (2, 3, 5) {'name': 'mm', 'age': 8}
 \`\`\`
`)])],-1),I=l("hr",null,null,-1),F=l("h2",{id:"_3-django",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_3-django","aria-hidden":"true"},"#"),n(" 3. django")],-1),W=l("ol",null,[l("li",null,"描述django一次请求的过程")],-1),X=l("p",null,[l("img",{src:h,alt:"1"})],-1),G=l("pre",null,[l("code",null,`1. **接收请求**web服务器接收到来自客户端的请求
2. **代理请求**代理传给Python应用服务器(uWSGI或Gunicorn)
3. **解析请求**Python应用服务器根据WSGI协议解析成一个dict, 发送给Web框架
4. **路由匹配**Web框架初始化Handler对象, 进行路由匹配(urls.py)
5. **视图函数**进入url匹配的视图函数(views.py)
    1. 如果不涉及数据, 直接返回tmplate或Json响应
    2. 如果设计数据, 由Model 从数据库取数据, 填充到template后返回给视图函数, 生成响应
6. **返回**返回响应经中间件, 由应用服务器处理成响应response
7. **处理请求**response发给Web服务器
8. **代理转发**Web服务器将响应发回给客户端
`)],-1);function L(q,A){const t=s("ExternalLinkIcon"),o=s("RouterLink");return d(),u("div",null,[p,m,f,l("ol",null,[l("li",null,[l("p",null,[n("HTTP的三次握手, 参考链接: "),l("a",g,[n("https://blog.csdn.net/qzcsu/article/details/72861891"),e(t)])]),b]),k]),x,y,l("ol",null,[w,l("li",null,[N,l("p",null,[n("参考: "),l("a",P,[n("https://www.jianshu.com/p/4e1c751d85f8"),e(t)]),n("进程分布如下:")]),v]),l("li",null,[S,l("p",null,[n("参考： "),l("a",T,[n("https://www.jianshu.com/p/1e375fb40506"),e(t)])]),j]),C,l("li",null,[l("p",null,[e(o,{to:"/python-basics/process_thread_coroutine.html"},{default:r(()=>[n("进程、线程和协程")]),_:1})])]),l("li",null,[l("p",null,[e(o,{to:"/python-basics/decorators.html"},{default:r(()=>[n("装饰器(Decorators)")]),_:1})])])]),I,F,W,X,G])}const D=a(_,[["render",L],["__file","summary.html.vue"]]);export{D as default};
