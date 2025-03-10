---
layout: default 
title: Extending-ResponseDefinitionTransformer  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-ResponseDefinitionTransformer   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface ResponseDefinitionTransformer extends Extension {
  + ResponseDefinition transform(ServeEvent serveEvent);
  + boolean applyGlobally();
}

@enduml
```
</Transform>