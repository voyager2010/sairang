const container = document.getElementById("cardContainer");

setInterval(() => {
    container.scrollLeft += 300;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
    }
}, 2000);




function changeTab(id, button) {

    document.getElementById("north").classList.remove("show");
    document.getElementById("south").classList.remove("show");
    document.getElementById("east").classList.remove("show");
    document.getElementById("west").classList.remove("show");

    document.getElementById(id).classList.add("show");

    let buttons = document.getElementsByClassName("tab-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    button.classList.add("active");
}