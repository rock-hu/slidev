---
layout: default 
title: wiremock-extending-wiremock  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# wiremock-extending-wiremock   

> Each extension point is defined by an interface that extends from Extension and extension implementations are loaded at startup time.    


At present, the following extension interfaces are available:    
`RequestFilterV2` / `AdminRequestFilterV2` / `StubRequestFilterV2`: Intercept requests, modifying them or taking alternative actions based on their content.    
`ResponseDefinitionTransformerV2`: Modify the response definition used to generate a response. See Transforming responses.    
`ResponseTransformerV2`: Modify the response served to the client. See Transforming responses.    
`ServeEventListener`: Listen for events at various points in the request processing lifecycle. See Listening for Serve Events.    
`AdminApiExtension`: Add admin API functions. See Admin API Extensions.    
`RequestMatcherExtension`: Implement custom request matching logic. See Custom matching.    
`GlobalSettingsListener`: Listen for changes to the settings object. See Listening for Settings Changes.    
`StubLifecycleListener`: Listen for changes to the stub mappings. See Listening for Stub Changes.    
`TemplateHelperProviderExtension`: Provide custom Handlebars helpers to the template engine. See Adding Template Helpers.    
`TemplateModelDataProviderExtension`: Provide additional data to the model passed to response templates. See Adding Template Model Data.    
`MappingsLoaderExtension`: Provide additional source to load the stub mappings. See Adding Mappings Loader.    


> Registering Extensions    

```java
new WireMockServer(wireMockConfig().extensions(BodyContentTransformer.class, HeaderMangler.class));
```
