---
layout: default 
title: kubernetes-istio  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

# kubernetes-istio   

> [Choosing between sidecar and ambient](https://istio.io/latest/docs/overview/dataplane-modes/)        

**Best Practices:**     
| [Deployment](https://istio.io/latest/docs/ops/best-practices/deployment/) | [Traffic Management](https://istio.io/latest/docs/ops/best-practices/traffic-management/) | [Security](https://istio.io/latest/docs/ops/best-practices/security/) | [Observability](https://istio.io/latest/docs/ops/best-practices/observability/) | [Image Signing and Validation](https://istio.io/latest/docs/ops/best-practices/image-signing-validation/) |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |


**Istio supports two main data plane modes:**  
> The data plane is the set of proxies that mediate and control all network communication between microservices. They also collect and report telemetry on all mesh traffic. The control plane manages and configures the proxies in the data plane.    
- **sidecar mode**, which deploys an Envoy proxy along with each pod that you start in your cluster, or running alongside services running on VMs.
- **ambient mode**, which uses a per-node Layer 4 proxy, and optionally a per-namespace Envoy proxy for Layer 7 features.   
<div class="two-columns w-full h-full grid grid-rows-2 gap-x-10">
  <div id="top" class="grid grid-cols-2">
    <div class="col-top-left" >
<Transform :scale="0.9">
    <img src="/images/Istio-sidecar-mode.png"  />
</Transform>        
    </div>
    <div class="col-top-right">
<Transform :scale="0.9">
    <img src="/images/stio-ambient-mode-waypoint-proxy.png"  />
</Transform>            
    </div>
  </div>
</div>

