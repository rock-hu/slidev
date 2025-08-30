# Welcome to [Slidev](https://github.com/slidevjs/slidev) 

| artifact                     | badge                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| backstage                    | ![](https://github.com/rock-hu/slidev/actions/workflows/backstage.yml/badge.svg)                    |
| channels                     | ![](https://github.com/rock-hu/slidev/actions/workflows/channels.yml/badge.svg)                     |
| gitops                       | ![](https://github.com/rock-hu/slidev/actions/workflows/gitops.yml/badge.svg)                       |
| kubernetes                   | ![](https://github.com/rock-hu/slidev/actions/workflows/kubernetes.yml/badge.svg)                   |
| mobile                       | ![](https://github.com/rock-hu/slidev/actions/workflows/mobile.yml/badge.svg)                       |
| site-reliability-engineering | ![](https://github.com/rock-hu/slidev/actions/workflows/site-reliability-engineering.yml/badge.svg) |
| spring-batch                 | ![](https://github.com/rock-hu/slidev/actions/workflows/spring-batch.yml/badge.svg)                 |
| spring-boot                  | ![](https://github.com/rock-hu/slidev/actions/workflows/spring-boot.yml/badge.svg)                  |
| wiremock                     | ![](https://github.com/rock-hu/slidev/actions/workflows/wiremock.yml/badge.svg)                     |
| idp                          | ![](https://github.com/rock-hu/slidev/actions/workflows/idp.yml/badge.svg)                          |



| slidev                                                                                  | netlify badge                                                                                                                                                                            |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [internal-developer-platform](https://slidev-internal-developer-platform.netlify.app)   | [![Netlify Status](https://api.netlify.com/api/v1/badges/964aa2f3-6c2a-415a-a7ff-09b3fe85b6b3/deploy-status)](https://app.netlify.com/sites/slidev-internal-developer-platform/deploys)  |
| [spring-boot](https://slidev-spring-boot.netlify.app)                                   | [![Netlify Status](https://api.netlify.com/api/v1/badges/b4fbfdae-2467-44f0-8d5d-eefafe50189d/deploy-status)](https://app.netlify.com/sites/slidev-spring-boot/deploys)                  |
| [wiremock](https://slidev-wiremock.netlify.app)                                         | [![Netlify Status](https://api.netlify.com/api/v1/badges/0e3285b3-4b2a-4451-b745-1e85d6d9272e/deploy-status)](https://app.netlify.com/sites/slidev-wiremock/deploys)                     |
| [spring-batch](https://slidev-spring-batch.netlify.app)                                 | [![Netlify Status](https://api.netlify.com/api/v1/badges/22e23614-8116-42ac-a57b-537e89697d41/deploy-status)](https://app.netlify.com/sites/slidev-spring-batch/deploys)                 |
| [channels](https://slidev-channels.netlify.app)                                         | [![Netlify Status](https://api.netlify.com/api/v1/badges/106a8c77-577b-4f1c-a5b0-562888ba981c/deploy-status)](https://app.netlify.com/sites/slidev-channels/deploys)                     |
| [site-reliability-engineering](https://slidev-site-reliability-engineering.netlify.app) | [![Netlify Status](https://api.netlify.com/api/v1/badges/05867eb2-bcc2-4130-aae3-b732ff79c29e/deploy-status)](https://app.netlify.com/sites/slidev-site-reliability-engineering/deploys) |
| [kubernetes](https://slidev-kubernetes.netlify.app)                                     | [![Netlify Status](https://api.netlify.com/api/v1/badges/3d1fff52-b543-443e-b330-5b7f875c115f/deploy-status)](https://app.netlify.com/sites/slidev-kubernetes/deploys)                   |
| [gitops](https://slidev-gitops.netlify.app)                                             | [![Netlify Status](https://api.netlify.com/api/v1/badges/31e2bf8f-8ea7-4a43-86f8-cd500f74c79e/deploy-status)](https://app.netlify.com/sites/slidev-gitops/deploys)                       |
| [backstage](https://slidev-backstage.netlify.app)                                       | [![Netlify Status](https://api.netlify.com/api/v1/badges/52ba4b35-d218-405f-8189-919c42235d5c/deploy-status)](https://app.netlify.com/sites/slidev-backstage/deploys)                    |

## git

```
git config --global commit.template $HOME/.gitcommitmsg.txt
```

## configs

```bash
npm config get registry
```

## slidev

To start the slide show:

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev on [documentations](https://sli.dev/).

```bash
npm install -g npm-check-updates
npx npm-check-updates
```

## plop

```bash
npm install -g plop
```


## netlify-cli

[netlify-cli](https://docs.netlify.com/cli/get-started/)

```bash
npm install netlify-cli -g
npm install netlify-cli --save-dev
```

```bash
netlify logout
netlify login
netlify status
```

## netlify sites

```bash
(base) Summers-MacBook-Pro:slidev nijiang$ netlify sites --help
Handle various site operations

USAGE
  $ netlify sites [options]

OPTIONS
  --filter <app>            For monorepos, specify the name of the application to run the command in
  -h, --help                display help for command
  --debug                   Print debugging information

DESCRIPTION
  The sites command will help you manage all your sites



COMMANDS
  $ sites:create            Create an empty site (advanced)
  $ sites:create-template   (Beta) Create a site from a starter template
  $ sites:delete            Delete a site
  $ sites:list              List all sites you have access to
```


## netlify deploy

```dotnetcli
netlify help deploy
Create a new deploy from the contents of a folder

USAGE
  $ netlify deploy [options]

OPTIONS
  --alias <name>Specifies the alias for deployment, the string at the beginning of the deploy subdomain. Useful for creating predictable deployment URLs. Avoid setting an alias string to the same
       value as a deployed branch. `alias` doesn’t create a branch deploy and can’t be used in conjunction with the branch subdomain feature. Maximum 37 characters.
  -a, --auth <token>Netlify auth token to deploy with
  -b, --branch <name>Serves the same functionality as --alias. Deprecated and will be removed in future versions
  --buildRun build command before deploying
  --context <context>Context to use when resolving build configuration
  -d, --dir <path>Specify a folder to deploy
  --filter <app>For monorepos, specify the name of the application to run the command in
  -f, --functions <folder>Specify a functions folder to deploy
  -h, --helpdisplay help for command
  --jsonOutput deployment data as JSON
  -m, --message <message>A short message to include in the deploy log
  -o, --openOpen site after deploy (default: false)
  -p, --prodDeploy to production (default: false)
  --prod-if-unlockedDeploy to production if unlocked, create a draft otherwise (default: false)
  -s, --site <name-or-id>A site name or ID to deploy to
  --skip-functions-cacheIgnore any functions created as part of a previous `build` or `deploy` commands, forcing them to be bundled again as part of the deployment (default: false)
  --timeout <number>Timeout to wait for deployment to finish
  --triggerTrigger a new build of your site on Netlify without uploading local files
  --debugPrint debugging information
```

## addons

| item                    | link(s)                                                 |
| ----------------------- | ------------------------------------------------------- |
| slidev-addon-excalidraw | <https://www.npmjs.com/package/slidev-addon-excalidraw> |
