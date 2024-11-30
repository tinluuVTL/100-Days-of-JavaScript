let eyeIcon = document.getElementById("icon")
let password = document.getElementById("password")

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text"
        eyeIcon.src = "view.png"
    }
    else{
        password.type = "password"
        eyeIcon.src = "eye-close-1.png"
    }
}