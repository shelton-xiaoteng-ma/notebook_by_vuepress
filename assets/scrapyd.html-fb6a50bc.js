import{_ as n,Y as i,Z as u,a4 as e}from"./framework-957baa9a.js";const o={},t=e(`<h1 id="scrapyd" tabindex="-1"><a class="header-anchor" href="#scrapyd" aria-hidden="true">#</a> Scrapyd</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo python36 -m pip install scrapyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>scrapyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浏览器访问： http://localhost.6800 可以查看scrapyd的web页面，但是页面主要</p><h2 id="api说明" tabindex="-1"><a class="header-anchor" href="#api说明" aria-hidden="true">#</a> API说明</h2><p>以下是postman导出的一个collection，可以重命名为：<code>scrapyd.postman_collection.json</code> 导入到postman查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;info&quot;: {
        &quot;_postman_id&quot;: &quot;ff84db97-b2bd-40af-9b4e-273f48f6dc4e&quot;,
        &quot;name&quot;: &quot;scrapyd&quot;,
        &quot;description&quot;: &quot;scrapyd api练习&quot;,
        &quot;schema&quot;: &quot;https://schema.getpostman.com/json/collection/v2.1.0/collection.json&quot;
    },
    &quot;item&quot;: [
        {
            &quot;name&quot;: &quot;daemonstatus&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/daemonstatus.json&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;daemonstatus.json&quot;
                    ]
                },
                &quot;description&quot;: &quot;查看状态&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;addversion&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;file&quot;,
                    &quot;file&quot;: {}
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/addversion.json?project=dianping&amp;version=v01&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;addversion.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;version&quot;,
                            &quot;value&quot;: &quot;v01&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;为项目增加版本&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;schedule&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/schedule.json?project=dianping&amp;spider=region&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;schedule.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;spider&quot;,
                            &quot;value&quot;: &quot;region&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;启动爬虫&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;cancel&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/cancel.json?project=dianping&amp;job=ae07a0a011b711e9bb7c06c0685ba786&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;cancel.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;job&quot;,
                            &quot;value&quot;: &quot;ae07a0a011b711e9bb7c06c0685ba786&quot;,
                            &quot;description&quot;: &quot;job_id&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;取消爬虫&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listprojects&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listprojects.json&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listprojects.json&quot;
                    ]
                },
                &quot;description&quot;: &quot;列出所有的爬虫项目&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listverisons&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listversions.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listversions.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;,
                            &quot;description&quot;: &quot;指定项目,返回版本列表&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;列出指定项目的版本&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listspiders&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listspiders.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listspiders.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;列出项目的所有爬虫项目&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listjobs&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listjobs.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listjobs.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;列出项目目前正在运行的任务&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;delversion&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/delversion.json?project=dianping&amp;version=1546759284&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;delversion.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;version&quot;,
                            &quot;value&quot;: &quot;1546759284&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;列出项目目前正在运行的任务&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;delproject&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/delproject.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;delproject.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;删除指定的项目&quot;
            },
            &quot;response&quot;: []
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[t];function d(l,v){return i(),u("div",null,s)}const a=n(o,[["render",d],["__file","scrapyd.html.vue"]]);export{a as default};
