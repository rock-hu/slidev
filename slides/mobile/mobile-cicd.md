---
layout: 2x2-grid-header
title: mobile-cicd  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates
https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates/Jobs
https://mas.owasp.org/
https://cheatsheetseries.owasp.org/cheatsheets/Mobile_Application_Security_Cheat_Sheet.html
-->

# mobile-cicd   


::top-left::
**Pipeline cover:**
- Automatically running unit tests
- Automatically running integration tests
- Automatically running static code analysis checks
- Automatically running debug/release builds
- Automatically distribute the app for testers
- Adding Gitlab’s drop-in features
- SAST
  - Dependency management
  - License management
  - ...


::top-right::
**Templates**
<img src="/images/gitlab_cicd.png"  />
- Android.gitlab-ci.yml
- Android-Fastlane.gitlab-ci.yml
- iOS-Fastlane.gitlab-ci.yml

::bottom-left::
**OWASP Mobile Application Security**   
The OWASP Mobile Application Security (`MAS`) flagship project provides a security standard for mobile apps (`OWASP MASVS`), 
a list of common security and privacy weaknesses specific to mobile apps (`OWASP MASWE`) 
and a comprehensive testing guide (`OWASP MASTG`) that covers the processes, techniques, 
and tools and test cases to deliver consistent and complete results.

- Architecture & Design
- Authentication & Authorization
- Data Storage & Privacy
- Network Communication
- User Interface
- Code Quality
- Application Integrity
- Post-Deployment
- Platform-Specific Guidance



::bottom-right::

**Stages**
```yaml
stages:
  - environment
  - build
  - test
  - internal
  - alpha
  - beta
  - production
```

```yaml
include: 
  - template: Dependency-Scanning.gitlab-ci.yml
  - template: SAST.gitlab-ci.yml
  - template: License-Management.gitlab-ci.yml
  - template: Secret-Detection.gitlab-ci.yml
```
