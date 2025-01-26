---
layout: default 
title: kubernetes-concepts  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
https://kubernetes.io/docs/concepts/
https://kubernetes.io/docs/concepts/overview/components/
-->

# kubernetes-concepts   
- **Service discovery and load balancing** Kubernetes can expose a container using the DNS name or using their own IP address. 
- **Storage orchestration** Kubernetes allows you to automatically mount a storage system of your choice, such as local storages, public cloud providers, and more.    
- **Automated rollouts and rollbacks** You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state and rate. 
- **Automatic bin packing** You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory each container needs. 
- **Self-healing** Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to user-defined health check, doesn't advertise to clients until ready to serve.    
- **Secret and configuration management** Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. 
- **Batch execution** In addition to services, Kubernetes can manage your batch and CI workloads, replacing containers that fail, if desired.    
- **Horizontal scaling** Scale your application up and down with a simple command, with a UI, or automatically based on CPU usage.    
- **IPv4/IPv6 dual-stack** Allocation of IPv4 and IPv6 addresses to Pods and Services    
- **Designed for extensibility** Add features to your Kubernetes cluster without changing upstream source code.    

<Transform :scale="0.8">
    <img src="/images/components-of-kubernetes.svg"  />
</Transform>    
