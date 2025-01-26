---
layout: default 
title: kubernetes-namespaces  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# kubernetes-namespaces   

::left::
<img src="/images/kubernetes-namespace.png"  />

::right::

> In Kubernetes, namespaces provide a mechanism for isolating groups of resources within a single cluster. 
> Names of resources need to be unique within a namespace, but not across namespaces. Namespace-based scoping is applicable only for namespaced objects (e.g. Deployments, Services, etc.) and not for cluster-wide objects (e.g. StorageClass, Nodes, PersistentVolumes, etc.).

```bash
kubectl create namespace digital-dev
kubectl label namespace digital-dev istio-discovery=enabled
```
