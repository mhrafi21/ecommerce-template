const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.getElementById("openMenu");

menuBtn.addEventListener("click" , ()=>{
    mobileNav.classList.toggle("active");
})

// image slider by JavaScript

let imgItems = ["./img/carousel-1.jpg","./img/carousel-2.jpg","./img/carousel-3.jpg"]
let img = document.querySelector("img");

count = 0;
function next(){
    count++;
    if(count >= imgItems.length){
        count = 0;
       
    }else{
        img.src = imgItems[count];
    }
  
}
function pre(){
    count--
    if(count < 0){
        count = imgItems.length - 1;
        img.src = imgItems[count];
    }else{
        img.src = imgItems[count];
    }
}
