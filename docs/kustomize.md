# kustomize 

Kubernetes native configuration management
> Kustomize introduces a template-free way to customize application configuration that simplifies the use of off-the-shelf applications. Now, built into `kubectl` as `apply -k`.



The following configuration options are available for Kustomize:    

- `namePrefix` is a prefix appended to resources for Kustomize apps   
- `nameSuffix` is a suffix appended to resources for Kustomize apps   
- `images` is a list of Kustomize image overrides 
- `replicas` is a list of Kustomize replica overrides 
- `commonLabels` is a string map of additional labels 
- `labelWithoutSelector` is a boolean value which defines if the common label(s) should be applied to resource selectors and templates.   
- `forceCommonLabels` is a boolean value which defines if it's allowed to override existing labels    
- `commonAnnotations` is a string map of additional annotations   
- `namespace` is a Kubernetes resources namespace 
- `forceCommonAnnotations` is a boolean value which defines if it's allowed to override existing annotations  
- `commonAnnotationsEnvsubst` is a boolean value which enables env variables substition in annotation values  
- `patches` is a list of Kustomize patches that supports inline updates   
- `components` is a list of Kustomize components  




## references

| item                      | link(s)                                      |
| ------------------------- | -------------------------------------------- |
| kubernetes-sigs/kustomize | https://github.com/kubernetes-sigs/kustomize |

