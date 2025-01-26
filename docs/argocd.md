# argocd    


```bash
microk8s dashboard-proxy
```

```bash
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'
kubectl port-forward svc/argocd-server -n argocd 8080:443
```


## argocd cli   
```bash
rock@rock:~$ argocd
argocd controls a Argo CD server

Usage:
  argocd [flags]
  argocd [command]

Available Commands:
  account     Manage account settings
  admin       Contains a set of commands useful for Argo CD administrators and requires direct Kubernetes access
  app         Manage applications
  appset      Manage ApplicationSets
  cert        Manage repository certificates and SSH known hosts entries
  cluster     Manage cluster credentials
  completion  output shell completion code for the specified shell (bash, zsh or fish)
  context     Switch between contexts
  gpg         Manage GPG keys used for signature verification
  help        Help about any command
  login       Log in to Argo CD
  logout      Log out from Argo CD
  proj        Manage projects
  relogin     Refresh an expired authenticate token
  repo        Manage repository connection parameters
  repocreds   Manage repository connection parameters
  version     Print version information

Flags:
      --argocd-context string           The name of the Argo-CD server context to use
      --auth-token string               Authentication token
      --client-crt string               Client certificate file
      --client-crt-key string           Client certificate key file
      --config string                   Path to Argo CD config (default "/home/rock/.config/argocd/config")
      --controller-name string          Name of the Argo CD Application controller; set this or the ARGOCD_APPLICATION_CONTROLLER_NAME environment variable when the controller's name label differs from the default, for example when installing via the Helm chart (default "argocd-application-controller")
      --core                            If set to true then CLI talks directly to Kubernetes instead of talking to Argo CD API server
      --grpc-web                        Enables gRPC-web protocol. Useful if Argo CD server is behind proxy which does not support HTTP2.
      --grpc-web-root-path string       Enables gRPC-web protocol. Useful if Argo CD server is behind proxy which does not support HTTP2. Set web root.
  -H, --header strings                  Sets additional header to all requests made by Argo CD CLI. (Can be repeated multiple times to add multiple headers, also supports comma separated headers)
  -h, --help                            help for argocd
      --http-retry-max int              Maximum number of retries to establish http connection to Argo CD server
      --insecure                        Skip server certificate and domain verification
      --kube-context string             Directs the command to the given kube-context
      --logformat string                Set the logging format. One of: text|json (default "text")
      --loglevel string                 Set the logging level. One of: debug|info|warn|error (default "info")
      --plaintext                       Disable TLS
      --port-forward                    Connect to a random argocd-server port using port forwarding
      --port-forward-namespace string   Namespace name which should be used for port forwarding
      --redis-haproxy-name string       Name of the Redis HA Proxy; set this or the ARGOCD_REDIS_HAPROXY_NAME environment variable when the HA Proxy's name label differs from the default, for example when installing via the Helm chart (default "argocd-redis-ha-haproxy")
      --redis-name string               Name of the Redis deployment; set this or the ARGOCD_REDIS_NAME environment variable when the Redis's name label differs from the default, for example when installing via the Helm chart (default "argocd-redis")
      --repo-server-name string         Name of the Argo CD Repo server; set this or the ARGOCD_REPO_SERVER_NAME environment variable when the server's name label differs from the default, for example when installing via the Helm chart (default "argocd-repo-server")
      --server string                   Argo CD server address
      --server-crt string               Server certificate file
      --server-name string              Name of the Argo CD API server; set this or the ARGOCD_SERVER_NAME environment variable when the server's name label differs from the default, for example when installing via the Helm chart (default "argocd-server")

Use "argocd [command] --help" for more information about a command.
```


## argocd app create --help 

