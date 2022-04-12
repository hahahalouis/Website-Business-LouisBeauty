var nav = document.querySelector(".navBar");
var close_btm = document.querySelector(".close");
var narBar = document.querySelector(".narBar-container");

close_btm.onclick = function(){
    narBar.classList.toggle("active");
    close_btm.classList.toggle("active");
}
