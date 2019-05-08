---
position: 2
title: Notificações
summary: Configure as notificações do site
---

# Notificações

Os pop-ups acabam gerando uma má experiência do usuário porque são projetados para interromper e geralmente não são relevantes. Uma boa alternativa, é gerar notificações aos usuários para que possam clicar nelas se estiverem interessados. Melhor ainda, essas notificações devem sempre ser relevantes para os usuários, satisfazendo-os em vez de incomoda-los.

O DataCue pode mostrar notificações personalizadas para um usuário se um produto que ele examinou recentemente estiver:

- Em estoque baixo
- De volta ao estoque
- Com desconto

## Guia rápido

1. Faça o login no seu dashboard e clique em Notificações.
2. Personalize as configurações como quiser (veja o próximo capítulo para maiores detalhes) ou deixe na configuração padrão - e é só isso!

## Costumização

Você pode personalizar três configurações no seu painel de notificações:

1. **Posição do sino de notificação**: você pode escolher entre o canto superior esquerdo, superior direito, inferior esquerdo ou inferior direito. (Veja o [próximo tópico](#advanced-positioning) para um método mais avançado)

2. **Cor do painel**: escolha uma cor para o painel combinar com as cores do seu site. Se você é um desenvolvedor, fique à vontade para substituir o CSS que usamos para fazer alterações de design mais avançadas.

3. **Idioma**: selecione o idioma entre inglês, espanhol ou português para corresponder ao seu site. Se você tiver uma solicitação para outro idioma, avise-nos!

## Posicionamento avançado

A maneira padrão e mais fácil de começar é ter um sino de notificação flutuante.

Se você deseja integrar o ícone de notificações à sua barra de navegação, basta colocar o seguinte fragmento de HTML no arquivo correspondente a home page do seu tema. O ícone de sino flutuante será desativado automaticamente se detectarmos o snippet de HTML abaixo na sua página da web.

``` html
<a class="datacue-notification" datacue-notification-bell>
    <span class="datacue-show-notifications"></span>
    <span class="datacue-show-notifications-count"></span>
</a>
```

::: dica
Você personaliza os nomes das classes conforme desejar, caso deseje fazer outras personalizações de design.
:::
