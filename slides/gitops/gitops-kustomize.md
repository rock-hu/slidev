---
layout: 2x2-grid-header 
title: gitops-kustomize  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# gitops-kustomize   


::top-left::

**Overview**

<Transform :scale="0.8">
    <img src="/images/kustomize-gitops.jpg"  />
</Transform>     
::top-right::

**kustomize 术语**    
- kustomization
    kustomization 指的是 kustomization.yaml 文件，或者指的是包含 kustomization.yaml 文件的目录以及它里面引用的所有相关文件路径
- base
    base 指的是一个 kustomization, base 中描述了共享的内容，如资源和常见的资源配置
- overlay
    overlay 是一个 kustomization, 它修改(并因此依赖于)另外一个 kustomization. overlay 声明了与 base 之间的差异。通过 overlay 来维护基于 base 的不同 variants(变体)
- variant
    variant 是在集群中将 overlay 应用于 base 的结果。例如开发和生产环境都修改了一些共同 base 以创建不同的 variant。这些 variant 使用相同的总体资源，并与简单的方式变化
- resource
    在 kustomize 的上下文中，resource 是描述 k8s API 对象的 YAML 或 JSON 文件的相对路径。即是指向一个声明了 kubernetes API 对象的 YAML 文件
- patch
    修改文件的一般说明。文件路径，指向一个声明了 kubernetes API patch 的 YAML 文件

::bottom-left::
**Mainfests**    
```bash
kustomize-mainfests/base$ tree 
├── deployment.yaml
├── ingress.yaml
├── kustomization.yaml
├── secret.yaml
└── service.yaml
```

```bash
kustomize-mainfests/transactions-services$ tree
├── overlays
│   └── staging
│       ├── application.yaml
│       ├── destination-rule.yaml
│       ├── gateway.yaml
│       ├── ingress.yaml
│       ├── kustomization.yaml
│       ├── resource-quota.yaml
│       ├── staging.env
│       └── virtual-service.yaml
└── README.md
```
::bottom-right::
**kustomize vs Helm**   
Helm的定位：Kubernetes 的包管理工具，而kustomize是 Kubernetes 原生配置管理。Helm将应用抽象成Chart来管理, 专注于应用的操作、复杂性管理等, kustomize 关注k8s API 对象的管理。
- Helm 提供应用描述文件模板(Go template)，在部署时通过字符替换方式渲染成 YAML，对应用描述文件具有侵入性。Kustomize使用原生k8s对象，无需模板参数化，无需侵入应用描述文件(YAML),overlay 选择相应patch生成最终YAML
- Helm 专注于应用的复杂性及生命周期管理(包括 install、upgrade、rollback)，kustomize 通过管理应用的描述文件来间接管理应用
- Helm 使用Chart来管理应用，Chart相对固定、稳定，相当于静态管理，更适合对外交付使用，而kustomize管理的是正在变更的应用，创建新的overlay将应用部署在新的环境，相当于动态管理，适合于 DevOps
- Helm 通过Chart方式打包并管理应用版本，kustomize通过overlay方式管理应用不同的变体，通过Git来版本管理
总的来说，Helm 有自己一套体系来管理应用，而 kustomize 更轻量级，融入Kubernetes 的设计理念，通过原生 k8s API 对象来管理应用  