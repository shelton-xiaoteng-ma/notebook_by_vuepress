import{_ as l,Y as t,Z as r,a0 as e,a1 as a,a2 as c,a4 as o,E as d}from"./framework-957baa9a.js";const h={},s=e("h1",{id:"_15-channel-page-channel-header",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_15-channel-page-channel-header","aria-hidden":"true"},"#"),a(" 15 Channel Page & Channel Header")],-1),i=e("h2",{id:"_1-channel-page",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-channel-page","aria-hidden":"true"},"#"),a(" 1. Channel Page")],-1),p={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/3d8b26278c2e23f5fc5491a88a6feecdd213b6fa",target:"_blank",rel:"noopener noreferrer"},_=o('<ol><li><p>ChannelIdPage路径, <code>ChannelIdPage: src/app/workspace/[workspaceId]/channel/[channelId]/page.tsx</code></p></li><li><p><code>WorkspaceIdPage: src/app/workspace/[workspaceId]/page.tsx</code>修改逻辑, 如果存在channel则重定向到ChannelIdPage</p></li><li><p>高亮活跃的channel: <code>WorkspaceSidebar:src/app/workspace/[workspaceId]/workspace-sidebar.tsx</code></p><ol><li><code>variant={channelId === item._id ? &quot;active&quot; : &quot;default&quot;}</code></li></ol></li><li><p>创建channel后跳转页面 <code>CreateChannelModal: src/features/channels/components/create-channel-modal.tsx</code></p></li></ol><h2 id="_2-channel-header" tabindex="-1"><a class="header-anchor" href="#_2-channel-header" aria-hidden="true">#</a> 2. Channel Header</h2>',2),g={href:"https://github.com/shelton-xiaoteng-ma/slack/commit/99475c6b6839ac123fa2269aabca0c334a55b674",target:"_blank",rel:"noopener noreferrer"},u=o('<ol start="0"><li>toast 设置不透明 <code>&lt;Toaster className=&quot;bg-gray-50&quot; /&gt;</code></li><li><code>Header: src/app/workspace/[workspaceId]/channel/[channelId]/header.tsx</code><ol><li>Dialog 弹出channel修改页面</li><li>支持重命名/删除, 仅限admin</li></ol></li><li><code>ChannelIdPage: src/app/workspace/[workspaceId]/channel/[channelId]/page.tsx</code></li><li>数据库api, <code>getById/update/remove: convex/channels.ts</code></li><li>组件api, <code>useUpdateChannel/useRemoveChannel/useGetChannel</code></li></ol>',1);function m(f,k){const n=d("ExternalLinkIcon");return t(),r("div",null,[s,i,e("p",null,[a("github提交记录: "),e("a",p,[a("channel page"),c(n)])]),_,e("p",null,[a("github提交记录: "),e("a",g,[a("channel header"),c(n)])]),u])}const b=l(h,[["render",m],["__file","15_channel_page_header.html.vue"]]);export{b as default};
