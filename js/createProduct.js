let createbtn = document.querySelector(".create");
let addname = document.querySelector(".addname");
let addfile = document.querySelector(".addfile");

let adddesc = document.querySelector(".adddesc");
let productsize = document.getElementById("product-size")
 data = JSON.parse(localStorage.getItem("addData")) || productsDB;
 let addproducts = JSON.parse(localStorage.getItem("add-products")) || [];
 //console.log(data[data.length -1].id +1)
createbtn.addEventListener("click" , (e)=>{
    e.preventDefault()
if(addname.value !== "" && adddesc.value  !== "" && productsize.value !== ""){
    let addproduct = {
        id: data[data.length -1].id +1 ,
        title : addname.value,
        desc: adddesc.value,
        size: productsize.value 
    }
data = [...data , addproduct];
localStorage.setItem("addData" , JSON.stringify(data));

addproducts = [...addproducts, addproduct];
console.log(addproducts)
localStorage.setItem("add-products", JSON.stringify(addproducts));

}

setTimeout(()=>{
    window.location = "index.html";
}, 500)
})