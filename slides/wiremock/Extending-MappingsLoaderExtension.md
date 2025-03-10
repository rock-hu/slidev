---
layout: default 
title: Extending-MappingsLoaderExtension  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-MappingsLoaderExtension   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface Extension {
  + String getName();
  + void start();
  + void stop();
}

interface MappingsLoader {
    + void loadMappingsInto(StubMappings stubMappings);
}

interface MappingsLoaderExtension {

}
@enduml
```
</Transform>