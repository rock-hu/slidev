---
layout: default 
title: gitops-openfaas  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---

<!--
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
-->

# gitops-openfaas   
