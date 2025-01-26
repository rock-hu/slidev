---
layout: default 
title: spring-batch-reader  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# spring-batch-reader   


- SQL (jpa,jdbc,stored procedure), mq, amap, nosql
- File - json, csv, fixlength, xml
- Messaging - Kafka, Jms, Ldif, BlockingQueue


<Transform :scale="1.0">

```plantuml
@startuml
skinparam handwritten true
skinparam linetype polyline
skinparam linetype ortho

interface ItemReader<T> {
	T read()
}
interface PeekableItemReader extends ItemReader<T> {
    T peek()
}
interface ItemStream {
	+ void open(ExecutionContext executionContext)
	+ void update(ExecutionContext executionContext)
	+ void close()
}
interface ItemStreamReader<T> extends ItemStream, ItemReader<T> {
}
abstract class ItemStreamSupport implements ItemStream {
 - ExecutionContextUserSupport executionContextUserSupport
 # setExecutionContextName(String name) 
 # getExecutionContextKey(String key)
 # setName(String name)
 # getName()
}


abstract class AbstractItemStreamItemReader<T> extends ItemStreamSupport implements ItemStreamReader<T> {
}
abstract class AbstractItemCountingItemStreamItemReader<T> extends AbstractItemStreamItemReader<T> {
}
interface ResourceAwareItemReaderItemStream<T> extends ItemStreamReader<T> {
}
class FlatFileItemReader<T> extends AbstractItemCountingItemStreamItemReader<T> implements ResourceAwareItemReaderItemStream {
    
}
class MultiResourceItemReader<T> extends AbstractItemStreamItemReader<T> {
}
class CompositeItemReader<T> implements ItemStreamReader<T> {
    List<ItemStreamReader<T>> delegates;
    Iterator<ItemStreamReader<T>> delegatesIterator;
    ItemStreamReader<T> currentDelegate;
    + CompositeItemReader(List<ItemStreamReader<T>> delegates)
}
abstract class AbstractCursorItemReader<T> extends AbstractItemCountingItemStreamItemReader<T>  {

}
abstract class AbstractPagingItemReader<T> extends AbstractItemCountingItemStreamItemReader<T>  {
}
class JdbcCursorItemReader<T> extends AbstractCursorItemReader<T> {
}
class JdbcPagingItemReader<T> extends AbstractPagingItemReader<T>  {
}
class JpaCursorItemReader<T> extends AbstractItemCountingItemStreamItemReader<T>  {
}
class JpaPagingItemReader<T> extends AbstractPagingItemReader<T> {
}
class StoredProcedureItemReader<T> extends AbstractCursorItemReader<T> {
}
class AmqpItemReader<T> implements ItemReader<T> {
}
class AvroItemReader<T> extends AbstractItemCountingItemStreamItemReader<T> {
}

abstract class AbstractPaginatedDataItemReader<T> extends AbstractItemCountingItemStreamItemReader<T> {
}

class MongoItemReader<T> extends AbstractPaginatedDataItemReader<T>  {
}
class RepositoryItemReader<T> extends AbstractItemCountingItemStreamItemReader<T>  {
}
class JmsItemReader<T> implements ItemReader {}
class JsonItemReader<T> extends AbstractItemCountingItemStreamItemReader<T> implements ResourceAwareItemReaderItemStream<T> {
}
class KafkaItemReader<K, V> extends AbstractItemStreamItemReader {}
class LdifReader<LdapAttributes> extends AbstractItemCountingItemStreamItemReader implements ResourceAwareItemReaderItemStream {}
class BlockingQueueItemReader<T> implements ItemReader {}
class RedisItemReader<K, V> implements ItemStreamReader {}
@enduml
```  
</Transform>
