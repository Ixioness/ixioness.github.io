console.log("Script loaded and executed");

document.addEventListener("DOMContentLoaded", function(){
const photoContainer = document.querySelector('.car-photo-container');
const images = [
    "cars/Ford GT Gen2-.jpg", 
    "cars/GTR34 wide2.jpg",
    "cars/Ferrarieee.jpg",
    "cars/lLambo(10).jpg",
    "cars/Ferrari26.jpg",
    "cars/FinalF4088.jpg",
    "cars/Ferrari25.jpg",
    "cars/Mclaren13.jpg",
    "cars/Mclaren 765TL Grey.jpg",
    "cars/lBlue765lt-.jpg",
    "cars/The Porsche GT.jpg",
    "cars/Gtr50-D.jpg",
    "cars/765LT1.jpg",
    "cars/porsche 911s-D.jpg",
    "cars/911 Turbo.jpg",
    "cars/Cayman GT4-.jpg",
    "cars/McLarenP1.jpg",
    "cars/911 cerra2.jpg",
    "cars/Detail Lab51 .jpg",
    "cars/Detail Lab52.jpg",
    "cars/Ferrari 10.jpg",
    "cars/Ferrari 2 steering.jpg",
    "cars/Ferrari 3-.jpg",
    'cars/Ferrari 4.jpg',
    "cars/Ferrari7.jpg",
    "cars/Gt500.jpg",
    "cars/GT5002.jpg",
    "cars/GT5003.jpg",
    "cars/GTR34 68.jpg",
    "cars/GTR34 70.jpg",
    "cars/Lamborgini av.jpg",
    "cars/Lamborgini2.9.jpg",
    "cars/Mclaren600lt5.jpg",
    "cars/Mclaren600lt6.jpg",
    "cars/Porsche RS2.jpg",
    "cars/Porsche RS3.jpg",
    "cars/RollRose.jpg",
    "cars/Roooo.jpg",
    "cars/Turbo36-.jpg",
    "cars/Turbo362.jpg",
    "cars/Turbo364.jpg",
    "cars/Turbo367.jpg",
    "cars/918Spider1.jpg",
    "cars/918Spider2.jpg",
    "cars/918Spider3.jpg",
    "cars/Hurrican 2.jpg",
    "cars/Hurrican 3.jpg",
    "cars/Hurrican_.jpg",
    "cars/K20 Mr2.jpg",
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