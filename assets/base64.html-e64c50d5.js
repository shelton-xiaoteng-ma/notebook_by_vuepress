import{_ as e,Y as a,Z as n,a4 as i}from"./framework-957baa9a.js";const s={},d=i(`<h1 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> base64</h1><p>base64 是一种用 64 个字符来表示任意二进制数据的方法</p><ol><li>demo</li></ol><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import base64

def get_base64_code(file_path):
    with open(file_path, &#39;rb&#39;) as f:  # 以二进制读取图片
        data = f.read()
        encodestr = base64.b64encode(data) # 得到 byte 编码的数据
        return encodestr

def base64_decode(base64_code, file_path):
    with open(file_path, &#39;wb&#39;) as f:  # 以二进制读取图片
        f.write(base64.b64decode(base64_code))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function t(c,r){return a(),n("div",null,l)}const b=e(s,[["render",t],["__file","base64.html.vue"]]);export{b as default};
