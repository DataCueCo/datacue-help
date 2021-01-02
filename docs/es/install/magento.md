---
position: 3
filter: platform
summary: Personaliza tu tienda Magento instalando el módulo DataCue.
blog_index: false
---

# Magento <Badge text="beta" type="success"/>

Bienvenido a nuestra guía para instalar y usar DataCue en tu tienda Magento.

Si en algún paso estás confundido, contáctanos usando el mail de soporte desde tu panel de control Magento, y te ayudaremos a que quedes listo.

::: warning Advertencia
Esta extensión es solo apta para Magento 2.3. Usuarios en Magento 1 pueden referirse a nuestra [Documentación API](https://developer.datacue.co).
:::

## Paso 1: Instalación

### Antes de comenzar

Aquí hay algunos detalles que debes conocer antes de comenzar la instalación.

- El módulo DataCue para Magento requiere al menos la versión **Magento 2.3 o superior**.

- Por favor, prueba este plugin en un ambiente de Staging **antes** de instalar en tu servidor de producción. Los módulos o extensiones algunas veces se afectan entre sí, y lo último que quieres (creemos que es así) es descubrirlo en tu sitio en vivo. Idealmente, tu Staging será un clon de tu sitio de producción actual.

- DataCue para Magento sincronizará tus productos y pedidos, además de nombres y correos de tu usuarios. Esto es lo que ocurrirá cuando realices el paso 1 de nuestra Instalación (ver más abajo).

- Se instalará nuestra biblioteca Javascript en tu páginas de inicio, producto, categoría y de resultados. La biblioteca Javascript personalizará el contenido de tu sitio, según la actividad de cada visita online. Esto es lo que ocurrirá cuando realices el paso 2 de nuestra Instalación.

- Dependiendo de las leyes de privacidad de tu país, puede que debas solicitar permiso explícito de tu usuario para personalizar su contenido. Por favor, consulta los aspectos legales de tu zona si tienes dudas.

### Instala la extensión

1. Ve a la raíz del directorio de instalación en Magento.

2. Corre los siguientes comandos.

   ```bash
   # install the module
   composer require datacue/magento_module
   # enable the module
   bin/magento module:enable --clear-static-content DataCue_MagentoModule
    # Enable maintenance mode
   bin/magento maintenance:enable
   bin/magento setup:upgrade
   bin/magento cache:clean
   bin/magento setup:di:compile
   # deploy static content
   bin/magento setup:static-content:deploy
   ```

3. Pasos opcionales (¡pero recomendados!)

   ```bash

   # actualiza tus tablas de índice
   bin/magento indexer:reindex

   # evita conflictos en caché, con un flush
   bin/magento cache:flush
   ```

4. Comprueba que la instalación está OK. Desactiva el modo de mantenimiento.

   ```bash
   # Asegúrate de que el módulo esté activo
   bin/magento module:status DataCue_MagentoModule

   # Desactiva el módulo de mantenimiento
   bin/magento maintenance:disable
   ```

5. Ingresa a tu panel de administrador de Magento. Encontrarás un link, llamado DataCue Settings, debajo de la sección de Marketing. Haz click en él.

   ![Panel de administrador DataCue](./images/magento_panel.png)

6. Ingresa tu API key y API secret (encontrarás ambas en tu panel de control DataCue) y haz click en Guardar.

   Dependiendo del tamaño de tu tienda, el proceso de sincronización variará entre unos pocos minutos y unas pocas horas.

   :::tip Tip
   ¿No tienes una cuenta DataCue? [Regístrate aquí](https://app.datacue.co/en/sign-up)
   :::

#### Soluciona problemas

El asunto más común que puede surgir se debe a permisos incorrectos. Asegúrate de que todas las carpetas importantes, como `generated`, `pub` y `vendor` tengan los mismos permisos que el usuario Magento.

## Paso 2: Agrega recomendaciones

### Banners

1. Sube un banner fijo que será visto por todas tus visitas, independiente de su comportamiento. Asegúrate de que tenga una URL de acceso público, pues la necesitarás luego.

   Si no sabes qué imagen elegir, selecciona tu colección más popular, o una promoción del momento. Asegúrate de que la imagen tenga una relación de aspecto de 5:3 (el tamaño ideal es 1200 x 720 px). Aprende más sobre este banner estático [aquí](/banners).

2. Haz click en el menú izquierdo, en `Contenido`.

3. Elige un `Bloque` de tu página de inicio, o directamente ve a tu página de inicio en `Páginas`. Haz click en `Editar`.

4. Haz click en el botón de `Insertar Widget`.

5. En el selector de tipos de widget, elige `Banner DataCue`, pon la URL de la imagen en `Imagen del Banner` (la del paso 1) y agrega el link en `Link del Banner`.

6. Haz click en `Insertar Widget` y guarda la página o bloque.

7. Deberías poder ver la imagen del banner que subiste, en tu página de inicio.

La disposición de banners que DataCue usa mostrará, por defecto, 2 banners dinámicos y 1 dinámico en una sola fila. Puedes cambiar esta disposición en `Configuraciones > Banners` desde tu panel DataCue. Averigua más [aquí](/banners/layout.html).

Hey...¿Quieres construir tu propia disposición de banners? [Lee esto](#custom-layout).

#### Cambia tu banner estático

1. Sube una nueva imagen a tu servidor y copia su URL. a new image to your server and copy the URL. Asegúrate de que la imagen tenga una relación de aspecto de 5:3 (el tamaño ideal es 1200 x 720 px). Actualiza el link, si es necesario.

2. Edita el `bloque` o `página` donde insertaste el widget para el banner. Edita la URL para que corresponda a la nueva imagen y el `link` como corresponda.

### Configura recomendaciones de productos

1. Haz click en `Contenido` en tu menú izquierdo.

2. Elige un `Bloque` o `Página` correspondiente a la página donde quieres insertar las recomendaciones.

3. Haz click en el botón `Insertar Widget` y elige `Productos Datacue`. Selecciona `Todos` y guarda tus cambios.

4. Apenas tus recomendaciones se hayan generado, podrás verlas en tu sitio.

## Paso 3: Adapta tus recomendaciones a tu propio diseño

Los carruseles de producto DataCue vienen con un diseño por defecto, que puedes querer cambiar para que se asemeje al look de tu sitio. Esto es muy importante, pues la idea es que nada parezca fuera de lugar.

### Modo de prueba

Lo primero que debes hacer ahora es poner DataCue en su modo de prueba. Esto te permite elegir una lista de cuentas (usuarios) que verán las recomendaciones DataCue, mientras el resto de tus visitas no verá cambios aún. Para ver las recomendaciones, los usuarios de prueba deberán iniciar sesión en tu sitio.

Esto es muy útil para que juegues con el diseño, hasta que sientas que tu sitio está listo para salir en vivo. Para aprender a configurar DataCue en modo de prueba, haz clic en [aquí](/es/install/testmode.html#establecer-datacue-en-modo-de-prueba)

### Personaliza el diseño

Tienes dos alternativas para esto:

#### 1. Una amigable herramienta para ajustar al diseño

Puedes ajustar al diseño de tu tienda facilmente con una amigable herramienta. Puedes acceder a ella en tu panel de control DataCue en la sección `Configuración > Productos`.

![Encontrar el product.liquid](./images/design-editor.png)

#### 2. CSS para cambios avanzados

Si lo que quieres es realizar cambios avanzados, puedes hacer los ajustes que necesites con CSS.

## Desactiva o desinstala el módulo

Cuando desactivas y eliminas DataCue para Magento, removeremos todos los cambios hechos en tu tienda, incluyendo el Javascript. Adicionalmente, detendremos toda sincronización entre tu tienda y DataCue.

Para desactivar DataCue de Magento, sigue estos pasos.

1. Ve a la raíz del directorio para Magento.

   ```bash
   bin/magento module:disable --clear-static-content DataCue_MagentoModule

   bin/magento module:uninstall --clear-static-content DataCue_MagentoModule

   bin/magento setup:di:compile
   ```

2. Puede que debas cambiar los permisos o el dueño de los archivos generados, tras la desinstalación.

3. Confirma que el módulo haya sido eliminado.

   ```bash
   bin/magento module:status DataCue_MagentoModule
   ```

**¿Dudas?**

¡[Contáctanos](https://datacue.co/contact) si necesitas apoyo!
