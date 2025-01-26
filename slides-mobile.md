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
title: Welcome to Digital Channels
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
src: ./slides/agenda.md
hide: false
---
---
src: ./slides/mobile/mobile-architecture.md
---
---
src: ./slides/mobile/mobile-frameworks.md
---
---
src: ./slides/mobile/mobile-modular.md
---
---
src: ./slides/mobile/mobile-navigation.md
---
---
src: ./slides/mobile/mobile-testing.md
---
---
src: ./slides/mobile/mobile-android-jetpack.md
---
---
src: ./slides/mobile/mobile-design-system.md
---
---
src: ./slides/mobile/mobile-component-library.md
---
---
src: ./slides/mobile/mobile-compose-modifier.md
---
---
src: ./slides/mobile/mobile-push-notifications.md
---
---
src: ./slides/mobile/mobile-cicd.md
---
---
src: ./slides/mobile/mobile-visual-testing.md
---
---
src: ./slides/mobile/mobile-compose.md
---
---
src: ./slides/mobile/mobile-compose-components.md
---
---
src: ./slides/mobile/mobile-compose-layouts.md
---
---
src: ./slides/mobile/mobile-compose-state-management.md
---
---
src: ./slides/mobile/mobile-compose-animations-transitions.md
---
---
src: ./slides/mobile/mobile-compose-navigation.md
---
---
src: ./slides/mobile/mobile-compose-storage.md
---
---
src: ./slides/mobile/mobile-compose-side-effects.md
---
---
src: ./slides/mobile/mobile-compose-bom.md
---
---
src: ./slides/mobile/mobile-composable-component-guidelines.md
---