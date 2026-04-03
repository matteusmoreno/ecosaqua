# 🌿 EcoSaqua

> Um portal digital focado na educação e conscientização ambiental para a preservação dos ecossistemas de Saquarema - RJ.

Projeto desenvolvido como **Trabalho de Extensão Universitária (Estácio)**, unindo tecnologia e sustentabilidade para alertar sobre os impactos ambientais na Capital Nacional do Surfe, protegendo a lagoa, a restinga e as praias locais.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com foco em performance e design moderno (Dark Mode & Glassmorphism):

* **React.js** (Create React App puro, sem Vite ou TypeScript)
* **Framer Motion** (Animações fluidas de entrada e baseadas no scroll)
* **Lucide React** (Iconografia vetorial otimizada)
* **CSS3 Nativo** (Design system próprio com variáveis globais e efeitos glow)

## 📂 Estrutura do Projeto

A arquitetura foi projetada de forma modular, separando a lógica visual em componentes independentes para facilitar a escalabilidade e a manutenção do código.

```text
ecosaqua/
├── public/
│   ├── index.html        # Arquivo HTML principal configurado (SEO e Theme)
│   └── favicon.ico       # Ícone do navegador
├── src/
│   ├── components/       # Componentes visuais isolados
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Desafios.js
│   │   ├── Solucoes.js
│   │   └── Footer.js
│   ├── styles/
│   │   └── global.css    # Design System global
│   ├── App.js            # Orquestrador de componentes
│   └── index.js          # Ponto de entrada do React
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto