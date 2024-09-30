let user = document.querySelector('input[type= "text"]');
let password = document.querySelector('input[type= "password"]');
let submit = document.querySelector('input[type= "submit"]');

let getUser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password")


submit.addEventListener("click" , (e)=>{
    e.preventDefault();

    if(user.value === getUser && password.value === getpassword){
        setTimeout(()=>{
            window.location = "index.html";
        }, 500)
    }

})