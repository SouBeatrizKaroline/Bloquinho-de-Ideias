# 💡 Bloquinho de Ideias

> Um espaço digital para capturar, organizar e transformar ideias em projetos reais.

![Status](https://img.shields.io/badge/Status-Em%20Evolução-blue)
![Tecnologia](https://img.shields.io/badge/Tecnologia-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Projeto](https://img.shields.io/badge/Tipo-Projeto%20Pessoal-purple)
![Frontend](https://img.shields.io/badge/Frontend-Vanilla%20JS-yellow)

---

# 🚀 Projeto Criado com o Skip

Este projeto foi criado de ponta a ponta utilizando o [Skip](https://goskip.dev), uma ferramenta de desenvolvimento assistido para criação de aplicações.

O objetivo foi transformar uma ideia inicial em uma aplicação funcional, mantendo uma estrutura simples, leve e totalmente executável no navegador.

---

# 📌 Sobre o Projeto

O **Bloquinho de Ideias** é uma aplicação web criada para armazenar pensamentos, conceitos e ideias de projetos de forma organizada e visual.

Muitas ideias surgem durante o dia, mas acabam sendo esquecidas por falta de um lugar simples para registrá-las.

Este projeto funciona como um **caderno digital de criatividade**, permitindo guardar ideias de:

* Aplicativos
* Jogos
* Pesquisas
* Produtos
* Soluções tecnológicas
* Projetos pessoais
* Negócios

A proposta é transformar uma simples anotação em uma possibilidade de criação.

---

# 🎯 Objetivo

Criar uma ferramenta simples, bonita e intuitiva para:

* 💡 Registrar ideias rapidamente
* 🗂️ Organizar pensamentos por categorias
* 🔎 Encontrar ideias facilmente
* ⭐ Marcar ideias favoritas
* 🚀 Acompanhar evolução de projetos
* 🧠 Criar um histórico de criatividade

---

# ✨ Funcionalidades

## 📝 Cadastro de Ideias

Cada ideia possui:

* Nome da ideia
* Categoria
* Descrição
* Objetivo
* Tecnologias ou recursos necessários
* Status atual
* Data de criação

---

# 🗂️ Organização por Categorias

As ideias podem ser classificadas em diferentes áreas:

| Categoria               | Emoji |
| ----------------------- | ----- |
| Jogos                   | 🎮    |
| Tecnologia              | 💻    |
| Inteligência Artificial | 🤖    |
| Saúde                   | 🏥    |
| Educação                | 📚    |
| Sustentabilidade        | 🌱    |
| Design                  | 🎨    |
| Negócios                | 🚀    |
| Pesquisa                | 🔬    |
| Outros                  | 💭    |

---

# 📊 Sistema de Status

Cada ideia possui um estágio de desenvolvimento:

| Status             | Significado                          |
| ------------------ | ------------------------------------ |
| 🟣 Ideia Inicial   | Apenas uma inspiração ou conceito    |
| 🟡 Pesquisa        | Momento de estudar e validar a ideia |
| 🔵 Planejamento    | Estruturação do projeto              |
| 🟠 Desenvolvimento | Projeto sendo criado                 |
| 🟢 Finalizado      | Projeto concluído                    |
| ⚫ Arquivado        | Ideia guardada para outro momento    |

---

# 🧩 Estrutura de uma Ideia

Cada ideia é representada através de um card:

```html
<div class="idea-card">

    <span class="category">
        🎮 Jogos
    </span>

    <h3>
        Nome da Ideia
    </h3>

    <p>
        Descrição resumida da ideia.
    </p>

    <div>
        <strong>Objetivo:</strong>
        Criar uma solução inovadora.
    </div>

    <div>
        <strong>Tecnologias:</strong>
        HTML, CSS, JavaScript.
    </div>

    <div>
        <strong>Status:</strong>
        Ideia Inicial.
    </div>

</div>
```

---

# 🖥️ Interface

A aplicação possui uma interface inspirada em:

* 📒 Cadernos digitais
* 🧱 Cards organizacionais
* 📌 Murais de criatividade
* 🧠 Ferramentas de produtividade

Características:

* Design moderno
* Cards organizados
* Animações suaves
* Layout responsivo
* Interface intuitiva
* Boa experiência mobile

---

# 🔎 Pesquisa e Filtros

## Busca

Permite encontrar ideias através de:

* Nome
* Categoria
* Descrição
* Tecnologias

---

## Filtros

Possui filtros por categoria:

* Todas as ideias
* 🎮 Jogos
* 💻 Tecnologia
* 🤖 IA
* 🏥 Saúde
* 📚 Educação
* 🚀 Negócios
* 🎨 Design

---

# ⭐ Sistema de Favoritos

Usuários podem destacar ideias importantes.

Ao favoritar:

* O card recebe destaque visual
* A informação é salva no navegador
* Continua disponível após atualizar a página

---

# 💾 Armazenamento

As informações utilizam:

## LocalStorage

Permitindo:

* Salvar ideias criadas
* Manter favoritos
* Recuperar informações automaticamente

Sem necessidade de:

* Backend
* Banco de dados
* Login

---

# 🛠️ Stack Tecnológica

## Front-end

* HTML5
* CSS3
* JavaScript Vanilla

---

## Conceitos aplicados

* Manipulação do DOM
* Eventos JavaScript
* LocalStorage
* Responsividade
* Organização de componentes visuais
* Filtragem de dados
* UX/UI Design

---

# 📋 Pré-requisitos

Para executar o projeto:

* Navegador atualizado
* Editor de código (opcional)
* Extensão Live Server (opcional)

Não é necessário:

* Node.js
* Banco de dados
* Servidor backend

---

# ▶️ Como Executar

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/bloquinho-de-ideias.git
```

Entre na pasta:

```bash
cd bloquinho-de-ideias
```

Abra:

```
index.html
```

Ou utilize:

```
Live Server
```

---

# 📂 Estrutura do Projeto

```
bloquinho-de-ideias/

│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

---

# 📌 Como Adicionar Novas Ideias Manualmente

No arquivo HTML existe uma área:

```html
<!-- ADICIONE NOVAS IDEIAS AQUI -->
```

Adicione novos cards utilizando o modelo:

```html
<div class="idea-card">

    <span>
        💻 Tecnologia
    </span>

    <h3>
        Nova Ideia
    </h3>

    <p>
        Descrição da ideia.
    </p>

    <p>
        <strong>Objetivo:</strong>
        Criar uma solução.
    </p>

    <p>
        <strong>Tecnologias:</strong>
        JavaScript.
    </p>

    <p>
        <strong>Status:</strong>
        Ideia Inicial.
    </p>

</div>
```

---

# 🔮 Futuras Melhorias

## Organização

* [ ] Criar etiquetas personalizadas
* [ ] Criar pastas de ideias
* [ ] Ordenar por data
* [ ] Ordenar por prioridade

---

## Produtividade

* [ ] Sistema de metas
* [ ] Calendário de desenvolvimento
* [ ] Checklist de execução
* [ ] Kanban de projetos

---

## Exportação

* [ ] Exportar ideias em PDF
* [ ] Exportar Markdown
* [ ] Compartilhar ideias
* [ ] Criar backup

---

## Inteligência Artificial (futuro)

Possíveis melhorias futuras:

* [ ] IA para melhorar ideias
* [ ] IA para sugerir tecnologias
* [ ] IA para criar planos de projeto
* [ ] IA para analisar viabilidade

*(Não faz parte da versão atual.)*

---

# 🌱 Visão do Projeto

O **Bloquinho de Ideias** não é apenas um aplicativo de anotações.

Ele representa um espaço onde criatividade, tecnologia e organização se encontram para transformar pensamentos em projetos.

Toda grande criação começa com uma pequena ideia.

💡 **Anote. Organize. Desenvolva. Crie.**

---

# 👩‍💻 Autor

Criado por:

**[SouBeatrizKaroline]**

Projeto desenvolvido para estudo, criatividade e construção de portfólio.

---

# 📄 Licença

Este projeto está disponível para fins de estudo e desenvolvimento pessoal.

---
