

function retornarCardHTML(products) {
  return `<div class="div-card">
               <div class="prenda">
               <img src="${products.img}" alt="Imagen del producto">
               </div>
               <div class="prenda">
                  <h3>${products.name}</h3>
               </div>
               <div class="importe">
                   <p>$ ${products.precio}</p>
               </div>
               <div class="comprar"><button class="button button-outline" id="${products.id}">add</button></div>
          </div>`
}

function addProdCart() {
    const btns = document.querySelectorAll('button.button.button-outline')
    btns.forEach((btn)=> {
        btn.addEventListener('click', ()=> {
            let product = products.find((products)=> products.id === parseInt(btn.id))
            shoppingCart.push(product)
            console.table(shoppingCart)
        })
    })
}


function cargarProductos(array) {
  container.innerHTML = ""
  array.forEach((product)=> {
      container.innerHTML += retornarCardHTML(product)
  })
  addProdCart()
  buy()
}



cargarProductos(products)

function buy() {
  const btn = document.querySelectorAll('button.finishBuy')
  btn.forEach((button)=> {
  button.addEventListener('click', ()=> { 
    (shoppingCart.length > 0) 
      alert ("Usted ha comprado por una valor total de $" + shoppingCart.reduce((acc, products)=> acc + products.precio, 0))
    }) 
    })
}


