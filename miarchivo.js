
/* Constantes */

const iva = [1.21]
const sevenDaysToDie = [2000]
const assasinsCreed = [1360]
const evilWest = [2360]
const farmingSimulator = [4620]
const mountAndBlade = [822]
const residentEvil = [3200]
const superHot = [4500]
const terraria = [1000]

/* Funciones */

let username = prompt("Bienvenid@, por favor dinos tu nombre:");
  console.log("Hola " + username)

let costoDeEnvio = prompt("Indicanos tu provincia por favor (NO USAR ACENTOS NI ESPACIOS)")
  .toLowerCase(prompt)
  console.log (costoDeEnvio)
  
if (costoDeEnvio === "cordoba") {
    costoDeEnvio = 300
  } else if  (costoDeEnvio === "buenosaires") {
    costoDeEnvio = 500
  } else if  (costoDeEnvio === "santafe") {
    costoDeEnvio = 400
  } else if  (costoDeEnvio === "entrerios") {
    costoDeEnvio = 600
  } else if  (costoDeEnvio === "tucuman") {
    costoDeEnvio = 750
  } else if  (costoDeEnvio === "tierradelfuego") {
    costoDeEnvio = 1200
  } else {
    alert("Error, por favor refresca la pagina❌")
  }

function cuotas() {
    console.log("Tenemos hasta 3 cuotas sin interes 🤩");
    for (let i = 1; i <= 3; i++) {
      console.log(i + " cuota(s) sin interes");
    }
}

function consultarPrecios(productos) {
  switch (productos) {
    case "1":
      console.log("Seven Days To Die vale $" + ((sevenDaysToDie) * (iva) * 0.7 + (costoDeEnvio)));
      break;
    case "2":
      console.log("Assasins Creed Odissey vale $" + ((assasinsCreed) * (iva) + (costoDeEnvio)));
      break;
    case "3":
      console.log("Evil West vale $" + ((evilWest) * (iva) + (costoDeEnvio)));
      break;
    case "4":
      console.log("Farming Simulator 2022 vale $" + ((farmingSimulator) * (iva) + (costoDeEnvio)));
      break;
    case "5":
      console.log("Mount and Blade 2 Bannerlord vale $" + ((mountAndBlade) * (iva) + (costoDeEnvio)));
      break;
    case "6":
      console.log("Resident Evil Village vale $" + ((residentEvil) * (iva) + (costoDeEnvio)));
      break;
    case "7":
      console.log("Super Hot vale $" + ((superHot) * (iva) + (costoDeEnvio)));
      break;
    case "8":
      console.log("Terraria vale $" + ((terraria) * (iva) + (costoDeEnvio)));
      break;
    default:
      console.warn("No logro encontrar ese producto ❌");
  }
}

 function comprarProducto() {
  let comprar = confirm("¿Le gustaria adquirir alguno de nuestros productos?")
  if (comprar === true) {
      let productos = prompt("Ingresa el código del producto que desea comprar:")
          consultarPrecios(productos)
          cuotas()
  } else {
      console.warn("Perfecto!, estamos a su disposicion")
  }
}
 
