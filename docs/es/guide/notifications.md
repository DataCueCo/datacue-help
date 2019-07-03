---
position: 4
summary: Configura tus notificaciones web
---

# Notificaciones

Las ventanas emergentes conducen a una experiencia de usuario pobre porque están diseñadas para interrumpir y, a menudo, no son relevantes. En su lugar, es mejor simplemente informar a los usuarios que hay una notificación para que puedan hacer clic en ella si están interesados. Aún mejor, esas notificaciones siempre deben ser relevantes para que los usuarios estén encantados en lugar de molestos.

DataCue puede mostrar notificaciones personalizadas a un usuario si un producto que vieron recientemente es:

- Bajo en existencia
- Nuevo stock
- En descuento

## Inicio rápido

1. Inicie sesión en su panel y haga clic en Notificaciones.
2. Personalice la configuración como desee (consulte el capítulo siguiente para obtener una descripción) o deje los valores predeterminados como están: ¡eso es todo!

## Personalización

Puedes personalizar tres configuraciones en tu panel de notificaciones:

1. **Posición de campana de notificación**: puede elegir entre la esquina superior izquierda, superior derecha, inferior izquierda o inferior derecha. (Consulte el [tema siguiente] (# posicionamiento avanzado) para un método más avanzado)

2. **Color del panel**: elija un color para el panel que coincida con los colores de su sitio web. Si es un desarrollador, no dude en anular el CSS que usamos para realizar cambios de diseño más avanzados.

3. **Idioma**: seleccione el idioma entre inglés y español para que coincida con su sitio web. Si tiene una solicitud para otro idioma, háganoslo saber!

## Posicionamiento avanzado

La forma predeterminada y más fácil de comenzar es tener un timbre de notificación flotante.

Si desea integrar el icono de notificaciones en su barra de navegación, simplemente coloque el siguiente fragmento de código HTML en el archivo de tema de su página de inicio. El ícono de la campana flotante se deshabilitará automáticamente si detectamos el fragmento de código HTML a continuación en su página web.

``` html
<a class="datacue-notification" datacue-notification-bell>
    <span class="datacue-show-notifications"></span>
    <span class="datacue-show-notifications-count"></span>
</a>
```

::: tip Tip
Puedes personalizar los nombres de las clases como deseas si desea realizar otras personalizaciones de diseño.
:::
