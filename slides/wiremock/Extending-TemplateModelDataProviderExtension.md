---
layout: default 
title: Extending-TemplateModelDataProviderExtension  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-TemplateModelDataProviderExtension   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho
interface TemplateModelDataProviderExtension extends Extension {
  Map<String, Object> provideTemplateModelData(ServeEvent serveEvent);
}
@enduml
```
</Transform>