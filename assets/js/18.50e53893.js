(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{460:function(e,n,t){"use strict";t.r(n);var a=t(5),i=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"la-creation-du-site-web"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#la-creation-du-site-web"}},[e._v("#")]),e._v(" La création du site web")]),e._v(" "),n("p",[e._v("La création de ce site web s'est déroulée en deux étapes :")]),e._v(" "),n("ul",[n("li",[e._v("L'élaboration du contenu du site en local;")]),e._v(" "),n("li",[e._v("La mise en ligne du site (uploading).")])]),e._v(" "),n("p",[e._v("Pour ce faire, j'ai suivi le protocole suivant :")]),e._v(" "),n("center",[n("mermaid",[e._v(' \nflowchart TB\n    S(["Script MarkDown (k-centipède)"]) --\x3e |commit|A\n    S --\x3e |push|B\n    subgraph A [ELABORATION DU CONTENU EN LOCAL]\n        direction TB\n        V([VuePress]) --\x3e |config.js|H([Script HTML])\n        subgraph A1 [ ]\n            Y[[Yarn]]--\x3e|package.json|N[[Node.js]]\n        end\n        A1--\x3eV\n    end\n    subgraph B [UPLOADING]\n        direction TB\n        M(["GitHub Master (.md)"])--\x3eT(["Travis"])\n        T--\x3e|travis.yml|B1\n        T--\x3e|travis.yml|B2\n        subgraph B1 [STAGE DOC]\n            direction TB\n            subgraph B12 [ ]\n                Y2[[Yarn]]--\x3e|package.json|N2[[Node.js]]\n            end\n            V2([VuePress])--\x3eP(["GitHub Pages (.html)"])\n            B12--\x3e|config.js|V2\n        end \n        subgraph B2 [STAGE JOB]\n            direction TB\n            DH([DockerHub])--\x3eC([Container])\n        end\n    end  \n')])],1)],1)}),[],!1,null,null,null);n.default=i.exports}}]);