---
layout: default 
title: Extending-GlobalSettingsListener  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-GlobalSettingsListener   



<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface GlobalSettingsListener extends Extension {
  + void beforeGlobalSettingsUpdated(GlobalSettings oldSettings, GlobalSettings newSettings);
  + void afterGlobalSettingsUpdated(GlobalSettings oldSettings, GlobalSettings newSettings);
}

@enduml
```
</Transform>