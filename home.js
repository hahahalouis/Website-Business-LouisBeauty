var nav = document.querySelector(".navBar");
var close_btm = document.querySelector(".close");
var narBar = document.querySelector(".narBar-container");


window.addEventListener("scroll", ()=>{
    const scrollY = window.scrollY;

    if (scrollY > 20){
        nav.classList.add("sticky");    
    }else{
        nav.classList.remove("sticky");
    }
})

close_btm.onclick = function(){
    narBar.classList.toggle("active");
    close_btm.classList.toggle("active");
}