let product = JSON.parse(localStorage.getItem("editProduct")) || ""
console.log(product)
let addproducts = JSON.parse(localStorage.getItem("add-products")) || [];
let data = JSON.parse(localStorage.getItem("addData")) ||productsDB;
let createbtn = document.querySelector(".create");
let addname = document.querySelector(".addname");
let addfile = document.querySelector(".addfile");

let adddesc = document.querySelector(".adddesc");
let productsize = document.getElementById("product-size")

function displayVal (){
    adddesc.value = product.desc ;
      addname.value = product.title;
    productsize.value = product.size;
createbtn.value = "Update";
}
displayVal()

createbtn.addEventListener("click", (e)=>{
  e.preventDefault()
  product.desc = adddesc.value;
  product.title = addname.value;
  product.size = productsize.value;
  data = data.map((el)=> el.id == product.id ? el = product : el);
  
  addproducts = addproducts.map((el) => el.id == product.id ? el = product : el)
  localStorage.setItem("add-products" , JSON.stringify(addproducts))
  localStorage.setItem("addData", JSON.stringify(data))
  localStorage.setItem("editProduct" , JSON.stringify(product))
  setTimeout(()=>{
    adddesc.value= "";
    addname.value = "";
    productsize.value = "";
    window.location = "index.html";


  }, 500)
})