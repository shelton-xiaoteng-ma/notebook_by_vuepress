import{_ as e,Y as p,Z as o,a0 as n,a1 as s,a2 as l,a3 as i,a4 as a,E as c}from"./framework-957baa9a.js";const u={},r=n("h1",{id:"templates-模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#templates-模板","aria-hidden":"true"},"#"),s(" Templates 模板")],-1),d=n("h2",{id:"_1-使用django模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-使用django模板","aria-hidden":"true"},"#"),s(" 1. 使用django模板")],-1),k=a(`<li><p>位置，项目根目录下<code>/templates</code></p><ol><li>每个应用存放在单独的文件夹中</li><li>默认查找每个app的<code>/polls/templates/polls/index.html</code></li></ol></li><li><p><code>/project/settings.py</code>中生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
TEMPLATES = [
    {
        ...
        &#39;DIRS&#39;: [os.path.join(BASE_DIR, &#39;templates&#39;),],       # 修改位置
        ...
    },
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用render渲染</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 见views</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>shortcuts <span class="token keyword">import</span> render
render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;polls/index.html&#39;</span><span class="token punctuation">,</span> context<span class="token operator">=</span>context<span class="token punctuation">)</span>
<span class="token comment"># loader</span>
<span class="token keyword">from</span> django<span class="token punctuation">.</span>template <span class="token keyword">import</span> loader
latest_question_list <span class="token operator">=</span> Question<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">&#39;-pub_date&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
template <span class="token operator">=</span> loader<span class="token punctuation">.</span>get_template<span class="token punctuation">(</span><span class="token string">&#39;polls/index.html&#39;</span><span class="token punctuation">)</span>
context <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;latest_question_list&#39;</span><span class="token punctuation">:</span> latest_question_list<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span>template<span class="token punctuation">.</span>render<span class="token punctuation">(</span>context<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 404</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    question <span class="token operator">=</span> Question<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>get<span class="token punctuation">(</span>pk<span class="token operator">=</span>question_id<span class="token punctuation">)</span>
<span class="token keyword">except</span> Question<span class="token punctuation">.</span>DoesNotExist<span class="token punctuation">:</span>
    <span class="token keyword">raise</span> Http404<span class="token punctuation">(</span><span class="token string">&quot;Question does not exist&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;polls/detail.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;question&#39;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># get-object-or-404</span>
question <span class="token operator">=</span> get_object_or_404<span class="token punctuation">(</span>Question<span class="token punctuation">,</span> pk<span class="token operator">=</span>question_id<span class="token punctuation">)</span>
<span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">&#39;polls/detail.html&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;question&#39;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),m=a(`<li><p>django 命名空间</p><ol><li>templace中的url避免硬编码<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;/polls/{{ question.id }}/&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> question<span class="token punctuation">.</span>question_text <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token comment"># 等价</span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;{% url &#39;detail&#39; question.id %}&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> question<span class="token punctuation">.</span>question_text <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token comment"># urls中的内容, name=&#39;detail&#39; 关联detail</span>
<span class="token triple-quoted-string string">&#39;&#39;&#39;
path(&#39;&lt;int:question_id&gt;/&#39;, views.detail, name=&#39;detail&#39;),
&#39;&#39;&#39;</span>
<span class="token comment"># 如果需要修改views.detail这个视图的url, 不需要批量修改templates中的内容, 只需要修改path即可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>一个项目可能有多个app, 也许每个app都会有detail path, 那么views如何区分不同的url <code>python # polls/urls.py app_name = &#39;polls&#39; # template &#39;&#39;&#39; &lt;a href=&quot;{% url &#39;polls.detail&#39; question.id %}&quot;&gt;&lt;a/&gt; &#39;&#39;&#39; </code></li></ol></li><li><p>Use generic views</p><ol><li>抽象listView和detailView</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>views <span class="token keyword">import</span> generic
<span class="token comment"># template_name 默认 &lt;app name&gt;/&lt;model name&gt;_list.html</span>
<span class="token comment"># context_object_name 默认 &lt;model name&gt;_list</span>
<span class="token keyword">class</span> <span class="token class-name">IndexView</span><span class="token punctuation">(</span>generic<span class="token punctuation">.</span>ListView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    template_name <span class="token operator">=</span> <span class="token string">&#39;polls/index.html&#39;</span>
    context_object_name <span class="token operator">=</span> <span class="token string">&#39;latest_question_list&#39;</span>
    <span class="token keyword">def</span> <span class="token function">get_queryset</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;Return the last five published questions.&quot;&quot;&quot;</span>
        <span class="token keyword">return</span> Question<span class="token punctuation">.</span>objects<span class="token punctuation">.</span>order_by<span class="token punctuation">(</span><span class="token string">&#39;-pub_date&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment"># template_name 默认 &lt;app name&gt;/&lt;model name&gt;_detail.html</span>
<span class="token comment"># context_object_name 默认 &lt;model name&gt;</span>
<span class="token keyword">class</span> <span class="token class-name">DetailView</span><span class="token punctuation">(</span>generic<span class="token punctuation">.</span>DetailView<span class="token punctuation">)</span><span class="token punctuation">:</span>
    model <span class="token operator">=</span> Question
    template_name <span class="token operator">=</span> <span class="token string">&#39;polls/detail.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2);function v(b,g){const t=c("RouterLink");return p(),o("div",null,[r,d,n("ol",null,[k,n("li",null,[n("p",null,[s("静态文件"),l(t,{to:"/python/python_web/django/static_files.html"},{default:i(()=>[s("static_files.md")]),_:1})])]),m])])}const h=e(u,[["render",v],["__file","templates.html.vue"]]);export{h as default};
