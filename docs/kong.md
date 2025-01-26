# kong  

> Kong Ingress Controller allows you to run Kong Gateway as a Kubernetes Ingress to handle inbound requests for a Kubernetes cluster.   
Kong Ingress Controller takes Kubernetes resources such as Ingress and HTTPRoute and converts them into a valid Kong Gateway configuration. It enables you to use all the features of Kong Gateway. 

> A Kubernetes ingress controller is an application that runs in a cluster and configures a load balancer based on Kubernetes resources (Ingress, HTTPRoute, TCPRoute and more). Kong Ingress Controller configures Kong Gateway as a software load balancer which runs in the cluster and is typically exposed as a LoadBalancer service.  


## Deployment Methods
Kong recommends using the kong/ingress Helm chart to deploy Kong Ingress Controller. This chart supports both  `DB-less` and `DB-backed` deployments.


```bash
kubectl create namespace digital-dev
```

## Install the Gateway APIs 
```bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/standard-install.yaml
```
## Install Kong 
```bash
helm install kong --namespace kong --create-namespace --repo https://charts.konghq.com ingress
```

## RBAC permissions 
Kong Ingress Controller communciates with the Kubernetes API-server and dynamically configures Kong to automatically load balance across pods of a service as any service is scaled in our out. 
For this reason, it requires RBAC permissions to access resources stored in Kubernetes object store.        
It needs read permissions (get,list,watch) on the following Kubernetes resources:   
- Endpoints
- Nodes
- Pods
- Secrets
- Ingress
- KongPlugins
- KongConsumers
- KongCredentials
- KongIngress

## connectivity to Kong 

```bash
export PROXY_IP=$(kubectl get svc --namespace kong kong-gateway-proxy -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
echo $PROXY_IP
```

```bash
curl -i $PROXY_IP
```


## references

| item                                     | link(s)                                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| konghq.com/kubernetes-ingress-controller | https://docs.konghq.com/kubernetes-ingress-controller/latest <br>https://github.com/Kong/kubernetes-ingress-controller |
| Kubernetes / Install Kong Gateway        | https://docs.konghq.com/gateway/latest/install/kubernetes/proxy/                                                       |
| helm - kong/ingress                      | https://charts.konghq.com/                                                                                             |

