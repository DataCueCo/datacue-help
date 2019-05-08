---
position: 3
title: Carrosséis de produtos
summary: Configure as recomendações dos seus produtos
---

# Carrosséis de produtos

O DataCue oferece três tipos de recomendações de produtos:

- Produtos relacionados
- Produtos Similares
- Visto recentemente

Você pode configurá-los no seu Dashboard.

## Guia rápido

### Home page

1. Vá para o editor de temas (`Home / Customize theme / Customize theme / Customize`).

   ![Theme settings](./images/customize_theme.png)

2. Clique em "Add section", então encontre a categoria "datacue" e selecione "DataCue Products".

   ![Adding a new section](./images/add_section_products.png)

3. Arraste a seção recém-adicionada para onde você quer que os carrosséis apareçam.

   ![Adding the carousel to the home page](./images/homepage_carousel.png)

4. Salve suas alterações e pronto!

### Página do produto

A maioria dos temas não permite adicionar seções personalizadas às páginas de produtos, mas há algumas maneiras de fazer isso manualmente.

#### Método 1

Se você estiver familiarizado com a edição de temas, poderá encontrar o template da página do produto em
(`templates/product.liquid`) no editor de código:

![Finding product.liquid](./images/find_template.png)

Em seguida, cole uma tag especial perto do final do seu template, onde você deseja que o DataCue insira os carrosséis:

```html
<div class="datacue-recommendations-anchor"></div>
```

#### Método 2

Como alternativa, você pode encontrar a classe CSS, fornecida pelo seu tema, para a seção de descrição do produto (por exemplo, o template Turbo usa `.main.content`) e inseri-la por meio do dashboard.
