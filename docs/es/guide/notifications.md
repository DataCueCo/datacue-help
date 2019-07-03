---
position: 4
summary: Configura tus notificaciones web
---

# Notificaciones

Las ventanas emergentes conducen a una experiencia de usuario desagradable. En primer lugar, porque están diseñadas para interrumpir y segundo, pues a menudo no son relevantes. En su lugar,  mejor simplemente informar a los usuarios que hay una notificación que puede interesarles y darles la opción de hacer click en ella si así lo desean. Esas notificaciones deben ser relevantes para que los usuarios estén agradecidos de verla, en lugar de estar molestos.

DataCue puede mostrar notificaciones personalizadas a un usuario si un producto que vieron recientemente está:

- Bajo en stock
- Con nuevo stock
- En descuento (¡Yay! Es lo que más le gusta a la gente)

## Inicio rápido

1. Inicia sesión en tu panel de control DataCue. Haz click en Notificaciones.
2. Personaliza la configuración como desees (consulta el capítulo siguiente para obtener una descripción) o deje los valores predeterminados como están. ¡Eso es todo!

## Configura tus notificaciones

Puedes utilizar tres configuraciones en tu panel de notificaciones:

1. **Posición de la campana de notificación**: la campana es el ícono con que notificamos a tu visita. Puedes elegir situarla en la esquina superior izquierda, superior derecha, inferior izquierda o inferior derecha de tu sitio web (Consulta el [siguiente tema] (# posicionamiento avanzado) para opciones más avanzadas).

2. **Color del panel**: el panel es la ventana que se despliega cuando tu visita hace click en el ícono de la campana. Te sugerimos un color que coincida con los colores de tu sitio. Si eres un desarrollador, no dudes en anular el CSS que usamos para realizar cambios de diseño más avanzados.

3. **Idioma**: seleccione el idioma que quieras para notificar, entre inglés o español. Si deseas otro idioma, ¡solo haznos saber!

## Posicionamiento avanzado

La forma predeterminada y más fácil de comenzar es tener un ícono de notificación flotante.

Si deseas integrar el icono de notificaciones a tu barra de navegación, dejándolo fijo, simplemente inserta el siguiente fragmento de código HTML en el archivo de tema de tu página de inicio. El ícono de la campana flotante se deshabilitará automáticamente cuando detectemos este código en tu página web.

``` html
<a class="datacue-notification" datacue-notification-bell>
    <span class="datacue-show-notifications"></span>
    <span class="datacue-show-notifications-count"></span>
</a>
```

::: tip Tip
¿Eres desarrollador? Puedes personalizar los nombres de las clases como desees.
:::
