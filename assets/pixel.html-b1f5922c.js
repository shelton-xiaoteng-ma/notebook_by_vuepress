import{_ as s,Y as n,Z as r,a0 as l,a1 as e,a2 as t,a4 as i,E as a}from"./framework-957baa9a.js";const d={},u=l("h1",{id:"配置pixel做开发机",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#配置pixel做开发机","aria-hidden":"true"},"#"),e(" 配置pixel做开发机")],-1),h=l("h2",{id:"pixel基本配置",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#pixel基本配置","aria-hidden":"true"},"#"),e(" Pixel基本配置")],-1),p=l("li",null,[e("解锁bootloader "),l("ol",null,[l("li",null,[e("进入bootloader "),l("ol",null,[l("li",null,[e("关机后长按"),l("code",null,"电源"),e(" + "),l("code",null,"音量减")]),l("li",null,[e("adb进入: "),l("code",null,"adb reboot bootloader")])])]),l("li",null,"fastboot boot path/to/twrp.img")])],-1),c={href:"https://developers.google.cn/android/images#sailfish",target:"_blank",rel:"noopener noreferrer"},_=l("code",null,"sailfish-pq3a.190801.002-factory-029a3376.zip",-1),g=l("li",null,[e("mac安装"),l("code",null,"brew cask reinstall android-platform-tools")],-1),m={href:"https://developer.android.google.cn/studio/releases/platform-tools.html",target:"_blank",rel:"noopener noreferrer"},b=l("li",null,[e("解压到目录, 连接手机, 手机进入"),l("code",null,"bootloader"),e(", 电脑端运行"),l("code",null,"sh flash-all.sh"),e("即可")],-1),f={href:"https://twrp.me/google/googlepixel.html",target:"_blank",rel:"noopener noreferrer"},k=l("li",null,[l("code",null,"fastboot boot image/twrp-3.2.3-0-sailfish.img"),e(", 确保手机处于"),l("code",null,"bootloader")],-1),x=l("li",null,"进入twrp",-1),M=l("code",null,"Magisk-v20.4.zip",-1),v={href:"https://github.com/topjohnwu/Magisk/releases",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/RikkaApps/Riru/releases",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/ElderDrivers/EdXposed/releases",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/ElderDrivers/EdXposedManager/releases",target:"_blank",rel:"noopener noreferrer"},R=l("li",null,[e("Edxposed "),l("ol",null,[l("li",null,"Xposed只支持到8.0, 之后需要edxposed"),l("li",null,"从Magisk安装即可, 见4.2.2"),l("li",null,[e("模块安装: "),l("ol",null,[l("li",null,"mobi.acpm.sslunpinning_latest.apk"),l("li",null,"TrustMeAlready-v1.11-release.apk")])])])],-1),X={href:"https://qiedd.com/1532.html",target:"_blank",rel:"noopener noreferrer"},y=l("ol",null,[l("li",null,"Lsposed 是一个非全局的 Xposed 框架，性能比 EdXposed 好"),l("li",null,[e("大概操作步骤： "),l("ul",null,[l("li",null,"手机解锁 bootloader"),l("li",null,"刷入Magisk，替换 boot 分区来获取 ROOT 权限"),l("li",null,"magisk设置中打开zygisk，安装 Lsposed 框架"),l("li",null,"安装 JustTrustMe 或者 SSLUnpinning，给某个应用启用即可")])])],-1),z=l("h2",{id:"pixel-4xl",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#pixel-4xl","aria-hidden":"true"},"#"),e(" pixel 4xl")],-1),S=l("li",null,"解锁bootloader, 购买已解锁",-1),D={href:"https://developer.android.google.cn/studio/releases/platform-tools.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://developers.google.com/android/images",target:"_blank",rel:"noopener noreferrer"},T=l("code",null,"boot.img",-1),A=l("code",null,"adb push coral-tp1a.221005.002/image-coral-tp1a.221005.002/boot.img /sdcard/Download",-1),V={href:"https://github.com/topjohnwu/Magisk/releases",target:"_blank",rel:"noopener noreferrer"},C=i("<li>退出google账号, 安装Magisk-v25.2.apk</li><li>点击安装Magisk，选择安装方法—选择并修补一个文件，找到刚才传到手机中的boot.img并选中, <strong>修补结束后不要重启</strong></li><li>下载新的img: <code>adb pull /sdcard/Download/magisk_patched-25200_RKCgf.img platform-tools/</code></li><li>关机, 电源键+音量减进入bootloader</li><li><strong>测试</strong> <code>./fastboot boot magisk_patched-25200_RKCgf.img</code> 重启失效</li><li><code>./fastboot flash boot magisk_patched-25200_RKCgf.img</code> 刷入镜像</li><li><code>./fastboot reboot</code></li>",7),N=l("code",null,"Pixel基本配置 6",-1),j={href:"https://github.com/LSPosed/LSPosed/releases",target:"_blank",rel:"noopener noreferrer"},q=l("li",null,"设置, Zygisk生效",-1),B=l("li",null,"模块, 从文件安装, 选中LSPosed",-1),K={href:"https://github.com/ViRb3/TrustMeAlready/releases",target:"_blank",rel:"noopener noreferrer"},I=l("li",null,"生效: 选中需要开启的app, 重启后生效",-1);function O(Z,J){const o=a("ExternalLinkIcon");return n(),r("div",null,[u,h,l("ol",null,[p,l("li",null,[e("安装9.0 "),l("ol",null,[l("li",null,[e("下载系统安装包 "),l("ol",null,[l("li",null,[l("a",c,[e("https://developers.google.cn/android/images#sailfish"),t(o)]),e(", "),_])])]),l("li",null,[e("android-platform-tools "),l("ol",null,[g,l("li",null,[l("a",m,[e("windows安装"),t(o)])])])]),b])]),l("li",null,[e("刷入twrp "),l("ol",null,[l("li",null,[e("下载 "),l("a",f,[e("https://twrp.me/google/googlepixel.html"),t(o)])]),k])]),l("li",null,[e("Magisk(root) "),l("ol",null,[l("li",null,[e("安装 "),l("ol",null,[x,l("li",null,[e("安装, 选择安装包"),M,e(", "),l("a",v,[e("https://github.com/topjohnwu/Magisk/releases"),t(o)])])])]),l("li",null,[e("安装模块(zip文件放入download, 在app模块中选择安装, 重启即可): "),l("ol",null,[l("li",null,[e("riru "),l("a",E,[e("https://github.com/RikkaApps/Riru/releases"),t(o)])]),l("li",null,[e("EdXposed "),l("a",w,[e("https://github.com/ElderDrivers/EdXposed/releases"),t(o)])]),l("li",null,[e("EdXposed Manager "),l("a",L,[e("https://github.com/ElderDrivers/EdXposedManager/releases"),t(o)])])])])])]),R,l("li",null,[e("升级magisk后参考"),l("a",X,[e("https://qiedd.com/1532.html"),t(o)]),y])]),z,l("ol",null,[S,l("li",null,[e("刷入Magisk(root) "),l("ol",null,[l("li",null,[e("准备安装包 "),l("ul",null,[l("li",null,[l("a",D,[e("android-platform-tools"),t(o)])]),l("li",null,[l("a",P,[e("coral-tp1a android 13官方刷机包"),t(o)]),e(", 解压zip两次, 找到"),T,e(", 导入手机"),A]),l("li",null,[l("a",V,[e("Magisk-v25.2.apk"),t(o)])])])]),C])]),l("li",null,[e("Magisk模块: "),l("ol",null,[l("li",null,[e("安装Lsposed, 参考"),N,l("ul",null,[l("li",null,[e("Magisk 24版本之后移除了在线安装, 需要手动下载, 下载地址: "),l("a",j,[e("LSPosed-v1.8.5-6649-zygisk-release.zip"),t(o)])]),q,B])])])]),l("li",null,[e("安装Lsposed模块 "),l("ul",null,[l("li",null,[l("a",K,[e("TrustMeAlready"),t(o)])]),I])])])])}const Y=s(d,[["render",O],["__file","pixel.html.vue"]]);export{Y as default};