```
kustomize-mainfests$ argocd app create --help
Create an application

Usage:
  argocd app create APPNAME [flags]

Examples:
  # Create a directory app
  argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path guestbook --dest-namespace default --dest-server https://kubernetes.default.svc --directory-recurse

  # Create a Jsonnet app
  argocd app create jsonnet-guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path jsonnet-guestbook --dest-namespace default --dest-server https://kubernetes.default.svc --jsonnet-ext-str replicas=2

  # Create a Helm app
  argocd app create helm-guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path helm-guestbook --dest-namespace default --dest-server https://kubernetes.default.svc --helm-set replicaCount=2

  # Create a Helm app from a Helm repo
  argocd app create nginx-ingress --repo https://charts.helm.sh/stable --helm-chart nginx-ingress --revision 1.24.3 --dest-namespace default --dest-server https://kubernetes.default.svc

  # Create a Kustomize app
  argocd app create kustomize-guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path kustomize-guestbook --dest-namespace default --dest-server https://kubernetes.default.svc --kustomize-image gcr.io/heptio-images/ks-guestbook-demo:0.1

  # Create a MultiSource app while yaml file contains an application with multiple sources
  argocd app create guestbook --file <path-to-yaml-file>

  # Create a app using a custom tool:
  argocd app create kasane --repo https://github.com/argoproj/argocd-example-apps.git --path plugins/kasane --dest-namespace default --dest-server https://kubernetes.default.svc --config-management-plugin kasane

Flags:
      --allow-empty                                Set allow zero live resources when sync is automated
      --annotations stringArray                    Set metadata annotations (e.g. example=value)
  -N, --app-namespace string                       Namespace where the application will be created in
      --auto-prune                                 Set automatic pruning when sync is automated
      --config-management-plugin string            Config management plugin name
      --dest-name string                           K8s cluster Name (e.g. minikube)
      --dest-namespace string                      K8s target namespace
      --dest-server string                         K8s cluster URL (e.g. https://kubernetes.default.svc)
      --directory-exclude string                   Set glob expression used to exclude files from application source path
      --directory-include string                   Set glob expression used to include files from application source path
      --directory-recurse                          Recurse directory
      --env string                                 Application environment to monitor
  -f, --file string                                Filename or URL to Kubernetes manifests for the app
      --helm-api-versions stringArray              Helm api-versions (in format [group/]version/kind) to use when running helm template (Can be repeated to set several values: --helm-api-versions traefik.io/v1alpha1/TLSOption --helm-api-versions v1/Service). If not set, use the api-versions from the destination cluster
      --helm-chart string                          Helm Chart name
      --helm-kube-version string                   Helm kube-version to use when running helm template. If not set, use the kube version from the destination cluster
      --helm-namespace string                      Helm namespace to use when running helm template. If not set, use app.spec.destination.namespace
      --helm-pass-credentials                      Pass credentials to all domain
      --helm-set stringArray                       Helm set values on the command line (can be repeated to set several values: --helm-set key1=val1 --helm-set key2=val2)
      --helm-set-file stringArray                  Helm set values from respective files specified via the command line (can be repeated to set several values: --helm-set-file key1=path1 --helm-set-file key2=path2)
      --helm-set-string stringArray                Helm set STRING values on the command line (can be repeated to set several values: --helm-set-string key1=val1 --helm-set-string key2=val2)
      --helm-skip-crds                             Skip helm crd installation step
      --helm-version string                        Helm version
  -h, --help                                       help for create
      --ignore-missing-value-files                 Ignore locally missing valueFiles when setting helm template --values
      --jsonnet-ext-var-code stringArray           Jsonnet ext var
      --jsonnet-ext-var-str stringArray            Jsonnet string ext var
      --jsonnet-libs stringArray                   Additional jsonnet libs (prefixed by repoRoot)
      --jsonnet-tla-code stringArray               Jsonnet top level code arguments
      --jsonnet-tla-str stringArray                Jsonnet top level string arguments
      --kustomize-api-versions stringArray         api-versions (in format [group/]version/kind) to use when running helm template (Can be repeated to set several values: --helm-api-versions traefik.io/v1alpha1/TLSOption --helm-api-versions v1/Service). If not set, use the api-versions from the destination cluster. Only applicable when Helm is enabled for Kustomize builds
      --kustomize-common-annotation stringArray    Set common labels in Kustomize
      --kustomize-common-label stringArray         Set common labels in Kustomize
      --kustomize-force-common-annotation          Force common annotations in Kustomize
      --kustomize-force-common-label               Force common labels in Kustomize
      --kustomize-image stringArray                Kustomize images (e.g. --kustomize-image node:8.15.0 --kustomize-image mysql=mariadb,alpine@sha256:24a0c4b4a4c0eb97a1aabb8e29f18e917d05abfe1b7a7c07857230879ce7d3d)
      --kustomize-kube-version string              kube-version to use when running helm template. If not set, use the kube version from the destination cluster. Only applicable when Helm is enabled for Kustomize builds
      --kustomize-label-without-selector           Do not apply common label to selectors or templates
      --kustomize-namespace string                 Kustomize namespace
      --kustomize-replica stringArray              Kustomize replicas (e.g. --kustomize-replica my-development=2 --kustomize-replica my-statefulset=4)
      --kustomize-version string                   Kustomize version
  -l, --label stringArray                          Labels to apply to the app
      --name string                                A name for the app, ignored if a file is set (DEPRECATED)
      --nameprefix string                          Kustomize nameprefix
      --namesuffix string                          Kustomize namesuffix
  -p, --parameter stringArray                      set a parameter override (e.g. -p guestbook=image=example/guestbook:latest)
      --path string                                Path in repository to the app directory, ignored if a file is set
      --plugin-env stringArray                     Additional plugin envs
      --project string                             Application project name
      --ref string                                 Ref is reference to another source within sources field
      --release-name string                        Helm release-name
      --repo string                                Repository URL, ignored if a file is set
      --revision string                            The tracking source branch, tag, commit or Helm chart version the application will sync to
      --revision-history-limit int                 How many items to keep in revision history (default 10)
      --self-heal                                  Set self healing when sync is automated
      --set-finalizer                              Sets deletion finalizer on the application, application resources will be cascaded on deletion
      --sync-option Prune=false                    Add or remove a sync option, e.g add Prune=false. Remove using `!` prefix, e.g. `!Prune=false`
      --sync-policy string                         Set the sync policy (one of: manual (aliases of manual: none), automated (aliases of automated: auto, automatic))
      --sync-retry-backoff-duration duration       Sync retry backoff base duration. Input needs to be a duration (e.g. 2m, 1h) (default 5s)
      --sync-retry-backoff-factor int              Factor multiplies the base duration after each failed sync retry (default 2)
      --sync-retry-backoff-max-duration duration   Max sync retry backoff duration. Input needs to be a duration (e.g. 2m, 1h) (default 3m0s)
      --sync-retry-limit int                       Max number of allowed sync retries
      --upsert                                     Allows to override application with the same name even if supplied application spec is different from existing spec
      --validate                                   Validation of repo and cluster (default true)
      --values stringArray                         Helm values file(s) to use
      --values-literal-file string                 Filename or URL to import as a literal Helm values block

Global Flags:
      --argocd-context string           The name of the Argo-CD server context to use
      --auth-token string               Authentication token
      --client-crt string               Client certificate file
      --client-crt-key string           Client certificate key file
      --config string                   Path to Argo CD config (default "/home/rock/.config/argocd/config")
      --controller-name string          Name of the Argo CD Application controller; set this or the ARGOCD_APPLICATION_CONTROLLER_NAME environment variable when the controller's name label differs from the default, for example when installing via the Helm chart (default "argocd-application-controller")
      --core                            If set to true then CLI talks directly to Kubernetes instead of talking to Argo CD API server
      --grpc-web                        Enables gRPC-web protocol. Useful if Argo CD server is behind proxy which does not support HTTP2.
      --grpc-web-root-path string       Enables gRPC-web protocol. Useful if Argo CD server is behind proxy which does not support HTTP2. Set web root.
  -H, --header strings                  Sets additional header to all requests made by Argo CD CLI. (Can be repeated multiple times to add multiple headers, also supports comma separated headers)
      --http-retry-max int              Maximum number of retries to establish http connection to Argo CD server
      --insecure                        Skip server certificate and domain verification
      --kube-context string             Directs the command to the given kube-context
      --logformat string                Set the logging format. One of: text|json (default "text")
      --loglevel string                 Set the logging level. One of: debug|info|warn|error (default "info")
      --plaintext                       Disable TLS
      --port-forward                    Connect to a random argocd-server port using port forwarding
      --port-forward-namespace string   Namespace name which should be used for port forwarding
      --redis-haproxy-name string       Name of the Redis HA Proxy; set this or the ARGOCD_REDIS_HAPROXY_NAME environment variable when the HA Proxy's name label differs from the default, for example when installing via the Helm chart (default "argocd-redis-ha-haproxy")
      --redis-name string               Name of the Redis deployment; set this or the ARGOCD_REDIS_NAME environment variable when the Redis's name label differs from the default, for example when installing via the Helm chart (default "argocd-redis")
      --repo-server-name string         Name of the Argo CD Repo server; set this or the ARGOCD_REPO_SERVER_NAME environment variable when the server's name label differs from the default, for example when installing via the Helm chart (default "argocd-repo-server")
      --server string                   Argo CD server address
      --server-crt string               Server certificate file
      --server-name string              Name of the Argo CD API server; set this or the ARGOCD_SERVER_NAME environment variable when the server's name label differs from the default, for example when installing via the Helm chart (default "argocd-server")
```



