---
position: 5
filter: platform
summary: Personalize your VTEX store by installing the DataCue module.
---

# VTEX <Badge text="beta" type="success"/>

Welcome to our guide on how to install and use DataCue on your VTEX store.

**Stuck?**

Just [reach out to us](https://datacue.co/contact) if you have any questions/doubts and we'll help you get started.

## Installation

### Before You Start

Here are some things to know before you begin the integration process.

- DataCue for VTEX syncs your products, your customer’s first name, last name, email address, and orders.

- DataCue for VTEX also installs our Javascript library on your home page, product pages, category pages and search results page. The Javascript library personalizes your website content to each visitor's activity.

Depending on your countries privacy laws, you may need to explicitly get permission from the user to use content personalization. Please consult with legal counsel if you're in any doubt.

### Installing the module

1. VTEX is in private beta, [contact us](https://datacue.co/contact) to get your store connected.

2. Depending on the size of your store the sync process can take a few mins to a few hours.

3. From your VTEX Admin panel, go to `Store Setup > CMS > Layout`, then in the CMS navigate to `HTML Templates > Sub Templates`.

4. Create a new sub-template, name it `datacueScripts`, and paste the following code as its contents (remember to replace the API key with the one you'll get from us after connecting your store):

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

5. Go up to `HTML Templates`, find the templates for your home page, product page, category page, search results and 404 page, and in each of those, paste the following line at the end, after any VTEX scripts, preferably just before the closing `</body>` tag:

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

DataCue's product recommendations have a default design which will need some adjustments to match the look/feel of your store. This is really important so nothing looks out of place.

### Customize recommendations look/feel

#### 1. Friendly design editor

You can customize most of the look/feel of the product sections yourself with our super easy design editor. Just play with the settings till the preview looks good to you and save your changes.

![Design editor tool](./images/design-editor.png)

#### 2. Advanced designs with CSS

If you want to make advanced changes, feel free to use CSS directly. We've made all the elements within the product recommendation widget accessible with unique class names.
