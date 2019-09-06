// /.vuepress/config.js

module.exports = {
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/google-analytics': {
      ga: 'UA-106234501-3'
    }
  },
  markdown: {
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-footnote'))
    }
  },
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'DataCue',
      description: 'Automatically show each customers the content they want to buy.'
    },
    '/es/': {
      lang: 'es',
      title: 'DataCue',
      description: 'Muestra automáticamente a cada cliente el contenido que quiere comprar.'
    }
  },
  themeConfig: {
    sidebarDepth: 3,
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        //navbar
        nav: require('./nav/en'),
        sidebar: {
          '/install/': getInstallSidebar('Install', 'Advanced'),
          '/guide/': getGuideSidebar('Web', 'Email'),
        },
      },
      '/es/': {
        selectText: 'Idiomas',
        label: 'Español',
        editLinkText: 'Editar esta página en GitHub',
        nav: require('./nav/es'),
        sidebar: {
          '/es/install/': getInstallSidebar('Instalar', 'Avanzado'),
          '/es/guide/': getGuideSidebar('Web', 'Correo'),
        },
      }
    },
  }
}

function getInstallSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      sidebarDepth: 2,
      collapsable: false,
      children: [
        '',
        'shopify',
        'woocommerce',
        'prestashop',
        'magento',
        'vtex'
      ]
    },
    {
      title: groupB,
      sidebarDepth: 2,
      collapsable: false,
      children: [
        'custom',
        'advanced',
        'testmode'
      ]
    }
  ]
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      sidebarDepth: 2,
      collapsable: false,
      children: [
        'banners',
        'products',
        'notifications'
      ]
    },
    {
      title: groupB,
      sidebarDepth: 2,
      collapsable: false,
      children: [
        'email',
      ]
    }
  ]
}