(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{428:function(e,s,t){e.exports=t.p+"assets/img/BTG_01.b38f6551.png"},429:function(e,s,t){e.exports=t.p+"assets/img/BTG_02.4b3011ef.png"},430:function(e,s,t){e.exports=t.p+"assets/img/BTG_03.e4ca9bcf.png"},431:function(e,s,t){e.exports=t.p+"assets/img/BTG_04.b1982040.png"},432:function(e,s,t){e.exports=t.p+"assets/img/BTG_05.d796ac1a.png"},433:function(e,s,t){e.exports=t.p+"assets/img/BTG_06.3926eda3.png"},434:function(e,s,t){e.exports=t.p+"assets/img/BTG_07.65b18317.png"},435:function(e,s,t){e.exports=t.p+"assets/img/BTG_08.7f9a04b1.png"},436:function(e,s,t){e.exports=t.p+"assets/img/BTG_09.22a25842.png"},460:function(e,s,t){"use strict";t.r(s);var i=t(5),a=Object(i.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fonctionnement-de-bluetooth-gnss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fonctionnement-de-bluetooth-gnss"}},[e._v("#")]),e._v(" Fonctionnement de "),s("em",[e._v("Bluetooth GNSS")])]),e._v(" "),s("p",[s("img",{attrs:{src:t(428),alt:"Impossible de visualiser mon magnifique schéma"}}),e._v(" "),s("em",[s("strong",[s("center",[e._v(" Les 5 étapes pour faire fonctionner Bluetooth GNSS sur votre smartphone Android ")])],1)])]),e._v(" "),s("h2",{attrs:{id:"verifier-les-prerequis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verifier-les-prerequis"}},[e._v("#")]),e._v(" Vérifier les prérequis")]),e._v(" "),s("p",[e._v("Pour fonctionner et remplir ses missions, Bluetooth GNSS a besoin de quelques prérequis. Vous devez donc aller fouiller dans les paramètres de votre appareil pour :")]),e._v(" "),s("ul",[s("li",[e._v("Activer le Bluetooth et choisir un appareil")]),e._v(" "),s("li",[e._v("Activer la localisation de haute précision (paramètres localisation)")]),e._v(" "),s("li",[e._v("Sélectionner Bluetooth GNSS comme application de localisation fictive (paramètres développeur)")])]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(429),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("p",[e._v("Une fois tous ces paramètres vérifiés, vous devez préparer la connexion au rover.")]),e._v(" "),s("h2",{attrs:{id:"selectionner-le-rover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectionner-le-rover"}},[e._v("#")]),e._v(" Sélectionner le rover")]),e._v(" "),s("p",[e._v("Pour préparer la liaison avec le rover, vous devez le sélectionner en amont de la connexion. Rendez-vous dans les paramètres de l’applications en cliquand sur l’engrenage blanc en haut à gauche de l’écran d’acceuil.")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(430),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("p",[e._v("Une fois la page des paramètres ouverte, cliquez sur “Select…” dans la catégorie “Selected Target Bluetooth device”  et sélectionnez le rover.")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(431),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("p",[s("strong",[e._v("Important")]),e._v(" : pensez à appairer votre smartphone et votre rover avant la manipulation.")]),e._v(" "),s("p",[e._v("Si vous avez bien réalisé la manipulation, le nom de votre rover est visible sur la page des paramètres. S’il ne l’est pas, recommencez la manœuvre !")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(432),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("h2",{attrs:{id:"selectionner-une-base-et-s-y-connecter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectionner-une-base-et-s-y-connecter"}},[e._v("#")]),e._v(" Sélectionner une base et s’y connecter")]),e._v(" "),s("p",[e._v("Maintenant que la connexion avec le rover est amorcée, il faut sélectionner la base qui lui enverra les informations nécessaires au positionnement centimétrique.")]),e._v(" "),s("p",[e._v("Rendez-vous dans les paramètres de l’application, et faites défiler la page jusqu’à la section “RTK/NTRIP Server settings”. Entrez les informations suivantes :")]),e._v(" "),s("ul",[s("li",[e._v("Host : caster.centipede.fr")]),e._v(" "),s("li",[e._v("Stream (mount-point) : entrez le nom de la base RTK la plus proche. Deux possibilités s’offrent à vous pour sélectionner la bonne base :\n"),s("ul",[s("li",[e._v("Entrer manuellement le nom de la base RTK en fonctionnement la plus proche en se référant au site du "),s("a",{attrs:{href:"https://docs.centipede.fr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("projet Centipède"),s("OutboundLink")],1),e._v(" ;")]),e._v(" "),s("li",[e._v("Cliquer sur “List streams from above server” et sélectionner la première base de la liste, qui est celle la plus proche de votre position selon vos données de localisation de votre téléphone.")])])]),e._v(" "),s("li",[e._v("Port : 2101")]),e._v(" "),s("li",[e._v("User : centipede")]),e._v(" "),s("li",[e._v("Password : centipede")])]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(433),alt:"Impossible de visualiser le contenu"}}),e._v(" "),s("em",[s("strong",[s("center",[e._v(" Dans cet exemple, j'utilise la base NCY ")])],1)])]),e._v(" "),s("h2",{attrs:{id:"verifier-l-etat-de-la-connexion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verifier-l-etat-de-la-connexion"}},[e._v("#")]),e._v(" Vérifier l’état de la connexion")]),e._v(" "),s("p",[e._v("Une fois toutes les informations de la bases fournies, retournez sur l’écran d’accueil, section “RTK/NTRIP” et vérifiez qu’en face de la ligne “NTRIP Server/Login filled” soit indiqué “Yes”.")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(434),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("p",[e._v("S’il est inscrit “No”, alors vérifiez bien les informations que vous avez saisies pour votre base !")]),e._v(" "),s("h2",{attrs:{id:"localisation-centimetrique"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localisation-centimetrique"}},[e._v("#")]),e._v(" Localisation centimétrique")]),e._v(" "),s("p",[e._v("Une fois toutes ces étapes réalisées, connectez vous à votre rover en pressant sur le bouton bleu en bas à droite.")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(435),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("p",[e._v("Patientez quelques secondes le temps de l’initialisation, et lorsque des coordonnées apparaissent à l’écran, c’est que vous avez réussi !")]),e._v(" "),s("p",[s("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(436),alt:"Impossible de visualiser le contenu"}})]),e._v(" "),s("p",[e._v('La précision de votre localisation dépend alors de la levée des ambiguïtés, visible sur la ligne "Fix type" :')]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Single/DGNSS")]),e._v(" = impossible de résoudre la partie calculatoire de l'équation de déphasage et impossible de lever les ambiguités => "),s("strong",[e._v("précision faible")]),e._v(" ;")]),e._v(" "),s("li",[s("strong",[e._v("FRTK")]),e._v(" = impossible de lever les ambiguîtés mais la partie calculatoire de l'équation de déphasage est résolue => "),s("strong",[e._v("précision moyenne")]),e._v(" ;")]),e._v(" "),s("li",[s("strong",[e._v("RTK")]),e._v(" = calculs et ambiguités résolues => "),s("strong",[e._v("précision élevée")]),e._v(".")])]),e._v(" "),s("p",[e._v("Vous pouvez ensuite profiter de votre positionnement RTK dans Akt’n’Map !")])])}),[],!1,null,null,null);s.default=a.exports}}]);