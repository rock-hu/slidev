---
layout: default 
title: kubernetes  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# kubernetes   

**microk8s install**  

```bash
sudo snap install microk8s --classic
microk8s status --wait-ready
```

**microk8s enable addons**  

```bash
microk8s enable dashboard dns registry istio
```

```bash
microk8s kubectl get namespaces
NAME                 STATUS   AGE
argo-events          Active   2d21h
argo-rollouts        Active   2d22h
argocd               Active   2d22h
container-registry   Active   2d22h
default              Active   2d22h
kube-node-lease      Active   2d22h
kube-public          Active   2d22h
kube-system          Active   2d22h
```

**microk8s dashboard**    
```bash
microk8s dashboard-proxy
Dashboard will be available at https://127.0.0.1:10443
Use the following token to login:
eyJhbGciOiJSUzI1NiIsImtpZCI6Im1nSkxLVmpFMnN6Mk1QSDNBVFBJUDh6QXVWYk5VZTllSXZ1N256OUtrcUkifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJtaWNyb2s4cy1kYXNoYm9hcmQtdG9rZW4iLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGVmYXVsdCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjkxZDg4OTczLWI3YjktNDJjYS1iZjA0LTAxMzQ4MGRkMjM4YSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpkZWZhdWx0In0.CWQNCAGbdcfX3YniqYlxvDqDNS_7zbtL6FfeSoEDwjgteXu-Usg6kYr7L7bQ_lwiy6dDHsGvJJ5o1Vvv2lAYgy5EBKXCkMOWW0EF_MkdtGbKAZmWOXsLGA2lGFPK9m1GesgczzayVwbRU5IUO7spZ7Rze66zKhieQ27J3cdk7yB_oAdLS097noGcGvXshAc0Atyq9539PqPT5aurve670vLv2ReJVNLM-RaBmjDBnYt-4JS9Erg_QvmqB0GEgox6JN9Fx-Df-6PEn0X8Ccu_FS8Ny3-NeSBaQV2g0GnhPVELN34bwKApCT74wJU6kDbbYimJ5Oz2pgrzr_RljqfkKA
```

**troubleshooting** 
```bash
kubectl get pods --all-namespaces
NAMESPACE            NAME                                                   READY   STATUS             RESTARTS          AGE
kube-system          coredns-7896dbf49-xrdl6                                0/1     ImagePullBackOff   0                 3d22h
kube-system          dashboard-metrics-scraper-6b96ff7878-dd8nw             0/1     ImagePullBackOff   0                 3d22h
kube-system          hostpath-provisioner-5fbc49d86c-mhrrw                  0/1     ErrImagePull       0                 3d22h
kube-system          kubernetes-dashboard-7d869bcd96-dpsb4                  0/1     ImagePullBackOff   0                 3d22h
```

```bash
kubectl describe pod kubernetes-dashboard-7d869bcd96-dpsb4 -n kube-system
sudo microk8s.ctr images pull .../kubernetesui/dashboard:v2.7.0
sudo microk8s.ctr images tag .../kubernetesui/dashboard:v2.7.0 kubernetesui/dashboard:v2.7.0
sudo microk8s.ctr images ls
```

```bash
systemctl daemon-reload
systemctl restart kubelet
sudo snap restart microk8s
```