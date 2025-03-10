---
layout: default 
title: spring-batch-tasklet  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# spring-batch-tasklet   


## TaskletStep    
Chunk-oriented processing is not the only way to process in a Step. What if a Step must consist of a stored procedure call? 
You could implement the call as an `ItemReader` and return null after the procedure finishes. However, doing so is a bit unnatural, since there would need to be a no-op `ItemWriter`. Spring Batch provides the `TaskletStep` for this scenario.

```java
class TaskletStep extends AbstractStep {
    - RepeatOperations stepOperations
    - CompositeChunkListener chunkListener
    - StepInterruptionPolicy interruptionPolicy 
    - CompositeItemStream stream
    - PlatformTransactionManager transactionManager
    - TransactionAttribute transactionAttribute
    - Tasklet tasklet
    # void doExecute(StepExecution stepExecution)
}
```


## Tasklet    
The `Tasklet` interface has one method, execute, which is called repeatedly by the `TaskletStep` until it either returns `RepeatStatus.FINISHED` or throws an exception to signal a failure. Each call to a Tasklet is wrapped in a transaction.     

```java
interface Tasklet {
    + RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) 
}
```



<Transform :scale="1.0">
```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho


interface RepeatOperations {
	RepeatStatus iterate(RepeatCallback callback)

}
interface Tasklet {
    + RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) 
}

abstract class StepContextRepeatCallback implements RepeatCallback {
    - Queue<ChunkContext> attributeQueue
    - StepExecution stepExecution
    + RepeatStatus doInIteration(RepeatContext context)
    + {abstract} RepeatStatus doInChunkContext(RepeatContext context, ChunkContext chunkContext)
}

note right
public RepeatStatus doInIteration(RepeatContext context) throws Exception {
    StepContext stepContext = StepSynchronizationManager.register(stepExecution);
    ChunkContext chunkContext = attributeQueue.poll();
    try {
        return doInChunkContext(context, chunkContext);
    } finally {
        StepSynchronizationManager.close();
    }
}
end note

class ChunkContext extends AttributeAccessorSupport {
    - StepContext stepContext
    - boolean complete = false
    + ChunkContext(StepContext stepContext)
}
enum RepeatStatus {
    - CONTINUABLE
    - FINISHED
    - boolean continuable
    + RepeatStatus(boolean continuable)
}
class TaskletStep extends AbstractStep {
    - RepeatOperations stepOperations
    - CompositeChunkListener chunkListener
    - StepInterruptionPolicy interruptionPolicy 
    - CompositeItemStream stream
    - PlatformTransactionManager transactionManager
    - TransactionAttribute transactionAttribute
    - Tasklet tasklet
    # void doExecute(StepExecution stepExecution)
}
note right
protected void doExecute(StepExecution stepExecution) throws Exception {
    final Semaphore semaphore = createSemaphore();
    stepOperations.iterate(new StepContextRepeatCallback(stepExecution) {
        StepExecution stepExecution = chunkContext.getStepContext().getStepExecution();
        interruptionPolicy.checkInterrupted(stepExecution)
        RepeatStatus status = new TransactionTemplate(transactionManager, transactionAttribute).execute(new ChunkTransactionCallback(chunkContext, semaphore));
        chunkListener.afterChunk(chunkContext);
        interruptionPolicy.checkInterrupted(stepExecution);
    });
}
end note
class ChunkTransactionCallback implements TransactionSynchronization, TransactionCallback<RepeatStatus>{
    - StepExecution stepExecution
    - ChunkContext chunkContext
    - StepExecution oldVersion
    - Semaphore semaphore
    + ChunkTransactionCallback(ChunkContext chunkContext, Semaphore semaphore)
    + afterCompletion(int status) 
    + RepeatStatus doInTransaction(TransactionStatus status)
}


TaskletStep -down-> RepeatOperations : iterate(RepeatCallback callback)
TaskletStep -down-> StepContextRepeatCallback : callback

@enduml
```  
</Transform>
