
let user = localStorage.getItem("username");
let email = localStorage.getItem("email");


document.querySelector('input[type="text"] ').value = user;
document.querySelector('input[type="email"] ').value = email;

document.querySelector('input[type="submit"]').addEventListener("click", (e)=>{
e.preventDefault();

user = document.querySelector('input[type="text"] ').value ;
email = document.querySelector('input[type="email"] ').value ;
localStorage.setItem("username", user);
localStorage.setItem("email", email);

setTimeout(()=>{
    
    window.location = "index.html";


  }, 500)
})