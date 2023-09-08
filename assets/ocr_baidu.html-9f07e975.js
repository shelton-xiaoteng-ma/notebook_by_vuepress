import{_ as n,Y as e,Z as s,a4 as i}from"./framework-957baa9a.js";const a={},l=i(`<h1 id="ocr-百度api调用" tabindex="-1"><a class="header-anchor" href="#ocr-百度api调用" aria-hidden="true">#</a> OCR 百度api调用</h1><p>[TOC]</p><ol><li>文档 https://ai.baidu.com/ai-doc/OCR/fk3h7xu7h</li><li>注册 <ol><li>控制台选择文字识别 --&gt; 通用文字识别 --&gt; 创建应用 --&gt; 获取到api key 和secrec key</li><li>获取access token, 有效期一个月<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    <span class="token comment"># encoding:utf-8</span>
    <span class="token keyword">import</span> requests 

    <span class="token comment"># client_id 为官网获取的AK， client_secret 为官网获取的SK</span>
    host <span class="token operator">=</span> <span class="token string">&#39;https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&amp;client_id=【官网获取的AK】&amp;client_secret=【官网获取的SK】&#39;</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>host<span class="token punctuation">)</span>
    <span class="token keyword">if</span> response<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>发请求<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def general_basic(pic_path):
    &#39;&#39;&#39;
    百度文字识别接口
    通用文字识别
    &#39;&#39;&#39;
    request_url = &quot;https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic&quot;
    # 二进制方式打开图片文件
    f = open(pic_path, &#39;rb&#39;)
    img = base64.b64encode(f.read())

    params = {&quot;image&quot;:img}
    access_token = &#39;------&#39;
    request_url = request_url + &quot;?access_token=&quot; + access_token
    headers = {&#39;content-type&#39;: &#39;application/x-www-form-urlencoded&#39;}
    response = requests.post(request_url, data=params, headers=headers)
    print(&#39;百度api返回:{}&#39;.format(response.json()))
    if response:
        words = response.json().get(&#39;words_result&#39;)
        if words == []:
            return &#39;&#39;
        else:
            return words[0].get(&#39;words&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>费用: <ol><li>通用文字每天5w免费</li><li>https://ai.baidu.com/ai-doc/OCR/fk3h7xu7h</li></ol></li></ol></li></ol>`,3),t=[l];function c(d,r){return e(),s("div",null,t)}const u=n(a,[["render",c],["__file","ocr_baidu.html.vue"]]);export{u as default};
