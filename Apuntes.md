# Apuntes

className

### Lunes 20 de Septiembre

Componente image

~~~
<Image
    src = " src "
    alt = "Texto alternativo"
    lazyload = "off" //Las imagenes tienen lazy load por defecto
/>
~~~

View.prop

Si no tiene .isRequired podria no estar y todo bien :)

i18n devuelve la traduccion de un texto, los parametros son el texto y las llaves que se remplazan

i18n.gettext('this is {0}, right {0}?', 'John');
// Este es John, Verdad John?

`<I18nProvider >`

Sirve para internacionalizar: adaptar a diferentes formas de hablar o diferentes monedas segun el pais donde se encuentra

Vimos

Como trabaja Nordic en el Cliente
Imagenes
Como comunicarnos con el back
PropTypes
i18n

** Ejercicio **
Traer una imagen de un sitio externo y mostrarla con el componente image

### Martes 20 de Septiembre

Accesibilidad

1. Perceptible
2. Operable 
3. Comprensible
4. Robusto

HTML Semantico

header

footer

main

figcaption va dentro de figure

article

section

address

time

