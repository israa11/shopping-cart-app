let addproducts = JSON.parse(localStorage.getItem("add-products")) || [];
let productsContainer2 = document.querySelector(".products");
let data = JSON.parse(localStorage.getItem("addData")) ||productsDB;

console.log(addproducts)

function displayfav(){
    productsContainer2.innerHTML = "";
    
    addproducts.forEach(el =>{
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<div><img src="${el.imageUrl}" /></div>
            <div class="text">
                <h2>${el.title}</h2>
                <p>${el.desc}</p>
                <span>Size: ${el.size} false</span></div>
            
          
               
            <div class="info">
                <button onclick="removebtn(${el.id})">Remove From my products</button>
                <button onclick="editbtn(${el.id})">edit product</button>
            </div>`;
            productsContainer2.appendChild(div)
    })
    }
    displayfav()
   
    function removebtn(id){
        addproducts = addproducts.filter((el)=> el.id != id);
        displayfav()
        data = data.filter((el) => el.id != id);
       
        localStorage.setItem("addData", JSON.stringify(data));
        localStorage.setItem("add-products", JSON.stringify(addproducts))

    }

let product = JSON.parse(localStorage.getItem("editProduct")) || ""
    function editbtn(id){
    
       product = addproducts.find((el)=> el.id == id);
     
      localStorage.setItem("editProduct" , JSON.stringify(product));
      
      window.location = "editProduct.html";
   
     
    }