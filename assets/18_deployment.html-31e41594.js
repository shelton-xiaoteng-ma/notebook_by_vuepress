import{_ as a,Y as d,Z as r,a0 as e,a1 as o,a2 as l,a3 as h,a4 as i,E as t}from"./framework-957baa9a.js";const u={},s=i('<h1 id="_18-deployment" tabindex="-1"><a class="header-anchor" href="#_18-deployment" aria-hidden="true">#</a> 18 Deployment</h1><h2 id="_1-vercel" tabindex="-1"><a class="header-anchor" href="#_1-vercel" aria-hidden="true">#</a> 1. vercel</h2><ol><li>import github project</li><li>override build cmd <code>npx convex deploy --cmd &#39;npm run build&#39;</code></li><li>需添加环境变量 <ul><li><code>CONVEX_DEPLOY_KEY</code> 见 convex</li></ul></li><li>产生参数: <ul><li><code>domain</code></li></ul></li></ol><h2 id="_2-oauth" tabindex="-1"><a class="header-anchor" href="#_2-oauth" aria-hidden="true">#</a> 2. Oauth</h2><h3 id="github-oauth" tabindex="-1"><a class="header-anchor" href="#github-oauth" aria-hidden="true">#</a> Github OAuth</h3>',5),_={start:"0"},p=e("li",null,"Settings -> Settings Developer -> OAuth app",-1),g={href:"https://xxx.vercel.app",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"domain",-1),v=e("li",null,[o("Authorization callback URL: 见convex "),e("code",null,"HTTP Actions URL"),o("+"),e("code",null,"/api/auth/callback/github")],-1),m=e("li",null,[o("产生新参数 "),e("ul",null,[e("li",null,[o("Client ID: 用于convex环境变量"),e("code",null,"AUTH_GITHUB_ID")]),e("li",null,[o("Client secrets: 用于convex环境变量"),e("code",null,"AUTH_GITHUB_SECRET")])])],-1),T=e("h3",{id:"google-oauth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-oauth","aria-hidden":"true"},"#"),o(" Google OAuth")],-1),E=i('<ol><li>Projects -&gt; APIs &amp; Services -&gt; Credentials -&gt; Create Credentials -&gt; Create OAuth client ID</li><li>需要参数: <ul><li>Web application</li><li>name</li><li>Authorized redirect URIs: 对应convex <code>HTTP Actions URL +</code>/api/auth/callback/google`</li><li>Authorized JavaScript origins: 对应 vercel的<code>domain</code></li></ul></li><li>产生参数: <ul><li><code>Client ID</code></li><li><code>Client secret</code></li></ul></li></ol><h2 id="_3-convex" tabindex="-1"><a class="header-anchor" href="#_3-convex" aria-hidden="true">#</a> 3. convex</h2><ol><li><p>开启production, settings-&gt; Deploy Keys -&gt; Generate Production Deploy Key</p></li><li><p>切换为production生成参数</p><ul><li>Deploy Keys(Generate Production Deploy Key): Project Settings -&gt; Deploy Keys, 对应vercel环境变量<code>CONVEX_DEPLOY_KEY</code></li><li>Project Settings -&gt; <code>HTTP Actions URL</code></li></ul></li><li><p>需要添加环境变量 Production Deployment Settings -&gt; Environment Variables</p><ul><li><code>JWKS</code> 前三个参数生成方式, 命令行: <code>npx @convex-dev/auth --prod</code>, 其中<code>SITE_URL</code>见vercel的<code>main</code>, 一键确认后自动生成</li><li><code>JWT_PRIVATE_KEY</code></li><li><code>SITE_URL</code></li><li><code>AUTH_GITHUB_ID</code> 见github OAuth</li><li><code>AUTH_GITHUB_SECRET</code> 见github OAuth</li><li><code>AUTH_GOOGLE_ID</code> 见Google OAuth <code>Client ID</code></li><li><code>AUTH_GOOGLE_SECRET</code> 见Google OAuth <code>Client secret</code></li></ul></li></ol>',3);function b(A,I){const c=t("ExternalLinkIcon"),n=t("RouterLink");return d(),r("div",null,[s,e("ol",_,[p,e("li",null,[o("github创建新的Oauth app "),e("ul",null,[e("li",null,[o("Homepage URL: "),e("a",g,[o("https://xxx.vercel.app"),l(c)]),o(" 见vercel部署后的链接"),x]),v])]),m]),T,e("p",null,[o("参考"),l(n,{to:"/slack_clone/03_convex_and_auth.md/#3-google-authentication"},{default:h(()=>[o("google auth 03_convex_and_auth.md/#3-google-authentication")]),_:1})]),E])}const U=a(u,[["render",b],["__file","18_deployment.html.vue"]]);export{U as default};