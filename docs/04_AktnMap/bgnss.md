# Akt’n’Map et *Bluetooth GNSS*
Utiliser directement le positionnement RTK sur l’application *Akt’n’Map* est impossible. Il faut donc trouver une application intermédiaire en capacité de répondre aux verrous technologiques suivants :

- Interpréter les signaux transmis par le rover;
- Contourner la localisation internet de l’appareil client pour lui imposer le positionnement centimétrique transmis par le rover.

L’application open-source *Bluetooth GNSS* en est parfaitement capable. Elle est disponible pour tous les appareils Android. Malheureusment, il n’existe pas d’application de ce type pour les appareils IOS, pour qui la localisation RTK n’est donc pas accessible.

*Bluetooth GNSS*, par la fonctionnalité “localisation fictive” (“mock-location”), peut contourner la localisation interne à l’appareil. Pour activer cette option, il faudra fouiller dans les options développeur de l’appareil.

Enfin, *Bluetooth GNSS* est aussi un client NTRIP, capable de se connecter au caster Centipède et de transmettre au rover par bluetooth les informations d’une base.