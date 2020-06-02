var ajs = document.getElementById("ajs-modal");
var stickyfeedback = document.getElementById("stickyfeedback");
var close = document.querySelector(".closePopupupContact");
var menu = document.querySelector(".ocmenu");
var colmenu = document.querySelector(".colmenu");
var rowInColmenu = document.querySelector(".colmenu>span")

stickyfeedback.addEventListener("click", function(){
    ajs.style.display = "block";
})

close.addEventListener("click", function(){
    ajs.style.display = "none";
})

menu.addEventListener("click", function(){
    if(screen.width <= 700){
        colmenu.style.display = "block";
    }
})

rowInColmenu.addEventListener("click", function(){
    if(screen.width <= 700){
        colmenu.style.display = "none";
    }
})


