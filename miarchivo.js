
respuesta = prompt("Bienvenido a Gaming Shop, por favor dinos tu nombre!")

alert("Bienvenido " + respuesta + ", esperemos que disfrutes de nuestra pagina !")


function returnCardHTML(products) {
  return `<div class="div-card">
               <div class="game">
               <img src="${products.img}" alt="Imagen del producto">
               </div>
               <div class="game">
                  <h3>${products.name}</h3>
               </div>
               <div class="price">
                   <p>$ ${products.price}</p>
               </div>
               <div class="buy"><button class="button button-outline" id="${products.id}">Agregar al carrito</button></div>
          </div>`
}

function addProdCart() {
    const btns = document.querySelectorAll("button.button.button-outline")
    
    btns.forEach((btn)=> {
        btn.addEventListener("click", ()=> {
            let product = products.find((products)=> products.id === parseInt(btn.id))
            shoppingCart.push(product)
            console.table(shoppingCart)
            alert (product.name + " ha sigo agregado al carrito!" )
            
        })
    })
}


function addProducts(array) {
  container.innerHTML = ""
  array.forEach((product)=> {
      container.innerHTML += returnCardHTML(product)
  })
  addProdCart()
  buy()
}


function buy() {
  const btn = document.querySelectorAll("button.finishBuy")
  btn.forEach((button)=> {
    button.addEventListener("click", ()=> { 
      (shoppingCart.length > 0) 
      alert ("Usted ha comprado por una valor total de $" + shoppingCart.reduce((acc, products)=> acc + products.price, 0))
      confirm ("Si desea comprar algo mas por favor indice 'confirmar'")
      if (confirm = true) {
        alert("perfecto " + respuesta + ", puede seguir agregando productos al carrito de compra!")
      }
       else {
        alert("fue un gusto atenderte " + respuesta +"! esperamos verte pronto.")
        
       }
    }) 
  })
}""

addProducts(products)

