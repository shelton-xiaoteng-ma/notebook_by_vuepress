import{_ as n,Y as s,Z as a,a4 as e}from"./framework-957baa9a.js";const i={},l=e(`<h1 id="svn-git-基本操作" tabindex="-1"><a class="header-anchor" href="#svn-git-基本操作" aria-hidden="true">#</a> svn - git 基本操作</h1><h2 id="_1-功能" tabindex="-1"><a class="header-anchor" href="#_1-功能" aria-hidden="true">#</a> 1. 功能</h2><ol><li><p><strong>初始化仓库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>检出代码到本地</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> clone git_url

<span class="token comment"># svn</span>
svn checkout svn_url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>将文件添加到版本库</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>  <span class="token comment"># 添加所有内容到版本库</span>
<span class="token function">git</span> <span class="token function">add</span> file_name  <span class="token comment"># 添加指定文件到版本库</span>

<span class="token comment"># svn</span>
svn <span class="token function">add</span> new_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>提交更改</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;更改说明&#39;</span>  <span class="token comment"># 提交更改到本地版本库</span>
<span class="token function">git</span> push  <span class="token comment"># 推送代码到默认线上仓库</span>
<span class="token function">git</span> push gitlab master  <span class="token comment"># 推送代码到指定的线上仓库</span>

<span class="token function">git</span> push <span class="token parameter variable">-u</span> github master  <span class="token comment"># 将会修改设置默认的推送流</span>

<span class="token comment"># svn</span>
svn commit <span class="token parameter variable">-m</span> <span class="token string">&#39;更改说明&#39;</span>  <span class="token comment"># 提交更改到版本库, 并推送到线上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>重置暂存区</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>显示提交记录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log  <span class="token comment"># 显示commit记录</span>
<span class="token function">git</span> log <span class="token parameter variable">--graph</span> <span class="token parameter variable">--oneline</span> firstbranch_name secondbranch_name  <span class="token comment"># 按图形显示</span>
<span class="token function">git</span> log <span class="token parameter variable">-1</span> -- <span class="token punctuation">[</span>file path<span class="token punctuation">]</span>   <span class="token comment"># 查看指定文件的记录, 即时删除了也支持</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>检出某一版本</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout commit_id  <span class="token comment"># 检出某一id的状态</span>
<span class="token function">git</span> checkout branch_name  <span class="token comment"># 检出指定分支的代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>更新本地代码</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> pull
<span class="token function">git</span> pull remote_name branch_name 
<span class="token comment"># svn</span>
svn update
svn update <span class="token parameter variable">-r</span> m svn_path  <span class="token comment"># 更新指定版本的代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>查看当前状态</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> status
<span class="token comment"># svn</span>
svn status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>查看代码库的信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>  <span class="token comment"># 显示远程仓库的链接</span>
<span class="token comment"># svn</span>
svn info  <span class="token comment"># 显示仓库所有信息</span>
svn info <span class="token operator">|</span><span class="token function">grep</span> URL/http  
<span class="token function">cat</span> .svn/entries <span class="token operator">|</span><span class="token function">grep</span> http  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>比较工作区和代码库的差异</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> <span class="token function">diff</span>  <span class="token comment"># 比较工作区和暂存区的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> commit_1 commit_2  <span class="token comment"># 比较两次提交的差异</span>
<span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--staged</span>  <span class="token comment"># 比较暂存区和代码库的差异</span>
<span class="token comment"># svn</span>
svn <span class="token function">diff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>remote 管理</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1. 查看remote</span>
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token comment"># 2. 增加新的remote** </span>
<span class="token function">git</span> remote <span class="token function">add</span> gitlab git_url
<span class="token function">git</span> push gitlab master
<span class="token comment"># 3. 修改remote的url**</span>
<span class="token function">git</span> remote set-url gitlab git_url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>rm 撤销已加入追踪的文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除本地和仓库</span>
<span class="token function">git</span> <span class="token function">rm</span> file_name
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> directory/
<span class="token comment"># 只删除仓库, 保留本地文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> file_name
<span class="token comment"># svn</span>
svn <span class="token function">rm</span> --keep-local my_important_file  <span class="token comment"># 将只删除版本库的文件，而不删除本地</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-撤销修改" tabindex="-1"><a class="header-anchor" href="#_2-撤销修改" aria-hidden="true">#</a> 2. 撤销修改</h2><ol><li>首先了解一下,git有三个概念(工作区, 暂存区 和 仓库区)</li><li>通常有几种情况: <ol><li><p>撤销工作区的修改, 还没有add到版本库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>  <span class="token comment"># 撤销全部更改</span>
<span class="token function">git</span> checkout XX.file  <span class="token comment"># 撤销特定文件</span>
<span class="token comment"># svn</span>
svn revert <span class="token parameter variable">-r</span> path_name  <span class="token comment"># 丢弃未提交的代码 </span>
svn revert file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>撤销暂存区的修改, add到了暂存区,还没有commit</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span>
<span class="token function">git</span> reset HEAD //撤销add的所有更改
<span class="token function">git</span> reset HEAD XX.file //撤销XX.file的添加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>撤销版本库里面的修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> revert HEAD //撤销之前的commit
<span class="token function">git</span> revert HEAD^ //撤销前前一次的commit
<span class="token function">git</span> revert commit-id //撤销指定版本, 也会作为一次提交commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意: git revert是恢复指定版本的修改, 作为一次新提交上传,版本会递增</strong></p></li></ol></li></ol><h2 id="_3-配置git" tabindex="-1"><a class="header-anchor" href="#_3-配置git" aria-hidden="true">#</a> 3. 配置git</h2><ol><li><p><strong>git config --list 查看配置</strong></p></li><li><p><strong>全局修改，建议将最常用的账号配置到globle中</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name xxx
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email xxx@xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>当前项目</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config user.name xxx
<span class="token function">git</span> config user.email xxx@xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>解决每次git pull/push都要输入密码的问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name maxiaoteng
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email maxiaoteng@yunfutech.com
<span class="token function">git</span> config <span class="token parameter variable">--global</span> credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_5-远程代码库回滚" tabindex="-1"><a class="header-anchor" href="#_5-远程代码库回滚" aria-hidden="true">#</a> 5. 远程代码库回滚</h2><ol><li><p>本地代码库回滚</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commit-id :回滚到commit-id，讲commit-id之后提交的commit都去除
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD~3：将最近3次的提交回滚
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>远程代码库回滚</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout the_branch
<span class="token function">git</span> pull
<span class="token function">git</span> branch the_branch_backup //备份一下这个分支当前的情况
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> the_commit_id //把the_branch本地回滚到the_commit_id
<span class="token function">git</span> push origin :the_branch //删除远程 the_branch
<span class="token function">git</span> push origin the_branch //用回滚后的本地分支重新建立远程分支
<span class="token function">git</span> push origin :the_branch_backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-分支操作" tabindex="-1"><a class="header-anchor" href="#_6-分支操作" aria-hidden="true">#</a> 6. 分支操作</h2><ol><li><p>新建分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> iss53

<span class="token comment"># 将会新建一个空白分支, 所有文件处于待提交状态</span>
<span class="token function">git</span> checkout <span class="token parameter variable">--orphan</span> iss53

<span class="token comment"># 相当于</span>
<span class="token function">git</span> branch iss53
<span class="token function">git</span> checkout iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>切换分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token comment"># 注意切换分支的时候最好保持一个清洁的工作区域</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>合并到master</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge hotfix

<span class="token comment"># 如果master修改了影响开发分支的内容，可以</span>
<span class="token function">git</span> merge master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> hotfix
<span class="token comment"># 合并之后，旧的分支不再有用，可以删除</span>

<span class="token function">git</span> branch <span class="token parameter variable">-D</span> hotfix
<span class="token comment"># 未合并过的分支如果删除会提醒，用D强制删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>冲突解决</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 冲突的文件会保留在工作区，修改后使用git add</span>
<span class="token comment"># 一旦暂存，表示冲突解决，然后git status，git commit 来提交即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看当前分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
<span class="token function">git</span> branch <span class="token parameter variable">-v</span>   <span class="token comment"># 查看各分支当前的最新版本</span>
<span class="token function">git</span> branch <span class="token parameter variable">--merged</span> <span class="token comment"># 查看合并到当前分支的其他分支</span>
<span class="token function">git</span> branch --no-merged <span class="token comment"># 查看未合并的分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_7-clone-指定分支" tabindex="-1"><a class="header-anchor" href="#_7-clone-指定分支" aria-hidden="true">#</a> 7. clone 指定分支</h2><ol><li><p>clone指定分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认clone master</span>
<span class="token function">git</span> clone XXX.git
<span class="token comment"># 制定</span>
<span class="token function">git</span> clone <span class="token parameter variable">-b</span> branch-name XXX.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果clone了master，其他分支隐藏</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 快速检出分支</span>
<span class="token comment"># detached Head， 所做修改不会提交到任何分支</span>
<span class="token function">git</span> checkout origin/feature 

<span class="token comment"># 快速创建一个本地分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> feature origin/feature
<span class="token function">git</span> checkout <span class="token parameter variable">-t</span> origin/feature  <span class="token comment">#会在本地创建一个和远程分支同名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_8-其他问题" tabindex="-1"><a class="header-anchor" href="#_8-其他问题" aria-hidden="true">#</a> 8. 其他问题</h2><ol><li><p>删除历史的某条分支</p><p>在修改scrapy过程中, <code>git push</code>报错<code>error in commit b3a65d3313724ab2dc9f3dca0c0b0a025ed68fe5: badEmail: invalid author/committer line - bad email</code>, 查看是2010年的提交, email格式有问题, 直接删除这条commit不影响其他</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 待删除commit b3a65d3313724ab2dc9f3dca0c0b0a025ed68fe5</span>
<span class="token comment"># 前一条 2067bcd8d0c8af3738948da65c34456813f77c51</span>
<span class="token function">git</span> checkout b3a65d3313724ab2dc9f3dca0c0b0a025ed68fe5
<span class="token function">git</span> rebase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,15),c=[l];function t(d,r){return s(),a("div",null,c)}const p=n(i,[["render",t],["__file","index.html.vue"]]);export{p as default};
