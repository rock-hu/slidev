---
layout: default 
title: spring-batch-metrics  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
https://docs.spring.io/spring-batch/reference/monitoring-and-metrics.html
-->

# spring-batch-metrics   

## Metrics    
|                             |                   |                             |                                   |
| --------------------------- | ----------------- | --------------------------- | --------------------------------- |
| _Metric Name_               | _Type_            | _Description_               | _Tags_                            |
| `spring.batch.job`          | `TIMER`           | Duration of job execution   | `name`, `status`                  |
| `spring.batch.job.active`   | `LONG_TASK_TIMER` | Currently active jobs       | `name`                            |
| `spring.batch.step`         | `TIMER`           | Duration of step execution  | `name`, `job.name`, `status`      |
| `spring.batch.step.active`  | `LONG_TASK_TIMER` | Currently active step       | `name`                            |
| `spring.batch.item.read`    | `TIMER`           | Duration of item reading    | `job.name`, `step.name`, `status` |
| `spring.batch.item.process` | `TIMER`           | Duration of item processing | `job.name`, `step.name`, `status` |
| `spring.batch.chunk.write`  | `TIMER`           | Duration of chunk writing   | `job.name`, `step.name`, `status` |


```java
Metrics.globalRegistry.config().meterFilter(MeterFilter.denyNameStartsWith("spring.batch"))
```


## Tracing    
Spring Batch provides tracing through Micrometer’s Observation API. By default, tracing is enabled when using `@EnableBatchProcessing`.   
Spring Batch will create a trace for each job execution and a span for each step execution.     