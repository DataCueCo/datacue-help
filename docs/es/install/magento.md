---
position: 3
filter: platform
summary: Personalize your Magento 2 store by installing the DataCue extension.
---

# Magento 2 <Badge text="beta" type="success"/>

Bienvenido a nuesontra guía para instalar y usar DataCue en tu tienda Magento 2.

*¿*Confundido?**

Contáctanos usando el mail de soporte desde tu panel de control Magento 2, y te ayudaremos a que quedes listo. 

::: warning Advertencia
Esta extensión es solo apta para Magento 2. Usuarios en Magento 1 pueden referirse a nuestra [Documentación API](https://developer.datacue.co).
:::

## Instalación

### Antes de comenzar

Aquí hay algunos detalles que debes conocer antes de comenzar la instalación. 

- The DataCue extension for Magento 2 requires at least **Magento 2.3 or higher**.

- Please test this plugin in a staging environment **first** before installing it on production servers. Extensions may sometimes affect each other, and the last place you want to discover this is on your live site. Ideally, your staging environment is a clone of your actual production site.

- DataCue for Magento 2 syncs your products, your customer’s first name, last name, email address, and orders.

- DataCue for Magento 2 also installs our Javascript library on your home page, product pages, category pages and search results page. The Javascript library personalizes your website content to each visitor's activity.

Depending on your countries privacy laws, you may need to explicitly get permission from the user to use content personalization. Please consult with legal counsel if you're in any doubt.

### Installing the extension

1. Go to the root directory of your Magento installation.

2. Run the following commands

    ``` shell
    # set Magento to maintenance mode
    bin/magento maintenance:enable #if in production mode
    # install the extension
    composer require datacue/magento_extension
    # enable the extension
    bin/magento extension:enable --clear-static-content DataCue_Magentoextension
    bin/magento setup:upgrade
    bin/magento cache:clean
    bin/magento setup:di:compile
    ```

3. Optional but recommended steps

    ``` shell
    # deploy static content
    bin/magento setup:static-content:deploy en_US #add all locales you're using here like es_CL

    # update your index tables
    bin/magento indexer:reindex

    # avoid cache conflicts by doing a flush
    bin/magento cache:flush
    ```

4. Check that installation is OK and disable maintenance mode
    
    ``` shell
    # Make sure the extension is enabled.
    bin/magento extension:status DataCue_Magentoextension

    # Disable maintenance mode
    bin/magento maintenance:disable
    ```

5. Login to your Magento 2 store's admin panel. You will find a link called DataCue Settings under the Marketing section. Click on it.
    
    ![DataCue Admin Panel](./images/magento_panel.png)

6. Enter your API key and API secret (you can find it on your dashboard) and press Save.
    
    Depending on the size of your store the sync process can take a few mins to a few hours.

    :::tip Tip
    Don't have a DataCue account? [sign up here](https://app.datacue.co/en/sign-up)
    :::

#### Troubleshooting

The most common issue is due to incorrect file permissions. Make sure all the important folders like `generated`, `pub` and `vendor` have the same permissions as the magento user.


### Disable or Uninstall the extension

When you deactivate and delete DataCue for Magento, we remove all changes made to your store including the Javascript. We also immediately stop syncing any changes to your store data with DataCue. To deactivate DataCue for Magento 2, follow these steps.

1. Go to the root directory of Magento 2.

    ``` shell
    bin/magento module:disable --clear-static-content DataCue_MagentoModule

    bin/magento module:uninstall --clear-static-content DataCue_MagentoModule

    bin/magento setup:di:compile
    ```

2. You may need to change file permissions or ownership of the generated files after the uninstallation.

3. Confirm the extension is now deleted.

    ```shell
    bin/magento module:status DataCue_MagentoModule
    ```

## Add recommendations

### Banners

1. Upload a fixed banner that all your visitors see. Make sure it has a publicly accessible URL, you'll need it later.

    If you're unsure, pick a banner to highlight your most popular collection or a promotion. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Learn more about static banners [here](/banners).

2. Click `Content` on your left side bar.

3. Pick a `Block` thats in your home page, or directly go to your home page under `Pages`. Click on `Edit`.

4. Click on the `Insert Widget` button.

5. In widget type selector, choose `DataCue Banner`, fill in `Banner Image` with the URL from step 1 and enter the link for that banner under `Banner Link`.

6. Click `Insert Widget` and then save the current page or block.

7. You should see the banner image that you uploaded on your home page.

The default layout DataCue uses for your banners shows 2 dynamic banners and 1 static banner on one row. You can customize this by going to `Settings > Banners` in your DataCue dashboard. Read more about it [here](/banners/layout.html). 

Want to build your own custom layout? [read this](#custom-layout).

#### Changing your static banner later

1. Upload a new image to your server and copy the URL. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Update the link for the static banner if necessary.

2. Edit the `block` or `page` where you inserted the banner widget. Edit the image URL to the new image you uploaded and and change the `link` to the banner as appropriate.

### Setup Product Recommendations

1. Click `Content` on your left side bar.

2. Pick a `Block` or `Page` corresponding to the page you want to insert the recommendations.

3. Click on the `Insert Widget` button and choose `Datacue Products`. Pick `All` and save your changes.

4. As soon as product recommendations are ready, you will start seeing them on your site.

### Match widgets to your theme

DataCue's product carousels have a default design which will need some adjustments to match the look/feel of your store. This is really important so nothing looks out of place.

#### Test mode

The first thing you should do is set DataCue into test mode. In test mode, you can pick a list of user accounts as test users. To see the recommendations, you have to sign in as a test user to your store. All other visitors don't see any changes. This is very helpful to play with the design till you're happy with the look/feel.

You will need to know a little CSS to match the design, so there are two options

**1. Let us help you (recommended)**

When you sign up, we'll get in touch with you and offer to help you with setting up your store.

**2. Do it yourself**

Feel free to reach out if you need any help.