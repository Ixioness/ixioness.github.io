
document.addEventListener("DOMContentLoaded", function(){

    const mq = window.matchMedia("(max-width: 500px)");

    if (mq.matches){
        const navCon = document.querySelector(".nav-container");
        const menuIcon = document.getElementById('menu-icon');
    
        menuIcon.addEventListener("click", function(){
            if (window.getComputedStyle(navCon).display === "none") {
                navCon.style.display = "block";
                navCon.classList.add("show");
                this.innerHTML = "X";
            }else{
                navCon.style.display = "none";
                navCon.classList.remove("show");
                this.innerHTML = '<img src="icons/menu-icon.png" alt="menu icon">';
            }
        })
        
    }
})