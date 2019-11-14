---
position: 5
filter: platform
summary: Personaliza tu tienda VTEX instalando el módulo DataCue.
---

# VTEX <Badge text="beta" type="success"/>

¡Bienvenido a nuestra guía para instalar y usar DataCue en tu tienda VTEX! 

**¿Confundido?**

Simplemente [contáctanos](https://datacue.co/contact) ante cualquier duda o comentario y te ayudaremos a comenzar.

## Instalación

### Cosas que debes saber antes de comenzar

Hay algunas cosas que debes saber antes de comenzar el proceso de instalación. 

- Al instalar DataCue para VTEX, DataCue sincronizará tus productos, nombre de tu usuario y correo, y tus pedidos. Esto es lo que ocurrirá cuando realices el Paso 1 de nuestras instrucciones. Dependiendo del tamaño de tu tienda, el proceso de sincronización tomará entre unos minutos y unas pocas horas.

- DataCue para VTEX instalará nuestra biblioteca Javascript en tu página de inicio, de producto, categoría y de resultados de búsqueda. La biblioteca Javascript personalizará el contenido de tu web para cada usuario según su comportamiento. Esto es lo que ocurrirá cuando realices el Paso 2 de nuestras instrucciones.

- Una vez que hayas completado los pasos de nuestra instalación, podrás acceder a tu Panel de Control DataCue. Este te permitirá subir tus banners, configurar recomendaciones y medir desempeño. Para conocer más sobre nuestras funcionalidades, visita nuestra [Guía de Usuario](https://help.datacue.co/es/guide/)

Dependiendo de las leyes de privacidad de tu país, puedes necesitar permiso explícito de parte de tu consumidor para aplicar personalización de contenido. Consulta con tus organismos legales si tienes dudas en la materia. 

### Paso 1: Instalando el módulo

1. DataCue para VTEX está en modo beta privado aún. [Contáctanos](https://datacue.co/contact) para enviarnos una API Key y Secret, y conectaremos tu tienda por ti.

2. De tu panel de administrador VTEX, ve a `Configuración de tienda > CMS > Layout`, y en CMS navega a `Templates HTML > Sub Templates`.

3. Crea un nuevo sub-template, llámalo `datacueScripts`, y pega el siguiente código como parte de su contenido (recuerda reemplazar la API Key con la que obtuviste de nosotros cuando creaste tu cuenta):

    ```html
    <script>
      // <![CDATA[

      (function() {
        window.datacueConfig = {
          api_key: '<YOUR API KEY>',
          user_id: window.vtxctx && window.vtxctx.login || null
        };

        var folder = '';
        Array.prototype.forEach.call(document.body.childNodes, function(node) {
          if (node.nodeType === 8) {
            var match = node.textContent.match(/VirtualFolder\.Name: (\S+)/);
            if (match && match[1]) {
              folder = match[1];
            }
          }
        });

        switch (folder.toLowerCase()) {
          case '/':
            window.datacueConfig.page_type = 'home';
            break;

          case '@produto@':
            window.datacueConfig.page_type = 'product';

            if (window.skuJson) {
              var sku = window.skuJson.skus.filter(function(sku) { return sku.available; })[0] || {};
              window.datacueConfig.product_id = window.skuJson.productId;
              window.datacueConfig.variant_id = sku.sku || null;

              window.datacueConfig.product_update = {
                name: window.skuJson.name,
                price: sku.bestPrice && sku.bestPrice / 100 || null,
                full_price: sku.listPrice && sku.listPrice / 100 || null,
                photo_url: sku.image || null,
                stock: sku.availablequantity || null
              };
            }
            break;

          case '@departamento@':
          case '@categoria@':
            window.datacueConfig.page_type = 'category';

            window.datacueConfig.category_name = window.vtxctx && window.vtxctx.categoryName || null;
            break;

          case 'busca':
            window.datacueConfig.page_type = 'search';

            window.datacueConfig.term = window.vtxctx && window.vtxctx.searchTerm || null;
            break;

          case '404':
            window.datacueConfig.page_type = '404';
            break;
        }
      }());

      // ]]>
    </script>
    <script src="https://cdn.datacue.co/js/datacue.js"></script>
    <script src="https://cdn.datacue.co/js/datacue-storefront.js"></script>
    ```

4. Ve hacia `HTML Templates`, encuentra los templates para tu página de Inicio, Producto, Categoría, Resultados de búsqueda y Error 404. En cada una de estas, pega la siguiente línea al final tras cualquier script VTEX - de preferencia, será antes del tag de cierre `</body>`:

    ```html
    <vtex:template id="datacueScripts" />
    ```


## Paso 2: Agrega recomendaciones

### Banners

1. Selecciona un banner que quieras usar como tu "Banner estático", ese que verán todas tus visitas. Si no estás seguro cuál usar, recurre a lo sencillo: tu categoría más popular o una promoción. Sube la imagen y asegúrate de que tenga una relación de aspecto de 5:3 (tamaño recomendado es 1200 x 720 px). Aprende más de banners estáticos [aquí](/banners).

2. Inserta el siguiente html en el template de tu página de Inicio:

    ```html
    <div
      data-dc-banners
      data-dc-static-img="path/to/your/banner.jpg"
      data-dc-static-link="link/to/chosen/category"
    ></div>
    ```

    Recuerda cambiar la URL y link de tu banner estático, en `data-dc-static-img`  y `data-dc-static-link` según corresponda.

    `static-img` es la URL de la imagen que subiste en el paso 1.
    `static-link` es el link al que enviarás a tu usuario una vez haga click en esta imagen. Generalmente será la página de una colección.

3. El diseño que DataCue usa por defecto para tus banners, considera 2 banners dinámicos angostos con 1 banner estático más ancho, todos en una sola línea. Puedes personalizar esto en `Configuración > Banners` en tu panel de control DataCue. Lee más sobre las opciones que tienes [aquí](/banners/layout.html). Alternativamente, averigua cómo construir tu [propio diseño](#custom-layout).

#### Cambiando tu banner estático

1. Sube una nueva imagen a tu servidor y copia su URL. Asegúrate de la relación de aspecto de 5:3 (tamaño recomendado es 1200 x 720 px). Actualiza el link del banner si es necesario. 

2. Edita tu template de la página de producto y encuentra el snippet html `data-dc-banners`. Cambia `static-img` para que sea la URL de tu imagen, que obtuviste en el paso anterior. Define el `static-link` como corresponda.

### Configura recomendaciones de productos 

Puedes desplegar recomendaciones de producto en las páginas de Inicio, Producto, Categoría, Resultados de búsqueda, Error 404. Para esto, ve al template y agrega:

```html
<div data-dc-products></div>
```

### Paso 3: Adecúa el diseño

Las grillas de productos DataCue tienen un diseño por defecto, que necesitará un par de ajustes para que quede igual al diseño de tu tienda. Esto es muy importante para que nada parezca fuera de lugar. Puedes recurrir a lo siguiente para hacer estos ajustes.

**Modo de Prueba**

Lo primero será poner DataCue en su modo de Prueba. Este modo te permite elegir a algunos usuarios que serán usuarios de prueba. Si estos inician sesión en el sitio, solo ellos verán las recomendaciones DataCue, mientras los demás usuarios no verán cambios. Esto es útil para que juegues con el diseño de las recomendaciones hasta que estés satisfecho con su look. 

**Personaliza el diseño**

Tienes dos alternativas para esto. 

Para ajustar al diseño de tu tienda de manera básica, cuentas con una amigable herramienta que estará disponible en tu panel de control DataCue. Puedes acceder a ella en la sección Configuración > Productos.

Para realizar cambios avanzados, puedes realizar los cambios que quieras con CSS. ¡[Contáctanos](https://datacue.co/contact) si necesitas apoyo!


**¿Dudas?**

Si tienes preguntas o comentarios respecto a este editor de diseño, ¡no dudes en hacérnoslas saber!


### Desconecta o desinstala el módulo 

Para desconectar DataCue para VTEX, sigue estos pasos. 

- Log in en tu panel de administrador VTEX.

- Ve a `Configuración de tienda > CMS > Layout`, y luego en el CMS navega a `HTML Templates`.

- Encuentra el template de tu página de Inicio, Producto, Categoría, Resultados de búsqueda y Error 404 y  remueve la línea `<vtex:template id="datacueScripts" />` de ellos.

- Si quieres completamente desisntalar DataCue, remueve el `datacueScripts` sub-template del directorio de `Sub Templates`.
