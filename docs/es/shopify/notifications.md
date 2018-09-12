---
title: Notificaciones
summary: Configura tus notificaciones web
---

# Notificaciones

Las ventanas emergentes conducen a una experiencia de usuario pobre porque están diseñadas para interrumpir y, a menudo, no son relevantes. En su lugar, es mejor simplemente dejarles saber a los usuarios que hay una notificación para que puedan hacer clic si les interesa. Mejor aún, esas notificaciones siempre deberían ser relevantes para que los usuarios estén encantados en lugar de molestos.

DataCue puede mostrar notificaciones personalizadas a un usuario si un producto que vieron recientemente es:

- Bajo en existencia
- Nueva acción
- En descuento

## Inicio rápido

1. Active las notificaciones desde el panel de notificaciones en su dashboard y ya está listo para comenzar.
2. No paso 2, ¡eso es todo lo que necesitas hacer!

## Personalización

Puedes personalizar tres configuraciones en tu panel de notificaciones:

1. Posición para mostrar la campana de notificación, puede elegir entre arriba a la izquierda, arriba a la derecha, abajo a la izquierda o abajo a la derecha. (Consulte el [tema siguiente](#posicionamiento-avanzado) para obtener un método más avanzado)

2. Elija un color de panel que sea útil para adaptar mejor el diseño del panel a su sitio web. Si es un desarrollador, puede anular el CSS que utilizamos para realizar cambios de diseño más avanzados.

3. Personalice el texto que se muestra en el panel, útil si su sitio web no está en inglés, o si solo desea usar su propia copia distintiva.

## Posicionamiento avanzado

La forma predeterminada y más fácil de comenzar es tener una campana de notificación flotante.

Si desea integrar el icono de notificaciones en su barra de navegación, simplemente coloque el siguiente fragmento de HTML en el archivo de tema de su página de inicio. El icono de campana flotante se desactivará automáticamente si detectamos el fragmento de HTML a continuación en su página web.

``` html
<a class="datacue-notification" datacue-notification-bell>
    <span class="datacue-show-notifications"></span>
    <span class="datacue-show-notifications-count"></span>
</a>
```

::: tip CONSEJO
Personalice los nombres de clase como desee si desea realizar más personalizaciones de diseño.
:::