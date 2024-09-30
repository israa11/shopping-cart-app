let logOut = document.querySelector(".logOut")
let maintitle = document.querySelector(".main-title")
let links = document.querySelector(".links")

 userName = localStorage.getItem("username") || "";
  profilename = document.querySelector(".user");
cartsNum= localStorage.getItem("cartsnum") || "0" ;
 badge = document.querySelector(".badge");
badge.innerText = cartsNum
if(userName){
    profilename.innerHTML = userName
    maintitle.style.visibility = "visible";
    links.style.visibility ="hidden"
    
}



logOut.addEventListener("click", ()=>{
    localStorage.removeItem("username")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    setTimeout(()=>{
window.location = "signUp.html"
    },500)
})