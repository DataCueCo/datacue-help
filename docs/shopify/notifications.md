---
title: Notifications
summary: Configure your web notifications
---

# Notifications

Pop-ups lead to a poor user experience because they are designed to interrupt and are often not relevant. Instead, it's better to simply let users know there is a notification so they can click on it if they are interested. Even better, those notifications should always be relevant so users are delighted instead of annoyed.

DataCue can show personalized notifications to a user if a product they looked at recently is:

- Low in stock
- New stock
- On discount

## Quick Start

1. Turn ON notifications from the notifications panel on your dashboard and you're ready to go.
2. No step 2, that's all you need to do!

## Customization

You can customize three settings in your notifications panel:

1. Position to show the notification bell, you can pick between top left, top right, bottom left or bottom right. (See the [next topic](#advanced-positioning) for a more advanced method)

2. Pick a panel color which is helpful to match the panel design better to your website. If you're a developer, feel free to override the CSS we use to make more advanced design changes.

3. Customize the text shown in the panel, helpful if your website is not in english, or if you just want to use your own distinctive copy.

## Advanced Positioning

The default and easiest way to get started is to have a floating notification bell. 

If you want to integrate the notifications icon into your navigation bar, simply place the following HTML snippet into your home page theme file. The floating bell icon will automatically be disabled if we detect the HTML snippet below on your webpage.

``` html
<a class="datacue-notification" datacue-notification-bell>
    <span class="datacue-show-notifications"></span>
    <span class="datacue-show-notifications-count"></span>
</a>
```

::: tip
You customize the class names as you like if you want to do any further design customizations.
:::