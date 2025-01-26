---
layout: default 
title: wiremock-response-templating  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# wiremock-response-templating   


```java
WireMockServer wm = new WireMockServer(options().globalTemplating(true));
```



```plantuml
@startuml
abstract class AbstractTransformer<T> implements Extension {
    + abstract T transform(Request request, T response, FileSource files, Parameters parameters);
    + boolean applyGlobally()
}
abstract class ResponseDefinitionTransformer<ResponseDefinition> extends AbstractTransformer {
  + {abstract} ResponseDefinition transform(Request request,ResponseDefinition definition,FileSource files,Parameters parameters);
}
@enduml
```

> The request    

`request.pathSegments.[<n>]` - URL path segment (zero indexed)     
`request.query.<key>` - First value of a query parameter     
`request.headers.[<key>]` - Header with awkward characters        
`request.cookies.<key>` - First value of a request cookie    
`request.body` - Request body text    


> [Handlebars helpers](https://wiremock.org/docs/response-templating/#handlebars-helpers)    

> Date and time helpers     

> Random value helper    

> Formatting numbers    

> XPath helpers     
