import{_ as e,Y as n,Z as i,a4 as s}from"./framework-957baa9a.js";const d={},l=s(`<h1 id="expect" tabindex="-1"><a class="header-anchor" href="#expect" aria-hidden="true">#</a> expect</h1><p>和shell类似, 主要用于带交互的命令脚本, 比如rsync执行时输入密码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/expect
set timeout 30
spawn rsync -rvptgo maxiaoteng@59.110.160.185:/home/maxiaoteng/crawler/news/data/ /root/crawler/news/data
expect &quot;password:&quot;
send &quot;XXXXXX\\r&quot;
interact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/expect
set timeout 360
set host [lindex $argv 0]
set port [lindex $argv 1]
set username [lindex $argv 2]
set password [lindex $argv 3]
set src_file [lindex $argv 4]
set dest_file [lindex $argv 5]
#spawn scp $src_file $username@$host:$dest_file
spawn scp -P $port -r $username@$host:$src_file $dest_file
expect {
 &quot;(yes/no)?&quot; {
   send &quot;yes\\n&quot;
   expect &quot;*assword:&quot; { send &quot;$password\\n&quot;}
  }
  &quot;*assword:&quot; {
   send &quot;$password\\n&quot;
  }
}
expect &quot;100%&quot;
expect eof

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
 
src_dir=/data/huiyzl/runtime/
dest_dir=/data/huiyzl/
host=219.135.214.146
port=60203
username=root
password=LENOVOap123
 
# 目录不存在，则创建，如果存在先删除再创建
if [ ! -d $src_dir ]; then
  mkdir -p $src_dir
else
  rm -rf $src_dir
  mkdir -p $src_dir
fi
 
# 将远程服务器上的文件拷贝到本机
./expect_scp $host $port $username $password $src_dir $dest_dir

echo &quot;end&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[l];function a(t,v){return n(),i("div",null,r)}const u=e(d,[["render",a],["__file","expect.html.vue"]]);export{u as default};
