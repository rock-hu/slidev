import{b as o,o as r,w as l,i as h,g as e,ad as s,v as m,x as c,T as n}from"./modules/vue-Bo_l8wuD.js";import{I as d}from"./slidev/default-CGoEt8vg.js";import{u,f as p}from"./slidev/context-C5x8X1bC.js";import"./index-CRoQQuYP.js";import"./modules/shiki-B1wnBfLT.js";const x={__name:"kubernetes-chaos-engineering.md__slidev_10",setup(g){const{$clicksContext:a,$frontmatter:i}=u();return a.setup(),(b,t)=>(r(),o(d,m(c(n(p)(n(i),9))),{default:l(()=>[h(`

https://chaos-mesh.org/
helm repo add chaos-mesh https://charts.chaos-mesh.org
kubectl create ns chaos-mesh
helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version 2.7.0
helm upgrade chaos-mesh chaos-mesh/chaos-mesh
helm uninstall chaos-mesh -n chaos-mesh

sudo netstat -tnlp | grep :8080

kubectl get po -n chaos-mesh

https://chaostoolkit.org/drivers/kubernetes/

pip install chaostoolkit-kubernetes
Successfully installed backports.zoneinfo-0.2.1 cachetools-5.5.0 chaostoolkit-kubernetes-0.39.0 chaostoolkit-lib-1.44.0 charset-normalizer-3.4.0 dateparser-1.2.0 durationpy-0.9 google-auth-2.36.0 importlib-metadata-8.5.0 kubernetes-31.0.0 oauthlib-3.2.2 pyasn1-0.6.1 pyasn1-modules-0.4.1 python-json-logger-2.0.7 pyyaml-6.0.2 regex-2024.11.6 requests-2.32.3 requests-oauthlib-2.0.0 rsa-4.9 tzlocal-5.2 zipp-3.20.2
`),t[0]||(t[0]=e("h1",null,"kubernetes-chaos-engineering",-1)),t[1]||(t[1]=e("h2",null,"Benefits of Chaos Engineering",-1)),t[2]||(t[2]=e("ul",null,[e("li",null,[s("Identify vulnerabilities and weaknesses before they become critical issues:"),e("br"),s(" Chaos engineering helps uncover hidden flaws in the system that might not be apparent during regular operations. By proactively identifying these vulnerabilities, teams can address them before they lead to significant problems.")]),e("li",null,[s("Improve the reliability and resilience of their systems:"),e("br"),s(" Regular chaos experiments ensure that systems are robust and can handle unexpected disruptions. This continuous testing and improvement process enhances overall system reliability.")]),e("li",null,[s("Reduce downtime and improve overall system availability:"),e("br"),s(" By preparing for potential failures, organizations can minimize the impact of disruptions, leading to reduced downtime and higher availability of services.")]),e("li",null,[s("Enhance their ability to respond to failures and outages:"),e("br"),s(" Chaos engineering equips teams with the knowledge and experience to respond swiftly and effectively to real-world incidents, reducing recovery times and mitigating damage.")]),e("li",null,[s("Improve their understanding of how their systems behave under stress:"),e("br"),s(" Observing system behavior during chaos experiments provides valuable insights into performance bottlenecks and areas for optimization.")]),e("li",null,[s("Reduce the risk of cascading failures and improve overall system stability:"),e("br"),s(" By identifying and addressing weak points, chaos engineering helps prevent small issues from escalating into larger, more severe problems, thereby enhancing system stability.")])],-1))]),_:1},16))}};export{x as default};