```bash
Usage:
  argocd app create APPNAME [flags]
export ARGOCD_OPTS='--port-forward-namespace argocd'
argocd login 127.0.0.1:8080
argocd cert list --cert-type ssh
```

## docker image ls  

```
rock@rock:~/workspace/internal-developer-platform/kustomize-mainfests$ sudo docker image ls | grep 'localhost:32000'
localhost:32000/openbanking-payments/statements-services                    latest    dd156f58a850   2 hours ago     666MB
localhost:32000/openbanking-payments/scheduled-payments-services            latest    fe4ba6b0d714   2 hours ago     666MB
localhost:32000/openbanking-payments/parties-services                       latest    abbf16c043eb   2 hours ago     666MB
localhost:32000/openbanking-payments/products-services                      latest    2602cf63b119   2 hours ago     667MB
localhost:32000/openbanking-payments/offers-services                        latest    c62fba0cc5cd   2 hours ago     666MB
localhost:32000/openbanking-payments/standing-orders-services               latest    6874a4c65178   2 hours ago     666MB
localhost:32000/openbanking-payments/beneficiaries-services                 latest    59ddf2ecf620   2 hours ago     666MB
localhost:32000/openbanking-payments/direct-debits-services                 latest    d038649edda5   2 hours ago     666MB
localhost:32000/openbanking-payments/transactions-services                  latest    dd3ca89e4e72   2 hours ago     666MB
localhost:32000/openbanking-payments/balances-services                      latest    d0d976557c81   2 hours ago     666MB
localhost:32000/openbanking-payments/accounts-services                      latest    3fae4549fceb   2 hours ago     666MB
localhost:32000/openbanking-payments/account-access-consents-services       latest    97db45f9b610   2 hours ago     666MB
```

