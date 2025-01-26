---
layout: default 
title: wiremock-simulating-faults  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# wiremock-simulating-faults   

> Global fixed stub delays     

```json
{
    "fixedDelay": 500
}
```


> Available distributions    

- Lognormal delay

```json
{
    "delayDistribution": {
        "type": "lognormal",
        "median": 80,
        "sigma": 0.4
    }
}
```


- Uniform delay
```json
{
    "delayDistribution": {
        "type": "uniform",
        "lower": 15,
        "upper": 25
    }
}
```


> Chunked Dribble Delay    
```json
{
    "chunkedDribbleDelay": {
        "numberOfChunks": 5,
        "totalDuration": 1000
    }
}
```
