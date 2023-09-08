import{_ as s,Y as e,Z as n,a4 as a}from"./framework-957baa9a.js";const i={},l=a(`<h1 id="aws-cli" tabindex="-1"><a class="header-anchor" href="#aws-cli" aria-hidden="true">#</a> AWS CLI</h1><ol><li><p>配置登录信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输入ak sk...</span>
aws configure <span class="token parameter variable">--profile</span> demo

<span class="token comment"># 上传</span>
aws s3 <span class="token function">cp</span> /xx/xx.txt s3://transfer/ <span class="token parameter variable">--profile</span> demo

<span class="token comment"># 常规删除</span>
aws s3 <span class="token function">rm</span> s3://some_bucket/xx/xx/2022/11/xx.csv

<span class="token comment"># 递归删除文件</span>
aws s3 <span class="token function">rm</span> <span class="token parameter variable">--recursive</span> s3://some_bucket/xx/xx/2022/11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[l];function r(t,d){return e(),n("div",null,c)}const m=s(i,[["render",r],["__file","aws_cli.html.vue"]]);export{m as default};
