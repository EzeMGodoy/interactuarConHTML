//* ---------> DEFINCION DE CLASES <--------

class Capacitacion {
  constructor(id, titulo, parrafo, precio, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.parrafo = parrafo;
    this.precio = precio;
    this.imagen = imagen;
  }
}

class Carrito {
  constructor(id, titulo, precio, cantidad) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const capacitaciones = [];

let eft = new Capacitacion(
  1,
  "Técnica de Liberación Emocional (EFT)",
  "La técnica de Liberación Emocional o EFT, conocida como TAPPING es una herramienta revolucionaria de sanación. La misma proporciona resultados en problemas de rendimiento...",
  "$4000",
  "img/capacitacion1.webp"
);

let realPotencial = new Capacitacion(
  2,
  "El real potencial de todos",
  "Para percibir y sentir la realidad que nos rodea y nos integra,sin distorsionarla, se necesita de energía sin ella insensibilizamos los mensajes que nos envía nuestro cuerpo. Con la energía correcta podrás sanarte a ti mismo.",
  "$4500",
  "img/capacitacion2.webp"
);

let hereda = new Capacitacion(
  3,
  "Lo que se hereda no se roba",
  "Así como heredamos aspectos físicos, no solo de nuestros padres, sino de abuelos, bisabuelos y más, de igual manera se heredan las EMOCIONES de distintas ramas de nuestro árbol genealógico. Es importante destacar que...",
  "$3700",
  "img/capacitacion3.webp"
);

let emociones = new Capacitacion(
  4,
  "¿Por qué las emociones quedan atrapadas?",
  "Cuando no somos conscientes de nuestras emociones las mismas quedan atrapadas, almacenándose en nuestro inconsciente debido a la falta de recursos paraa frontar determinadas situaciones que hemos vivido de...",
  "$4200",
  "img/capacitacion4.webp"
);

let bloqueosEnergeticos = new Capacitacion(
  5,
  "¿Cómo puedo liberar los bloqueos energéticos?",
  "Para poder liberar los bloqueos energéticos debemos cambiar nuestros pensamientos y convertirlos en más positivos y la energía debe fluir por nuestro cuerpo de manera equilibrada...",
  "$4000",
  "img/capacitacion5.webp"
);

let perdonarComprender = new Capacitacion(
  6,
  "Para PERDONAR hay que COMPRENDER",
  "Debemos comprender que nuestra identidad está marcada por nuestras actitudes y que muchas de ellas son automáticas, por más propias que las sintamos, la mayoría no lo son...",
  "$4300",
  "img/capacitacion6.webp"
);

capacitaciones.push(eft, realPotencial, hereda, emociones, bloqueosEnergeticos, perdonarComprender);

const contenedorCapacitaciones = document.getElementById(
  "contenidoCapacitaciones"
);

let carrito = [];

function mostrarCards() {
  capacitaciones.forEach((capacitacion) => {
    let tarjetaItem = document.createElement("article");
    tarjetaItem.classList.add("tarjetaItem");

    let tarjetaContenido = document.createElement("div");
    tarjetaContenido.classList.add("tarjetaContenido");

    let tarjetaImagen = document.createElement("figure");
    tarjetaImagen.classList.add("tarjetaImagen");

    let imagen = document.createElement("img");
    imagen.classList.add("tarjetaImg");
    imagen.setAttribute("src", `${capacitacion.imagen}`);

    tarjetaImagen.appendChild(imagen);
    tarjetaContenido.appendChild(tarjetaImagen);
    tarjetaItem.appendChild(tarjetaContenido);

    let tarjetaTexto = document.createElement("div");
    tarjetaTexto.classList.add("tarjetaTexto");

    let tarjetaTitulo = document.createElement("p");
    tarjetaTitulo.classList.add("tarjetaTitulo");
    tarjetaTitulo.classList.add("fs-5");
    tarjetaTitulo.innerText = `${capacitacion.titulo}`;

    let tarjetaParrafo = document.createElement("p");
    tarjetaParrafo.classList.add("tarjetaParrafo");
    tarjetaParrafo.innerText = `${capacitacion.parrafo}`;

    let tarjetaPrecio = document.createElement("p");
    tarjetaPrecio.classList.add("tarjetaPrecio");
    tarjetaPrecio.innerText = `Precio: ${capacitacion.precio}`;

    tarjetaTexto.appendChild(tarjetaTitulo);
    tarjetaTexto.appendChild(tarjetaParrafo);
    tarjetaTexto.appendChild(tarjetaPrecio);

    tarjetaContenido.appendChild(tarjetaTexto);

    let capacitacionesBoton = document.createElement("div");
    capacitacionesBoton.classList.add("capacitacionesBoton");

    let botonSeguir = document.createElement("button");
    botonSeguir.classList.add("botonSeguir");
    botonSeguir.id = `comprar${capacitacion.id}`;
    botonSeguir.innerText = "Comprar";

    capacitacionesBoton.appendChild(botonSeguir);

    tarjetaItem.appendChild(capacitacionesBoton);

    contenedorCapacitaciones.appendChild(tarjetaItem);

    const botonCompra = document.getElementById(`comprar${capacitacion.id}`);

    botonCompra.addEventListener("click", () => {
      agregarProducto(capacitacion);
    });
  });
}

mostrarCards();

function agregarProducto(producto) {
  if (carrito.some((item) => item.id == producto.id)) {
    let miProducto = carrito.find((item) => item.id == producto.id);
    miProducto.cantidad++;
  } else {
    let nuevoProducto = new Carrito(
      producto.id,
      producto.titulo,
      producto.precio,
      1
    );
    carrito.push(nuevoProducto);
  }

  console.log(carrito);
}

// class Carrito {
//   constructor(usuario, capacitaciones) {
//     this.fecha = new Date(); // agrego la fecha del momento en que se crea
//     this.usuario = usuario;
//     this.capacitaciones = capacitaciones;
//   }

//   agregarCapacitacion(capa) {
//     this.capacitaciones.push(capa);
//   }

//   totalCarrito() {
//     let total = 0.0;

//     for (let i = 0; i < this.capacitaciones.length; i++) {
//       total = total + this.capacitaciones[i].precio; //! ver si uso REDUCE
//     }
//     return total;
//   }

//   descuento(metodoPago) {
//     let precioDescuento = 0.0;
//     switch (metodoPago) {
//       case "tarjeta":
//         precioDescuento =
//           this.totalCarrito() + this.totalCarrito() * (10 / 100);
//         break;
//       case "efectivo":
//         precioDescuento =
//           this.totalCarrito() - this.totalCarrito() * (10 / 100);
//         break;
//       default:
//         precioDescuento = this.totalCarrito();
//         break;
//     }
//     return precioDescuento;
//   }

//   resumenCompra() {
//     if (this.capacitaciones.length == 0) {
//       return "El carrito se encuentra vacío";
//     }

//     let msj = `El carrito contiene ${this.capacitaciones.length} cursos:\n`;

//     this.capacitaciones.forEach((curso) => {
//       msj += ` - ${curso.nombre}: $ ${curso.precio}\n`;
//     });

//     msj += `\nMonto Total: $${this.totalCarrito()}`;

//     return msj;
//   }
// }

//* ------------> DEFINICION DE FUNCIONES <---------------------

// function pedirDato() {
//   let nombre = "";

//   while (nombre != "0") {
//     nombre = prompt(
//       "Ingrese nombre del curso que desea agregar:\n 1 - eft\n 2 - biodescodificacion\n 3 - pendulo\n 4 - biotrading\n (0 para finalizar)"
//     );

//     if (nombre == "0") {
//       break;
//     }

//     let precio = parseFloat(prompt("Ingrese precio del curso:"));

//     let curso = new Capacitacion(nombre, precio);
//     carro.agregarCapacitacion(curso);
//   }

//   let metodoPago = prompt(
//     "Qué metodo de pago utilizaras?\ntarjeta (+10%)\nefectivo(-10%)"
//   );
//   precioFinal = carro.descuento(metodoPago);
// }

// * -----------> COMIENZO DEL PROGRAMA <---------

// let inicio = confirm(
//   "Bienvenido a nuestra tienda, deseas realizar alguna compra?"
// );

// mostrarCards();

// let precioFinal = 0.0;

// let carro = new Carrito("pepito", []);

// if (inicio == true) {
//   pedirDato();
//   alert(carro.resumenCompra());
//   alert(`El precio a pagar es $${precioFinal}`)
// } else {
//   alert("Gracias, vuelva pronto")
// }
