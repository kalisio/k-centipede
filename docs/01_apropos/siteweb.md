---
sidebarDepth: 3
---
# A propos de ce site web
Ce site web statique regroupe l'ensemble de mes travaux effectués lors de mon stage chez [Kalisio](https://kalisio.com/). Il a été développé avec l'outil VuePress et repose sur l'ensemble des briques technologiques de l'entreprise (Travis, Docker, etc.).

La création de cette documentation s'est déroulée en deux étapes :
- L'élaboration du contenu du site en local;
- La mise en ligne du site (uploading).

Pour ce faire, j'ai suivi le protocole suivant :

```mermaid
flowchart LR
    %%%%% OUTILS %%%%%
    subgraph A [USER]
        S([Script MarkDown])
    end
    subgraph B [GITHUB MASTER]
        direction LR
        K[(k-centipede)]-.->D1([k-centipede/workspace])
    end
    subgraph C [TRAVIS]
        J([JOB])-.->D2([DOCS])
    end
    subgraph D [DOCKERHUB]
        IM[(Images)]
    end
    subgraph E [GITHUB PAGES]
        H[(HTML files)]
    end
    %%%%% ACTIONS %%%%%
    S-->|commit|S
    A-->|push|B
    B---->|trigger|J
    J-->|deploy|D
    D2-->|deploy|E
```

Ce second schéma représente le fonctionnement détaillé du logiciel *Travis* dans le cas du projet k-centipede porté par Kalisio :

```mermaid
flowchart LR
    subgraph A [TRAVIS]
        J([JOB])-.->DO([DOCS])
    end
    T([travis.yml])---->J
    %%%%% JOB %%%%%
    %% OUTILS
    subgraph B [ ]
        direction TB
        subgraph B1 [ ]
            P([Provision])
        end
        subgraph B2 [DOCKER]
            X([Build])
        end
        subgraph B3 [DOCKERHUB]
            Z([Deploy])
        end
    end
    %% ACTIONS
    J-->B1
    B1-->B2
    B2-->B3
    %%%%%% DOCS %%%%%
    %% OUTILS
    subgraph C [ ]
        direction TB    
        subgraph C1 [YARN]
            PR2([Provision])
        end
        subgraph C2 [VUEPRESS]
            BU2([Build])
        end
        subgraph C3 [GITHUB]
            DE2([Deploy])
        end
    end
    %% ACTIONS
    C1-->C2
    C2-->C3
    DO-->C1
```