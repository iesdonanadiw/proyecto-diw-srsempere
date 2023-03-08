// Función para generar un número aleatorio
const random = (num) => {
  return Math.floor(Math.random() * num);
}

// Función para generar un estilo aleatorio para cada copo de nieve
const snowStyle = () => {
  return `
    left:${random(100)}vw;
    font-size:${random(20) + 10}px;
    animation-duration:${random(5) + 5}s;
    animation-delay:${random(5)}s;
    z-index:${random(10)};
    color:white;
    `;
}

// Función para crear los copos de nieve
const createSnowflakes = () => {

 // Número de copos que queremos crear
 const number = random(20) + 10;

 // Creamos un div por cada copo
 for (let i = 0; i < number; i++) {

   // Creamos el elemento div
   const snowflake = document.createElement("div");

   // Le asignamos la clase snowflake
   snowflake.classList.add("snowflake");

   // Le asignamos el estilo aleatorio
   snowflake.style.cssText = snowStyle();

   // Le asignamos el contenido del div (un asterisco)
   snowflake.innerHTML = "*";

   // Añadimos el div al body del documento
   document.body.appendChild(snowflake);
 }
}

// Llamamos a la función cuando se carga la página
window.onload = createSnowflakes;
