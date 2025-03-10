---
layout: 2x2-grid-header
title: spring-batch-listener  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# spring-batch-listener   

::top-left::
**Listeners**
- JobExecutionListener - @BeforeJob, @AfterJob
- StepExecutionListener - @BeforeStep, @AfterStep
- ChunkListener - @BeforeChunk, @AfterChunk, @AfterChunkError
- ItemReadListener, ItemProcessListener, ItemWriteListener
- SkipListener - @OnSkipInRead, @OnSkipInWrite, @OnSkipInProcess

::top-right::
**JobExecutionListener**

```java
public interface JobExecutionListener {
	public void beforeJob(JobExecution jobExecution);
	public void afterJob(JobExecution jobExecution);
}
```

```java
public class JobExecution extends Entity {
	private final JobParameters jobParameters;
	private JobInstance jobInstance;
	private volatile Collection<StepExecution> stepExecutions = Collections.synchronizedSet(new LinkedHashSet<>());
	private volatile BatchStatus status = BatchStatus.STARTING;
	private volatile LocalDateTime startTime;
	private volatile LocalDateTime createTime = LocalDateTime.now();
	private volatile LocalDateTime endTime;
	private volatile LocalDateTime lastUpdated;
	private volatile ExitStatus exitStatus = ExitStatus.UNKNOWN;
	private volatile ExecutionContext executionContext = new ExecutionContext();
	private transient volatile List<Throwable> failureExceptions
}
```



::bottom-left::
**StepExecutionListener, ChunkListener**    
```java
public interface StepExecutionListener extends StepListener {
	public void beforeStep(StepExecution stepExecution);
	public ExitStatus afterStep(StepExecution stepExecution);

}
```
```java
public interface ChunkListener extends StepListener {
	public void beforeChunk(ChunkContext context);
	public void afterChunk(ChunkContext context);
	public void afterChunkError(ChunkContext context);
}
```

::bottom-right::
**Item*Listener, SkipListener**

<Transform :scale="1.0">
```plantuml
@startuml
!option handwritten true
skinparam linetype polyline
skinparam linetype ortho
class Entity implements Serializable {
	- Long id
	- volatile Integer version    
    + boolean equals(Object other)
    + int hashCode()
}
class JobExecution extends Entity {
	- final JobParameters jobParameters
	- JobInstance jobInstance
	- volatile Collection<StepExecution> stepExecutions
	- volatile BatchStatus status
	- volatile LocalDateTime startTime
	- volatile LocalDateTime createTime
	- volatile LocalDateTime endTime
	- volatile LocalDateTime lastUpdated
	- volatile ExitStatus exitStatus
	- volatile ExecutionContext executionContext
}

class StepExecution extends Entity {
	- final JobExecution jobExecution
	- final String stepName
	- volatile BatchStatus status = BatchStatus.STARTING
	- volatile long readCount
	- volatile long writeCount
	- volatile long commitCount
	- volatile long rollbackCount
	- volatile long readSkipCount
	- volatile long processSkipCount
	- volatile long writeSkipCount
	- volatile LocalDateTime startTime
	- volatile LocalDateTime createTime
	- volatile LocalDateTime endTime
	- volatile LocalDateTime lastUpdated
	- volatile ExecutionContext executionContext
	- volatile ExitStatus exitStatus
	- volatile boolean terminateOnly
	- volatile long filterCount
	- transient volatile List<Throwable> failureExceptions
}
interface StepListener {
}

interface ItemReadListener<T> extends StepListener {
    + void beforeRead()
    + void afterRead(T item)
    + void onReadError(Exception ex) 
}
interface ItemWriteListener<S> extends StepListener {
    + void beforeWrite(Chunk<? extends S> items)
    + void afterWrite(Chunk<? extends S> items)
    + void onWriteError(Exception exception, Chunk<? extends S> items)
}
interface ItemProcessListener<T, S> extends StepListener {
    + void beforeProcess(T item)
    + void afterProcess(T item, @Nullable S result) 
    + void onProcessError(T item, Exception e)
}
interface ChunkListener extends StepListener {
	+  void beforeChunk(ChunkContext context) 
	+  void afterChunk(ChunkContext context)
	+  void afterChunkError(ChunkContext context) 
}

interface StepExecutionListener extends StepListener {
    + void beforeStep(StepExecution stepExecution)
    + ExitStatus afterStep(StepExecution stepExecution)
}
StepExecutionListener -down-> StepExecution : stepExecution
interface JobExecutionListener {
    + void beforeJob(JobExecution jobExecution)
    + void afterJob(JobExecution jobExecution)
}
JobExecutionListener -down-> JobExecution : jobExecution
interface SkipListener<T, S> extends StepListener {
    + void onSkipInRead(Throwable t)
    + void onSkipInWrite(S item, Throwable t) 
    + void onSkipInProcess(T item, Throwable t)
}
class ExecutionContextPromotionListener implements StepExecutionListener , InitializingBean {
    - String[] keys
    - String[] statuses = new String[] { ExitStatus.COMPLETED.getExitCode() }
    - boolean strict = false
    + ExitStatus afterStep(StepExecution stepExecution)
    + void afterPropertiesSet()
}
@enduml
```  
</Transform>