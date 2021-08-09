---
position: 1
filter: platform
summary: Personalize your Shopify store by installing the DataCue app.
blog_index: false
---

# Shopify

Welcome to our guide on how to install and use DataCue on your Shopify store.

## Before you start

Make sure you have installed the DataCue app from the
[Shopify Appstore](https://apps.shopify.com/datacue).

To verify, login to your Shopify store admin panel and click on 'Apps' - you should see the DataCue app listed there.


## Dynamic personalized banners

To add personalized banners to your Shopify site, we first need to edit your theme.

### Add banners component to your theme

Head to your Shopify admin panel:  `Online Store` > `Customize`. Then click on `Add section` and choose `DataCue Banners`.

![Install banners and products](/media/step2.png)

### Add a static banner

It's very likely that your existing theme has a large prominent banner image at the top for all your visitors to see. This image could be a promotion you are doing or just to introduce your brand and why people should shop at your store. These are messages you want everyone to see.

You have two options:

1. Keep your existing banner image component for this purpose and add the DataCue banners section below it.

2. Replace your existing banner image component with the DataCue banners.

If you choose to do #1: simply press the `<` arrow to go back. DataCue banners will be 100% dynamic.

If you choose #2: use the `Select image` button to upload your static banner image. Ensure the image has an aspect ratio of 5:3 (recommended size is at least 1200 x 720 px).

You can learn more about static banners [here](https://help.datacue.co/guide/banners.html).

![](/media/2-1.png)

### Position the banners section

Drag the banners section to where you want. We recommend moving it right below your navigation bar / logo. 

If you added a static banner in the previous step, you can hide any existing banner elements like 'Slideshow'.

![](/media/3.gif)

### Add dynamic banners

Now, it's time to upload the 'real' dynamic banners. 

1. Head to your DataCue dashboard. Click on `Banners` > `Add Banner`.

2. Prepare banner images for all your top collections and upload them from your DataCue dashboard. DataCue will automatically select the best banner images to show your customers based on their interests.

Learn more about banners [here](https://help.datacue.co/guide/banners.html).

## Personalized product recommendations

### Add product recommendations to your theme

Head to your Shopify admin panel. 

1. Click on `Online Store` > `Customize`. 
2. Click `Add section`, and pick `DataCue Products`. 
3. Drag the products section to the location you want on your homepage.

Your homepage is now setup correctly.

For all other pages, you have two options:

#### CSS Method (recommended)

DataCue will try to auto detect your theme and pick CSS selectors to place our widgets automatically on your top pages like product, category, search, error (404) and cart page. 

From your DataCue dashboard, click on `Settings` > `Developer` to view the current CSS settings. You can work with your developer to change these CSS selectors to change the position of your widget.

If you're not sure how to change these - write to us at support -at- datacue.co and we'll help!

#### Code editing (advanced)

You can also add html code to the page and DataCue will use this code to understand where to insert product recommendations.

You can do this easily with the Shopify code editor. To access the editor, go to your Shopify admin panel and click on `Online store` > `Action` > `Edit code`

Then paste the following code at the position you want to see the recommendations.

```html
<div data-dc-products></div>
```

Normally, the order in which product recommendations appear is fixed. e.g. Product page first shows related products, followed by similar products and then recently viewed.

If you want to change the order, you can use code editing and tell DataCue exactly where you want to place each widget.

For e.g. lets say you have a reviews widget on your product page. You want the layout to be something like this:

- Similar products
- Reviews widget
- Related products
- Recently viewed products

You can do something like this:

```html
<div data-dc-products="similar"></div>
-- Reviews widget code --
<div data-dc-products="related"></div>
<div data-dc-products="recent"></div>
```
Here is the full list of product widget types.

**Related products**

```html
<div data-dc-products="related"></div>
```

**Similar products** (product page only)

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

### Customize the look/feel of the product section

1. **Friendly design editor**: You can customize most of the look/feel of the product sections yourself with our super easy design editor. Just play with the settings till the preview looks good to you and save your changes.

2. **Advanced designs with CSS**: If you want to make advanced changes, feel free to use CSS directly. We've made all the elements within the product section widget accessible with unique class names.

![Product designer](/media/widget-styler.png)

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
