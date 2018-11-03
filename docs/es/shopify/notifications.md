---
title: Notificaciones
summary: Configura tus notificaciones web.
---

# Notificaciones

Las ventanas emergentes crean una experiencia de usuario pobre porque están diseñadas para interrumpir y, a menudo, no son relevantes. En su lugar, es mejor simplemente dejarles saber a los usuarios que hay una notificación para que puedan hacer clic si les interesa. Mejor aún, esas notificaciones deberían siempre ser relevantes para que los usuarios estén encantados en lugar de molestos.

DataCue puede mostrar notificaciones personalizadas a un usuario si un producto que vieron recientemente:

- Está bajo en inventario
- Tiene nuevos items en inventario
- Está en descuento

## Para empezar

1. Ingresa a tu dashboard y haz click sobre Notificaciones.
2. Modifica la configuración como quieras (ve el siguiente capítulo para saber más) o deja los valores por defecto - ¡eso es todo!

## Personalización

Puedes personalizar tres configuraciones en tu panel de notificaciones:

1. **Posición de la campana de notificación**: puedes elegir entre arriba a la izquierda, arriba a la derecha, abajo a la izquierda o abajo a la derecha. (Consulte el [tema siguiente](#posicionamiento-avanzado) para obtener un método más avanzado)

2. **Color del panel**: elige un color de panel que se adapte mejor al diseño de tu sitio web. Si eres un desarrollador, puedes sobre escribir  el CSS que utilizamos para realizar cambios de diseño más avanzados.

3. **Texto**: selecciona el idioma entre Español e Inglés para que sea el mismo de tu sitio. Si necesitas otro idioma, ¡Haznos saber!

## Posicionamiento avanzado

La forma por defecto y la más fácil de comenzar es tener una campana de notificación flotante.

Si quieres integrar el icono de notificaciones en tu barra de navegación, simplemente inserta el siguiente fragmento de HTML en el archivo de tema de tu página de inicio. El icono de campana flotante se desactivará automáticamente si detectamos el siguiente fragmento de HTML en tu página web.

``` html
<a class="datacue-notification" datacue-notification-bell>
    <span class="datacue-show-notifications"></span>
    <span class="datacue-show-notifications-count"></span>
</a>
```

::: tip CONSEJO
Personaliza los nombres de clases como quieras si deseas realizar más personalizaciones de diseño.
:::
