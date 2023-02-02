const article = document.querySelector("#content");
 const button = document.querySelector("#read-more");

button.addEventListener("click", readMore);

function readMore() {
     if (article.className == "open") {
       // Ler menos
     article.className = "";
     button.innerHTML = "Show more"; // Mostrar mais
   } else {
     article.className = "open";
     button.innerHTML = "Show less"; // Mostrar menos
   }
}