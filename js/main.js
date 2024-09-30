let productsContainer = document.querySelector(".products");
let sizes = document.getElementById("sizes")
let textInput = document.querySelector(".textInput");
let data = JSON.parse(localStorage.getItem("addData")) ||productsDB;
let badge = document.querySelector(".badge");

let userName = localStorage.getItem("username") || "";
let profilename = document.querySelector(".user");


function addproducts(data  ){

    productsContainer.innerHTML = "" ;

   
   
   data.map((element)=> {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<div><img src="${element.imageUrl}" /></div>
        <div class="text">
            <h2>${element.title}</h2>
            <p>${element.desc}</p>
            <span>Size: ${element.size} false</span></div>
        
      
           
        <div class="info">
            <button onclick="addTocartFunc(${element.id})">Add To Cart</button>
            <i class="fa-regular fa-heart heart ${element.liked == true ? "plusheart" : ""}" onclick="addToFavorite(${element.id})"></i>
        </div>`;
        productsContainer.appendChild(div)
   });


}
addproducts(data)


sizes.addEventListener("change", (e)=>{

let filtered = data.filter((el) => el.size.toLowerCase() == e.target.value.toLowerCase())

addproducts(filtered)
if(e.target.value === "All"){
    addproducts(data)
}

})

textInput.addEventListener("input", (e)=>{

let filtered = data.filter((el)=> el.title.includes(e.target.value));
addproducts(filtered)
})



let favoritesItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
 
  

function addToFavorite(id){
    if(userName){
      
    
        favItems = data.find((el)=> el.id == id);
        console.log(favItems) 
       // favItems.liked = true;
       if(favItems.liked == true){
        favItems.liked = false
        favoritesItems = favoritesItems.filter((el) => el.id !== favItems.id)
        favoritesItems = [...favoritesItems];
       }else{
        favItems.liked = true
        favoritesItems = favoritesItems.filter((el) => el.id !== favItems.id)
        favoritesItems = [...favoritesItems, favItems];
       }
   
        
      data.forEach(ele => {
       if(ele.id == favItems.id) {
        if(favItems.liked == true){
            ele.liked = true
        }else{
            ele.liked = false
        }
        
       }
        
      }); 
      addproducts(data)
      localStorage.setItem("addData" , JSON.stringify(data))
        localStorage.setItem("productsFavorite", JSON.stringify(favoritesItems));
    }else{

        window.location ="signUp.html"
    }
   
   
}



let cartItems = JSON.parse(localStorage.getItem("productsCart")) || [];
let cartsNum = localStorage.getItem("cartsnum") || "0" ;
console.log(cartsNum)
badge.innerText = cartsNum
function addTocartFunc(id){
    if(userName){
       
    
let cartItem = data.find((el) => el.id == id);
cartItems = cartItems.filter((el)=> el.id !== id);

cartItems = [...cartItems , cartItem];
cartsNum = cartItems.length;
badge.innerText = cartsNum


localStorage.setItem("cartsnum" ,cartsNum) 

localStorage.setItem("productsCart", JSON.stringify(cartItems))
    }else{
 window.location ="signUp.html"
    }
}
