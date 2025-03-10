---
layout: default 
title: Extending-ServeEventListener  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-ServeEventListener   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface ServeEventListener extends Extension {
    + void onEvent(RequestPhase requestPhase, ServeEvent serveEvent, Parameters parameters) 
    + void beforeMatch(ServeEvent serveEvent, Parameters parameters);
    + void afterMatch(ServeEvent serveEvent, Parameters parameters);
    + void beforeResponseSent(ServeEvent serveEvent, Parameters parameters);
    + void afterComplete(ServeEvent serveEvent, Parameters parameters);
    + boolean applyGlobally();
}

@enduml
```
</Transform>