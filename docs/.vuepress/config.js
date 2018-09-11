// /.vuepress/config.js

module.exports = {
    title: ' ',
    serviceWorker: true,
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
          lang: 'en-US', // this will be set as the lang attribute on <html>
          title: 'DataCue',
          description: 'Show your users just the products they want'
        },
        '/es/': {
          lang: 'es',
          title: 'DataCue',
          description: 'Muestre a sus usuarios solo los productos que desean'
        }
      },
    themeConfig: {
        locales: {
            '/': {
              // text for the language dropdown
              selectText: 'Languages',
              // label for this locale in the language dropdown
              label: 'English',
              // text for the edit-on-github link
              editLinkText: 'Edit this page on GitHub',
              // config for Service Worker 
              serviceWorker: {
                updatePopup: {
                  message: "New content is available.",
                  buttonText: "Refresh"
                }
              },
              nav: [
                { text: 'Sign Up', link: 'https://datacue.co/sign-up' },
                { text: 'Home', link: 'https://datacue.co' },
              ],
              sidebar: [
                ['/dashboard/', 'Dashboard'],
                ['/shopify/', 'Shopify'],
                ['/custom/', 'Custom'],
              ]
            },
            '/es/': {
              selectText: 'Idiomas',
              label: 'Español',
              serviceWorker: {
                updatePopup: {
                  message: "Nuevo contenido está disponible.",
                  buttonText: "Refrescar"
                }
              },
              nav: [
                { text: 'Regístrate', link: 'https://datacue.co/sign-up' },
                { text: 'Inicio', link: 'https://datacue.co/es' },
              ],
              sidebar: [
                ['/es/dashboard/', 'Dashboard'],
                ['/es/shopify/', 'Shopify'],
                ['/es/custom/', 'Custom'],
              ]
            }
        },
    }
}
