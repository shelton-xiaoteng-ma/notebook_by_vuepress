import{_ as e,Y as n,Z as i,a4 as s}from"./framework-957baa9a.js";const a={},d=s(`<h1 id="_02-prisma" tabindex="-1"><a class="header-anchor" href="#_02-prisma" aria-hidden="true">#</a> 02 Prisma</h1><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><ol><li>install <code>npm install @prisma/client</code></li><li>vscode插件<code>Prisma</code></li><li>init <code>npx prisma init --datasource-provider sqlite</code></li><li>目录结构 <ul><li><code>prisma/schema.prisma</code></li><li><code>.env</code></li></ul></li></ol><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li><p>定义model</p><div class="language-prisma line-numbers-mode" data-ext="prisma"><pre class="language-prisma"><code>// prisma/schema.prisma
generator client {
  provider = &quot;prisma-client-js&quot;
}

datasource db {
  provider = &quot;mysql&quot;
  url      = env(&quot;DATABASE_URL&quot;)
}

model user {
  id        BigInt    @id @default(autoincrement()) @db.UnsignedBigInt
  nickname  String
  email     String
  github    String?
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  articles  article[]
}

model article {
  id        BigInt   @id @default(autoincrement()) @db.UnsignedBigInt
  title     String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user      user?    @relation(fields: [userId], references: [id])
  userId    BigInt?  @db.UnsignedBigInt
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>migrate</p><ul><li><p><code>npx prisma migrate dev</code></p></li><li><p><code>npx prisma migrate reset</code></p></li><li><p><code>npx prisma migrate deploy</code></p></li><li><p><code>npx prisma migrate status</code></p></li><li><p><code>npx prisma migrate status --schema=./schema.prisma</code></p></li><li><p>diff</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx prisma migrate <span class="token function">diff</span> <span class="token punctuation">\\</span>
--from-url <span class="token string">&quot;<span class="token variable">$DATABASE_URL</span>&quot;</span> <span class="token punctuation">\\</span>
--to-url <span class="token string">&quot;postgresql://login:password@localhost:5432/db&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--script</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>demo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// Migrate your database
npx prisma migrate dev <span class="token parameter variable">--name</span> init
// Generate Prisma Client:
npx prisma generate
// Introspect an existing database
npx prisma db pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="_3-数据填充" tabindex="-1"><a class="header-anchor" href="#_3-数据填充" aria-hidden="true">#</a> 3 数据填充</h2><ol start="0"><li><p>添加命令, 当执行<code>npx prisma db seed</code>/<code>npx prisma migrate reset</code>, 将会执行后面的命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json </span>
<span class="token punctuation">{</span>
  ...
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UNLICENSED&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prisma&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;seed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ts-node prisma/seed.ts&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建文件<code>prisma/seed.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,7),l=[d];function r(t,c){return n(),i("div",null,l)}const o=e(a,[["render",r],["__file","02_nest_prisma.html.vue"]]);export{o as default};
