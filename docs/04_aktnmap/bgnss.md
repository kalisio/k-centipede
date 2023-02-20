# Akt’n’Map et *Bluetooth GNSS*
Utiliser directement le positionnement RTK sur l’application *Akt’n’Map* est impossible. Il faut donc faire appel à une application intermédiaire capable de répondre aux verrous technologiques suivants :

- Interpréter les signaux transmis par le rover;
- Contourner la localisation interne de l’appareil client pour lui imposer le positionnement centimétrique transmis par le rover.

L’application open-source *Bluetooth GNSS* en est parfaitement capable. Elle est disponible sur tous les appareils Android. Malheureusement, il n’existe pas d’application de ce type pour les appareils IOS, pour qui la localisation RTK n’est donc pas accessible.

::: tip Remarque
*Bluetooth GNSS* est une solution **open-source**. Le code est consultable sur [GitHub](https://github.com/ykasidit/bluetooth_gnss).
:::

*Bluetooth GNSS*, par la fonctionnalité “localisation fictive” (“mock-location”), peut contourner la localisation interne à l’appareil. Pour activer cette option, il faudra fouiller dans les options développeur de l’appareil.

*Bluetooth GNSS* est aussi un client NTRIP, capable de se connecter au caster Centipède et de transmettre au rover les informations d’une base par bluetooth.
