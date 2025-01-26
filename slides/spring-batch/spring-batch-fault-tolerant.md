---
layout: 2x2-grid-header
title: spring-batch-fault-tolerant
zoom: 0.6
disabled: false
hide: false
hideInToc: false
preload: true
---

# spring-batch-fault-tolerant

::top-left::
**Fault Tolerance**
- Retry
- Skip
- Timeout
- Back-off Policy

::top-right::
**Retry**

```java
@Bean
public Step retryStep(JobRepository jobRepository, PlatformTransactionManager transactionManager) {
	return new StepBuilder("retryStep", jobRepository)
		.<String, String>chunk(2, transactionManager)
		.reader(reader)
		.reader(reader)
		.faultTolerant()
		.retryLimit(3)
		.retry(DeadlockLoserDataAccessException.class)
		.build();
}
```

::bottom-left::
**Skip**

```java
public Step tolerantStep(JobRepository jobRepository, PlatformTransactionManager transactionManager,
  ItemProcessor<Transaction, Transaction> processor,
  ItemWriter<Transaction> writer) throws ParseException {
    return new StepBuilder("tolerantStep", jobRepository)
      .<Transaction, Transaction> chunk(10, transactionManager)
      .reader(reader)
      .processor(processor)
      .writer(writer)
      .faultTolerant()
      .skipLimit(2)
      .skip(MissingUsernameException.class)
      .skip(NegativeAmountException.class)
      .build();
}

```

::bottom-right::
**Back-off Policy**

- RetryPolicy - boolean canRetry(RetryContext context)
- SkipPolicy - boolean shouldSkip(Throwable t, long skipCount)
- TimeoutTerminationPolicy - boolean isComplete(RepeatContext context)
- CompletionPolicy - boolean isComplete(RepeatContext context, RepeatStatus result)
