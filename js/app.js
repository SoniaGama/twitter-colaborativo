//Traer elementos del html
var container = document.getElementById('container');
var button = document.getElementById('button');
var textarea = document.getElementById('message');
var span = document.getElementById("counter");

//Crear Elementos
var containerTweet = document.createElement('section');
//Agregar eventos
button.addEventListener('click', showTweet);//la madre de todos
textarea.addEventListener('keyup', toDisable);//desabilitar boton
/* Evento para que cuente los caracteres disponibles en el formulario
y  cambie el número del contador en base a ello */
textarea.addEventListener("keyup", colorChangeCounter);
//button.addEventListener(‘click’, textArea);



function toDisable(){
  event.preventDefault();
  var counter = textarea.value.length;
  //desabilitar boton
  if (counter == 0 || counter >= 141){
    button.disabled = true;
  }else{
    button.disabled = false;
  }
}

function clear(){
    textarea.value = '';
    textarea.setAttribute('placeholder','¿Qué estás pensando?');
    counter.textContent = '140';
}

function showTweet(event){
  event.preventDefault();
  var tweet = textarea.value;//variable que guarda el mensaje del usuario
  var tweetParagraph = document.createElement('p');//crear Elementos
  var timeParagraph =  document.createElement('p');//contenedor de reloj
  tweetParagraph.className = "twitterStyle"
  timeParagraph.className = "timeStyle"

  //agragamos contenido a los Elementos
  var textTweet = tweetParagraph.innerText = tweet; //agregar el mensaje del usuario como contenido del parrafo

  var d = new Date(); //agregar hora antes del comentario
  var n = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
  });

   timeParagraph.innerText = n;
   //agregar hijos
   container.appendChild(containerTweet);//agregamos como hijo una seccion
   containerTweet.appendChild(tweetParagraph);//a la seccion le agregamos omo hijo el parrafo
   containerTweet.insertBefore(timeParagraph, tweetParagraph);

  clear();//agregar funcion que limpie
  toDisable();

}

function colorChangeCounter(event){
  event.preventDefault();
 var span = document.getElementById("counter");
 var newCounter = textarea.value.length; // Longitud del texto ingresado
 newCounter = 140 - newCounter; // Nuevo contador
 span.textContent = newCounter; // Cambiando el contenido del elemento span
 // Cambiando el color en base a cuántos caracteres disponibles quedan
 if (newCounter < 20){
   span.style.color = "#FFF85A";
 }
 if(newCounter < 10){
   span.style.color = "#7BFCDE";
 }
   if(newCounter < 0){
   span.style.color = "white";
 }
 if(newCounter > 20){
   span.style.color = "black";
 }
}
