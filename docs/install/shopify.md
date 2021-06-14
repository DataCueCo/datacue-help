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

1. Setup the banners: head to your Shopify theme editor:  `Online Store` > `Customize`. Then click on `Add section` and choose `DataCue Banners`.

![Install banners and products](/media/step2.png)

2. Pick the image you want as your static banner. This is an image that doesn't change and all your visitors will see. Static banners are helpful to highlight your most popular collection or a promotion. Ensure the image has an aspect ratio of 5:3 (recommended size is 1200 x 720 px). 

Learn more about static banners [here](https://help.datacue.co/guide/banners.html).

![](/media/2-1.png)

3. Click on the back button, then drag the banners section to where you want. We recommend moving it right below your navigation bar / logo. Hide/remove any existing banner type elements you currently have like slideshows.

![](/media/3.gif)

## Step 3: **Add dynamic banners**:

1. Head to your DataCue dashboard. Click on `Banners` > `Add Banner`.

2. Select an image that you want to show as a dynamic banner and click on a collection you want to associate it with. Now, if any user clicks on something related to that collection - we will show this banner automatically to your visitor. 

Learn more about banners [here](https://help.datacue.co/guide/banners.html).

## Step 4: **Add product recommendations**:

1. Setup product recommendations on your home page. Head to your Shopify admin > `Online Store` > `Customize`. Then click `Add section`, and pick `DataCue Products`. Drag the products section to the location you want on your homepage.

2. Add product recommendations to other pages.

**CSS method**

From your DataCue dashboard, click on `Settings` > `Developer` and scroll down to the `Product recommendations placement` section.

Enter a CSS selector for an element that we should use to insert product recommendations below. You can specify a CSS selector for all the main types of pages.

**Code editing**

Insert the code snippet below on any page using the Shopify code editor. To access the editor, click on `Online store` > `Action` > `Edit code`

```html
<div data-dc-products></div>
```

**Advanced positioning with code editing**

You can place individual product recommendation sections in different areas of your website.

For instance, if you want 'Related products' to appear after 'Recently viewed products', you can insert the code snippets like this:

```html
<div data-dc-products="related"></div>
<div data-dc-products="recent"></div>
```
Full list of product recommendation sections:

**Related products**

```html
<div data-dc-products="related"></div>
```

**Similar products**

```html
<div data-dc-products="similar"></div>
```

**Recently viewed products**

```html
<div data-dc-products="recent"></div>
```

**Top products (collection pages only)**

```html
<div data-dc-products="top"></div>
```

**Dynamic categories (home page only)**

```html
<div data-dc-products="categories"></div>
```

## Step 5: Customize the look/feel of the product section:

1. **Friendly design editor**: You can customize most of the look/feel of the product sections yourself with our super easy design editor. Just play with the settings till the preview looks good to you and save your changes.

2. **Advanced designs with CSS**: If you want to make advanced changes, feel free to use CSS directly. We've made all the elements within the product section widget accessible with unique class names.

![Product designer](/media/6.png)

**Stuck?**

Just reach out to us using the support email in your Shopify app and we'll help you get started.

## Uninstalling the app

When you uninstall the app, your DataCue subscription is automatically cancelled. We also delete all your store data like products, collections, orders and customer information.

To fully remove DataCue from your theme, please complete the following steps:

1. Head to your Shopify theme editor> Online Store > Actions > Edit Code.
2. Click on `theme.liquid`
3. Find the code below, delete it and press `Save`.

```liquid
    {% include 'datacue' %}
    {{ 'datacue-custom.css' | asset_url | stylesheet_tag }}
```

::: tip Tip
If you accidentally deleted anything beyond the DataCue code, don't worry. Click on the `older versions` option under the `theme.liquid` file to restore the version prior to your changes.
:::
