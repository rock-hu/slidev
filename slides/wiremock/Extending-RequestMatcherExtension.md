---
layout: default 
title: Extending-RequestMatcherExtension  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-RequestMatcherExtension   

<Transform :scale="0.9">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface NamedValueMatcher<T> extends ValueMatcher<T> {
  + String getName();
  + String getExpected();    
}

abstract class RequestMatcher implements NamedValueMatcher<Request> {

}

abstract class RequestMatcherExtension extends RequestMatcher implements Extension {
    + {static} final RequestMatcherExtension ALWAYS
    + {static} final RequestMatcherExtension NEVER
    + abstract MatchResult match(Request request, Parameters parameters);
}

@enduml
```
</Transform>