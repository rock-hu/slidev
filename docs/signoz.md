# signoz    


```bash
systemctl daemon-reload
systemctl restart kubelet
sudo snap restart microk8s
```

## kubectl -n platform get pods 
```bash
kubectl -n platform get pods
chi-signoz-platform-clickhouse-cluster-0-0-0              0/1     Init:ImagePullBackOff   0               6m28s
signoz-platform-alertmanager-0                            0/1     Init:ImagePullBackOff   0               7d2h
signoz-platform-clickhouse-operator-674b8d8fb6-jfs8p      2/2     Running                 711 (10m ago)   7d2h
signoz-platform-frontend-566fd78fcf-fvp74                 0/1     Init:ImagePullBackOff   0               7d2h
signoz-platform-frontend-794f9d548-l228k                  0/1     Init:ImagePullBackOff   0               74s
signoz-platform-otel-collector-5cbb6b89b5-8cnxc           0/1     Init:0/1                13              7d2h
signoz-platform-otel-collector-76f55bbcf8-7n4jv           0/1     Init:0/1                0               70s
signoz-platform-otel-collector-metrics-5c94485b9c-65jxk   0/1     Init:0/1                13              7d2h
signoz-platform-otel-collector-metrics-7dc5f48b78-dbjnd   0/1     Init:0/1                0               67s
signoz-platform-query-service-0                           0/1     Init:ImagePullBackOff   0               7d2h
signoz-platform-schema-migrator-async-init-2n6nk          0/1     Init:ImagePullBackOff   0               7d2h
signoz-platform-schema-migrator-sync-init-jcmj9           0/1     Init:ImagePullBackOff   0               7d2h
signoz-platform-zookeeper-0                               1/1     Running                 8 (6h52m ago)   7d2h
```

```bash
sudo microk8s.ctr images pull m.daocloud.io/docker.io/library/busybox:1.35
sudo microk8s.ctr images tag m.daocloud.io/docker.io/library/busybox:1.35 docker.io/docker.io/library/busybox:1.35
sudo microk8s.ctr images delete docker.io/busybox:1.35
```

## 
```bash
kubectl describe pod chi-signoz-platform-clickhouse-cluster-0-0-0 -n platform
Events:
  Type     Reason   Age                    From     Message
  ----     ------   ----                   ----     -------
  Warning  Failed   5m9s                   kubelet  Failed to pull image "docker.io/alpine:3.18.2": failed to pull and unpack image "docker.io/library/alpine:3.18.2": failed to resolve reference "docker.io/library/alpine:3.18.2": failed to do request: Head "https://registry-1.docker.io/v2/library/alpine/manifests/3.18.2": dial tcp [2a03:2880:f11f:83:face:b00c:0:25de]:443: connect: network is unreachable
  Normal   Pulling  4m20s (x4 over 8m28s)  kubelet  Pulling image "docker.io/alpine:3.18.2"
  Warning  Failed   3m20s (x4 over 7m28s)  kubelet  Error: ErrImagePull
  Warning  Failed   3m20s                  kubelet  Failed to pull image "docker.io/alpine:3.18.2": failed to pull and unpack image "docker.io/library/alpine:3.18.2": failed to resolve reference "docker.io/library/alpine:3.18.2": failed to do request: Head "https://registry-1.docker.io/v2/library/alpine/manifests/3.18.2": dial tcp 179.60.193.9:443: i/o timeout
  Normal   BackOff  3m5s (x7 over 7m27s)   kubelet  Back-off pulling image "docker.io/alpine:3.18.2"
  Warning  Failed   3m5s (x7 over 7m27s)   kubelet  Error: ImagePullBackOff
```

