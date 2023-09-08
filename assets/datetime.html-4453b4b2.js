import{_ as i,Y as e,Z as t,a4 as l}from"./framework-957baa9a.js";const a={},d=l(`<h1 id="datetime-time" tabindex="-1"><a class="header-anchor" href="#datetime-time" aria-hidden="true">#</a> datetime time</h1><blockquote><p>datetime比time高级了不少，可以理解为datetime基于time进行了封装，提供了更多实用的函数。在datetime 模块中包含了几个类，具体关系如下:</p></blockquote><ul><li>对象 <ul><li>timedelta # 主要用于计算时间跨度</li><li>tzinfo # 时区相关</li><li>time # 只关注时间</li><li>date # 只关注日期</li><li>datetime # 同时有时间和日期</li></ul></li></ul><ol><li>datetime <ol><li>属性 <ul><li>datetime.year</li><li>datetime.month</li><li>datetime.day</li><li>datetime.hour</li><li>datetime.minute</li><li>datetime.second</li><li>datetime.microsecond</li><li>datetime.tzinfo</li><li>datetime.date() # 返回date对象</li><li>datetime.time() # 返回time对象</li><li>datetime.replace(name=value) # 替换各个属性，因为是只读，只有这样才能修改</li><li>datetime.timetuple() # 返回time.struct_time对象</li><li>datetime.strftime(format) # 按照format进行格式化</li><li>datetime.strptime(date_string, format) # 按照format解析时间</li><li>datetime.datetime.fromtimestamp(str_timestamp) # 转换时间戳为datetime</li></ul></li><li>实例的方法 <ol><li>datetime.today() # 当前时间，localtime</li><li>datetime.now([tz]) # 当前默认时间 localtime,datetime.datetime实例</li><li>datetime.utcnow() # 当前UTC时间</li></ol></li></ol></li><li>datedelta<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    In [1]: import datetime
    In [2]: time_now = datetime.datetime.now()
    In [3]: time_now
    Out[3]: datetime.datetime(2014, 10, 27, 21, 46, 16, 657523)

    In [4]: delta1 = datetime.timedelta(hours=25)
    In [5]: print(time_now + delta1)
    2014-10-28 22:46:16.657523

    In [6]: print(time_now - delta1)
    2014-10-26 20:46:16.657523
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>时区 <ol><li>起因是在日本服务器运行, 写入时间差一小时<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import datetime
    # utc now
    utc_now = datetime.datetime.utcnow()
    now = datetime.datetime.utcnow()
    # +8:00 时间
    now = utc_now.astimezone(datetime.timezone(datetime.timedelta(hours=8)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>其他 <ol><li>上周五的算法 &#39;&#39;&#39; weeks = { &#39;MONDAY&#39;: 0, &#39;TUESDAY&#39;: 1, &#39;WEDNESDAY&#39;: 2, &#39;THURSDAY&#39;: 3, &#39;FRIDAY&#39;: 4, &#39;SATURDAY&#39;: 5, &#39;SUNDAY&#39;: 6, } datetime.date.today() - datetime.timedelta(days=time.localtime().tm_wday - 4 + 7) &#39;&#39;&#39;</li><li>strptime的其他: <ul><li>%Y 年 2016</li><li>%m 月 12</li><li>%d 日(在月中) 25</li><li>%a 周（英文简写） Mon</li><li>%A 周（英文全写） Monday</li><li>%b 月（英文简写） Dec</li><li>%B 月（英文全写） December</li><li>%H 时(24) 18</li><li>%p AM或者PM PM</li><li>%I 时(12) 6</li><li>%M 分 28</li><li>%S 秒 32</li><li>%f 微秒 4321</li><li>%c: 日期时间的字符串表示。（如： 04/07/10 10:43:39）</li><li>%j: 日在年中的天数 [001,366]（是当年的第几天）</li><li>%U: 周在当年的周数当年的第几周），星期天作为周的第一天</li><li>%w: 今天在这周的天数，范围为[0, 6]，6表示星期天</li><li>%W: 周在当年的周数（是当年的第几周），星期一作为周的第一天</li><li>%x: 日期字符串（如：04/07/10）</li><li>%X: 时间字符串（如：10:43:39）</li><li>%y: 2个数字表示的年份</li><li>%z: 与utc时间的间隔 （如果是本地时间，返回空字符串）</li><li>%Z: 时区名称（如果是本地时间，返回空字符串）</li><li>链接：https://www.jianshu.com/p/937d6415c96f</li></ul></li></ol></li></ol><h2 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h2><ol><li><p>生成时间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import time
time.time()  
int(time.time())  # 10位整数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>datetime转time</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import datetime
now = datetime.datetime.now()
now.timestamp()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),n=[d];function m(s,r){return e(),t("div",null,n)}const c=i(a,[["render",m],["__file","datetime.html.vue"]]);export{c as default};
