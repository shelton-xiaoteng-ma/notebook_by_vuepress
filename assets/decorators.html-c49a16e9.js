import{_ as e,Y as n,Z as i,a4 as a}from"./framework-957baa9a.js";const s={},r=a(`<h1 id="decorators-装饰器" tabindex="-1"><a class="header-anchor" href="#decorators-装饰器" aria-hidden="true">#</a> Decorators 装饰器</h1><p>主要还是利用了Python能够接收和返回函数的功能</p><h2 id="_1-闭包" tabindex="-1"><a class="header-anchor" href="#_1-闭包" aria-hidden="true">#</a> 1. 闭包</h2><ol><li>实例<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    def zoo(acount):
        def _inner():
            print(acount)

        return _inner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-装饰器" tabindex="-1"><a class="header-anchor" href="#_2-装饰器" aria-hidden="true">#</a> 2. 装饰器</h2><ol><li>实例<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    ## 定义一个装饰器, 将原来函数的参数输出一下, 就用到了所有情况
    def demo(func):
        def _warpper(*args, **kwargs):
            print(&#39;我是装饰器demo的功能&#39;)
            print(&#39;输出的args和kwargs来自被装饰函数, args:{},kwargs: {} &#39;.format(args, kwargs))
            func(*args, **kwargs)

        return _warpper

    # 使用
    @demo
    def func(*args, **kwargs):
        print(&#39;来自原始函数&#39;, args, kwargs)

    # 测试
    func(2, 3, 5, name=&#39;mm&#39;, **{&quot;age&quot;: 8})
    &gt;&gt;  我是装饰器demo的功能
        输出的args和kwargs来自被装饰函数, args:(2, 3, 5),kwargs: {&#39;name&#39;: &#39;mm&#39;, &#39;age&#39;: 8}
        来自原始函数 (2, 3, 5) {&#39;name&#39;: &#39;mm&#39;, &#39;age&#39;: 8}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),d=[r];function l(c,t){return n(),i("div",null,d)}const u=e(s,[["render",l],["__file","decorators.html.vue"]]);export{u as default};
