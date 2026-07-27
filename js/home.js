const container = document.getElementById("cardContainer");

setInterval(() => {
    container.scrollLeft += 300;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
    }
}, 2000);




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