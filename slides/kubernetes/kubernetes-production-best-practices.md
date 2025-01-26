---
layout: 2x2-grid-header 
title: kubernetes-production-best-practices  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
https://learnk8s.io/production-best-practices
-->

# kubernetes-production-best-practices   

::top-left::
## Application development     
- Health checks
  - Containers have Readiness Liveness probes
  - Containers crash when there's a fatal error
- Apps are independent
  - The Readiness probes are independent
  - The app retries connecting to dependent services
- Graceful shutdown  , Fault tolerance
- Resources utilisation, Tagging resources
- Logging
- Scaling
- Configuration and secrets

::top-right::
## Governance    
- Namespace limits - LimitRange,ResourceQuotas
- Pod security policies
- Network policies
- Role-Based Access Control (RBAC) policies
- Custom policies
- Container Security  
- Immutable image, configurations
- Identity-based secrets management

::bottom-left::
## Cluster configuration    
- Approved Kubernetes configuration
- Authentication
- Role-Based Access Control (RBAC) - ServiceAccount tokens are for applications, controllers
- Logging setup


::bottom-right::
## Production considerations
- Networking, Security, Complexity
- Availability, Scale, Security
- Serverless, Managed control plane, Managed worker nodes, Integration
- Infrastructure as Code (IaC) 
- Monitoring and Centralized Logging
- Centralized Ingress Controller with SSL Certificate Management 
- GitOps Deployments 
- Secret Management
- Backup and Disaster Recovery
- Storage Scalability and Reliability





