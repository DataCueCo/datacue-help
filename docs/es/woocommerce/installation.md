---
position: 1
title: Installation
summary: Install DataCue's plugin for WooCommerce.
---

# Before You Start

Here are some things to know before you begin the integration process.

- For the most up-to-date install instructions, read Connect or Disconnect DataCue for WooCommerce.

- This plugin requires you to have the WooCommerce plugin already installed and activated in WordPress.

- Your host environment must meet WooCommerce's minimum requirements, including PHP 7.0 or greater.

- We *strongly* recommend you use this plugin in a staging environment before installing it on production servers.

- Caching plugins may interfere with the syncing process, we recommend you turn any OFF before the installation until the sync has completed successfully.

- DataCue for WooCommerce syncs your products, your customer’s first name, last name, email address, and orders.

- DataCue for WooCommerce also installs our Javascript library on your home page, product pages, category pages and search results page. The Javascript library personalizes your website content to each visitor's activity.

Depending on your countries privacy laws, you may need to explicitly get permission from the user to use content personalization. Please consult with legal counsel if you're in any doubt.


# Quick start

1. Download the plugin [here](https://cdn.datacue.co/assets/integrations/datacue-woocommerce-latest.zip).

2. Install the plugin on your WordPress Admin site by clicking on Plugins > Add New > Upload plugin > Choose File > select the ZIP file you just downloaded and click Install Now.

3. Once installed, select Activate Plugin

4. Connect the plugin with your DataCue API Key and Secret (you can find it on your dashboard) and press save.

5. Depending on the size of your store the sync process can take a few mins to a few hours.

# Deactivate or Delete the Plugin

When you deactivate DataCue for WooCommerce, we remove all changes made to your store including the Javascript. We also immediately stop syncing any changes to your store data with DataCue. 

To deactivate DataCue for WooCommerce, follow these steps.

- Log in to your WordPress admin panel.

- On the left navigation panel, click Plugins, and choose Installed Plugins.

- Click the box next to the DataCue for WooCommerce plugin, and click Deactivate.

- After you deactivate the plugin, you will have the option to Delete the plugin. If this fails with an error that the plugin is still active, you are most likely running a caching plugin. Disable the cache / refresh the cache and try deleting it again.