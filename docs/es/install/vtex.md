---
position: 5
filter: platform
summary: Personaliza tu tienda VTEX instalando el módulo DataCue.
---

# VTEX <Badge text="beta" type="success"/>

Bienvenido a nuestra guía para instalar y usar DataCue en tu tienda VTEX.

**¿Confundido?**

Simplemente [contáctanos](https://datacue.co/contact) ante cualquier duda o comentario y te ayudaremos a comenzar.

## Instalación

### Antes de comenzar

Hay algunas cosas que debes saber antes de comenzar el proceso de integración. 

- DataCue para VTEX sincronizará tus productos, nombre de tu usuario y correo, y tus pedidos. 

- DataCue para VTEX instalará nuestra biblioteca Javascript en tu página de inicio, de producto, categoría y de resultados. La biblioteca Javascript personalizará el contenido de tu web para cada usuario según su comportamiento.

Dependiendo de las leyes de privacidad de tu país, puedes necesitar permiso explícito de parte de tu consumidor para aplicar personalización de contenido. Consulta con tus organismos legales si tienes dudas en la materia. 

### Instalando el módulo

1. VTEX está en modo beta privado, [contáctanos](https://datacue.co/contact) para conectar tu tienda.

2. Dependiendo del tamaño de tu tienda, el proceos de sincronización tomará entre unos minutos y unas pocas horas. 

3. De tu panel de administrador VTEX, ve a `Configuración de tienda > CMS > Layout`, y en CMS navega a `Templates HTML > Sub Templates`.

4. Crea un nuevo sub-template, llámalo `datacueScripts`, y pega el siguiente código como parte de su contenido (recuerda reemplazar la API Key con la que obtuviste de nosotros cuando creaste tu cuenta):

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

5. Ve hacia `HTML Templates`, encuentra los templates para tu página de Inicio, Producto, Categoría, Resultados de búsqueda y Error 404. En cada una de estas, pega la siguiente línea al final tras cualquier script VTEX - de preferencia, será antes del tag de cierre `</body>`:

    ```html
    <vtex:template id="datacueScripts" />
    ```

### Disable or Uninstall the module

To disable DataCue for VTEX, follow these steps.

- Log in to your VTEX admin panel.

- Go to `Store Setup > CMS > Layout`, then in the CMS navigate to `HTML Templates`.

- Find the templates for your home page, product page, category page, search results and 404 page, and remove the line `<vtex:template id="datacueScripts" />` from them.

- If you want to completely uninstall DataCue, remove the `datacueScripts` sub-template from the `Sub Templates` directory.

## Add recommendations

### Banners

1. Select a banner to use as as your "Static Banner", a banner that all your visitors see. Upload a banner image to be shown to all your visitors. If you're unsure, pick a banner to highlight your most popular collection or a promotion. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Learn more about static banners [here](/banners).

2. Insert the following html in your home page template:

    ```html
    <div
      data-dc-banners
      data-dc-static-img="path/to/your/banner.jpg"
      data-dc-static-link="link/to/chosen/category"
    ></div>
    ```

    Remember to change the urls for `data-dc-static-img`  and `data-dc-static-link` correctly.

    `static-img` is the URL of the image you uploaded in step 1.
    `static-link` is the link to send the user when they click on the banner. Set an appropriate URL for your store, typically a category page.

3. The default layout DataCue uses for your banners shows 2 dynamic banners and 1 static banner on one row. You can customize this by going to `Settings > Banners` in your DataCue dashboard. Read more about it [here](/banners/layout.html). Alternatively, find out how to build your own [custom layout](#custom-layout).

#### Changing your static banner later

1. Upload a new image to your server and copy the URL. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Update the link for the static banner if necessary.

2. Edit your home page template and find the `data-dc-banners` html snippet and and change the `static-img` to the URL you copied from step 1. Set the `static-link` attribute as appropriate.

### Setup Product Recommendations

In the template of a page you want the recommendations displayed on (home, product, category, search results, 404), insert:

```html
<div data-dc-products></div>
```

### Match widgets to your theme

DataCue's product grids have a default design which will need some adjustments to match the look/feel of your store. This is really important so nothing looks out of place.

**Test mode**

The first thing you should do is set DataCue into test mode. In test mode, you can pick a list of user accounts as test users. To see the recommendations, you have to sign in as a test user to your store. All other visitors don't see any changes. This is very helpful to play with the design till you're happy with the look/feel.

You will need to know a little CSS to match the design, so there are two options

**1. Let us help you (recommended)**

When you sign up, we'll get in touch with you and offer to help you with setting up your store.

**2. Do it yourself**

Feel free to reach out if you need any help.
