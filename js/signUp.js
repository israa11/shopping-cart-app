let user = document.querySelector('input[type= "text"]');
let email = document.querySelector('input[type= "email"]');
let password = document.querySelector('input[type= "password"]');
let submit = document.querySelector('input[type= "submit"]');


submit.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(user.value !== "" && email.value !== "" && password.value !== ""){
      
        localStorage.setItem("username", user.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(()=>{
        window.location = "login.html";
    }, 500)
    }
   
})