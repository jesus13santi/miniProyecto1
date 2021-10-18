var imagenes = ["img/keyboard.jpg", "img/lapto.jpg", "img/macbook.jpg"],
  cont = 0;
let img = document.getElementById("fondo");

window.addEventListener("DOMContentLoaded", function () {
  console.log("El contenido se ha cargado");
  img.src = imagenes[0];
  function cambiarImagenes() {
    img.src = imagenes[cont];
    if (cont < 2) {
      cont++;
    } else {
      cont = 0;
    }
  }
  cambiarImagenes();
  setInterval(cambiarImagenes, 10000);
});

document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector(".box-home");
  carrousel(img);
});
