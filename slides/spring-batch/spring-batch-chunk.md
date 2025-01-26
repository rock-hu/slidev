---
layout: 2x2-grid-header 
title: spring-batch-chunk  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# spring-batch-chunk   


::top-left::
**ChunkOrientedTasklet**

```java
class ChunkOrientedTasklet<I> implements Tasklet {
	private final ChunkProcessor<I> chunkProcessor
	private final ChunkProvider<I> chunkProvider
	public ChunkOrientedTasklet(ChunkProvider<I> chunkProvider,ChunkProcessor<I> chunkProcessor){
		this.chunkProvider = chunkProvider
		this.chunkProcessor = chunkProcessor
	}
	public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext){
		Chunk<I> inputs = (Chunk<I>) chunkContext.getAttribute(INPUTS_KEY);
		chunkProcessor.process(contribution, inputs);
		chunkProvider.postProcess(contribution, inputs);
		chunkContext.removeAttribute(INPUTS_KEY);
		chunkContext.setComplete();
		return RepeatStatus.continueIf(!inputs.isEnd());
	}
}
```
::top-right::
**ChunkProvider**
- SimpleChunkProvider    
- FaultTolerantChunkProvider    
```java
public class FaultTolerantChunkProvider<I> extends SimpleChunkProvider<I> {
	public static final int DEFAULT_MAX_SKIPS_ON_READ = 100;
	private SkipPolicy skipPolicy = new LimitCheckingItemSkipPolicy();
	private Classifier<Throwable, Boolean> rollbackClassifier = new BinaryExceptionClassifier(true);
	private int maxSkipsOnRead = DEFAULT_MAX_SKIPS_ON_READ;
	public FaultTolerantChunkProvider(ItemReader<? extends I> itemReader, RepeatOperations repeatOperations) {
		super(itemReader, repeatOperations);
	}
}
```
::bottom-left::
**Chunk, ChunkProvider, ChunkProcessor**    
<Transform :scale="1.0">

```plantuml
@startuml
skinparam handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface ChunkProvider<T> {
	Chunk<T> provide(StepContribution contribution)
	void postProcess(StepContribution contribution, Chunk<T> chunk)
}
interface ChunkProcessor<I> {
	void process(StepContribution contribution, Chunk<I> chunk) 
}
class ChunkContext extends AttributeAccessorSupport {
	- final StepContext stepContext
	- boolean complete = false
}
class Chunk<W> implements Iterable, Serializable {
	- final List<W> items = new ArrayList<>()
	- final List<SkipWrapper<W>> skips = new ArrayList<>()
	- final List<Exception> errors = new ArrayList<>()
	- Object userData
	- boolean end
	- boolean busy
}
interface ChunkHandler<T> {
	ChunkResponse handleChunk(ChunkRequest<T> chunk)
}
@enduml
```  
</Transform>

::bottom-right::

**ChunkProvider - SimpleChunkProvider, FaultTolerantChunkProvider**

<Transform :scale="1.0">

```plantuml
@startuml
skinparam handwritten true
skinparam linetype polyline
skinparam linetype ortho
class SimpleChunkProvider implements ChunkProvider<I> {
	# final ItemReader<? extends I> itemReader
	- final MulticasterBatchListener<I, ?> listener
	- final RepeatOperations repeatOperations
	- MeterRegistry meterRegistry
	+ SimpleChunkProvider(ItemReader<? extends I> itemReader, RepeatOperations repeatOperations) 
    + I doRead() 
    + Chunk<I> provide(final StepContribution contribution)
    + void postProcess(StepContribution contribution, Chunk<I> chunk)
    # I read(StepContribution contribution, Chunk<I> chunk)
}

class FaultTolerantChunkProvider extends SimpleChunkProvider<I> {
	public static final int DEFAULT_MAX_SKIPS_ON_READ = 100;
	private SkipPolicy skipPolicy
	private Classifier<Throwable, Boolean> rollbackClassifier
	private int maxSkipsOnRead = DEFAULT_MAX_SKIPS_ON_READ;
	public FaultTolerantChunkProvider(ItemReader<? extends I> itemReader, RepeatOperations repeatOperations) 
    + I doRead() 
    + Chunk<I> provide(final StepContribution contribution)
    + void postProcess(StepContribution contribution, Chunk<I> chunk)
    # I read(StepContribution contribution, Chunk<I> chunk)
    - boolean shouldSkip(SkipPolicy policy, Throwable e, long skipCount)
}
class ChunkOrientedTasklet<I> implements Tasklet {
	- final ChunkProcessor<I> chunkProcessor
	- final ChunkProvider<I> chunkProvider
	- boolean buffering = true
}
@enduml
```  
</Transform>
