import{_ as e,Y as t,Z as p,a0 as n,a1 as s,a2 as o,a4 as c,E as i}from"./framework-957baa9a.js";const l={},r=n("h1",{id:"pycryptodome-模块",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pycryptodome-模块","aria-hidden":"true"},"#"),s(" pycryptodome 模块")],-1),u=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://blog.sqreen.com/stop-using-pycrypto-use-pycryptodome/",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 版本影响使用
sudo pip install pycryptodome==3.9.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-aes" tabindex="-1"><a class="header-anchor" href="#_1-aes" aria-hidden="true">#</a> 1. AES</h2><ol><li>demo<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> Crypto<span class="token punctuation">.</span>Cipher <span class="token keyword">import</span> AES
<span class="token keyword">import</span> base64

<span class="token keyword">def</span> <span class="token function">decode_ecs_nio</span><span class="token punctuation">(</span>res<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&#39;kcc$[41_fpqxxxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 如果key位数不够, 补齐</span>
    <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">16</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        key <span class="token operator">+=</span> <span class="token string">&#39;\\0&#39;</span>
    cipher <span class="token operator">=</span> AES<span class="token punctuation">.</span>new<span class="token punctuation">(</span>key<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> AES<span class="token punctuation">.</span>MODE_ECB<span class="token punctuation">)</span>
    result <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    res_text <span class="token operator">=</span> cipher<span class="token punctuation">.</span>decrypt<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res_text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>AES/CBC/PKCS5Padding加密, CBC加密需要一个十六位的key(密钥)和一个十六位iv(偏移量) <ol><li>Java实现<div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code># 可以发现加密类型, 需要数据块/密码/偏移量/数据字符集 参考nio
# Cipher instance = Cipher.getInstance(&quot;AES/CBC/PKCS5Padding&quot;);
public static final String a(String str, String str2, String str3) {
    Intrinsics.b(str2, &quot;key&quot;);
    Intrinsics.b(str3, &quot;ivValue&quot;);
    try {
        byte[] bytes = str2.getBytes(b);
        Intrinsics.a((Object) bytes, &quot;(this as java.lang.String).getBytes(charset)&quot;);
        SecretKeySpec secretKeySpec = new SecretKeySpec(bytes, &quot;AES&quot;);
        Cipher instance = Cipher.getInstance(&quot;AES/CBC/PKCS5Padding&quot;);
        byte[] bytes2 = str3.getBytes(b);
        Intrinsics.a((Object) bytes2, &quot;(this as java.lang.String).getBytes(charset)&quot;);
        instance.init(2, secretKeySpec, new IvParameterSpec(bytes2));
        byte[] decode = Base64.decode(str, 0);
        Intrinsics.a((Object) decode, &quot;Base64.decode(str,Base64.DEFAULT)&quot;);
        byte[] doFinal = instance.doFinal(decode);
        Intrinsics.a((Object) doFinal, &quot;cipherByte&quot;);
        return new String(doFinal, b);
    } catch (Exception e) {
        return &quot;&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Python<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> base64
<span class="token keyword">from</span> Crypto<span class="token punctuation">.</span>Cipher <span class="token keyword">import</span> AES
<span class="token keyword">from</span> Crypto <span class="token keyword">import</span> Random

<span class="token keyword">def</span> <span class="token function">encrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pad <span class="token operator">=</span> <span class="token keyword">lambda</span> s<span class="token punctuation">:</span> s <span class="token operator">+</span> <span class="token punctuation">(</span>bs <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">%</span> bs<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token builtin">chr</span><span class="token punctuation">(</span>bs <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">%</span> bs<span class="token punctuation">)</span>
    cipher <span class="token operator">=</span> AES<span class="token punctuation">.</span>new<span class="token punctuation">(</span>key<span class="token punctuation">,</span> AES<span class="token punctuation">.</span>MODE_CBC<span class="token punctuation">,</span> iv<span class="token punctuation">)</span>
    data <span class="token operator">=</span> cipher<span class="token punctuation">.</span>encrypt<span class="token punctuation">(</span>pad<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> iv <span class="token operator">+</span> data
    <span class="token keyword">return</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">decrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span><span class="token punctuation">:</span>
    bs <span class="token operator">=</span> AES<span class="token punctuation">.</span>block_size
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> bs<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    unpad <span class="token operator">=</span> <span class="token keyword">lambda</span> s <span class="token punctuation">:</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token builtin">ord</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    cipher <span class="token operator">=</span> AES<span class="token punctuation">.</span>new<span class="token punctuation">(</span>data<span class="token punctuation">,</span> AES<span class="token punctuation">.</span>MODE_CBC<span class="token punctuation">,</span> iv<span class="token punctuation">)</span>
    data  <span class="token operator">=</span> unpad<span class="token punctuation">(</span>cipher<span class="token punctuation">.</span>decrypt<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> data

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token string">&#39;d437814d9185a290af20514d9341b710&#39;</span>
    password <span class="token operator">=</span> <span class="token string">&#39;78f40f2c57eee727a4be179049cecf89&#39;</span> <span class="token comment">#16,24,32位长的密码</span>
    encrypt_data <span class="token operator">=</span> encrypt<span class="token punctuation">(</span>data<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
    encrypt_data <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>encrypt_data<span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;encrypt_data:&#39;</span><span class="token punctuation">,</span> encrypt_data<span class="token punctuation">)</span>


    encrypt_data <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>encrypt_data<span class="token punctuation">)</span>
    decrypt_data <span class="token operator">=</span> decrypt<span class="token punctuation">(</span>encrypt_data<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;decrypt_data:&#39;</span><span class="token punctuation">,</span> decrypt_data<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol>`,4);function v(b,m){const a=i("ExternalLinkIcon");return t(),p("div",null,[r,u,n("p",null,[n("a",d,[s("pycrypto to pycryptodome"),o(a)])]),k])}const h=e(l,[["render",v],["__file","pycryptodome.html.vue"]]);export{h as default};
