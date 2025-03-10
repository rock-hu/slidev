---
layout: default 
title: Extending-TemplateHelperProviderExtension  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-TemplateHelperProviderExtension   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho



interface TemplateHelperProviderExtension extends Extension {
  Map<String, Helper<?>> provideTemplateHelpers();
}

@enduml
```
</Transform>