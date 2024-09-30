let productsContainer2 = document.querySelector(".products");

let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || []
   
function displayfav(){
productsContainer2.innerHTML = "";

products.forEach(el =>{
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<div><img src="${el.imageUrl}" /></div>
        <div class="text">
            <h2>${el.title}</h2>
            <p>${el.desc}</p>
            <span>Size: ${el.size} false</span></div>
        
      
           
        <div class="info">
            <button onclick="removebtn(${el.id})">Remove From Favorites</button>
          
        </div>`;
        productsContainer2.appendChild(div)
})
}
displayfav()


function removebtn(id) {
 
   products = products.filter((el)=> el.id !== id);
 
  
   displayfav(products);
   localStorage.setItem("productsFavorite" , JSON.stringify(products))
}