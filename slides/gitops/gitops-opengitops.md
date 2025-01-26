---
layout: 2x2-grid-header 
title: gitops  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
https://opengitops.dev/
https://geekflare.com/gitops-tools/
https://dzone.com/articles/30-tools-list-for-gitops
-->

# gitops



::top-left::
**How GitOps works**    
<Transform :scale="1.0">
    <img src="/images/gitops-diagram.png"  />
</Transform>   

::top-right::
**What you need to get started with GitOps**    
For you to get started with GitOps, you will need the following:
- A **Git repository** that contains your code and configuration files for your software system.
- A **GitOps Operator** or agent that can monitor your repository and synchronize your software system with it.
- A **Kubernetes cluster** or **another platform** such as cloud that can run your infrastructure and or applications.

::bottom-left::
**GitOps Principles**
- Declarative   
    A system managed by GitOps must have its desired state expressed declaratively. 
- Versioned and Immutable   
    Desired state is stored in a way that enforces immutability, versioning and retains a complete version history.
- Pulled Automatically      
    Software agents automatically pull the desired state declarations from the source.  
- Continuously Reconciled   
    Software agents continuously observe actual system state and attempt to apply the desired state.    

::bottom-right::
**GitOps tools and frameworks**
- `Kubernetes` sits at the heart of GitOps.   
- `Flux` A GitOps operator.
- `Argo CD` A GitOps operator provides declarative continuous delivery for Kubernetes.
- `OpenFaas` is a powerful framework that simplifies the deployment of functions and code.   
- `Terraform` is a popular infrastructure automation tool.. 
- `Sonatype` is one of the top full-spectrum software supply chain management platforms.
- `Fleet` is a lightweight open-source device management tool for GitOps.
- `Helm` is one of the most robust tools for configuring Kubernetes resources. 
- `Prometheus` acts as a monitoring tool for GitOps. 
- `Quay`. Container images are managed meticulously with this tool. 
- `Sealed Secrets` provide maximum security to your GitOps pipeline.