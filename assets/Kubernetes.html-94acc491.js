import{_ as a,Y as o,Z as r,a0 as e,a1 as n,a2 as s,a4 as i,E as c}from"./framework-957baa9a.js";const l={},d=e("h1",{id:"kubernetes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kubernetes","aria-hidden":"true"},"#"),n(" Kubernetes")],-1),p={href:"https://github.com/kubernetes/kubernetes",target:"_blank",rel:"noopener noreferrer"},u=i(`<h2 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h2><p>Pods and Workloads, Services, Storage, Configuration, Security, Policies, Schedule, Eviction, Preemption, Administration</p><p>Kubernetes ecosystem includes <code>public cloud providers</code>, <code>frameworks</code>, <code>management</code>, <code>tools</code>, <code>monitoring and logging</code>, <code>security</code>, and <code>load balancing</code>.</p><h2 id="architecture" tabindex="-1"><a class="header-anchor" href="#architecture" aria-hidden="true">#</a> Architecture</h2><p>The <code>kubelet</code> is an agent that runs on each worker node in the cluster. It is responsible for ensuring that containers are running in a Pod as expected. It communicates with the Kubernetes control plane to receive instructions (such as starting, stopping, or restarting containers) and reports the status of the containers back to the control plane.</p><h3 id="kubernetes-objects" tabindex="-1"><a class="header-anchor" href="#kubernetes-objects" aria-hidden="true">#</a> kubernetes objects</h3><p>Kubernets objects are persistent entities, their main fields are <code>Object spec</code> and <code>Status</code></p><p><code>Namespaces</code> help in isolating groups of resources within a single cluster</p><p><code>Pods</code> represent a process or an instance of an app running in a cluster</p><p>A <code>Service</code> in Kubernets is a REST object that provides policies for accessing the Pods and cluster</p><p><code>ClusterIP</code> is the default and most common Service type and provides interservice communication within the cluster</p><p>An extension of ClusterIP Service, a <code>NodePort Service</code>, creates and routes the income requests automatically to the ClusterIP Service</p><p>An extension of NodePort Service, an <code>External Load Balancer</code> creates NodePort and ClusterIP Service automatically</p><p><code>Ingress</code> is an API object that, when combined with a controller, provides routing rules to manage external users&#39; access to multiple services in a Kubernetes cluster</p><pre><code>In Kubernetes, external access to cluster services is overseen by Ingress, consisting of two core components: the Ingress API object and the Ingress controller
</code></pre><p>You can use an <code>External name</code> to create a Service that represents external storage and enables Pods from different namespaces to talk to each other</p><p>A <code>Job</code> creates pods and tracks the pod completion process, Jobs are retried until completed</p><h3 id="replicasets-deployments-daemonset-statefulset" tabindex="-1"><a class="header-anchor" href="#replicasets-deployments-daemonset-statefulset" aria-hidden="true">#</a> ReplicaSets, Deployments, DaemonSet, StatefulSet</h3><p><code>Deployments</code> provide updates for Pods and ReplicaSets, should be used for stateless applications</p><p>Using a <code>DaemonSet</code> ensures that there is at least one instance of the Pod on all your Nodes</p><p><code>ReplicaSets</code> create and manage horizontally scaled running Pods, can manage pods and ensure a specified number of replicas are running.</p><p>A <code>StatefulSet</code> manages stateful applications, manages Pod deployment and scaling, maintains a sticky identity for each Pod request, and provides persistent storage volumes for your workloads</p><h2 id="kubernetes-antipatterns" tabindex="-1"><a class="header-anchor" href="#kubernetes-antipatterns" aria-hidden="true">#</a> Kubernetes Antipatterns</h2><ol><li>Avoid baking configuration in container images</li><li>Separate application and infrastructure deployment</li><li>Eliminate specific order in deployment</li><li>Set memory and CPU limits for pods problem</li><li>Avoid pulling the latest tag in production problem</li><li>Segregate production and non-production workloads problem</li><li>Refrain from ad-hoc deployments with kubectl edit/patch problem</li><li>Implement health checks with liveness and readiness probes problem</li><li>Prioritize secret handling and use vault problem</li><li>Use controllers and avoid running multiple processes per container problem</li></ol><h2 id="kubectl" tabindex="-1"><a class="header-anchor" href="#kubectl" aria-hidden="true">#</a> Kubectl</h2><pre><code>\`\`\`shell
kubectl [command] [type] [name] [flags]

# command (create, get, apply, delete)
# [type] means resource type(pod, deployment, replicaset)
# [name] means resource name

# create resources
kubectl run nginx --image nginx
kubectl create -f nginx.yaml
kubectl apply -f nginx/ -f ./xxx.json
kubectl apply -f https://git.com/xx

# list resources
kubectl get services
kubectl get pods -all-namespaces
kubectl get deployment my-dep
# get pods in current namespace
kubectl get pods
kubectl get pods -o wide
kubectl describe pod hello-world
kubectl delete pod hello-world

# scale
kubectl scale --replicas=3 rs/foo
kubectl scale --replicas=3 -f foo.yaml

# config
kubectl config get-clusters
kubectl config get-contexts

# expose
# Exposes a resource to the internet as a Kubernetes service.
kubectl expose deployment/hello-world
# Creates a proxy server between a localhost and the Kubernetes API server.
kubectl proxy

# delete
kubectl delete deployment/hello-world service/hello-world

# for ... do
for i in \`seq 10\`; do curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy; done
\`\`\`
</code></pre><h2 id="manage-application" tabindex="-1"><a class="header-anchor" href="#manage-application" aria-hidden="true">#</a> Manage Application</h2><h3 id="replicaset" tabindex="-1"><a class="header-anchor" href="#replicaset" aria-hidden="true">#</a> ReplicaSet</h3><p>ReplicaSet provides high availability through redundancy, a ReplicaSet enables scaling by creating or deleting pods, you can create a ReplicaSet using the CLI or the YAML descriptor, a ReplicaSet always tries to match the actual state to the desired state.</p><p>A <code>best practice</code> is to use a Deployment instead of a ReplicaSet directly, because a ReplicaSet is automatically created when you create a deployment.</p><pre><code>\`\`\`shell
kubectl scale deploy hello-kubernetes --replicas=3

kubectl delete/create pod hello-kubernetes-xxxx-xxx
\`\`\`
</code></pre><h3 id="autoscaling" tabindex="-1"><a class="header-anchor" href="#autoscaling" aria-hidden="true">#</a> Autoscaling</h3><p>Cluster/node level or Pod level</p><p>Autoscaler types:</p><ul><li>Horizontal Pod Autoscaler(HPA)</li><li>Vertical Pod Autoscaler(VPA)</li><li>Cluster Autoscaler(CA)</li></ul><p>demo</p><pre><code>\`\`\`shell
kubectl autoscale deploy hello-kubernetes --min=2 --max=5 --cpu-percent=50
\`\`\`
</code></pre><h3 id="rolling-update" tabindex="-1"><a class="header-anchor" href="#rolling-update" aria-hidden="true">#</a> Rolling Update</h3><ul><li>All-at-once rollout/rollback</li><li>One-at-a-time rollout/rollback, is staggered so user access is not interrupted</li></ul><p>update shell</p><pre><code>\`\`\`shell
# update image
kubectl set image deployments/hello-kubernetes hello-kubernetes=upkar/hello-kubernetes:2.0

# deployments &quot;hello-kubernetes&quot; successfully rolled out
kubectl rollout status deployments/hello-kubernetes

# rollback
kubectl rollout undo deployments/hello-kubernetes
\`\`\`
</code></pre><h3 id="configmaps-and-secrets" tabindex="-1"><a class="header-anchor" href="#configmaps-and-secrets" aria-hidden="true">#</a> ConfigMaps and Secrets</h3><p>A ConfigMap is an API object that stores non-confidential data in key-value pairs</p><pre><code>\`\`\`shell
# config by command line
kubectl create ConfigMap my-config --from-literal=MESSAGE=&quot;hello world from first configmap&quot;

# in .yaml file
env:
-name: MESSAGE
  valueFrom:
    configMapKeyRef:
      name: my-config
      key: MESSAGE

#-------------------------------------------------------------------#
# config from properties file instead of listing those variables one by one on the command line
kubectl create ConfigMap my-config --from-file=my.properties

# in my.properties
MESSAGE=hello world from my.properties file

# in .yaml file
env:
-name: MESSAGE
  valueFrom:
    configMapKeyRef:
      name: my-config
      key: my.properties

#-------------------------------------------------------------------#
# config from yaml file
# my-config.YAML
apiVersion: v1
data:
  my.properties: MESSAGE=hello world from my.properties file
kind:
  ConfigMap
metadata:
  name: my-config
  name-space: default

# kubectl apply
kubectl apply -f my-config.YAML
kubectl describe cm my-config
\`\`\`
</code></pre><p>Secret is used to provide sensitive information to your application</p><pre><code>\`\`\`shell
kubectl create secret generic api-creds --from-literal=key=mysupersecretapikey

kubectl get secret

kubectl describe secret api-creds

# output in YAML format
kubectl get secret api-creds -o YAML

# use
# in .yaml file
env:
-name: API_CREDS
  valueFrom:
    secretKeyRef:
      name: api-creds
      key: key

#-------------------------------------------------------------------#
# config by using volume mounts
# secrets by mount as file: /etc/api/api-creds
spec:
  containers:
  - name: hello-kubernetes
    image: upkar/hello-kubernetes
    ports:
    - containerPort: 8080
    volumeMounts:
    - name: api-creds
      mountPath: &quot;/etc/api&quot;
      readOnly: true
    volumes:
    - name: api-creds
      secret:
        secretName: api-creds
\`\`\`
</code></pre><h3 id="service-binding" tabindex="-1"><a class="header-anchor" href="#service-binding" aria-hidden="true">#</a> Service Binding</h3><p>Service binding is the process needed to consume external Services or backing Services, including REST APIs, databases, and event buses in our applications</p>`,48);function h(m,b){const t=c("ExternalLinkIcon");return o(),r("div",null,[d,e("blockquote",null,[e("p",null,[e("a",p,[n("Kubernetes"),s(t)]),n(", also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications")])]),u])}const f=a(l,[["render",h],["__file","Kubernetes.html.vue"]]);export{f as default};
