---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  # enabled: true
  persist: false
  # presenterOnly: false
  # syncAll: true

transition: slide-left
title: Welcome to Kubernetes
mdc: true
download: true
plantUmlServer: 'https://www.plantuml.com/plantuml'
# export:
#   format: pdf
#   timeout: 30000
#   dark: false
#   withClicks: false
#   withToc: false
# htmlAttrs:
#   dir: 'ltr'
#   lang: 'en'  
# aspect ratio for the slides
aspectRatio: 16/9
# real width of the canvas, unit in px
canvasWidth: 980
---

# Welcome to Slidev

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)


---
layout: default
---
---
src: ./slides/agenda.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-apm.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-authentication-authorization.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-capacity-planning.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-certificates.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-chaos-engineering.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-concepts.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-configuration-management.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-configurations.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-container-security.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-cronjob.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-daemonset.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-deployment.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-devops.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-failures.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-finops.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-policy-enforcement.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-pods.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-platform-engineering.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-operator.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-sosivio.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-signoz.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-opentelemetry.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-namespaces.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-multi-cloud.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-manifests.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-logging-monitoring.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-learning-roadmap.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-kiali.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-job.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-istio.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-ingress.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-gitops.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-gateway.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-production-best-practices.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-prometheus.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-registry.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-replicaset.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-resourcequota.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-scheduling.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-secrets.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-security.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-service.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-service-mesh.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-sre.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-statefulset.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-storage.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-templating.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-vault-secrets.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-vulnerability.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-vulnerability-scanning.md
hide: false
---
---
src: ./slides/kubernetes/kubernetes-trivy-scanning.md
hide: false
---

