import{_ as t,Y as r,Z as l,a0 as e,a1 as i,a2 as a,a4 as s,E as o}from"./framework-957baa9a.js";const d={},c=s(`<h1 id="飞常准" tabindex="-1"><a class="header-anchor" href="#飞常准" aria-hidden="true">#</a> 飞常准</h1><p>[TOC]</p><p>飞常准解决的问题:</p><ol><li>请求响应aes加密</li><li>signature作为请求参数验证</li><li>uniqueId注册机制可以免登录爬取, 每个uniqueId又有限制次数(app内前端设置限制三次, 实际上可使用次数更多)</li></ol><p>版本<code>[vz.com_V5.0.9.apk]</code></p><h2 id="_1-signature解密问题" tabindex="-1"><a class="header-anchor" href="#_1-signature解密问题" aria-hidden="true">#</a> 1. signature解密问题</h2><ol><li><p>逆向app结合frida动态调试, 分析发现加密调用了<code>com.feeyo.vz.core.VZCore.g</code></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.feeyo.vz.core;

import android.content.Context;

public class VZCore {
    static {
        System.loadLibrary(&quot;Natciml&quot;);
    }

    public static native byte[] de(String str, byte[] bArr);

    public static native byte[] en(String str, byte[] bArr);

    public static native String g(Context context, String[] strArr);

    public static native String l(Context context);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>采用xposed hook调用实现, sekiro提供服务</p></li></ol><h2 id="_2-uniqueid注册问题" tabindex="-1"><a class="header-anchor" href="#_2-uniqueid注册问题" aria-hidden="true">#</a> 2. uniqueId注册问题</h2>`,8),v={href:"https://app.variflight.com/v4/config/newInstall?devicetimezone=28800&feeyo_mode=xe1",target:"_blank",rel:"noopener noreferrer"},u={href:"https://app.variflight.com/v4/tripindex/getFutureTrip?feeyo_mode=xe1",target:"_blank",rel:"noopener noreferrer"},p={href:"https://app.variflight.com/crawl/InstalledApps?feeyo_mode=xe1",target:"_blank",rel:"noopener noreferrer"};function m(h,b){const n=o("ExternalLinkIcon");return r(),l("div",null,[c,e("ol",null,[e("li",null,[i("uniqueId在2021年3月份只需要一个请求即可注册为有效, 6月份需要多个请求 "),e("ul",null,[e("li",null,[e("a",v,[i("https://app.variflight.com/v4/config/newInstall?devicetimezone=28800&feeyo_mode=xe1"),a(n)])]),e("li",null,[e("a",u,[i("https://app.variflight.com/v4/tripindex/getFutureTrip?feeyo_mode=xe1"),a(n)])]),e("li",null,[e("a",p,[i("https://app.variflight.com/crawl/InstalledApps?feeyo_mode=xe1"),a(n)])])])])])])}const f=t(d,[["render",m],["__file","variflight.html.vue"]]);export{f as default};
