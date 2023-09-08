import{_ as i,Y as s,Z as a,a0 as e,a1 as r,a2 as l,a4 as d,E as o}from"./framework-957baa9a.js";const t={},c=d(`<h1 id="multiprocessing" tabindex="-1"><a class="header-anchor" href="#multiprocessing" aria-hidden="true">#</a> multiprocessing</h1><p>用来执行python的函数，他启动的进程会重新加载父进程的代码。可以通过Queue、Array、Value等对象来通信。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><ol><li><p>普通用法</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from multiprocessing import Process

def p_job(x):
    ...

pros = []
for i in range(5):
    p = Process(target=p_job, args=(i,))
    p.start()
    pros.append(p)
# 先启动子进程，再join，父进程等待
for pro in pros:
    pro.join()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进程池 Pool</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from multiprocessing import Pool
import os, time, random

def long_time_task(name):
    print(&#39;Run task %s (%s)...&#39; % (name, os.getpid()))
    start = time.time()
    time.sleep(random.random() * 3)
    end = time.time()
    print(&#39;Task %s runs %0.2f seconds.&#39; % (name, (end - start)))

if __name__==&#39;__main__&#39;:
    print(&#39;Parent process %s.&#39; % os.getpid())
    p = Pool(4)
    for i in range(5):
        p.apply_async(long_time_task, args=(i,))
    print(&#39;Waiting for all subprocesses done...&#39;)
    p.close()
    p.join()
    print(&#39;All subprocesses done.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-多进程超时退出问题" tabindex="-1"><a class="header-anchor" href="#_2-多进程超时退出问题" aria-hidden="true">#</a> 2. 多进程超时退出问题</h2>`,5),m={href:"https://stackoverflow.com/questions/29494001/how-can-i-abort-a-task-in-a-multiprocessing-pool-after-a-timeout#",target:"_blank",rel:"noopener noreferrer"};function v(u,p){const n=o("ExternalLinkIcon");return s(),a("div",null,[c,e("p",null,[e("a",m,[r("https://stackoverflow.com/questions/29494001/how-can-i-abort-a-task-in-a-multiprocessing-pool-after-a-timeout#"),l(n)])])])}const h=i(t,[["render",v],["__file","multiprocessing.html.vue"]]);export{h as default};
