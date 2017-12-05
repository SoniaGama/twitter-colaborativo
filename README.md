# RETOS DE CÓDIGO
## Twitter
### Squad: CatCoders

En este reto se replicara la estructura del NewsFeed de Twitter, para ello se seguirá una flujo de varias versiones para enfocarnos de una manera más eficiente.

### Versión 0.0.1
Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
Agregar un evento de click al botón o de submit al formulario.
En el evento, obtener el texto.
Agregar el texto al HTML.

### Versión 0.0.2
No ingresar texto vacío (deshabilitar el botón de "twittear").
Contar la cantidad de caracteres de forma regresiva.

### Versión 0.0.3
Si pasa los 140 caracteres, deshabilitar el botón.
Si pasa los 120 caracteres, mostrar el contador con OTRO color.
Si pasa los 130 caracteres, mostrar el contador con OTRO color.
Si pasa los 140 caracteres, mostrar el contador en negativo.

### Versión 0.0.4
Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.

### Versión 0.0.5 (Extra)
Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica)

### Versión 0.0.6 (Extra)
Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm.


## Archivo html
- Creamos la estructura básica de un archivo html con el atributo lang en la etiqueta html.
- En el head agregamos el link para enlazar la fuente y el archivo css y el title con el nombre del proyecto.

- En el body creamos una sección general. con el id='container' para que contenga las tres secciones de la página:
1. Sección de presentación.
2. Sección de formulario y contador.
3. Sección dinámica que crea el tweet y la hora.
-  Por último enlazamos el archivo js.
Notas:

Le dimos al botón el atributo disabled para tenerlo desactivado por default.

Le dimos a 'counter' el valor por default de 140 para que cada que se termine de ejecutar la función del contador de caracteres pinte su valor original.

## Archivo js
#### Traemos elementos del html por sus id:
1. La sección general que contiene los elementos de la página(var = container).
2. El botón (var = button).
3. El textarea(var = textarea).
4. El contador de caracteres (var = span);

#### Creamos Elementos:
- Creamos en el documento la sección que contendrá los elementos dinámicos, el tweet y la hora(containerTweet).

#### Agregamos los eventos:
1. Evento click en el botón que llama a la función showTweet.
2. Evento keyup en el textarea que llama a la función toDisable.
3. Evento keyup en el textarea que llama a la función colorChangeCounter.
(Nota. Intentamos llamar a las dos funciones  en el evento keyup para no repetir código pero nos dimos cuenta que no funcionaba).

#### Declaramos las funciones que utilizaremos:
- La función toDisable evalúa la longitud del valor del textarea y desactiva el botón en caso de ser igual a 0 o ser mayor o igual a 141, y lo activa en el caso contrario.

- La función clear le da al textarea el valor de un string vacío, le agrega el atributo placeholder y le regresa al contador el valor de 140.

- La función showTweet:
1. Guarda el mensaje del usuario en la variable tweet
2. Crea un elemento dos elementos p.
3. Agregamos el contenido del tweet a nuestro elemento p tweetParagraph.
4. Agregamos en la variable n nuestra hora, con el método new Date y el método toLocaleTimeString la convertimos en hora local, con hour y minute definimos que el formato sea de dos dígitos.
5. Agregamos la var n como contenido en nuestro elemento p timeParagraph.
6. Agregamos como hijos a nuestros elementos para que se pinten en la página
- Primero la sección dinámica como hijo de la sección general container.
- Después a la sección dinámica le damos como hijo nuestro p que contiene el tweet.
- Y por último nuestro segundo elemento p que contiene la hora.
7. Mandamos llamar a nuestras funciones clear para limpiar el textarea y toDisable para deshabilitar el botón.

- La función colorChangeCounter:
1. Crea una variable que llama al span que contiene nuestro contador y le da el valor de la longitud del textarea.
2. Le da un valor de 140 y se resta a sí mismo su valor.
3. A la variable span le agrega el nuevo contenido resultado de la resta.
4. Dependiendo del valor que adquiera newCounter tendrá un color diferente, mantendrá su color negro mientras sea mayor a 20.
