const container = document.getElementById("cardContainer");

let scrollAmount = 0;
const cardWidth = 300; 

setInterval(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        
        container.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        
        container.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    }
}, 3000);




function changeTab(region, button){

    let sections = document.querySelectorAll(".destination-box");

    sections.forEach(function(section){
        section.classList.remove("show");
    });

    document.getElementById(region).classList.add("show");

    let buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    button.classList.add("active");
}