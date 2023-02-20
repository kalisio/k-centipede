# La création du site web

La création de ce site web a d'abord commencé par un travail de rédaction des scripts Markdown en local, en suivant le protocole ci-dessous :
<center><mermaid> 
flowchart TB
    subgraph ConEmu
    N[[NodeJs]] --> V([Vuepress])
    Y[[Yarn]] --> |exécute les commandes|V
    Y-->|package.json|N
    V --> |config.js|H([Script HTML])
    end
    S("Script Markdown (.md)") --> V  
</mermaid></center>


Une fois les scripts Markdown prêts, j'ai mis en ligne le site selon la démarche suivante :

<center><mermaid> 
flowchart TB
    S(["Script MarkDown (k-centipède)"]) --> |push|M(["GitHub Master (.md)"])
    M-->T(["Travis (travis.yml)"])
    T--> |package.json|V([VuePress])
    subgraph STAGE DOC
        subgraph Node.js + Yarn
        V-->|config.js|P(["GitHub Pages (.html)"])
        end
    end
    T-->DH([DockerHub])
    subgraph STAGE JOB
    DH-->C([container])
    end  
</mermaid></center>