import{_ as i,Y as a,Z as n,a0 as e,a1 as t,a2 as d,a4 as s,E as c}from"./framework-957baa9a.js";const l={},o=s(`<h1 id="csv-模块" tabindex="-1"><a class="header-anchor" href="#csv-模块" aria-hidden="true">#</a> csv 模块</h1><p>csv用来读写csv文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="普通读写文件" tabindex="-1"><a class="header-anchor" href="#普通读写文件" aria-hidden="true">#</a> 普通读写文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>with open(origin_path,&#39;r&#39;,encoding=&#39;utf-8&#39;) as fr:
      csv_reader=csv.reader(fr)
      addresses={}
      for row in csv_reader:
            if csv_reader.line_num==1:
                  continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按dict读写文件" tabindex="-1"><a class="header-anchor" href="#按dict读写文件" aria-hidden="true">#</a> 按dict读写文件</h2><ul><li><p>写文件 <code> if not os.path.exists(data_path): with open(data_path, &#39;w&#39;, encoding=&#39;utf-8&#39;, newline=&#39;&#39;) as f: csv_writer = csv.DictWriter(f, fieldnames=field) csv_writer.writeheader() with open(data_path, &#39;a&#39;, encoding=&#39;utf-8&#39;, newline=&#39;&#39;) as f: csv_writer = csv.DictWriter(f, fieldnames=field) csv_writer.writerow(item) </code></p></li><li><p>读文件 读取的row类型: <code>collections.OrderedDict</code>, 有get属性, 使用dict(row)转为普通dict <code> with open(author_links_path, &#39;r&#39;, encoding=&#39;utf-8&#39;, newline=&#39;&#39;) as f: csv_reader = csv.DictReader(f, fieldnames=self.author_link_field) for row in csv_reader: if csv_reader.line_num == 1: continue links.append(dict(row)) </code></p></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p>用在csv的read和writer方法,</p><ul><li>delimiter=&#39;,&#39; # 分隔符</li><li>quotechar=&#39;&quot;&#39; # 引用符, 将内容用引号包含,避免歧义</li></ul><h2 id="读写超大文件时" tabindex="-1"><a class="header-anchor" href="#读写超大文件时" aria-hidden="true">#</a> 读写超大文件时</h2>`,11),h={href:"https://stackoverflow.com/questions/15063936/csv-error-field-larger-than-field-limit-131072",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,[e("p",null,"报错: _csv.Error: field larger than field limit (131072) - 原因: csv文件包含特别大的field, 需要修改最大显示 - 解决代码 ``` import sys import csv maxInt = sys.maxsize decrement = True"),e("pre",null,[e("code",null,`      while decrement:
      # decrease the maxInt value by factor 10 
      # as long as the OverflowError occurs.

      decrement = False
      try:
            csv.field_size_limit(maxInt)
      except OverflowError:
            maxInt = int(maxInt/10)
            decrement = True
\`\`\`
`)])])],-1);function u(f,m){const r=c("ExternalLinkIcon");return a(),n("div",null,[o,e("p",null,[e("a",h,[t("参考stackoverflow"),d(r)])]),v])}const p=i(l,[["render",u],["__file","csv-model.html.vue"]]);export{p as default};
