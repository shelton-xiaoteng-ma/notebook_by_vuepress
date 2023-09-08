import{_ as e,Y as n,Z as i,a4 as s}from"./framework-957baa9a.js";const d={},r=s(`<h1 id="进程-线程-和-协程" tabindex="-1"><a class="header-anchor" href="#进程-线程-和-协程" aria-hidden="true">#</a> 进程 线程 和 协程</h1><p>Process Thread Coroutine 线程是最小的执行单元, 进程由至少一个线程组成.<br> 进程和线程的调度完全由操作系统调度</p><h2 id="_1-process-进程" tabindex="-1"><a class="header-anchor" href="#_1-process-进程" aria-hidden="true">#</a> 1. Process 进程</h2><ol><li>os模块封装了常见的系统调用, <ol><li>fork()调用一次,返回两次.因为父进程可以fork多个子进程</li><li>父进程返回子进程的pid</li><li>子进程返回0,子进程.getppid()返回父进程的pid</li></ol></li><li>如何选择 <ol><li>参考 <ol><li>https://stackoverflow.com/questions/2629680/deciding-among-subprocess-multiprocessing-and-thread-in-python</li><li>https://stackoverflow.com/questions/13606867/what-is-the-difference-between-multiprocessing-and-subprocess</li></ol></li><li>multiprocessing调用任务通常是python编写的, 而subprocess可以运行和控制其他程序</li></ol></li><li>multiprocessing <ol><li><p>模块提供了Process类来代表一个进程对象</p></li><li><p>启动一个进程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from multiprocessing import Process
import os

# 子进程要执行的代码
def run_proc(name):
    print(&#39;Run child process %s (%s)...&#39; % (name, os.getpid()))

if __name__==&#39;__main__&#39;:
    print(&#39;Parent process %s.&#39; % os.getpid())
    p = Process(target=run_proc, args=(&#39;test&#39;,))
    print(&#39;Child process will start.&#39;)
    p.start()
    p.join()
    print(&#39;Child process end.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进程池 Pool</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from multiprocessing import Pool
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>SubProcess 很多时候,子进程并不是自身,而是一个外部进程,我们创建子进程还需要控制输入和输出. 下面演示了在进程中运行命令行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import subprocess

    print(&#39;$ nslookup www.python.org&#39;)
    r = subprocess.call([&#39;nslookup&#39;, &#39;www.python.org&#39;])
    print(&#39;Exit code:&#39;, r)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子进程的输入 相当于先输入命令<code>nslookup</code>,然后输入内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import subprocess

    print(&#39;$ nslookup&#39;)
    p = subprocess.Popen([&#39;nslookup&#39;], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, err = p.communicate(b&#39;set q=mx\\npython.org\\nexit\\n&#39;)
    print(output.decode(&#39;utf-8&#39;))
    print(&#39;Exit code:&#39;, p.returncode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进程间通信</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    from multiprocessing import Process, Queue
    import os, time, random

    # 写数据进程执行的代码:
    def write(q):
        print(&#39;Process to write: %s&#39; % os.getpid())
        for value in [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]:
            print(&#39;Put %s to queue...&#39; % value)
            q.put(value)
            time.sleep(random.random())

        # 读数据进程执行的代码:
    def read(q):
        print(&#39;Process to read: %s&#39; % os.getpid())
        while True:
            value = q.get(True)
            print(&#39;Get %s from queue.&#39; % value)

    if __name__==&#39;__main__&#39;:
        # 父进程创建Queue，并传给各个子进程：
        q = Queue()
        pw = Process(target=write, args=(q,))
        pr = Process(target=read, args=(q,))
        # 启动子进程pw，写入:
        pw.start()
        # 启动子进程pr，读取:
        pr.start()
        # 等待pw结束:
        pw.join()
        # pr进程里是死循环，无法等待其结束，只能强行终止:
        pr.terminate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="_2-thread-线程" tabindex="-1"><a class="header-anchor" href="#_2-thread-线程" aria-hidden="true">#</a> 2. Thread 线程</h2><p>常用模块threading, 封装了(_thread)</p><ol><li><p>启动一个线程</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import time, threading

    # 新线程执行的代码:
    def loop():
        print(&#39;thread %s is running...&#39; % threading.current_thread().name)
        n = 0
        while n &lt; 5:
            n = n + 1
            print(&#39;thread %s &gt;&gt;&gt; %s&#39; % (threading.current_thread().name, n))
            time.sleep(1)
        print(&#39;thread %s ended.&#39; % threading.current_thread().name)

    print(&#39;thread %s is running...&#39; % threading.current_thread().name)
    t = threading.Thread(target=loop, name=&#39;LoopThread&#39;)
    t.start()
    t.join()
    print(&#39;thread %s ended.&#39; % threading.current_thread().name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Lock</p></li></ol><blockquote><p>多线程和多进程最大的不同在于:</p><ul><li>多进程中，同一个变量，各自有一份拷贝存在于每个进程中，互不影响，</li><li>多线程中，所有变量都由所有线程共享，所以，任何一个变量都可以被任何一个线程修改，因此，线程之间共享数据最大的危险在于多个线程同时改一个变量，把内容给改乱了。 \`\`\` import time, threading</li></ul></blockquote><pre><code>    # 假定这是你的银行存款:
    balance = 0

    def change_it(n):
        # 先存后取，结果应该为0:
        global balance
        balance = balance + n
        balance = balance - n

    def run_thread(n):
        for i in range(100000):
            # 先要获取锁:
            lock.acquire()
            try:
                # 放心地改吧:
                change_it(n)
            finally:
                # 改完了一定要释放锁:
                lock.release()

    t1 = threading.Thread(target=run_thread, args=(5,))
    t2 = threading.Thread(target=run_thread, args=(8,))
    t1.start()
    t2.start()
    t1.join()
    t2.join()
    print(balance)
\`\`\`
</code></pre><ol start="3"><li>由于Python的GIL锁(Global Interpreter Lock),多线程只能占用1核,交替跑,要想实现多核多任务的程序,需要使用<code>多进程</code>实现.</li></ol><h2 id="_3-threadlocal" tabindex="-1"><a class="header-anchor" href="#_3-threadlocal" aria-hidden="true">#</a> 3. ThreadLocal</h2><p>一个ThreadLocal变量虽然是全局变量，但每个线程都只能读写自己线程的独立副本，互不干扰。ThreadLocal解决了参数在一个线程中各个函数之间互相传递的问题。 \`\`\` import threading</p><pre><code>    # 创建全局ThreadLocal对象:
    local_school = threading.local()

    def process_student():
        # 获取当前线程关联的student:
        std = local_school.student
        print(&#39;Hello, %s (in %s)&#39; % (std, threading.current_thread().name))

    def process_thread(name):
        # 绑定ThreadLocal的student:
        local_school.student = name
        process_student()

    t1 = threading.Thread(target= process_thread, args=(&#39;Alice&#39;,), name=&#39;Thread-A&#39;)
    t2 = threading.Thread(target= process_thread, args=(&#39;Bob&#39;,), name=&#39;Thread-B&#39;)
    t1.start()
    t2.start()
    t1.join()
    t2.join()
\`\`\`
</code></pre><h2 id="_4-进程-vs-线程" tabindex="-1"><a class="header-anchor" href="#_4-进程-vs-线程" aria-hidden="true">#</a> 4. 进程 VS 线程</h2><ol><li><p>实现多任务,通常我们会设计Master-Worker模式,Master负责分配任务,Worker负责执行任务.</p></li><li><p>多进程稳定但占用资源多, 多线程占用资源少但易崩溃. 而且线程切换影响效率</p></li><li><p>计算密集型任务适合C语言开发,切换任务会占用CPU使用时间, IO密集型任务则是开发效率高最好.</p></li><li><p>异步IO</p></li></ol><h2 id="_5-分布式进程" tabindex="-1"><a class="header-anchor" href="#_5-分布式进程" aria-hidden="true">#</a> 5. 分布式进程</h2><h2 id="_6-coroutine-协程" tabindex="-1"><a class="header-anchor" href="#_6-coroutine-协程" aria-hidden="true">#</a> 6. Coroutine 协程</h2><p>生成器为我们引入了暂停函数执行（yield）的功能。当有了暂停的功能之后，人们就想能不能在生成器暂停的时候向其发送一点东西（其实上面也有提及：send(None)）。这种向暂停的生成器发送信息的功能通过 PEP 342 进入 Python 2.5 中，并催生了 Python 中协程的诞生。根据 wikipedia 中的定义<br><code>协程是为非抢占式多任务产生子程序的计算机程序组件，协程允许不同入口点在不同位置暂停或开始执行程序。</code> - 注意从本质上而言，协程并不属于语言中的概念，而是编程模型上的概念。 - 子程序调用是通过栈实现的，一个线程就是执行一个子程序。</p><ol><li>优势 <ol><li>子程序切换不是线程切换,由程序自身控制,没有线程切换的开销</li><li>不需要多线程的锁机制,效率高</li><li>使用多核CPU可以 多进程+ 协程</li></ol></li><li>用法<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    def jumping_range(N):
        index = 0
        while index &lt; N:
            # 通过send()发送的信息将赋值给jump
            jump = yield index
            if jump is None:
                jump = 1
            index += jump

    if __name__ == &#39;__main__&#39;:
        itr = jumping_range(5)
        print(next(itr))
        print(itr.send(2))
        print(next(itr))
        print(itr.send(-1))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>重点是jump = yield index这个语句。分成两部分： <ul><li>yield index 是将index return给外部调用程序。</li><li>jump = yield 可以接收外部程序通过send()发送的信息，并赋值给jump</li></ul></li></ol></li></ol>`,19),l=[r];function a(t,c){return n(),i("div",null,l)}const u=e(d,[["render",a],["__file","process_thread_coroutine.html.vue"]]);export{u as default};
