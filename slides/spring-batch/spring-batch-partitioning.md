---
layout: 2x2-grid-header
title: spring-batch-partitioning
zoom: 0.6
disabled: false
hide: false
hideInToc: false
preload: true
---

# spring-batch-partitioning

::top-left::
**Scaling and Parallel Processing**

- Multi-threaded Step (single-process)
- Parallel Steps (single-process)
- Remote Chunking of Step (multi-process)
- Partitioning a Step (single or multi-process)

::top-right::

**Partitioning**

```java
public interface PartitionHandler {
	Collection<StepExecution> handle(StepExecutionSplitter stepSplitter, StepExecution stepExecution);
}
```


```java
public class TaskExecutorPartitionHandler extends AbstractPartitionHandler 
    implements StepHolder, InitializingBean {
    private TaskExecutor taskExecutor = new SyncTaskExecutor();
    private Step step;
    protected Set<StepExecution> doHandle(StepExecution managerExecution,Set<StepExecution> partitionExecutions) {}
    protected FutureTask<StepExecution> createTask(Step step, StepExecution stepExecution) {}    
}
```

```java
public class MultiResourcePartitioner implements Partitioner {
	private static final String DEFAULT_KEY_NAME = "fileName";
	private static final String PARTITION_KEY = "partition";
	private Resource[] resources = new Resource[0];
    public Map<String, ExecutionContext> partition(int gridSize) {}
}
```


::bottom-left::
**MultiResourceItemReader, MultiResourceItemWriter**
```java
public class MultiResourceItemReader<T> extends AbstractItemStreamItemReader<T> {
    private Resource[] resources;
    private Comparator<Resource> comparator;
    public T read() {}
}
```
```java
public class MultiResourceItemWriter<T> extends AbstractItemStreamItemWriter<T> {
	final static private String RESOURCE_INDEX_KEY = "resource.index";
	final static private String CURRENT_RESOURCE_ITEM_COUNT = "resource.item.count";
	private Resource resource;
	private ResourceAwareItemWriterItemStream<? super T> delegate;
	private ResourceSuffixCreator suffixCreator = new SimpleResourceSuffixCreator();
    public void write(Chunk<? extends T> items) throws Exception {}
}

```

::bottom-right::
**Remote Chunking** 

the `ChunkProcessor` interface usingthe reader, processor, and writer components are off-the-shelf (eager consumers, load balancing is automatic.)
```xml
<bean id="messagingGateway" class="org.springframework.integration.core.MessagingTemplate">
    <property name="defaultChannel" ref="masterChunkRequests" />
    <property name="receiveTimeout" value="2000" />
</bean>
<int:channel id="masterChunkRequests" >
    <int:dispatcher task-executor="requestsPushingExecutor" />
</int:channel>
<int:channel id="masterChunkReplies">...</int:channel>
<jms:outbound-channel-adapter id="masterJMSRequests" channel="masterChunkRequests" connection-factory="remoteChunkingConnectionFactory" destination="remoteChunkingRequestsQueue"/>
<jms:message-driven-channel-adapter id="masterJMSReplies" connection-factory="remoteChunkingConnectionFactory"
                                        destination="remoteChunkingRepliesQueue" channel="masterChunkReplies"
                                        concurrent-consumers="10" max-concurrent-consumers="50".../>
<task:executor id="requestsPublishingExecutor" pool-size="10-50" queue-capacity="0" />
```