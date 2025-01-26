# kubernetes    


## microk8s    
```bash
microk8s status
microk8s upgrade
```
## kubectl get namespace    
```bash
rock@z420:~$ kubectl get namespace
NAME                     STATUS   AGE
argo-rollouts            Active   12h
argocd                   Active   12h
cert-manager             Active   8d
cert-manager-test        Active   8d
container-registry       Active   12h
default                  Active   8d
gpu-operator-resources   Active   8d
ingress                  Active   8d
kube-node-lease          Active   8d
kube-public              Active   8d
kube-system              Active   8d
observability            Active   8d
sosivio                  Active   8d
```

## microk8s enable  
```
microk8s enable openfaas sosivio traefik observability jaeger istio dashboard-ingress trivy ingress linkerd kubearmor gopaddle falco 
```

## argocd, argo-rollouts    

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

```bash
kubectl create namespace argo-rollouts
kubectl apply -n argo-rollouts -f https://github.com/argoproj/argo-rollouts/releases/latest/download/install.yaml
```