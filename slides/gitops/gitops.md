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
https://www.gitops.tech/
Since its inception in 2017 by Weaveworks, GitOps has caused quite some fuss on Twitter and KubeCon. This site aggregates the essence of GitOps to help clear up the confusion about the topic.

https://opengitops.dev/
OpenGitOps is a set of open-source standards, best practices, and community-focused education to help organizations adopt a structured, standardized approach to implementing GitOps.
-->

# gitops   

::top-left::
**What is GitOps?**      
The core idea of GitOps is having a Git repository that always contains   
declarative descriptions of the infrastructure currently desired in the production environment 
and     
an automated process to make the production environment match the described state in the repository.  
If you want to deploy a new application or update an existing one, you only need to update the repository - the automated process handles everything else.  
It’s like having cruise control for managing your applications in production. 

::top-right::
**Why should I use GitOps?**  
- Deploy Faster More Often
- Easy and Fast Error Recovery
- Easier Credential Management
- Self-documenting Deployments
- Shared Knowledge in Teams


::bottom-left::
**How does GitOps work?**    
- Environment Configurations as Git repository
- Push-based vs. Pull-based Deployments
  - Push-based Deployments
  - Pull-based Deployments
- Working with Multiple Applications and Environments

::bottom-right::
**GitOps Principles**    
- Declarative - A system managed by GitOps must have its desired state expressed declaratively.
- Versioned and Immutable - Desired state is stored in a way that enforces immutability, versioning and retains a complete version history.
- Pulled Automatically - Software agents automatically pull the desired state declarations from the source. 
- Continuously Reconciled - Software agents continuously observe actual system state and attempt to apply the desired state.    