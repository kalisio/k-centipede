# La création du site web

<!--
<center><mermaid> 
flowchart TB
    S("Script Markdown (.md)")->V  
    subgraph ConEmu
        N[[NodeJs]] -> V([Vuepress])
        Y[[Yarn]] -> |exécute les commandes|V
        Y->|package.json|N
        V -> |config.js|H([Script HTML])
    end
</mermaid></center>


Une fois les scripts Markdown prêts, j'ai mis en ligne le site selon la démarche suivante :

<center><mermaid> 
flowchart TB
    S(["Script MarkDown (k-centipède)"]) -> |push|M(["GitHub Master (.md)"])
    M->T(["Travis"])
    T->|travis.yml|A1
    T->|travis.yml|B1
    subgraph A1 [STAGE DOC]
        direction TB
        subgraph A2 [ ]
            Y[[Yarn]]->|package.json|N[[NodeJs]]
        end
    V->P(["GitHub Pages (.html)"])
    A2->|config.js|V([Vuepress]) 
    end
    subgraph B1 [STAGE JOB]
        direction TB
        DH([DockerHub])->C([container])
    end  
</mermaid></center>-->

La création de ce site web s'est déroulée en deux étapes :
- L'élaboration du contenu du site en local;
- La mise en ligne du site (uploading).

Pour ce faire, j'ai suivi le protocole suivant :

<center><mermaid> 
flowchart TB
    S(["Script MarkDown (k-centipède)"]) --> |commit|A
    S --> |push|B
    subgraph A [ELABORATION DU CONTENU EN LOCAL]
        direction TB
        V([VuePress]) --> |config.js|H([Script HTML])
        subgraph A1 [ ]
            Y[[Yarn]]-->|package.json|N[[Node.js]]
        end
        A1-->V
    end
    subgraph B [UPLOADING]
        direction TB
        M(["GitHub Master (.md)"])-->T(["Travis"])
        T-->|travis.yml|B1
        T-->|travis.yml|B2
        subgraph B1 [STAGE DOC]
            direction TB
            subgraph B12 [ ]
                Y2[[Yarn]]-->|package.json|N2[[Node.js]]
            end
            V2([VuePress])-->P(["GitHub Pages (.html)"])
            B12-->|config.js|V2
        end 
        subgraph B2 [STAGE JOB]
            direction TB
            DH([DockerHub])-->C([Container])
        end
    end  
</mermaid></center>