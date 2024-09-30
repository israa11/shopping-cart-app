
let user = localStorage.getItem("username");
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
let addproducts = JSON.parse(localStorage.getItem("add-products")) || [];
console.log(addproducts.length)
let userInfo = document.querySelector(".profile-page");

document.getElementById("username").innerHTML = user ;
document.getElementById("email").innerHTML = email ;

if(addproducts != 0){
  document.querySelector("#productsLength span").innerHTML = addproducts.length;
}
