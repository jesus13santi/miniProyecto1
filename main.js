var imagenes = ["img/keyboard.jpg", "img/lapto.jpg", "img/macbook.jpg"],
  cont = 0;
let img = document.getElementById("fondo");
const btnSend = document.getElementById("btnEnviar");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("textarea");
const mainSectionContainer = document.getElementById("skills");

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

let newNombre = "";
let newEmail = "";
let newMensaje = "";

nombre.addEventListener("change", (event) => {
  newNombre = event.target.value;
});
email.addEventListener("change", (event) => {
  newEmail = event.target.value;
});
mensaje.addEventListener("change", (event) => {
  newMensaje = event.target.value;
});

btnSend.addEventListener("click", () => {
  if (newNombre == "" || newEmail == "" || newMensaje == "") {
    alert("Error al enviar el formulario");
  } else {
    console.log(`
    Nombre: ${newNombre}
    Email: ${newEmail}
    Mensaje: ${newMensaje}
    `);
    alert("Su solicitud ha sido enviada");
  }
});
const skills = [
  {
    Nombre: "Java",
    Porcentaje: 50,
  },
  {
    Nombre: "Phyton",
    Porcentaje: 80,
  },
  {
    Nombre: "HTML",
    Porcentaje: 70,
  },
  {
    Nombre: "CSS",
    Porcentaje: 80,
  },
  {
    Nombre: "JavaScript",
    Porcentaje: 10,
  },
  {
    Nombre: "Git",
    Porcentaje: 60,
  },
  {
    Nombre: "GitHub",
    Porcentaje: 50,
  },
];
