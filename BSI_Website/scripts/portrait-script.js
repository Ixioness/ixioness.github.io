
document.addEventListener("DOMContentLoaded", function(){
    const photoContainer = document.querySelector('.portrait-photo-container');
    const images = [
        "portraits/Nikki's Head Shot (1).jpg",
        "portraits/Head Shot(5).jpg",
        "portraits/Jason closeup3.jpg",
        "portraits/Jason Head Shot (1).34.jpg",
        "portraits/Head Shot(4).jpg",
        "portraits/Kylinn Chef.jpg",
        "portraits/HeadShots(8.2).jpg",
        "portraits/Wedding (6).jpg",
        "portraits/wedding(20)-.jpg",
        "portraits/Jason Sitting(4).jpg",
        "portraits/Samurai.jpg",
        "portraits/Jason Headshot(2).jpg",
        "portraits/HeadShots(6.1).jpg",
        "portraits/Brandon Valentine(1).jpg",
        "portraits/Chris (1).jpg",
        "portraits/Aivan's Head Shot (2).jpg",
        "portraits/Yuna's Head Shot (4).jpg",
        "portraits/Head Shot(1.1).jpg",
        "portraits/Asian Nyna(4).jpg",
        "portraits/Sayavong's Sisters (17).jpg",
        "portraits/Thanh & Thuy (1.0).jpg",
        "portraits/Steven & Emilia final.jpg",
        "portraits/Susana & Everly (21).jpg",
        "portraits/3 Kids-D.jpg",
        "portraits/Yuna anf Aivan(1)-.jpg",
        "portraits/Everly (4).jpg",
        "portraits/Dean (clean cut).jpg",
        "portraits/Sayavong's Family (12.1).jpg",
        "portraits/Sayavong's Sister 18.jpg",
        "portraits/Lajohna (1).jpg",
        "portraits/Duy (2).jpg",
        "portraits/Allen suits.jpg",
        "portraits/Joe Banda(1).jpg",
        "portraits/KlImports races.jpg"
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
    
    