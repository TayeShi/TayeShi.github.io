# Services, Load Balancing, and Networking (服务，负载均衡和网络)

Concepts and resources behind networking in Kubernetes.

Kubernetes中网络背后的概念和资源

## The Kubernetes network model (Kubernetes网络模型)

The Kubernetes network model is built out of several pieces:

Kubernetes网络模型由几个部分组成：

- Each [pod](https://github.com/kubernetes/website/blob/main/docs/concepts/workloads/pods) in a cluster gets its own unique cluster-wide IP address.

  - A pod has its own private network namespace which is shared by all of the containers within the pod. Processes running in different containers in the same pod can communicate with each other over `localhost`.

- The *pod network* (also called a cluster network) handles communication between pods. It ensures that (barring intentional network segmentation):

  - All pods can communicate with all other pods, whether they are on the same [node](https://github.com/kubernetes/website/blob/main/docs/concepts/architecture/nodes) or on different nodes. Pods can communicate with each other directly, without the use of proxies or address translation (NAT).

    On Windows, this rule does not apply to host-network pods.

  - Agents on a node (such as system daemons, or kubelet) can communicate with all pods on that node.

- The [Service](https://github.com/kubernetes/website/blob/main/docs/concepts/services-networking/service) API lets you provide a stable (long lived) IP address or hostname for a service implemented by one or more backend pods, where the individual pods making up the service can change over time.

  - Kubernetes automatically manages [EndpointSlice](https://github.com/kubernetes/website/blob/main/docs/concepts/services-networking/endpoint-slices) objects to provide information about the pods currently backing a Service.
  - A service proxy implementation monitors the set of Service and EndpointSlice objects, and programs the data plane to route service traffic to its backends, by using operating system or cloud provider APIs to intercept or rewrite packets.

- The [Gateway](https://github.com/kubernetes/website/blob/main/docs/concepts/services-networking/gateway) API (or its predecessor, [Ingress](https://github.com/kubernetes/website/blob/main/docs/concepts/services-networking/ingress)) allows you to make Services accessible to clients that are outside the cluster.

  - A simpler, but less-configurable, mechanism for cluster ingress is available via the Service API's [`type: LoadBalancer`](https://github.com/kubernetes/website/blob/main/docs/concepts/services-networking/service/#loadbalancer), when using a supported {{< glossary_tooltip term_id="cloud-provider">}}.

- [NetworkPolicy](https://github.com/kubernetes/website/blob/main/docs/concepts/services-networking/network-policies) is a built-in Kubernetes API that allows you to control traffic between pods, or between pods and the outside world.



- 集群中的每个pod都有自己唯一的集群范围的IP地址。

  - Pod有自己的私有网络命名空间，有Pod中的所有容器共享。在同一pod中不同容器里运行的进程可以通过localhost进行相互通信。

- pod网络（也称集群网络）控制pod间的通信。它确保（除非有意进行网络分段）：

  - 所有pod都可以与其他pod通信，不论他们是否在相同节点上。pod间可以直接相互通信，无需使用代理或地址转换(NAT)。

    Windows上，这个规则不适合主机网络。

  - 节点上的代理Agent（如系统守护进程system daemons或kubelet）可以与这个节点上的所有pod进行通信。

- Service API允许你您为一个或多个后端pod实现的服务提供稳定（长期）的IP地址或主机名，其中构成服务的个别pod可能随着时间推移而变化。

  - Kubernetes自动管理EndpointSlice对象，以提供当前支持Service的Pod的信息。
  - 服务代理实现对服务集和EndpointSlice对象的监控，并通过使用作系统或云提供商 API 拦截或重写数据包来对数据平面进行编程，以将服务流量路由到其后端。

- a

  - a

- a

In older container systems, there was no automatic connectivity between containers on different hosts, and so it was often necessary to explicitly create links between containers, or to map container ports to host ports to make them reachable by containers on other hosts. This is not needed in Kubernetes; Kubernetes's model is that pods can be treated much like VMs or physical hosts from the perspectives of port allocation, naming, service discovery, load balancing, application configuration, and migration.

Only a few parts of this model are implemented by Kubernetes itself. For the other parts, Kubernetes defines the APIs, but the corresponding functionality is provided by external components, some of which are optional:

- Pod network namespace setup is handled by system-level software implementing the [Container Runtime Interface](https://github.com/kubernetes/website/blob/main/docs/concepts/architecture/cri.md).
- The pod network itself is managed by a [pod network implementation](https://github.com/kubernetes/website/blob/main/docs/concepts/cluster-administration/addons/#networking-and-network-policy). On Linux, most container runtimes use the {{< glossary_tooltip text="Container Networking Interface (CNI)" term_id="cni" >}} to interact with the pod network implementation, so these implementations are often called *CNI plugins*.
- Kubernetes provides a default implementation of service proxying, called {{< glossary_tooltip term_id="kube-proxy">}}, but some pod network implementations instead use their own service proxy that is more tightly integrated with the rest of the implementation.
- NetworkPolicy is generally also implemented by the pod network implementation. (Some simpler pod network implementations don't implement NetworkPolicy, or an administrator may choose to configure the pod network without NetworkPolicy support. In these cases, the API will still be present, but it will have no effect.)
- There are many [implementations of the Gateway API](https://gateway-api.sigs.k8s.io/implementations/), some of which are specific to particular cloud environments, some more focused on "bare metal" environments, and others more generic.
