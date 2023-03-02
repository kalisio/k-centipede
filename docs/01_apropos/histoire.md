---
sidebarDepth: 3
---
# GNSS, RTK  et Centipède : Un peu d'histoire...
## Définition
> “La Cinématique temps réel (Real Time Kinematic, en anglais ou RTK) est une technique de positionnement par satellite basée sur l'utilisation de mesures de la phase des ondes porteuses des signaux émis par les systèmes GPS, GLONASS ou Galileo. Une station de référence fournit des corrections en temps réel permettant d'atteindre une précision de l'ordre du centimètre” ([Wikipédia, 2023](https://fr.wikipedia.org/wiki/Cin%C3%A9matique_temps_r%C3%A9el)).

La Cinématique temps réel est donc une technologie de positionnement de précision, dont les potentielles utilisations se multiplient avec l’avènement de la robotique. Aujourd’hui, ses principaux domaines d’action sont :
- La construction
- L’agriculture de précision (gestion des agroéquipements connectés). Près de 60% des utilisateurs se servent du réseau Centipède RTK  à des fins agricoles.
- Les relevés de terrain (topographie, etc.)

A l’avenir, la précision centimétrique proposée par la technologie RTK sera certainement convoitée par d’autres domaines professionnels, notamment l’aéronautique et l’automobile.

## RTK et GNSS
La technologie RTK repose sur le GNSS (*Global Naviguation Satellite System*), qui regroupe l'ensemble des composants utiles au positionnement par satellites. 

Le réseau RTK français repose sur 4 systèmes de naviguation internationaux.

<center>

| Système de naviguation | Pays | Mise en service | 
| :---------------: |:---------------:|:---------------:|
| GPS (*Global Positioning System*) | <img src="../assets/USA.png" height="12" alt="USA"> | 1995 |
| GLONASS | <img src="../assets/Russie.jpg" height="15" alt="Russie"> | 1996, puis 2010 |
| Galileo |<img src="../assets/UE.png" height="15" alt="Europe"> | 2016 |
| Beidou | <img src="../assets/Chine.png" height="15" alt="Chine"> | 2020 |

</center>


## Les débuts de RTK 
La technologie RTK fait ses premiers pas sur des engins agricoles aux Etats-Unis dans les années 2000.

Ce n'est qu'en 2014 que le RTK fait son apparition en France, par l'intermédiraire d'entreprises privées comme Terria ou Orphéon.
Ils proposent à leurs clients leur service de traitement de données menant à la précision centimétrique. Il faut alors compter 500 à 1000€/an d’abonnement par appareil de réception, sans compter les frais d’installation. 

A ses débuts, la technologie RTK représente un investissement important.

## Le projet Centipède
> “Centipède RTK est un réseau collaboratif de bases GNSS ouvertes et disponibles pour toute personne se trouvant dans la zone de couverture. Le réseau est étendu par des instituts publics, des particuliers, des acteurs privés comme les agriculteurs ou d’autres partenaires publics.” ([INRAE, 2023](https://docs.centipede.fr/)).

Lancé en 2019 par Julien ANCELIN, chercheur à l'INRAE, l’objectif du projet Centipède RTK est de rendre accessible à tous la technologie RTK. L'INRAE et ses partenaires du projet ont alors développé :
- Des kits d’installation de bases RTK (400 à 500€);
- Une documentation pour comprendre et utiliser le réseau RTK sur ses appareils;
- Un serveur public de collecte et de transmission des données géographiques des bases RTK.

Tous ces outils sont **open-source**. Ils sont la clé du succès du projet Centipède RTK. 
