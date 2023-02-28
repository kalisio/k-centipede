---
sidebarDepth: 3
---

# Assembler son Rover
## Matériel
La liste des composants à acheter pour assembler son rover est disponible sur le [site internet du projet Centipède](https://docs.centipede.fr/docs/make_rover/rover_v1).

## Configuration système
Pour fonctionner, il faut configurer les différents modules du Rover. Tout est expliqué [ici](https://docs.centipede.fr/docs/make_rover/configuration.html). J'ai tout de même quelques conseils qui vous feront gagner du temps lors de l'installation.

### Configuration module F9P
La configuration du module F9P avec le logiciel *u-center* est simple et efficace. Je n'ai rien à ajouter.

### Configuration module bluetooth HC05 avec un FTDI
La configuration du module bluetoth HC05 à l'aide d'un FTDI est moins bien documentée. En effet, la plupart des manoeuvres décrites sur la documentation Centipede ne fonctionnent pas dans ce cas. Voici les corrections à appliquer lors de l'utilisation du logiciel *Arduino IDE* :

- Sélectionner l’*Arduino mini* dans les paramètres du port ;

- Ne pas procéder au téléversement des données en appuyant sur la flèche en haut à gauche, car cela ne fonctionne pas ;

- Dans le *Serial monitoring*, modifier la vitesse de transferts à 38400 bauds et non 9600 bauds comme ondiué sur la documentation.


## Assemblage
Pour assembler votre rover, [suivez ces instructions](https://docs.centipede.fr/docs/make_rover/rover_v1).

A noter que les branchements entre le F9P et le module HC05 ne sont pas faits au hasard. Le module hc05 doit être relié au port ***VART1*** de la puce F9P en respectant les branchements suivants :

<center>

| Branchement côté F9P | Branchement côté HC05 | 
| :---------------: |:---------------:|
| RX | TX |
| TX | RX |
| 5V | VCC |
| GND | GND |

</center>

::: warning 
Les 2 cables inutilisés ne doivent pas être branchés.
:::