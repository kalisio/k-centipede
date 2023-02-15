# Fonctionnement de *Bluetooth GNSS*
![Impossible de visualiser mon magnifique schéma](../assets/BTG_01.png)
***<center> Les 5 étapes pour faire fonctionner Bluetooth GNSS sur votre smartphone Android </center>***

## Vérifier les prérequis
Pour fonctionner et remplir ses missions, Bluetooth GNSS a besoin de quelques prérequis. Vous devez donc aller fouiller dans les paramètres de votre appareil pour :
- Activer le Bluetooth et choisir un appareil
- Activer la localisation de haute précision (paramètres localisation)
- Sélectionner Bluetooth GNSS comme application de localisation fictive (paramètres développeur)

<img src="../assets/BTG_02.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />

Une fois tous ces paramètres vérifiés, vous devez préparer la connexion au rover.

## Sélectionner le rover
Pour préparer la liaison avec le rover, vous devez le sélectionner en amont de la connexion. Rendez-vous dans les paramètres de l’applications en cliquand sur l’engrenage blanc en haut à gauche de l’écran d’acceuil.

<img src="../assets/BTG_03.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />

Une fois la page des paramètres ouverte, cliquez sur “Select…” dans la catégorie “Selected Target Bluetooth device”  et sélectionnez le rover.

<img src="../assets/BTG_04.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />

**Important** : pensez à appairer votre smartphone et votre rover avant la manipulation.

Si vous avez bien réalisé la manipulation, le nom de votre rover est visible sur la page des paramètres. S’il ne l’est pas, recommencez la manœuvre !

<img src="../assets/BTG_05.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />

## Sélectionner une base et s’y connecter
Maintenant que la connexion avec le rover est amorcée, il faut sélectionner la base qui lui enverra les informations nécessaires au positionnement centimétrique.

Rendez-vous dans les paramètres de l’application, et faites défiler la page jusqu’à la section “RTK/NTRIP Server settings”. Entrez les informations suivantes : 
- Host : caster.centipede.fr
- Stream (mount-point) : entrez le nom de la base RTK la plus proche. Deux possibilités s’offrent à vous pour sélectionner la bonne base :
    - Entrer manuellement le nom de la base RTK en fonctionnement la plus proche en se référant au site du [projet Centipède](https://docs.centipede.fr/) ;
    - Cliquer sur “List streams from above server” et sélectionner la première base de la liste, qui est celle la plus proche de votre position selon vos données de localisation de votre téléphone.
- Port : 2101
- User : centipede
- Password : centipede

<img src="../assets/BTG_06.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />
***<center> Dans cet exemple, j'utilise la base NCY </center>***

## Vérifier l’état de la connexion
Une fois toutes les informations de la bases fournies, retournez sur l’écran d’accueil, section “RTK/NTRIP” et vérifiez qu’en face de la ligne “NTRIP Server/Login filled” soit indiqué “Yes”.

<img src="../assets/BTG_07.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />

S’il est inscrit “No”, alors vérifiez bien les informations que vous avez saisies pour votre base !

## Localisation centimétrique
Une fois toutes ces étapes réalisées, connectez vous à votre rover en pressant sur le bouton bleu en bas à droite.

<img src="../assets/BTG_08.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />

Patientez quelques secondes le temps de l’initialisation, et lorsque des coordonnées apparaissent à l’écran, c’est que vous avez réussi !

<img src="../assets/BTG_09.png" 
        alt="Impossible de visualiser le contenu" 
        style="display: block; margin: 0 auto" />


La précision de votre localisation dépend alors de la levée des ambiguïtés, visible sur la ligne "Fix type" :
- **Single/DGNSS** = impossible de résoudre la partie calculatoire de l'équation de déphasage et impossible de lever les ambiguités => **précision faible** ;
- **FRTK** = impossible de lever les ambiguîtés mais la partie calculatoire de l'équation de déphasage est résolue => **précision moyenne** ;
- **RTK** = calculs et ambiguités résolues => **précision élevée**.

Vous pouvez ensuite profiter de votre positionnement RTK dans Akt’n’Map !