import{_ as e,Y as a,Z as s,a4 as n}from"./framework-957baa9a.js";const r={},i=n(`<h1 id="随机user-agent" tabindex="-1"><a class="header-anchor" href="#随机user-agent" aria-hidden="true">#</a> 随机User Agent</h1><ol><li>运行爬虫时，通常使用随机而正确的请求头,<code>fake_useragent</code>这个第三方库可以用来快速实现</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from fake_useragent import UserAgent
ua = UserAgent()
headers[&#39;User-Agent&#39;] = ua.random
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>访问移动网页时，需要加移动的浏览器头，android和ios https://developers.whatismybrowser.com/useragents/explore网站提供了所有的user-agent</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mobile_user_agents = [...]
def get_ua(is_mobile=False):
    return random.choice(mobile_user_agents) if is_mobile else ua.random
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[i];function d(l,o){return a(),s("div",null,t)}const u=e(r,[["render",d],["__file","random_user_agent.html.vue"]]);export{u as default};
