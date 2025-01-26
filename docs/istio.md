# istio

```bash
curl -L https://istio.io/downloadIstio | sh -
```

```bash
export PATH=$PWD/bin:$PATH
```

```bash
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.24/samples/bookinfo/platform/kube/bookinfo.yaml
```

```bash
kubectl get services
```

```bash
kubectl get pods
```

## best-practices

- [Deployment Best Practices](https://istio.io/latest/docs/ops/best-practices/deployment/)
- [Traffic Management Best Practices](https://istio.io/latest/docs/ops/best-practices/traffic-management/)
- [Security Best Practices](https://istio.io/latest/docs/ops/best-practices/security/)
- [Image Signing and Validation](https://istio.io/latest/docs/ops/best-practices/image-signing-validation/)
- [Observability Best Practices](https://istio.io/latest/docs/ops/best-practices/observability/)

## references

| item                    | link(s)                                             |
| ----------------------- | --------------------------------------------------- |
| istio - Getting Started | https://istio.io/latest/docs/setup/getting-started/ |
| best-practices          | https://istio.io/latest/docs/ops/best-practices/    |