## signoz-platform-clickhouse-operator  
```bash
kubectl describe pod signoz-platform-clickhouse-operator-674b8d8fb6-jfs8p -n platform
Events:
  Type     Reason  Age                     From     Message
  ----     ------  ----                    ----     -------
  Warning  Failed  3m10s (x46 over 5h50m)  kubelet  (combined from similar events): Failed to pull image "docker.io/altinity/clickhouse-operator:0.21.2": failed to pull and unpack image "docker.io/altinity/clickhouse-operator:0.21.2": failed to resolve reference "docker.io/altinity/clickhouse-operator:0.21.2": failed to do request: Head "https://registry-1.docker.io/v2/altinity/clickhouse-operator/manifests/0.21.2": dial tcp 199.59.148.106:443: i/o timeout
```


## signoz-platform-alertmanager 
```bash
kubectl describe pod signoz-platform-alertmanager-0 -n platform
Events:
  Type     Reason  Age                     From     Message
  ----     ------  ----                    ----     -------
  Warning  Failed  3m21s (x61 over 5h38m)  kubelet  (combined from similar events): Failed to pull image "docker.io/busybox:1.35": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/busybox:1.35": failed to resolve reference "docker.io/library/busybox:1.35": failed to do request: Head "https://registry-1.docker.io/v2/library/busybox/manifests/1.35": dial tcp 199.59.148.106:443: i/o timeout
```

```bash
sudo microk8s.ctr images pull m.daocloud.io/docker.io/library/busybox:1.35
sudo microk8s.ctr images tag m.daocloud.io/docker.io/library/busybox:1.35 docker.io/library/busybox:1.35
```

## signoz-platform-frontend 
```bash
kubectl describe pod signoz-platform-frontend-566fd78fcf-fvp74 -n platform
Events:
  Type     Reason  Age                   From     Message
  ----     ------  ----                  ----     -------
  Warning  Failed  70s (x49 over 5h36m)  kubelet  (combined from similar events): Failed to pull image "docker.io/busybox:1.35": rpc error: code = DeadlineExceeded desc = failed to pull and unpack image "docker.io/library/busybox:1.35": failed to resolve reference "docker.io/library/busybox:1.35": failed to do request: Head "https://registry-1.docker.io/v2/library/busybox/manifests/1.35": dial tcp 199.59.148.106:443: i/o timeout
```

## signoz-platform-otel-collector   
```bash
kubectl describe pod signoz-platform-otel-collector-5cbb6b89b5-8cnxc -n platform
```

## signoz-platform-otel-collector-metrics   
```bash
kubectl describe pod signoz-platform-otel-collector-metrics-5c94485b9c-65jxk -n platform
```

## kubectl --namespace platform port-forward svc/$SERVICE_NAME 3301:3301 
```bash
export SERVICE_NAME=$(kubectl get svc --namespace platform -l "app.kubernetes.io/component=frontend" -o jsonpath="{.items[0].metadata.name}")
kubectl --namespace platform port-forward svc/$SERVICE_NAME 3301:3301
```

## signoz-platform-query-service
```bash
kubectl describe pod signoz-platform-query-service-0 -n platform
Events:
  Type    Reason   Age                       From     Message
  ----    ------   ----                      ----     -------
  Normal  BackOff  4m23s (x1481 over 6h48m)  kubelet  Back-off pulling image "docker.io/busybox:1.35"
```

## signoz-platform-schema-migrator-async-init
```bash
kubectl describe pod signoz-platform-schema-migrator-async-init-2n6nk -n platform
Events:
  Type    Reason   Age                       From     Message
  ----    ------   ----                      ----     -------
  Normal  BackOff  4m41s (x1489 over 6h48m)  kubelet  Back-off pulling image "docker.io/busybox:1.35"
```
## signoz-platform-schema-migrator-sync-init
```bash
kubectl describe pod signoz-platform-schema-migrator-sync-init-jcmj9 -n platform
Events:
  Type    Reason   Age                      From     Message
  ----    ------   ----                     ----     -------
  Normal  BackOff  5m1s (x1483 over 6h49m)  kubelet  Back-off pulling image "docker.io/busybox:1.35"
```

