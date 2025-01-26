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
title: Welcome to Internal Developer Platform
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
src: ./slides/knowledge.md
hide: false
---
---
src: ./slides/architecture-patterns.md
hide: false
---
---
src: ./slides/resiliencies.md
hide: false
---
---
src: ./slides/resilience-bulkhead.md
hide: false
---
---
src: ./slides/resilience-cache-aside.md
hide: false
---
---
src: ./slides/resilience-circuit-breaker.md
hide: false
---
---
src: ./slides/resilience-claim-check.md
hide: false
---
---
src: ./slides/event-sourcing.md
hide: false
---
---
src: ./slides/resilience-health-endpoint-monitoring.md
hide: false
---
---
src: ./slides/resilience-rate-limit.md
hide: false
---

---
src: ./slides/resilience-retry.md
hide: false
---
---
src: ./slides/resilience-throttling.md
hide: false
---
---
src: ./slides/resilience-sidecar.md
hide: false
---
---
src: ./slides/sharding.md
hide: false
---
---
src: ./slides/sharding-key-strategy.md
hide: false
---
---
src: ./slides/sharding-range-strategy.md
hide: false
---
---
src: ./slides/sharding-directory-strategy.md
hide: false
---
---
src: ./slides/spring-batch.md
hide: false
---
---
src: ./slides/spring-integration.md
hide: false
---
---
src: ./slides/spring-security.md
hide: false
---
---
src: ./slides/spring-session.md
hide: false
---
---
src: ./slides/spring-ws.md
hide: false
---
---
src: ./slides/kubernetes.md
hide: false
---
---
src: ./slides/kubernetes-registry.md
hide: false
---
---
src: ./slides/kubernetes-istio.md
hide: false
---
---

src: ./slides/kubernetes-prometheus.md
hide: false
---
---

src: ./slides/kubernetes-opentelemetry.md
hide: false
---
---

src: ./slides/kubernetes-manifests.md
hide: false
---
---

src: ./slides/kubernetes-devops.md
hide: false
---
---

src: ./slides/kubernetes-gitops.md
hide: false
---
---

src: ./slides/kubernetes-finops.md
hide: false
---
src: ./slides/kubernetes-sre.md
hide: false
---
---
src: ./slides/kubernetes-apm.md
hide: false
---
---
src: ./slides/microservices.md
hide: false
---
---
src: ./slides/microservices-design.md
hide: false
---
---
src: ./slides/microservices-logging.md
hide: false
---
---
src: ./slides/microservices-metrics.md
hide: false
---
---
src: ./slides/microservices-deployment.md
hide: false
---
---
src: ./slides/microservices-framework.md
hide: false
---
---
src: ./slides/microservices-configuration.md
hide: false
---
---
src: ./slides/microservices-security.md
hide: false
---
---
src: ./slides/microservices-performance.md
hide: false
---
---
src: ./slides/channels.md
hide: false
---
---
src: ./slides/channels-web.md
hide: false
---
---
src: ./slides/channels-app.md
hide: false
---
---
src: ./slides/channels-api.md
hide: false
---
---
src: ./slides/channels-module-federation.md
hide: false
---
---
src: ./slides/modernization-rehost.md
hide: false
---
---
src: ./slides/modernization-refactor.md
hide: false
---
---
src: ./slides/modernization-re-architect.md
hide: false
---
---
src: ./slides/modernization-rebuild.md
hide: false
---
---
src: ./slides/modernization-replace.md
hide: false
---
---
src: ./slides/modernization.md
hide: false
---
---
src: ./slides/middlewares.md
hide: false
---
---
src: ./slides/middlewares-messaging.md
hide: false
---
---
src: ./slides/middlewares-streaming.md
hide: false
---
---
src: ./slides/middlewares-transactional.md
hide: false
---
---
src: ./slides/middlewares-intelligent.md
hide: false
---
---
src: ./slides/engineering.md
hide: false
---
