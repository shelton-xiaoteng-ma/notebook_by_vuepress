import{_ as n,Y as i,Z as e,a4 as s}from"./framework-957baa9a.js";const l={},d=s(`<h1 id="jinja" tabindex="-1"><a class="header-anchor" href="#jinja" aria-hidden="true">#</a> jinja</h1><ol><li>demo<div class="language-python3 line-numbers-mode" data-ext="python3"><pre class="language-python3"><code>from jinja2 import Template
tem_str = &#39;&#39;&#39;
    version: &quot;3&quot;
    services:
        {% for nic in nics %}
        replica_{{ nic.num }}:
            build: ./replica
            expose:
                - &quot;5000&quot;
                - &quot;3128&quot;
            networks:
                - mobile_network_proxy
            environment:
                - REPLICA_NAME=replica_{{ nic.num }}
                - QL_DEV=/dev/ttyUSB{{ nic.tty_usb_num }}
                - AT_DEV=/dev/ttyUSB{{ nic.tty_usb_num - 1 }}
            privileged: true
        {% endfor %}

        master:
            build: ./master
            ports:
                - &quot;3128:3128&quot;
                - &quot;5000:5000&quot;
            networks:
                - mobile_network_proxy

        redis:
            image: redis
            expose:
                - &quot;6379&quot;
            networks:
                - mobile_network_proxy

    networks:
        mobile_network_proxy:
nics = [{&quot;num&quot;: num, &quot;tty_usb_num&quot;: (num + 1) * 4 - 1} for num in range(5)]
text = template.render(nics=nics)
with open(&quot;docker-compose.yml&quot;, &quot;w&quot;) as f:
    f.write(text)
&#39;&#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>more</li></ol>`,2),r=[d];function v(a,u){return i(),e("div",null,r)}const c=n(l,[["render",v],["__file","jinja.html.vue"]]);export{c as default};
