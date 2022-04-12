const accordion = document.getElementsByClassName('contentBx');
var nav = document.querySelector(".navBar");
var close_btm = document.querySelector(".close");
var narBar = document.querySelector(".narBar-container");

for(i = 0; i < accordion.length;  i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}
close_btm.onclick = function(){
    narBar.classList.toggle("active");
    close_btm.classList.toggle("active");
}