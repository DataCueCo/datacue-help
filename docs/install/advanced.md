---
filter: advanced
summary: Build your own custom layouts to bring your own designs to life instead of using our standard recommendation widgets.
---

# Advanced Widget Customization

## Custom Banner Layout

OK so you've looked at our banner layout designs, and you've got something fancier in mind. Fret not, we can take care of it.

DataCue supports two banner sizes, lets call them main and sub. You can pick any size you want but they need to be consistent. For instance, lets say you want a layout like this:

![Custom Layout](./images/custom-layout.png)

This is what we mean by consistent: all the mains are the same size, and all the subs are the same size.

Lets implement this!

::: tip
Our standard banner layouts are tastefully designed and mobile responsive. Designing your own layout means you need to take care of this functionality yourself.
:::

So here's what you need to do:

1. Design your layout using a combination of two different sizes.

2. In the dashboard, go to banner settings (`Settings > Banners`)

3. Select `Custom` and select the number of main and sub banners you need. For the design above, we need 2 main and 2 sub banners.

 ![Banner Settings](./images/banner-settings.png)

4. Insert an HTML snippet like so, and style it with CSS as you like:

```html
 <div class="custom-banners">
  <div class="custom-static">
    <a href="https://example.com/any-link-you-want">
      <img src="https://example.com/some-banner-image.jpg" alt="">
    </a>
  </div>
  <div class="custom-big" data-dc-main-insert-banner="1"></div>
  <div class="custom-big" data-dc-main-insert-banner="2"></div>
  <div class="custom-small" data-dc-sub-insert-banner="1"></div>
  <div class="custom-small" data-dc-sub-insert-banner="2"></div>
 </div>
```
 
```css
 .custom-banners {
  display: grid;
  grid-gap: 1em;
  grid-template-rows: 1fr auto;
  grid-template-columns:
  fit-content(calc(25% - 0.5em)) 1fr 1fr fit-content(calc(25% - 0.5em));
  grid-auto-flow: row dense;
 }

 .custom-banners a img { vertical-align: bottom; }

 .custom-static { grid-row: 1; grid-column: 2 / span 2; }

 .custom-big { grid-row: span 2; }
```

The code above is just a basic example, but the idea is similar for any layout.

- You can use any class names you like on the `div` tags. They don't even have to be `div`s, you might have an existing structure you'd like to adapt. 

- The only requirement is that you add the correct attribute names. Main banners must have `data-dc-main-insert-banner` and `data-dc-sub-insert-banner` for sub. 

- The numbers tell us which order to insert the banners in. Something like put the 1st main banner here, put the 2nd main banner there.

- You can skip the static banner part if you want to make everything dynamic.

In case you're curious for more technical details. Our recommendations are sent as an array, see example below. The number refers to the index of the element in each array, starting with 1 instead of 0.

```json
 {
  "main_banners": [
    { "link": "/collection/jeans", "photo_url": "jeans.jpg" },
    { "link": "/collection/tshirts", "photo_url": "tshirts.jpg" }
  ],
  "sub_banners": [
    { "link": "/collection/hats", "photo_url": "hats.jpg" },
    { "link": "/collection/shoes", "photo_url": "shoes.jpg" },
    { "link": "/collection/belts", "photo_url": "belts.jpg" },
    { "link": "/collection/chuck-norris","photo_url": "chuck-norris.jpg" }
  ]
 }
```

## Notifications Icon Positioning

Notifications come with a floating bell widget that you can set a default position for. Instead, you could integrate the bell into your navbar so it looks more native.

1. Insert this HTML in your navbar where you want to see the button. You can style the `<a>` tag with any class you like.

```html
<a href="#" class="put-your-classname-here" data-dc-notification-button></a>
```

You can style the bell with CSS as you like. The CSS below will do two things:

1. Make a small red bubble if there are unread notifications
2. Set the bell icon color to black

```css

[data-dc-notification-button].has-unread::before {
  content: '';
  position: absolute;
  top: 2px; left: 2px;
  width: 8px; height: 8px;
  border-radius: 50%;
  background-color: #f42121;
}


[data-dc-notification-button] > svg { fill: #000; }
```
