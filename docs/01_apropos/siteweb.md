# La création du site web

La création de ce site web s'est déroulée en deux étapes :
- L'élaboration du contenu du site en local;
- La mise en ligne du site (uploading).

Pour ce faire, j'ai suivi le protocole suivant :

<!--<center><mermaid> 
flowchart TB
    S(["Script MarkDown (k-centipède)"]) -> |commit|A
    S -> |push|B
    subgraph A [ELABORATION DU CONTENU EN LOCAL]
        direction TB
        V([VuePress]) -> |config.js|H([Script HTML])
        subgraph A1 [ ]
            Y[[Yarn]]->|package.json|N[[Node.js]]
        end
        A1->V
    end
    subgraph B [UPLOADING]
        direction TB
        M(["GitHub Master (.md)"])->T(["Travis"])
        T->|travis.yml|B1
        T->|travis.yml|B2
        subgraph B1 [STAGE DOC]
            direction TB
            subgraph B12 [ ]
                Y2[[Yarn]]->|package.json|N2[[Node.js]]
            end
            V2([VuePress])->P(["GitHub Pages (.html)"])
            B12->|config.js|V2
        end 
        subgraph B2 [STAGE JOB]
            direction TB
            DH([DockerHub])->C([Container])
        end
    end  
</mermaid></center>-->

<center><mermaid> 
flowchart LR
    %% OUTILS %%
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
    %% ACTIONS %%
    S-->|commit|S
    A-->|push|B
    B---->|trigger|J
    J-->|deploy|D
    D2-->|deploy|E
</mermaid></center>

<center><mermaid>
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
</mermaid></center>