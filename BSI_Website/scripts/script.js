
document.addEventListener("DOMContentLoaded", function(){
const photoContainer = document.querySelector('.photo-container');
const images = [
    "images/Yuna'sbirthday (3.1).jpg",
    "images/Thanh & Thuy (4).jpg",
    "images/Group(2012)(1).jpg",
    "images/Steven & Mandy's Family Photo Final.jpg",
    "images/Lea & Riley 1.0.jpg",
    "images/Final45-4.jpg",
    "images/Sayavong's Sister Selfie(3.5).jpg",
    "images/Anthony Chang's Family 1A.jpg",
    "images/Wedding3-2.jpg",
    "images/Bubbles1..jpg",
    "images/Wedding Group1.jpg",
    "images/Wedding view3.jpg",
    "images/Nijo Castle-.jpg",
    "images/Yuna & AivanMom4.jpg",
    "images/Aivan & Yuna (1).jpg",
    "images/Savannah Johnson Christmas Photo 5.jpg",
    "images/Yuna's head shot(1).jpg",
    "images/Aivan Valentine Head Shot (1).jpg",
    "images/Mclaren 600LT (1).jpg",
    "images/Ferarri F40 (1.0).jpg",
    "images/Lambo(2).jpg",
    "images/McLaren 765LT.jpg",
    "images/911 Turbo S9-.jpg",
    "images/Detail LAb24.jpg",
    "images/Detail LAb27-.jpg",
    "images/Kayla & matt (1).jpg",
    "images/Savannah Johnson Christmas Photo 16.jpg",
    "images/Steven & Mandy 2 Final.jpg",
    "images/Nikki's Valentine Head Shot (3).jpg",
    "images/Yuna Valentine(1).jpg",
    "images/Yuna's 8th birthday.jpg",
    "images/Yuna & Aivan3.jpg",
    "images/Asian Nyna(1.1).jpg",
    "images/Yuna 8.jpg",
    "images/Vy, Ethan & Evelyn 16.jpg",
    "images/Aivan Feb-4.jpg",
    "images/Susanna & Daughter 1.jpg",
    "images/Teresa & Joseph 's Moralejo Family (6).jpg",
];

images.forEach(imgSrc =>{
        const imgElement = document.createElement('img');
        imgElement.className = 'hidden';
        imgElement.src = imgSrc;
        imgElement.alt = 'Image';
        photoContainer.appendChild(imgElement);

    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else{
                entry.target.classList.remove('show');
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
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

