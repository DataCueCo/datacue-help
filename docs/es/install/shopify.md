---
position: 1
filter: platform
summary: Personaliza tu tienda Shopify instalando la app DataCue.
blog_index: false
---
# Shopify

Bienvenido a nuestra guía sobre cómo instalar y utilizar DataCue en tu tienda de Shopify.

## Antes de empezar

Asegúrate de haber instalado la aplicación DataCue desde la
[Shopify Appstore](https://apps.shopify.com/datacue).

Para verificarlo, inicia sesión en el panel de administración de tu tienda de Shopify y haz clic en "Apps", deberías ver la aplicación DataCue en la lista.

## Banners dinámicos personalizados

Para añadir banners personalizados a tu página de Shopify, primero tenemos que editar tu tema.

### Añadir el componente de banners a tu tema

Ingresa a tu panel de administrador de Shopify:  `Online Store` > `Customize`. Luego haz clic en `Add section` y selecciona `DataCue Banners`.

![Install banners and products](/media/step2.png)

### Añadir un banner estático

Es muy probable que tu tema existente tenga una imagen de banner grande y prominente en la parte superior para que todos tus clientes la vean. Esta imagen podría ser una promoción que estás haciendo o simplemente para prensentar tu marca y por qué la gente debería comprar en tu tienda. Estos son mensajes que quieres que todos vean.

Tienes dos opciones:

1. Conservar tu imagen de banner para este propósito y añadir la sección de banners de DataCue debajo de ella.

2. Reemplazar tu imagen de banner con los banners de DataCue.

Si eliges la opción #1: simplemente pulsa la flecha `<` para volver atrás. Los banners de DataCue serán 100% dinámicos.

Si eliges la opción #2: utiliza el botón `Select image` para cargar tu imagen de banner estática. Asegúrate de que la imagen tiene una relación de aspecto de 5:3 (el tamaño recomendado es de al menos 1200 x 720 px).

Obtén más información sobre los banners estáticos [aquí](https://help.datacue.co/guide/banners.html).

![](/media/2-1.png)

### Ubicación de la sección de banners

Arrastra la sección de banners hasta donde quieras. Recomendamos moverla justo debajo de su barra de navegación/logotipo.

Si agregaste un banner estático en el paso anterior, puedes ocultar cualquier banner existente como "Presentación de diapositivas".

![](/media/3.gif)

### Añadir banners dinámicos

Ahora, es el momento de subir los banners dinámicos "reales".

1. Ve a tu panel de control de DataCue. Haz clic en `Banners` > `Add Banner`.

2. Prepara las imágenes de los banners para todas tus colecciones principales y súbelas desde tu panel de control de DataCue. DataCue seleccionará automáticamente las mejores imágenes de banner para mostrar a tus clientes en función de sus intereses.

Obtén más información sobre los banners [aquí](https://help.datacue.co/guide/banners.html).

## Recomendaciones personalizadas de productos

### Añadir recomendaciones de productos a tu tema

Ve a tu panel de administración de Shopify.

1. Haz clic en `Online Store` > `Customize`. 
2. Haz clic en `Add section`, y selecciona `DataCue Products`.
3. Arrastra la sección de productos a la ubicación que desees en tu página de inicio.

Ahora tu página de inicio está configurada correctamente.

Para todas las demás páginas, tienes dos opciones:

#### Método CSS (recomendado)

DataCue intentará detectar automáticamente tu tema y escogerá selectores CSS para colocar nuestros widgets automáticamente en tus páginas principales como producto, categoría, búsqueda, error (404) y la página del carrito.

Desde tu panel de control de DataCue, haz clic en `Settings` > `Developer` para ver la configuración CSS actual. Puedes trabajar con tu desarrollador para cambiar estos selectores CSS para cambiar la posición de tu widget.

¡Si no estás seguro de cómo cambiarlos, escríbenos a support -at- datacue.co y te ayudaremos!

#### Edición de código (avanzado)

También puedes añadir código html a la página y DataCue utilizará este código para saber dónde insertar las recomendaciones de productos.

Puedes hacerlo fácilmente con el editor de código de Shopify. Para acceder al editor, ve a tu panel de administrador de Shopify y haz clic en `Online store` > `Action` > `Edit code`

Pega el siguiente código en la posición en la que quieras ver las recomendaciones.

```html
<div data-dc-products></div>
```

Normalmente, el orden en que aparecen las recomendaciones de productos es fijo. Por ejemplo, la página de productos muestra primero los productos relacionados, seguidos de los productos similares y luego los vistos recientemente.

Si quieres cambiar el orden, puedes usar la edición de código y decirle a DataCue exactamente dónde quieres colocar cada widget.

Por ejemplo, digamos que tienes un widget de opciones en tu página de productos. Quieres que el diseño sea algo como esto:

- Productos similares
- Widget de opiniones
- Productos relacionados
- Productos vistos recientemente

Puedes hacer algo como esto:

```html
<div data-dc-products="similar"></div>
-- Reviews widget code --
<div data-dc-products="related"></div>
<div data-dc-products="recent"></div>
```
Aquí está la lista completa de tipos de widgets de productos.

**Productos relacionados**

```html
<div data-dc-products="related"></div>
```

**Productos similares** (product page only)

```html
<div data-dc-products="similar"></div>
```

**Productos vistos recientemente**

```html
<div data-dc-products="recent"></div>
```

**Productos principales (sólo páginas de colección)**

```html
<div data-dc-products="top"></div>
```

**Categorías dinámicas (sólo en la página de incio)**

```html
<div data-dc-products="categories"></div>
```

### Personalizar el aspecto de la sección de productos

1. **Editor de diseño fácil de usar**: Puedes personalizar la mayor parte del aspecto de las secciones de producto tú mismo con nuestro editor de diseño súper sencillo. Solo tienes que jugar con los ajustes hasta que la vista previa te parezca bien y guardar los cambios.

2. **Diseños avanzados con CSS**: Si quieres hacer cambios avanzados, no dudes en utilizar directamente el CSS. Hemos hecho qe todos los elementros dentro del widget de la sección de productos sean accesibles con nombres de clase únicos.

![Product designer](/media/6.png)

**¿Necesitas ayuda?**

Sólo tienes que ponerte en contacto con nosotros a través del correo electrónico de soporte de tu aplicación de Shopify y te ayudaremos a empezar.

## Desinstalar la aplicación

Al desinstalar la aplicación, tu suscripción a DataCue se cancela automáticamente. También se eliminan todos los datos de tu tienda como productos, colecciones, pedidos e información de los clientes.

Para eliminar completamente DataCue de tu tema, sigue los siguientes pasos:

1. Ve a tu editor de temas de Shopify> Tienda Online > Acciones > Editar código.
2. Haz clic en `theme.liquid`
3. Encuentra el código de abajo, elimínalo y pulsa `Save`.

```liquid
{% include 'datacue' %}
{{ 'datacue-custom.css' | asset_url | stylesheet_tag }}
```

:::tip Consejo
Si borraste accidentalmente algo más que el código de DataCue, no te preocupes. Haz clic en la opción `older versions` debajo del archivo `theme.liquid` para restaurar la versión anterior a tus cambios.
:::
