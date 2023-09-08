import{_ as e,Y as i,Z as n,a4 as d}from"./framework-957baa9a.js";const s={},l=d(`<h1 id="编码问题" tabindex="-1"><a class="header-anchor" href="#编码问题" aria-hidden="true">#</a> 编码问题</h1><ol><li><p>Python3有两种表示字符序列的类:bytes 和 str。 bytes的实例包含8个二进制位，str的实例包含Unicode字符。</p></li><li><p>转换时必须使用encode和decode操作</p></li><li><p>编写程序时，通常将编码和解码放在最外围函数，程序的核心代码应该使用Unicode字符类型，而且不要对字符编码做任何假设。</p><ol><li>这样程序可以接受多种类型的文本编码，又保证输出的文本信息只采用一种编码形式</li><li>(来自Effective Python)</li></ol></li></ol><h2 id="_1-辅助函数" tabindex="-1"><a class="header-anchor" href="#_1-辅助函数" aria-hidden="true">#</a> 1. 辅助函数</h2><ol><li>to_str<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    def to_str(bytes_or_str):
        if isInstance(bytes_or_str, bytes):
            value = bytes_or_str.decode(&#39;utf-8&#39;)
        else:
            value = bytes_or_str
        return value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>to_bytes<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    def to_bytes(bytes_or_str):
        if isInstance(bytes_or_str, str):
            value = bytes_or_str.encode(&#39;utf-8&#39;)
        else:
            value = bytes_or_str
        return value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-默认编码" tabindex="-1"><a class="header-anchor" href="#_2-默认编码" aria-hidden="true">#</a> 2. 默认编码</h2><ol><li>python3 默认utf-8 仅适用于转字符串, 文件open()根据系统确定默认的编码格式</li><li>python3的open函数添加了encoding，要求操作接受str实例，如果读写bytes，使用<code>rb</code>或<code>wb</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>s1 = b&#39;test&#39;
s2 = s1.decode(&#39;utf-8&#39;)
type(s1) 
&gt;&gt; &lt;class &#39;bytes&#39;&gt; &lt;class &#39;str&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-html解析编码依据" tabindex="-1"><a class="header-anchor" href="#_3-html解析编码依据" aria-hidden="true">#</a> 3. html解析编码依据</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-编码判断" tabindex="-1"><a class="header-anchor" href="#_4-编码判断" aria-hidden="true">#</a> 4. 编码判断</h2><ol><li><p>字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import chardet
    body = b&#39;...xxtestxx...&#39;
    encode_info = chardet.detect(body)  # body是bytes类型
    encode_str = encode_info.get(&#39;encoding&#39;)
    print(encode_info, encode_str)
        &gt;&gt; {&#39;encoding&#39;: &#39;ascii&#39;, &#39;confidence&#39;: 1.0, &#39;language&#39;: &#39;&#39;}
    item[&#39;body&#39;] = body.decode(encode_str)  # 正确解码为str
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>判断文件的编码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import chardet
    
    # 获取文件编码类型
    def get_encoding(file):
        # 二进制方式读取，获取字节数据，检测类型
        with open(file, &#39;rb&#39;) as f:
            # 对于大文件,最好使用readline
            return chardet.detect(f.readline())[&#39;encoding&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),t=[l];function a(r,c){return i(),n("div",null,t)}const v=e(s,[["render",a],["__file","encode.html.vue"]]);export{v as default};
