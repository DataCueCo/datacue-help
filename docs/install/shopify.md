---
position: 1
filter: platform
summary: Personalize your Shopify store by installing the DataCue app.
---

# Shopify

Welcome to our guide on how to install and use DataCue on your Shopify store.

**Stuck?**

Just reach out to us using the support email in your Shopify app and we'll help you get started.

## Install the app

First things first, if you haven't already done so, install the Shopify app.

Click [here](https://apps.shopify.com/datacue) to install the app from the Shopify app store.

## Add Recommendations

### Quick start: Add Banners + Products to your home page

![Install banners and products](./images/shopify_add_recommendations.gif)

### Setup banner recommendations

#### Themes with section support

1. Head to your theme editor, Click on `Online Store` on your side bar and click on the `Customize` button.

2. Click on `Add section`, then add the section `DataCue Banners`

    ![Add section](./images/add_section_banners.png)

    ::: tip Tip
    Don't see any sections? It's likely your theme doesn't support them. Scroll down to view instructions for themes that don't support sections.
    :::

3. Upload your static banner by clicking on `Select Image`.

    Static banners are defined by you and appear for all your visitors. Use them to highlight your most popular collection or a promotion. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Learn more about static banners [here](/guide/banners).

   ![Uploading a static banner](./images/homepage_banners.png)

4. Click on the back button, then drag the banners section to the top. Hide / remove any existing banner type elements you used to have like slideshows.

    ![Drag sections](./images/drag_banners_products.gif)

5. Save your changes

Refer our Banners usage guide [here](/guide/banners.html#banner-layout) to find out how to customize the layout, and add new banners.

#### Themes without sections support

1. Upload your static banner by going to `Settings > Files`. Click on `Upload files` and select the image you want.

    Static banners are defined by you and appear for all your visitors. Use them to highlight your most popular collection or a promotion. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Learn more about static banners [here](/guide/banners).

2. Copy the URL next to the image you uploaded, you'll need it later.

    ![Copy Banner URL](./images/copy_banner_url.png)

3. Click on `Online store` on your sidebar then click on `Actions > Edit Code`

4. Type `index.liquid`, click on it in the search results. Then paste the code below at the position you want (higher the better). Remember to paste the static banner URL you got from step 1 in `data-dc-static-img` and the link for the static banner in `data-dc-static-link`.

    ``` html
    <div
    data-dc-banners
    data-dc-static-img="<url you copied from step 1>"
    data-dc-static-link="link/to/chosen/category"
    ></div>
    ```

    ![Insert Banner code](./images/insert-banner-code.gif)

5. Click on `Save` and you're done! Check your home page to ensure everything looks good, you can move the position of the code to adjust the location of the banners.

#### Changing your static banner later

1. Go to DataCue Banner settings from your Shopify admin panel (`Online Store > Customize theme > DataCue Banners`).

2. Click on the 'select image' button to upload a new image. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Update the link for the static banner if necessary.

### Setup Product Recommendations

**Home page**

1. Go to the theme editor (`Home / Customize theme / Customize theme / Customize`).

   ![Theme settings](./images/customize_theme.png)

2. Click "Add section", then find the "Datacue" category and pick "DataCue Products".

   ![Adding a new section](./images/add_section_products.png)

3. Drag the newly added section to where you want the carousels to appear.
    ![Drag sections](./images/drag_banners_products.gif)

4. Save your changes and you're done!

**Product page**

Most themes don't allow adding custom sections to product pages, but you can do it manually.

If you're familiar with theme editing, you can find the product page template
(`templates/product.liquid`) in the code editor:

![Finding product.liquid](./images/find_template.png)

Then paste a special tag near the end of your template, where you want DataCue to insert the carousels:

```html
<div data-dc-products></div>
```

![Add product recommendations to product page](./images/shopify_add_code_product_page.gif)

**Advanced positioning**

You can also place each product recommendation in different parts of your product page. Just modify the code slightly to tell us what type of recommendation you want and insert the code where you want it to appear.

Related products

```html
`<div data-dc-products="related"></div>`
```

Similar products

```html
`<div data-dc-products="similar"></div>`
```

Recently viewed products

```html
`<div data-dc-products="recent"></div>`
```

### Match widgets to your theme

DataCue's product carousels have a default design which will need some adjustments to match the look/feel of your store. This is really important so nothing looks out of place.

**Test mode**

The first thing you should do is set DataCue into test mode from your dashboard. In test mode, you can pick a list of user accounts as test users. To see the recommendations, you have to sign in as a test user to your store. All other visitors don't see any changes. This is very helpful to play with the design till you're happy with the look/feel. To learn how to set DataCue to test mode, click [here](/install/testmode.html)

You will need to know a little CSS to match the design, so there are two options

**1. Let us help you (recommended)**

When you install the app, we'll get in touch with you and offer to help you with setting up your store.

**2. Do it yourself**

Wow, go right ahead. We've made a file called datacue_custom.css in your theme code. You can add all the styles you need in there so it's nicely separated from the other style code in your store. Feel free to reach out if you need any help.
