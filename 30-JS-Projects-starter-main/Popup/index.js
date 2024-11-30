let submit = document.getElementById("submit")
let close = document.getElementById("close")
let popup = document.getElementById("popup")

submit.onclick = function(){
    popup.classList.add("openPopup")
}

close.onclick = function(){
    popup.classList.remove("openPopup")
}