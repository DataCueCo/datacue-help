---
position: 1
filter: platform
summary: Personaliza tu tienda Shopify instalando la app DataCue.
blog_index: false
---
# Shopify

¡Bienvenido a nuestra guía sobre cómo instalar y usar DataCue en tu tienda Shopify!

## Paso 1: Instala DataCue App:

[Shopify App Store](https://apps.shopify.com/datacue)

## Paso 2: Añadimos banner estático a tu pagina web:  

**Configura tus banners**

1. Diríjase a tu pagina panel de control de Shopify > `Tienda Online` > `Personalizar`. A continuación haz click en “Añadir sección” y elijas `DataCue Banners`. 

![](/media/1.png)

2. Añadas la **imagen** que quieras mostrar para tu banner estático. Este se mostrará a todos los usuarios, independientemente de su comportamiento. Recuerdes de añadir una imagen con aspecto de 5:3 (p.ej 1200 x 720 px). Puedes encontrar más información acerca del tamaño de los banners [aquí.](https://help.datacue.co/es/guide/banners.html) 

![](/media/2.png)

3. Puedes arrastrar la sección de banners que recién agregaste a la **posición** deseada. Te recomendamos dejarla justo abajo de tu barra de navegación. Podrás ocultar secciones que ya no usarás, cómo sliders antiguos.  

![](/media/3.gif)

## **Paso 3: Añadimos banner dinámico a su pagina web:**

1. Configuras tus banners: diríjase a tu panel de control de DataCue > `Banners`.

2. Añadas la imagen que quieras mostrar para tu banner dinámico. Este se mostrará a todos los usuarios dependiendo de su comportamiento. Para este tipo de banner recomendamos las siguientes relaciones de aspecto 

- 5:3 (p.ej 1200 x 720 px.) o
- 2:3 (p.ej 480 x 720 px)

Aprende un poco más sobre banners estáticos [aquí. ](https://help.datacue.co/es/guide/banners.html)

![](/media/4.png)

## Paso 4: Añadimos recomendaciones de productos:

1. Configuras las recomendaciones: diríjase a tu panel de control de Shopify > `Tienda Online` > `Personalizar`. A continuación haz click en “Añadir sección”, y elijas `DataCue Products`. Puedes arrastrar la sección de banners que recién agregaste, a la posición deseada. 

2. Configuras productos recomendados a otras paginas en tu pagina web: diríjase a tu panel de control de Shopify > `Tienda Online` > `Acción` > `Editar Código`. Añade el siguiente código para mostrar las recomendaciones de productos: 

```html
<div data-dc-products></div>
```

3. Posiciones avanzadas:

**Productos relacionados** 

```html
<div data-dc-products="related"></div>
```

**Productos similares**

```html
<div data-dc-products="similar"></div>
```

**Productos recientemente vistos**

```html
<div data-dc-products="recent"></div>
```

**Productos más top: (solo en la pagina de colección)**

```html
<div data-dc-products="top"></div>
```

**Categorías dinámicas (solo para pagina principal)**

```html
<div data-dc-products="categories"></div>
```

## Paso 5: Elige el **estilo** que desees:

Antes de seleccionar un diseño definitivo puedes poner poner DataCue en su modo de prueba, para que así puedas jugar con el diseño, hasta que sientas seleccionaste el correcto y estes listo/a para salir en vivo.Para personalizar el diseño tienes dos opciones: 

1. Una amigable herramienta para ajustar el **diseño**: Puedes ajustar al diseño de su tienda fácilmente accediendo a su panel de control DataCue en la sección Configuración > Productos.  \

2. **CSS para cambios avanzados**: si lo que quieres es realizar cambios avanzados, puedes hacer los ajustes que necesites con CSS.

![](/media/6.png)

## **¿Dudas?**   

 Si tienes preguntas o comentarios respecto a este editor de diseño, ¡no dudes en hacérnoslo saber!