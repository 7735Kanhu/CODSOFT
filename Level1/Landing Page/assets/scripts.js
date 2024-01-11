let navbtn = document.querySelector("#menu-btn");
let menu = document.querySelector("#menu-item");


navbtn.addEventListener("click",function(){
    if(menu.style.display == "flex"){

        menu.style.display="none";
    }else{
        menu.style.display="flex";

    }
    
})