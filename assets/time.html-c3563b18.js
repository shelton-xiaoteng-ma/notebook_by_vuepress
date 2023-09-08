import{_ as e,Y as i,Z as t,a4 as n}from"./framework-957baa9a.js";const m={},a=n(`<h1 id="time-模块" tabindex="-1"><a class="header-anchor" href="#time-模块" aria-hidden="true">#</a> time 模块</h1><p>time归类在<code>Generic Operating System Services</code>中，是围绕着 Unix Timestamp 进行的，其所能表述的日期范围被限定在 1970 - 2038 之间。</p><ol><li><p>time.time()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    # 返回float类型的时间
    now_time = time.time()
    print(now_time)   // →  1532328411.9794893
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>int(time.time())</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    返回int的时间，通常做时间戳

    print(int(time.time())   // →  1532328411
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>time.localtime(time.time())</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    返回一个对象time.structtime, 可以用 localtime.year 得到当前时间的年

    local_time = time.localtime(time.time())
    
    print(localtime)    // → time.structtime(tmyear=2018, tmmon=7, tmmday=23, tmhour=14, tmmin=46, tmsec=51, tmwday=0, tmyday=204, tm_isdst=0)

    print(type(localtime)  // → &lt;class &#39;time.structtime&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>time.strftime(formate, value)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    格式化时间
    format = &#39;%Y - %m - %d - %H - %M - %S&#39;   // month和day要小写
    dt = time.strftime(format, value)    // →  2018 - 07 - 23 - 15 - 16 - 19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>time.strptime()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    # 反格式化时间
    nowtime = time.strptime(strtime, format)
    // → 返回time.structtime类型的对象
    print(nowtime)  // → time.structtime(tmyear=2018, tmmon=7, tmmday=23, tmhour=15, tmmin=16, tmsec=19, tmwday=0, tmyday=204, tmisdst=-1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),s=[a];function d(l,r){return i(),t("div",null,s)}const v=e(m,[["render",d],["__file","time.html.vue"]]);export{v as default};
