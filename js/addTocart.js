let cartProducts = JSON.parse(localStorage.getItem("productsCart")) || [];
let productsContainer2 = document.querySelector(".products");
let cartsNum = localStorage.getItem("cartsnum") || "0" ;
console.log(cartProducts)

console.log(cartsNum)
function displayfav(){
    productsContainer2.innerHTML = "";
    
    cartProducts.forEach(el =>{
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<div><img src="${el.imageUrl}" /></div>
            <div class="text">
                <h2>${el.title}</h2>
                <p>${el.desc}</p>
                <span>Size: ${el.size} false</span></div>
            
          
               
            <div class="info">
                <button onclick="removebtn(${el.id})">Remove From carts</button>
              
            </div>`;
            productsContainer2.appendChild(div)
    })
    }
    displayfav()

    function removebtn(id){
        cartProducts = cartProducts.filter((el) => el.id != id);
        cartsNum = cartProducts.length
        localStorage.setItem("productsCart", JSON.stringify(cartProducts));
        localStorage.setItem("cartsnum" ,cartsNum) 

        displayfav()
    }