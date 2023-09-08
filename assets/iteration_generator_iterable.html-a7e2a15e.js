import{_ as e,Y as i,Z as n,a4 as l}from"./framework-957baa9a.js";const d={},s=l(`<h1 id="迭代器-生成器-可迭代对象" tabindex="-1"><a class="header-anchor" href="#迭代器-生成器-可迭代对象" aria-hidden="true">#</a> 迭代器 生成器 可迭代对象</h1><p>Iteration Generator Iterable</p><ol><li><p>Iterator</p><ul><li>可迭代对象有 <code>__iter__</code> 方法</li><li>迭代器是在可迭代对象基础上, 加<code>__next__</code> 方法</li><li>Python中 string, list, dict, tuple, deque都是可迭代操作的, 但不是迭代器</li></ul></li><li><p>Generator</p><ol><li>列表生成器 set，list， dict都适用<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    a = [1, 2, 3, 4, 5, 6]
    squares = [x ** 2 for x in a]
    even_squares = [x ** 2 for x in a if x % 2 == 0]

    # 矩阵
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    flat = [x for x in row for row in matrix]
    &gt;&gt; flat = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    squared = [[x ** 2 for x in row] for row in matrix]
    &gt;&gt; squared = [[1, 4, 9], [16, 25, 36], [49, 64, 81]]

    # 再复杂的结构，建议使用for循环
    
    # 列表推到每个值都要创建一个全新列表，占用大量内存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>两种生成方法 <ol><li>生成器就是把[] 换成 ()</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>g = (x * x for x in range(10))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>实现yield函数<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 实现了yield的函数
def mygen(n):
    now = 0
    while now &lt; n:
        yield now
        now += 1

if __name__ == &#39;__main__&#39;:
    gen = mygen(10)
    print(isinstance(gen, Generator))  # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>激活生成器 <ol><li>next(g)</li><li>generator.send(None)</li></ol></li><li>生成器的四种状态<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GEN_CREATED # 等待开始执行
GEN_RUNNING # 解释器正在执行（只有在多线程应用中才能看到这个状态）
GEN_SUSPENDED # 在yield表达式处暂停
GEN_CLOSED # 执行结束

from inspect import getgeneratorstate

def mygen(n):
    now = 0
    while now &lt; n:
        yield now
        now += 1

if __name__ == &#39;__main__&#39;:
    gen = mygen(2)
    print(getgeneratorstate(gen))  # GEN_CREATED

    print(next(gen))
    print(getgeneratorstate(gen))  # GEN_SUSPENDED

    print(next(gen))
    gen.close()  # 手动关闭/结束生成器
    print(getgeneratorstate(gen))   # GEN_CLOSED

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>生成器的异常状态 抛出: StopIteration</li></ol></li><li><p>Iterable <code>collections.Iterable</code> 可迭代对象</p><ol><li>生成器(generator)</li><li>string, list, dict, tuple, deque...</li></ol></li></ol>`,3),a=[s];function r(t,v){return i(),n("div",null,a)}const o=e(d,[["render",r],["__file","iteration_generator_iterable.html.vue"]]);export{o as default};
