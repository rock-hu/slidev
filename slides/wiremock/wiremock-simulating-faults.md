---
layout: default 
title: wiremock-simulating-faults  
zoom: 1.0   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# wiremock-simulating-faults   


> Global fixed stub delays     

<Transform :scale="0.8">
```json
{
    "fixedDelay": 500
}
```
</Transform>

> Available distributions    

- Lognormal delay
<Transform :scale="0.8">
```json
{
    "delayDistribution": {
        "type": "lognormal",
        "median": 80,
        "sigma": 0.4
    }
}
```
</Transform>

- Uniform delay
<Transform :scale="0.8">
```json
{
    "delayDistribution": {
        "type": "uniform",
        "lower": 15,
        "upper": 25
    }
}
```
</Transform>

> Chunked Dribble Delay    
<Transform :scale="0.8">
```json
{
    "chunkedDribbleDelay": {
        "numberOfChunks": 5,
        "totalDuration": 1000
    }
}
```
</Transform>