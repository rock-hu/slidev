---
layout: 2x2-grid-header 
title: spring-batch-launch  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---


# spring-batch-launch   

::top-left::
**JobLauncher** 

```java
public interface JobLauncher {
    JobExecution run(Job job, JobParameters jobParameters)
}
```

::top-right::
**TaskExecutorJobLauncher**
```java
public class TaskExecutorJobLauncher implements JobLauncher, InitializingBean {
	private JobRepository jobRepository;
	private TaskExecutor taskExecutor;
	private MeterRegistry meterRegistry = Metrics.globalRegistry;
    public JobExecution run(final Job job, final JobParameters jobParameters) throws JobExecutionAlreadyRunningException, JobRestartException, JobInstanceAlreadyCompleteException, JobParametersInvalidException {
        taskExecutor.execute(new Runnable() {
			    public void run() {
                job.execute(jobExecution);
            }
        }
    }
}
```


::bottom-left::
**CommandLineJobRunner**    

```java
public class CommandLineJobRunner {
	private ExitCodeMapper exitCodeMapper = new SimpleJvmExitCodeMapper();
	private JobLauncher launcher;
	private JobLocator jobLocator;
	private static SystemExiter systemExiter = new JvmSystemExiter();
	private JobParametersConverter jobParametersConverter = new DefaultJobParametersConverter();
	private JobExplorer jobExplorer;
	private JobRepository jobRepository;
    public static void main(String[] args) throws Exception {
        CommandLineJobRunner command = new CommandLineJobRunner();
		    int result = command.start(jobPath, jobIdentifier, parameters, opts);
		    command.exit(result);
    }
    int start(String jobPath, String jobIdentifier, String[] parameters, Set<String> opts) {
        job = jobLocator.getJob(jobName);
        job = (Job) context.getBean(jobName);
		JobExecution jobExecution = launcher.run(job, jobParameters);
		return exitCodeMapper.intValue(jobExecution.getExitStatus().getExitCode());
    }
}
```
::bottom-right::

**spring-integration - JobLaunchingGateway**

```plantuml
@startuml
    class JobLaunchingGateway extends AbstractReplyProducingMessageHandler {
        - jobLaunchingMessageHandler : JobLaunchingMessageHandler
        + JobLaunchingGateway(JobLauncher jobLauncher)
        # handleRequestMessage(Message<?> requestMessage)  : Object
    }
    interface JobLaunchRequestHandler {
        + launch(JobLaunchRequest request) : JobExecution
    }
    class JobLaunchingMessageHandler implements JobLaunchRequestHandler {
        -  jobLauncher : JobLauncher
        + JobLaunchingMessageHandler(JobLauncher jobLauncher)
        +  launch(JobLaunchRequest request) : JobExecution
    }
    class JobLaunchRequest {
        -  job: Job
        -  jobParameters: JobParameters
        + JobLaunchRequest(Job job, JobParameters jobParameters)
    }

    class MessageChannelPartitionHandler extends AbstractPartitionHandler {
        - MessagingTemplate messagingGateway
        - String stepName
        - long pollInterval
        - JobExplorer jobExplorer
        - DataSource dataSource
        - PollableChannel replyChannel
        - Set<StepExecution> receiveReplies(PollableChannel currentReplyChannel)
        - Message<StepExecutionRequest> createMessage(int sequenceNumber, int sequenceSize,StepExecutionRequest stepExecutionRequest, PollableChannel replyChannel)
        - Set<StepExecution> pollReplies(final StepExecution managerStepExecution, final Set<StepExecution> split)
        + List<?> aggregate(@Payloads List<?> messages)
        # Set<StepExecution> doHandle(StepExecution managerStepExecution,Set<StepExecution> partitionStepExecutions)
        # afterPropertiesSet()
    }

    interface JobLauncher {
        + run(Job job, JobParameters jobParameters) : JobExecution
    }
    JobLaunchingGateway -down-> JobLaunchRequestHandler : launch(JobLaunchRequest request)
    JobLaunchRequestHandler -down-> JobLauncher : launcrun(job, jobParameters)
@enduml
```

