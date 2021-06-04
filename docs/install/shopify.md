---
position: 1
filter: platform
summary: Personalize your Shopify store by installing the DataCue app.
blog_index: false
---

# Shopify

Welcome to our guide on how to install and use DataCue on your Shopify store.

## Step 1: Install DataCue App:

[Shopify Appstore](https://apps.shopify.com/datacue)

## Step 2: Add static banners:

1-  Setup the banners: head to your Spotify theme editor > Online Store > Customize. Then click on  “Add section” and choose“DataCue Banners”.

![Install banners and products](/media/step2.png)

\
2- You can add the image that you wish to show as a static banner for all your visitors. Use them to highlight your most popular collection or a promotion. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Learn more about static banners [here](https://help.datacue.co/es/guide/banners.html).

![](/media/2-1.png)

3- You can click on the back button, then drag the banners section where you wish. We recommend you to move it below the header. Hide/remove any existing banner type elements you used to have like slideshows.

![](/media/3.gif)

## Step 3: **Add dynamic banners**:

1- Setup the banners: head to your DataCue theme editor > Settings > Files. Then click on  “Upload files” and select the image you want.\
\
2- Add an image that has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). Learn more about static banners [here](https://help.datacue.co/es/guide/banners.html).

![Drag sections](/media/4-1.png)

## Step 4: **Add product recommendations**:

\
Setup banners recommendations: head to your Shopify theme editor > Online Store> Customize. Then Click "Add section”, and pick "DataCue Products”. You can drag the banners section where you wish.\
\
Would you like to add **custom sections to other pages**? You can do it easily by pasting a code snippet:\
\
Head to your Shopify theme editor> Online Store > Actions > Edit Code. Then add the following link in order to show the recommendations: <div data-dc-products></div>.

```html
<div data-dc-products></div>
```

\
**Others advanced positioning:** \
\
Related products <div data-dc-products=“related"></div>.

```html
<div data-dc-products="related"></div>
```

\
Similar products (product page only) <div data-dc-products="similar"></div>

```html
<div data-dc-products="similar"></div>
```

\
Recently viewed products <div data-dc-products="recent"></div>

```html
<div data-dc-products="recent"></div>
```

\
Top products (collection pages only) <div data-dc-products="top"></div>

```html
<div data-dc-products="top"></div>
```

Dynamic categories (home page only) <div data-dc-products="categories"></div>

```html
<div data-dc-products="categories"></div>
```

## Step 5: Customize:

1. Friendly **design** editor: You can customize most of the look/feel of the product sections yourself with our super easy design editor. Just play with the settings till the preview looks good to you and save your changes

2. Advanced designs with **CSS**: If you want to make advanced changes, feel free to use CSS directly. We've made all the elements within the product recommendation widget accessible with unique class names.

![Insert Banner code](/media/6.png)

**Stuck?**

Just reach out to us using the support email in your Shopify app and we'll help you get started.

## Uninstalling the app

When you uninstall the app, your DataCue subscription is automatically cancelled. We also delete all your store data like products, collections, orders and customer information.

To fully remove DataCue from your theme, please complete the following steps:

1. Head to your Shopify theme editor> Online Store > Actions > Edit Code.
2. Click on `theme.liquid`
3. Find the code below, delete it and press save,

```liquid
    {% include 'datacue' %}
    {{ 'datacue-custom.css' | asset_url | stylesheet_tag }}
```

::: tip Tip
If you accidentally deleted anything beyond the DataCue code, don't worry. Click on the `older versions` option under the `theme.liquid` file to restore the version prior to your changes.
:::
