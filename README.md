# 💡 Bloquinho de Ideias

> Um espaço digital para capturar, organizar e transformar ideias em projetos reais.

![Status](https://img.shields.io/badge/Status-Em%20Evolução-blue)
![Tecnologia](https://img.shields.io/badge/Tecnologia-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Projeto](https://img.shields.io/badge/Tipo-Projeto%20Pessoal-purple)

---

# 📌 Sobre o Projeto

O **Bloquinho de Ideias** é uma aplicação criada para armazenar pensamentos, conceitos e ideias de projetos de forma organizada e visual.

Muitas ideias surgem durante o dia, mas acabam sendo esquecidas por falta de um lugar simples para registrá-las. Este projeto funciona como um **caderno digital de criatividade**, permitindo guardar ideias de aplicativos, jogos, pesquisas, soluções, produtos e projetos futuros.

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

## 🗂️ Organização por Categorias

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

Cada ideia pode possuir um estágio de desenvolvimento:

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

Cada card representa uma ideia:

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

Características visuais:

* Design moderno
* Cards organizados
* Animações suaves
* Layout responsivo
* Interface intuitiva
* Boa experiência em dispositivos móveis

---

# 🔎 Pesquisa e Filtros

Para facilitar a organização:

## Busca

Permite pesquisar ideias pelo:

* Nome
* Categoria
* Descrição
* Tecnologia

---

## Filtros

Possibilidade de filtrar por:

* Todas as ideias
* Jogos
* Tecnologia
* IA
* Saúde
* Educação
* Negócios
* Outros

---

# ⭐ Sistema de Favoritos

Usuários podem destacar ideias importantes.

Ao favoritar uma ideia:

* Ela recebe destaque visual
* É salva no navegador
* Continua disponível após atualizar a página

---

# 💾 Armazenamento

As informações são armazenadas utilizando:

## LocalStorage

Permitindo:

* Salvar ideias criadas
* Manter favoritos
* Recuperar informações automaticamente

Sem necessidade inicial de banco de dados.

---

# 🛠️ Tecnologias Utilizadas

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
* Componentização visual
* Organização de dados
* UX/UI Design

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

# 🚀 Como Executar

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/bloquinho-de-ideias.git
```

Entre na pasta:

```bash
cd bloquinho-de-ideias
```

Abra o arquivo:

```
index.html
```

ou utilize uma extensão como:

```
Live Server
```

---

# 📌 Como Adicionar Novas Ideias Manualmente

No arquivo HTML existe uma área:

```html
<!-- ADICIONE NOVAS IDEIAS AQUI -->
```

Basta copiar o modelo:

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

## Inteligência Artificial

* [ ] IA para melhorar ideias
* [ ] IA para gerar planos de projeto
* [ ] IA para sugerir tecnologias
* [ ] IA para analisar viabilidade

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

# 🌱 Visão do Projeto

O **Bloquinho de Ideias** não é apenas um aplicativo de anotações.

Ele representa um espaço onde criatividade, tecnologia e organização se encontram para transformar pensamentos em projetos.

Toda grande criação começa com uma pequena ideia.

💡 **Anote. Organize. Desenvolva. Crie.**

---

# 👩‍💻 Autor

Criado por **[SouBeatrizKaroline]**

Projeto desenvolvido para estudo, criatividade e construção de portfólio.

---

# 📄 Licença

Este projeto está disponível para fins de estudo e desenvolvimento pessoal.

---
