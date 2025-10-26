import{b as s,o as n,w as r,i,g as c,v as l,x as f,T as e}from"./modules/vue-CBxHhhlZ.js";import{I as p}from"./slidev/default-BKqfpPN1.js";import{u,f as m}from"./slidev/context-DUqzBCiV.js";import"./index-Bf-6vIL8.js";import"./modules/shiki-CcKNQSvP.js";const _={__name:"gitops-openfaas.md__slidev_7",setup(d){const{$clicksContext:t,$frontmatter:o}=u();return t.setup(),(g,a)=>(n(),s(p,l(f(e(m)(e(o),6))),{default:r(()=>[i(`
https://github.com/openfaas/faas-cli
curl -sSL https://cli.openfaas.com | sudo sh

faas-cli new - creates a new function via a template in the current directory
faas-cli login - stores basic auth credentials for OpenFaaS gateway (supports multiple gateways)
faas-cli logout - removes basic auth credentials for a given gateway
faas-cli up - a combination of build/push and deploy
faas-cli build - builds Docker images from the supported language types
faas-cli push - pushes Docker images into a registry
faas-cli deploy - deploys the functions into a local or remote OpenFaaS gateway
faas-cli publish - build and push multi-arch images for CI and release artifacts
faas-cli remove - removes the functions from a local or remote OpenFaaS gateway
faas-cli invoke - invokes the functions and reads from STDIN for the body of the request
faas-cli store - allows browsing and deploying OpenFaaS store functions
faas-cli secret - manage secrets for your functions
faas-cli pro auth - initiates an OAuth2 authorization flow to obtain a token
faas-cli registry-login - generate registry auth file in correct format by providing username and password for docker/ecr/self hosted registry

export OPENFAAS_URL=http://127.0.0.1:31112
`),a[0]||(a[0]=c("h1",null,"gitops-openfaas",-1))]),_:1},16))}};export{_ as default};
