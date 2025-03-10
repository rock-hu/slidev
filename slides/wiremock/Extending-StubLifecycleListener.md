---
layout: default 
title: Extending-StubLifecycleListener  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-StubLifecycleListener   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface StubLifecycleListener extends Extension {
  + void beforeStubCreated(StubMapping stub);
  + void afterStubCreated(StubMapping stub);
  + void beforeStubEdited(StubMapping oldStub, StubMapping newStub);
  + void afterStubEdited(StubMapping oldStub, StubMapping newStub);
  + void beforeStubRemoved(StubMapping stub);
  + void afterStubRemoved(StubMapping stub);
  + void beforeStubsReset();
  + void afterStubsReset();
}
@enduml
```
</Transform>