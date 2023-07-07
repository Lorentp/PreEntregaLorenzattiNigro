const shoppingCart = []

const products = [{ id: 1, img: "Imagenes/7daystodie.jpg" ,name: '7 Days to Die', precio: 2599},
                  { id: 2, img: "Imagenes/assasingcreed.jpg" ,name: 'Bermuda playera', precio: 3859},
                  { id: 4, img: "Imagenes/evilwest.jpg" ,name: 'Pantalón de jean', precio: 8599},
                  { id: 5, img: "Imagenes/farming22.jpg" ,name: 'Camisa Office', precio: 4894},
                  { id: 6, img: "Imagenes/mountandblade.jpg" ,name: 'Abrigo Gadget', precio: 9748},
                  { id: 7, img: "Imagenes/residentevil.jpg" ,name: 'Sombrero de gala', precio: 3281},
                  { id: 8, img: "Imagenes/superhot.jpg" ,name: 'Musculosa runner', precio: 1938},
                  { id: 9, img: "Imagenes/terraria.jpg" ,name: 'Malla enteriza Lafelí', precio: 3122},
]

const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')
/*const btnFinishBuy = document.querySelector("button.finishBuy")*/