## argocd app create  

```bash
argocd app create account-access-consents-services --repo https://gitlab.com/internal-developer-platform/kustomize-mainfests.git --revision master --path account-access-consents-services/overlays/staging --dest-namespace default --dest-server https://kubernetes.default.svc --kustomize-image localhost:32000/openbanking-payments/account-access-consents-services:latest --loglevel debug
```

## argocd app list  
```bash
rock@rock:~/workspace/internal-developer-platform/kustomize-mainfests$ argocd app list
NAME                                     CLUSTER                         NAMESPACE  PROJECT  STATUS   HEALTH   SYNCPOLICY  CONDITIONS       REPO                                                                    PATH                                               TARGET
argocd/account-access-consents-services  https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  account-access-consents-services/overlays/staging  master
argocd/accounts-services                 https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  accounts-services/overlays/staging                 master
argocd/balances-services                 https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  balances-services/overlays/staging                 master
argocd/beneficiaries-services            https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  beneficiaries-services/overlays/staging            master
argocd/direct-debits-services            https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  direct-debits-services/overlays/staging            master
argocd/offers-services                   https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  offers-services/overlays/staging                   master
argocd/parties-services                  https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  parties-services/overlays/staging                  master
argocd/products-services                 https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  products-services/overlays/staging                 master
argocd/scheduled-payments-services       https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  scheduled-payments-services/overlays/staging       master
argocd/standing-orders-services          https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  standing-orders-services/overlays/staging          master
argocd/statements-services               https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  statements-services/overlays/staging               master
argocd/transactions-services             https://kubernetes.default.svc  default    default  Synced   Healthy  Manual      <none>           https://gitlab.com/internal-developer-platform/kustomize-mainfests.git  transactions-services/overlays/staging             master
```

## argocd proj 
```bash
argocd proj list
NAME     DESCRIPTION  DESTINATIONS  SOURCES  CLUSTER-RESOURCE-WHITELIST  NAMESPACE-RESOURCE-BLACKLIST  SIGNATURE-KEYS  ORPHANED-RESOURCES  DESTINATION-SERVICE-ACCOUNTS
default               *,*           *        */*                         <none>                        <none>          disabled            <none>
```