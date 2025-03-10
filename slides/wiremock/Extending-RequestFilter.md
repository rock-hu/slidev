---
layout: default 
title: Extending-RequestFilter  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-RequestFilter   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface RequestFilter extends Extension {
  RequestFilterAction filter(Request request, ServeEvent serveEvent);
  boolean applyToAdmin();
  boolean applyToStubs();
}

@enduml
```
</Transform>