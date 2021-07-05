(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3460],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return u}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),l=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,v=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return a?t.createElement(v,p(p({ref:n},c),{},{components:a})):t.createElement(v,p({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=a[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97832:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var t=a(22122),r=a(19756),o=(a(67294),a(3905)),p={title:"Dry-Run and Live-Diff"},s={unversionedId:"end-user/debug",id:"end-user/debug",isDocsHomePage:!1,title:"Dry-Run and Live-Diff",description:"KubeVela allows you to dry-run and live-diff your application.",source:"@site/docs/end-user/debug.md",sourceDirName:"end-user",slug:"/end-user/debug",permalink:"/docs/next/end-user/debug",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/debug.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1625206152,formattedLastUpdatedAt:"7/2/2021",frontMatter:{title:"Dry-Run and Live-Diff"},sidebar:"docs",previous:{title:"Aggregated Health Probe",permalink:"/docs/next/end-user/scopes/health"},next:{title:"Resource Model",permalink:"/docs/next/platform-engineers/overview"}},i=[{value:"Dry-Run the <code>Application</code>",id:"dry-run-the-application",children:[]},{value:"Live-Diff the <code>Application</code>",id:"live-diff-the-application",children:[]}],l={toc:i};function c(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela allows you to dry-run and live-diff your application."),(0,o.kt)("h2",{id:"dry-run-the-application"},"Dry-Run the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Application")),(0,o.kt)("p",null,"Dry run will help you to understand what are the real resources which will to be expanded and deployed\nto the Kubernetes cluster. In other words, it will mock to run the same logic as KubeVela's controller\nand output the results locally."),(0,o.kt)("p",null,"For example, let's dry-run the following application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela dry-run -f app.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'---\n# Application(vela-app) -- Comopnent(express-server)\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    workload.oam.dev/type: webservice\nspec:\n  selector:\n    matchLabels:\n      app.oam.dev/component: express-server\n  template:\n    metadata:\n      labels:\n        app.oam.dev/component: express-server\n    spec:\n      containers:\n      - image: crccheck/hello-world\n        name: express-server\n        ports:\n        - containerPort: 8000\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    trait.oam.dev/resource: service\n    trait.oam.dev/type: ingress\n  name: express-server\nspec:\n  ports:\n  - port: 8000\n    targetPort: 8000\n  selector:\n    app.oam.dev/component: express-server\n\n---\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: express-server\n    app.oam.dev/name: vela-app\n    trait.oam.dev/resource: ingress\n    trait.oam.dev/type: ingress\n  name: express-server\nspec:\n  rules:\n  - host: testsvc.example.com\n    http:\n      paths:\n      - backend:\n          serviceName: express-server\n          servicePort: 8000\n        path: /\n\n---\n')),(0,o.kt)("p",null,"In this example, the definitions(",(0,o.kt)("inlineCode",{parentName:"p"},"webservice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress"),") which ",(0,o.kt)("inlineCode",{parentName:"p"},"vela-app")," depends on is the built-in\ncomponents and traits of KubeVela. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"-d "),"or ",(0,o.kt)("inlineCode",{parentName:"p"},"--definitions")," to specify your local definition files."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-d "),"or ",(0,o.kt)("inlineCode",{parentName:"p"},"--definitions")," permitting user to provide capability definitions used in the application from local files.\n",(0,o.kt)("inlineCode",{parentName:"p"},"dry-run")," cmd will prioritize the provided capabilities than the living ones in the cluster."),(0,o.kt)("h2",{id:"live-diff-the-application"},"Live-Diff the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Application")),(0,o.kt)("p",null,"Live-diff helps you to have a preview of what would change if you're going to upgrade an application without making any changes\nto the living cluster.\nThis feature is extremely useful for serious production deployment, and make the upgrade under control"),(0,o.kt)("p",null,"It basically generates a diff between the specific revision of running instance and the local candidate application.\nThe result shows the changes (added/modified/removed/no_change) of the application as well as its sub-resources,\nsuch as components and traits."),(0,o.kt)("p",null,"Assume you have just deployed the application in dry-run section.\nThen you can list the revisions of the Application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get apprev -l app.oam.dev/name=vela-app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME          AGE\nvela-app-v1   50s\n")),(0,o.kt)("p",null,"Assume we're going to upgrade the application like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# new-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8080 # change port\n        cpu: 0.5 # add requests cpu units\n    - name: my-task # add a component\n      type: task\n      properties:\n        image: busybox\n        cmd: ["sleep", "1000"]\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8080 # change port\n')),(0,o.kt)("p",null,"Run live-diff like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela live-diff -f new-app.yaml -r vela-app-v1\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-r")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--revision")," is a flag that specifies the name of a living ApplicationRevision with which you want to compare the updated application."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--context")," is a flag that specifies the number of lines shown around a change. The unchanged lines\nwhich are out of the context of a change will be omitted. It's useful if the diff result contains a lot of unchanged content\nwhile you just want to focus on the changed ones."),(0,o.kt)("details",null,(0,o.kt)("summary",null," Click to view the details of diff result "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'---\n# Application (vela-app) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1beta1\n  kind: Application\n  metadata:\n    creationTimestamp: null\n    name: vela-app\n    namespace: default\n  spec:\n    components:\n    - name: express-server\n      properties:\n+       cpu: 0.5\n        image: crccheck/hello-world\n-       port: 8000\n+       port: 8080\n+     type: webservice\n+   - name: my-task\n+     properties:\n+       cmd:\n+       - sleep\n+       - "1000"\n+       image: busybox\n      traits:\n      - properties:\n          domain: testsvc.example.com\n          http:\n-           /: 8000\n+           /: 8080\n        type: ingress\n-     type: webservice\n+     type: task\n  status:\n    batchRollingState: ""\n    currentBatch: 0\n    rollingState: ""\n    upgradedReadyReplicas: 0\n    upgradedReplicas: 0\n\n---\n## Component (express-server) has been modified(*)\n---\n  apiVersion: core.oam.dev/v1alpha2\n  kind: Component\n  metadata:\n    creationTimestamp: null\n    labels:\n      app.oam.dev/name: vela-app\n    name: express-server\n  spec:\n    workload:\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        labels:\n          app.oam.dev/appRevision: ""\n          app.oam.dev/component: express-server\n          app.oam.dev/name: vela-app\n          workload.oam.dev/type: webservice\n      spec:\n        selector:\n          matchLabels:\n            app.oam.dev/component: express-server\n        template:\n          metadata:\n            labels:\n              app.oam.dev/component: express-server\n          spec:\n            containers:\n            - image: crccheck/hello-world\n              name: express-server\n              ports:\n-             - containerPort: 8000\n+             - containerPort: 8080\n  status:\n    observedGeneration: 0\n\n---\n### Component (express-server) / Trait (ingress/service) has been removed(-)\n---\n- apiVersion: v1\n- kind: Service\n- metadata:\n-   labels:\n-     app.oam.dev/appRevision: ""\n-     app.oam.dev/component: express-server\n-     app.oam.dev/name: vela-app\n-     trait.oam.dev/resource: service\n-     trait.oam.dev/type: ingress\n-   name: express-server\n- spec:\n-   ports:\n-   - port: 8000\n-     targetPort: 8000\n-   selector:\n-     app.oam.dev/component: express-server\n\n---\n### Component (express-server) / Trait (ingress/ingress) has been removed(-)\n---\n- apiVersion: networking.k8s.io/v1beta1\n- kind: Ingress\n- metadata:\n-   labels:\n-     app.oam.dev/appRevision: ""\n-     app.oam.dev/component: express-server\n-     app.oam.dev/name: vela-app\n-     trait.oam.dev/resource: ingress\n-     trait.oam.dev/type: ingress\n-   name: express-server\n- spec:\n-   rules:\n-   - host: testsvc.example.com\n-     http:\n-       paths:\n-       - backend:\n-           serviceName: express-server\n-           servicePort: 8000\n-         path: /\n\n---\n## Component (my-task) has been added(+)\n---\n+ apiVersion: core.oam.dev/v1alpha2\n+ kind: Component\n+ metadata:\n+   creationTimestamp: null\n+   labels:\n+     app.oam.dev/name: vela-app\n+   name: my-task\n+ spec:\n+   workload:\n+     apiVersion: batch/v1\n+     kind: Job\n+     metadata:\n+       labels:\n+         app.oam.dev/appRevision: ""\n+         app.oam.dev/component: my-task\n+         app.oam.dev/name: vela-app\n+         workload.oam.dev/type: task\n+     spec:\n+       completions: 1\n+       parallelism: 1\n+       template:\n+         spec:\n+           containers:\n+           - command:\n+             - sleep\n+             - "1000"\n+             image: busybox\n+             name: my-task\n+           restartPolicy: Never\n+ status:\n+   observedGeneration: 0\n\n---\n### Component (my-task) / Trait (ingress/service) has been added(+)\n---\n+ apiVersion: v1\n+ kind: Service\n+ metadata:\n+   labels:\n+     app.oam.dev/appRevision: ""\n+     app.oam.dev/component: my-task\n+     app.oam.dev/name: vela-app\n+     trait.oam.dev/resource: service\n+     trait.oam.dev/type: ingress\n+   name: my-task\n+ spec:\n+   ports:\n+   - port: 8080\n+     targetPort: 8080\n+   selector:\n+     app.oam.dev/component: my-task\n\n---\n### Component (my-task) / Trait (ingress/ingress) has been added(+)\n---\n+ apiVersion: networking.k8s.io/v1beta1\n+ kind: Ingress\n+ metadata:\n+   labels:\n+     app.oam.dev/appRevision: ""\n+     app.oam.dev/component: my-task\n+     app.oam.dev/name: vela-app\n+     trait.oam.dev/resource: ingress\n+     trait.oam.dev/type: ingress\n+   name: my-task\n+ spec:\n+   rules:\n+   - host: testsvc.example.com\n+     http:\n+       paths:\n+       - backend:\n+           serviceName: my-task\n+           servicePort: 8080\n+         path: /\n'))))}c.isMDXComponent=!0}}]);