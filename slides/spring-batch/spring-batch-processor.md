---
layout: default 
title: spring-batch-processor  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# spring-batch-processor   


```java

public class SimpleChunkProcessor<I, O> implements ChunkProcessor<I>, InitializingBean {
	private ItemProcessor<? super I, ? extends O> itemProcessor;
	private ItemWriter<? super O> itemWriter;
	private final MulticasterBatchListener<I, O> listener = new MulticasterBatchListener<>();
	protected MeterRegistry meterRegistry = Metrics.globalRegistry;

	protected final O doProcess(I item) throws Exception {
		if (itemProcessor == null) {
			@SuppressWarnings("unchecked")
			O result = (O) item;
			return result;
		}
		try {
			listener.beforeProcess(item);
			O result = itemProcessor.process(item);
			listener.afterProcess(item, result);
			return result;
		}
		catch (Exception e) {
			listener.onProcessError(item, e);
			throw e;
		}
	}
}

```


<Transform :scale="1.0">
```plantuml
@startuml
skinparam handwritten true
skinparam linetype polyline
skinparam linetype ortho


interface ItemProcessor<I, O> {
    + O process(I item)
}
class PassThroughItemProcessor<T> implements ItemProcessor<T, T> {
    + T process(T item)
}
class ScriptItemProcessor<I, O> implements ItemProcessor {
	- String language
	- ScriptSource script
	- ScriptSource scriptSource
	- ScriptEvaluator scriptEvaluator
    - String itemBindingVariableName
    + O process(I item)    
}
class AsyncItemProcessor<I, O> implements ItemProcessor {
    - ItemProcessor<I, O> delegate
    - TaskExecutor taskExecutor
    + Future<O> process(final I item) 
}
class FunctionItemProcessor<I, O> implements ItemProcessor<I, O> {
	- final Function<I, O> function
	+ FunctionItemProcessor(Function<I, O> function)
	+ O process(I item)

}

class ValidatingItemProcessor<T> implements ItemProcessor {
	- Validator<? super T> validator
	- boolean filter = false
    + ValidatingItemProcessor(Validator<? super T> validator)
    + T process(T item)    
}

class PredicateFilteringItemProcessor<T> implements ItemProcessor<T, T> {
    - final Predicate<T> predicate
    + T process(T item)
}
class ClassifierCompositeItemProcessor<I, O> implements ItemProcessor<I, O> {
    - Classifier<? super I, ItemProcessor<?, ? extends O>> classifier
    + O process(I item)
    - <T> O processItem(ItemProcessor<T, ? extends O> processor, I input)
}

interface ChunkProcessor<I> {
	void process(StepContribution contribution, Chunk<I> chunk)
}
class SimpleChunkProcessor<I, O> implements ChunkProcessor {
	- ItemProcessor<? super I, ? extends O> itemProcessor
	- ItemWriter<? super O> itemWriter
	- final MulticasterBatchListener<I, O> listener
	# MeterRegistry meterRegistry
    + SimpleChunkProcessor(@Nullable ItemProcessor<? super I, ? extends O> itemProcessor,ItemWriter<? super O> itemWriter) 
    + O doProcess(I item)
}

SimpleChunkProcessor -> ItemProcessor : process(I item)
@enduml
```  
</Transform>
