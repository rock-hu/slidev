---
layout: default 
title: Extending-ResponseTransformer  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# Extending-ResponseTransformer   

<Transform :scale="1.0">

```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho

class Response {
  - final int status;
  - final String statusMessage;
  - final InputStreamSource bodyStreamSource;
  - final HttpHeaders headers;
  - final boolean configured;
  - final Fault fault;
  - final boolean fromProxy;
  - final long initialDelay;
  - final ChunkedDribbleDelay chunkedDribbleDelay;
  - final String protocol;
}

class ServeEvent {
  - final UUID id;
  - final LoggedRequest request;
  - final StubMapping stubMapping;
  - final ResponseDefinition responseDefinition;
  - final LoggedResponse response;
  - final Timing timing;
  - final ConcurrentLinkedQueue<SubEvent> subEvents;
  - final Stopwatch stopwatch;
}

interface ResponseTransformer extends Extension {
  + Response transform(Response response, ServeEvent serveEvent);
  + boolean applyGlobally();
}

@enduml
```
</Transform>