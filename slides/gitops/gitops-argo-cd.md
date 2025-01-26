---
layout: 2x2-grid-header 
title: gitops-argo-cd  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
https://argo-cd.readthedocs.io/
https://kostis-argo-cd.readthedocs.io/en/first-page/getting_started/install_cli/


rock@rock:~$ argocd app create --help
Create an application

Usage:
  argocd app create APPNAME [flags]

export ARGOCD_OPTS='--port-forward-namespace argocd'

argocd login 127.0.0.1:8080


argocd cert list --cert-type ssh


https://kustomize.io/
https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/
https://kubectl.docs.kubernetes.io/
-->

# gitops-argo-cd   


::top-left::

**Overview**
<Transform :scale="0.58">
    <img src="/images/argocd_architecture.webp"  />
</Transform>     
::top-right::

**Concepts**    
- `Application` A group of Kubernetes resources (CRD) as defined by a manifest. 
- `Application source type` Which Tool is used to build the application.
- `Target state` The desired state of an application, as represented by files in a Git repository.
- `Live state` The live state of that application. What pods etc are deployed.
- `Sync status` Whether or not the live state matches the target state. 
- `Sync` The process of making an application move to its target state. 
- `Sync operation` status Whether or not a sync succeeded.
- `Refresh` Compare the latest code in Git with the live state. Figure out what is different.
- `Health` The health of the application, is it running correctly? Can it serve requests?

::bottom-left::
**Commands**    

```bash
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

```bash
argocd admin initial-password -n argocd
argocd login <ARGOCD_SERVER>
```

```bash
kubectl version --client
    Client Version: v1.31.2
    Kustomize Version: v5.4.2
```

```bash
argocd app create statements-services --repo ... --revision master --path ... 
    --dest-namespace ... --dest-server ... --kustomize-image ....
argocd app sync statements-services
```



::bottom-right::
**Manifests**   
Argo CD supports several different ways in which Kubernetes manifests can be defined:
- Kustomize applications
- Helm charts
- A directory of YAML/JSON/Jsonnet manifests, including Jsonnet.
- Any custom config management tool configured as a config management plugin

[Argo CD's API](https://127.0.0.1:8080/swagger-ui)  