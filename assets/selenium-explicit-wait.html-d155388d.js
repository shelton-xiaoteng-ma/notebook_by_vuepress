import{_ as t,Y as n,Z as a,a0 as e,a1 as l,a2 as r,a4 as d,E as c}from"./framework-957baa9a.js";const s={},o=d(`<h1 id="显式等待-explicit-wait-和隐式等待-implicit-wait" tabindex="-1"><a class="header-anchor" href="#显式等待-explicit-wait-和隐式等待-implicit-wait" aria-hidden="true">#</a> 显式等待(explicit wait)和隐式等待 (implicit wait)</h1><h2 id="_1-显式等待-explicit-wait" tabindex="-1"><a class="header-anchor" href="#_1-显式等待-explicit-wait" aria-hidden="true">#</a> 1. 显式等待(explicit wait)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#封装了一个方法
def check_element_by_xpath(web_driver, value):
    try:
        # 判断是否加载完毕
        element = WebDriverWait(web_driver, 10).until(
            expected_conditions.presence_of_element_located((By.XPATH, value))
     	)
     	return element
    except Exception as e:
     	# print(&#39;加载超时&#39;, e)
     	# print(traceback.format_exc())
     	return -1
     finally:
         driver.quit()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码会等待10秒，如果10秒内找到元素则立即返回，否则会抛出<code>TimeoutException</code>异常，WebDriverWait默认每<code>500</code>毫秒调用一下ExpectedCondition直到它返回成功为止。ExpectedCondition类型是布尔的，成功的返回值就是true,其他类型的ExpectedCondition成功的返回值就是 not null</p><h2 id="_2-隐式等待-implicit-wait" tabindex="-1"><a class="header-anchor" href="#_2-隐式等待-implicit-wait" aria-hidden="true">#</a> 2. 隐式等待 (implicit wait)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>driver.implicitly_wait(10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果某些元素不是立即可用,隐式等待告诉WebDriver去等待一段时间后查找元素</li><li>隐式等待是设置该WebDriver的实例的生命周期</li></ul><h2 id="_3-一直使用显示等待-忘记隐式等待" tabindex="-1"><a class="header-anchor" href="#_3-一直使用显示等待-忘记隐式等待" aria-hidden="true">#</a> 3. 一直使用显示等待, 忘记隐式等待</h2>`,8),v={href:"https://stackoverflow.com/questions/10404160/when-to-use-explicit-wait-vs-implicit-wait-in-selenium-webdriver",target:"_blank",rel:"noopener noreferrer"};function u(m,p){const i=c("ExternalLinkIcon");return n(),a("div",null,[o,e("p",null,[e("a",v,[l("StackOverflow问答"),r(i)])])])}const x=t(s,[["render",u],["__file","selenium-explicit-wait.html.vue"]]);export{x as default};
