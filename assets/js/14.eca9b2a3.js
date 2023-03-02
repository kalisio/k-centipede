(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{424:function(e,s,t){e.exports=t.p+"assets/img/requetes_kano.04df0389.jpg"},461:function(e,s,t){"use strict";t.r(s);var a=t(5),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kalisio-et-le-projet-centipede"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kalisio-et-le-projet-centipede"}},[e._v("#")]),e._v(" Kalisio et le projet Centipède")]),e._v(" "),s("h2",{attrs:{id:"centipede-et-la-solution-de-webmapping-kano"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centipede-et-la-solution-de-webmapping-kano"}},[e._v("#")]),e._v(" Centipède et la solution de webmapping "),s("em",[e._v("Kano")])]),e._v(" "),s("h3",{attrs:{id:"les-bases-du-webmapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#les-bases-du-webmapping"}},[e._v("#")]),e._v(" Les bases du webmapping")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Définition Webmapping")]),e._v(" "),s("p",[e._v("Correspond à la diffusion de données cartographiques par le biais d'un site web. Les informations affichées sont la réponse de requêtes clientes : on parle d'affichage dynamique.")]),e._v(" "),s("h4",{attrs:{id:"l-architecture-d-une-solution-webmapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l-architecture-d-une-solution-webmapping"}},[e._v("#")]),e._v(" L'architecture d'une solution webmapping")]),e._v(" "),s("p",[e._v("Une solution webmapping s'articule atour de 3 piliers :")]),e._v(" "),s("ul",[s("li",[e._v("Les requêtes ;")]),e._v(" "),s("li",[e._v("Le traitement ;")]),e._v(" "),s("li",[e._v("L'affichage.")])]),e._v(" "),s("h5",{attrs:{id:"les-requetes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#les-requetes"}},[e._v("#")]),e._v(" Les requêtes")]),e._v(" "),s("p",[e._v("Une requête est une demande effectuée par l'utilisateur. Elle suit le protocole  de communication HTTP, et permet à l'utilisateur d'accéder à des ressources (docs HTML ou programmes) stockées dans des bases de données grâce à leur URL.")]),e._v(" "),s("p",[e._v("Une requête HTTP est composée d'un en-tête "),s("em",[e._v("HEAD")]),e._v(" et d'un coprs "),s("em",[e._v("BODY")]),e._v(" dans lesquels est encapsulée la requête selon une méthode choisie (GET ou POST majoritairement).")]),e._v(" "),s("p",[e._v("Un requête HTTP contient donc :")]),e._v(" "),s("ul",[s("li",[e._v("L'URL du fichier ou programme recherché ;")]),e._v(" "),s("li",[e._v("La méthode de requête (GET, POST, etc.) ;")]),e._v(" "),s("li",[e._v("Les paramètres que la ressource recherchée devra appliquer (taille, etc.).")])]),e._v(" "),s("p",[e._v("Dans la majorité des sites web dynamiques modernes, les requêtes sont traitées par des "),s("em",[e._v("controls")]),e._v(" Ils permettent de définir au sein d'une page HTML des objets Javascript, pour répondre localement aux requêtes client en arrière plan, sans recharger toute la page web. On parle de site web AJAX.")]),e._v(" "),s("p",[e._v("Ces sites AJAX sont agrémetés de composants pré-programmés nommés widgets. Ils facilitent le développement de sites web intéractifs.")]),e._v(" "),s("p",[e._v("Finalement, un site de webmapping est un assemblage sur mesure de composants préprogrammés, capables de répondre à plusieurs types de requêtes clientes. On parle de "),s("em",[e._v("Mashup")]),e._v(".")]),e._v(" "),s("h5",{attrs:{id:"le-traitement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#le-traitement"}},[e._v("#")]),e._v(" Le traitement")]),e._v(" "),s("p",[e._v("Une fois la requête client émise, les logiciels de traitement localisent la ressource recherchée, l'exécutent si besoin, et retournent le résultat au client.")]),e._v(" "),s("h5",{attrs:{id:"l-affichage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l-affichage"}},[e._v("#")]),e._v(" L'affichage")]),e._v(" "),s("p",[e._v("Selon le format de la réponse reçue, l'affichage peut être direct (page HTML), ou indirect en faisant appel à des logiciels d'interprétation (Javascript, Flash, etc.). C'est notamment le cas des données vectorielles, qui nécessitent un traitement sur l'appareil client.")]),e._v(" "),s("p",[e._v("Selon la nature de la requête, la ressource peut aussi être stockée dans une base de données, pour un affichage ultérieur.")]),e._v(" "),s("h4",{attrs:{id:"interoperabilite-et-normes-ogc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interoperabilite-et-normes-ogc"}},[e._v("#")]),e._v(" Interopérabilité et normes OGC")]),e._v(" "),s("p",[e._v("Les solutions webmapping font appel à de multiples serveurs géographiques. Pour garantir l'"),s("strong",[e._v("interopérabilité")]),e._v(" des données et services géographiques, l'Open Geospatial Consortium (OGC) a déceloppé des standarts de communicaction, de formatage et d'échange.")]),e._v(" "),s("h5",{attrs:{id:"wms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wms"}},[e._v("#")]),e._v(" WMS")]),e._v(" "),s("p",[e._v("Les services WMS (Web Map Service) permettent de mettre à disposition d’utilisateurs des "),s("strong",[e._v("images géoréférencées")]),e._v(", via une simple requête HTTP, à partir de données sources raster (image) ou vecteur.")]),e._v(" "),s("p",[e._v("Les services WMS "),s("strong",[e._v("calculent les images")]),e._v(" demandées selon divers paramètres fournis dans la requête.")]),e._v(" "),s("p",[e._v("Les services WMS se composent de 3 requêtes :")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("GetCapabilities")]),e._v(" : renvoie les paramètres du service et les couches (une couche WMS correspond à une ressource) disponibles avec les informations permettant de paramétrer les requêtes suivantes ;")]),e._v(" "),s("li",[s("em",[e._v("GetMap")]),e._v(" : renvoie une image de la carte ;")]),e._v(" "),s("li",[s("em",[e._v("GetFeatureInfo")]),e._v(" : renvoie des informations sur les objets ayant servi à générer la carte (optionnelle).")])]),e._v(" "),s("h5",{attrs:{id:"wmts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wmts"}},[e._v("#")]),e._v(" WMTS")]),e._v(" "),s("p",[e._v("Les services d’images tuilées permettent de mettre à disposition d’utilisateurs distants des images géoréférencées, via une simple requête HTTP.")]),e._v(" "),s("p",[e._v("Ils mettent en œuvre le protocole WMTS (Web Map Tile Service).")]),e._v(" "),s("p",[e._v("Les requêtes WMTS sont des références directes aux images demandées dans un système de cache précalculé. Cela permet d’avoir des temps de réponse nettement plus rapides que pour le WMS qui doit calculer une image côté serveur à chaque requête.")]),e._v(" "),s("p",[e._v("Le cache d’images repose sur un maillage rectangulaire régulier de la zone couverte, une image étant associée à chaque maille (appelée aussi tuile). Pour pouvoir représenter cette zone à différents niveaux d’échelles (ou niveaux de zoom), des maillages de plus en plus fins sont définis pour la zone. Le cache d’images ainsi tuilées apparaît donc comme une pyramide dont chaque niveau de zoom représente un étage.\nChaque type de donnée servie (Orthoimagerie, cartes, …) nécessite ainsi le pré-calcul d’une telle cache dans une projection donnée, hébergée sur l’infrastructure Géoportail.")]),e._v(" "),s("p",[e._v("Pour obtenir une image, une requête WMTS comporte donc des paramètres précisant : le type de données (LAYER), la pyramide de tuiles (TILEMATRIXSET) et le maillage (TILEMATRIX) correspondant au niveau de zoom voulu et les coordonnées de la tuile dans ce maillage (TILECOL et TILEROW). ("),s("a",{attrs:{href:"https://geoservices.ign.fr/documentation/services/api-et-services-ogc#2430",target:"_blank",rel:"noopener noreferrer"}},[e._v("IGN, 2023"),s("OutboundLink")],1),e._v(")")]),e._v(" "),s("h5",{attrs:{id:"wcs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wcs"}},[e._v("#")]),e._v(" WCS")]),e._v(" "),s("p",[e._v("Le Web Coverage Service (WCS) est un service d'échanges de données raster complexes. Les données WCS sont souvent utilisées dans le cadre de modélisations, qui font appel à des données raster plus complètes que celles transportées grâce aux services WMS.")]),e._v(" "),s("h5",{attrs:{id:"wfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wfs"}},[e._v("#")]),e._v(" WFS")]),e._v(" "),s("p",[e._v("Le service WFS permet aux utilisateurs de télécharger des données vectorielles géoréférencées.")]),e._v(" "),s("h5",{attrs:{id:"csw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csw"}},[e._v("#")]),e._v(" CSW")]),e._v(" "),s("p",[e._v("Le service CSW du Géoportail permet d’interroger des catalogues de données.")]),e._v(" "),s("h3",{attrs:{id:"kano-et-centipede"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kano-et-centipede"}},[e._v("#")]),e._v(" Kano et Centipède")]),e._v(" "),s("p",[e._v("L'architecture de la solution webmapping Kano est articulée autour de 2 systèmes de requêtes imbriqués l'un dans l'autre, avec un point de croisement : le gestionnaire de bases de données MongoDB.")]),e._v(" "),s("p",[e._v("D'un coté, le JOB lance des requête régulières au serveur Centipède pour en récupérer la liste des bases disponibles et la stocker sur MongoDB. De l'autre, l'utilisateur interroge MongoDB (via Kano) pour en extraire la liste des bases précédemment collectée grâce au travail du JOB.")]),e._v(" "),s("p",[e._v("Ce schéma récapitule ce système à double requêtes :")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(424),alt:"Impossible de visualiser le contenu"}}),e._v(" "),s("em",[s("center",[e._v(" Réponse à une requête utilisateur sur Kano")])],1)]),e._v(" "),s("h2",{attrs:{id:"la-doc-centipede-de-kalisio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#la-doc-centipede-de-kalisio"}},[e._v("#")]),e._v(" La doc Centipède de Kalisio")]),e._v(" "),s("p",[e._v("La création de cette documentation s'est déroulée en deux étapes :")]),e._v(" "),s("ul",[s("li",[e._v("L'élaboration du contenu du site en local;")]),e._v(" "),s("li",[e._v("La mise en ligne du site (uploading).")])]),e._v(" "),s("p",[e._v("Pour ce faire, j'ai suivi le protocole suivant :")]),e._v(" "),s("center",[s("mermaid",[e._v(" \nflowchart LR\n    %%%%% OUTILS %%%%%\n    subgraph A [USER]\n        S([Script MarkDown])\n    end\n    subgraph B [GITHUB MASTER]\n        direction LR\n        K[(k-centipede)]-.->D1([k-centipede/workspace])\n    end\n    subgraph C [TRAVIS]\n        J([JOB])-.->D2([DOCS])\n    end\n    subgraph D [DOCKERHUB]\n        IM[(Images)]\n    end\n    subgraph E [GITHUB PAGES]\n        H[(HTML files)]\n    end\n    %%%%% ACTIONS %%%%%\n    S--\x3e|commit|S\n    A--\x3e|push|B\n    B----\x3e|trigger|J\n    J--\x3e|deploy|D\n    D2--\x3e|deploy|E\n")])],1),e._v(" "),s("p",[e._v("Ce second schéma représente le fonctionnement détaillé du logiciel "),s("em",[e._v("Travis")]),e._v(" dans le cas du projet k-centipede porté par Kalisio :")]),e._v(" "),s("center",[s("mermaid",[e._v("\nflowchart LR\n    subgraph A [TRAVIS]\n        J([JOB])-.->DO([DOCS])\n    end\n    T([travis.yml])----\x3eJ\n    %%%%% JOB %%%%%\n    %% OUTILS\n    subgraph B [ ]\n        direction TB\n        subgraph B1 [ ]\n            P([Provision])\n        end\n        subgraph B2 [DOCKER]\n            X([Build])\n        end\n        subgraph B3 [DOCKERHUB]\n            Z([Deploy])\n        end\n    end\n    %% ACTIONS\n    J--\x3eB1\n    B1--\x3eB2\n    B2--\x3eB3\n    %%%%%% DOCS %%%%%\n    %% OUTILS\n    subgraph C [ ]\n        direction TB    \n        subgraph C1 [YARN]\n            PR2([Provision])\n        end\n        subgraph C2 [VUEPRESS]\n            BU2([Build])\n        end\n        subgraph C3 [GITHUB]\n            DE2([Deploy])\n        end\n    end\n    %% ACTIONS\n    C1--\x3eC2\n    C2--\x3eC3\n    DO--\x3eC1\n")])],1)],1)])}),[],!1,null,null,null);s.default=r.exports}}]);