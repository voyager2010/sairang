

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

       

        button.classList.add("active");


        let filter = button.getAttribute("data-filter");


        galleryItems.forEach(function(item) {

            let category = item.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});




const lightbox = document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const closeBtn =
    document.getElementById("closeBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


let currentIndex = 0;




galleryItems.forEach(function(item, index) {

    item.addEventListener("click", function() {

        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("show");

    });

});




function showImage(index) {

    let item = galleryItems[index];

    let image = item.querySelector("img");

    let title = item.getAttribute("data-title");

    let description =
        item.getAttribute("data-description");


    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxTitle.textContent = title;

    lightboxDescription.textContent = description;

}




closeBtn.addEventListener("click", function() {

    lightbox.classList.remove("show");

});




nextBtn.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

});




prevBtn.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryItems.length - 1;

    }

    showImage(currentIndex);

});




lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});




document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("show")) {
        return;
    }


    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }


    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }

        showImage(currentIndex);

    }


    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }

        showImage(currentIndex);

    }

});




function scrollToGallery() {

    document.getElementById("gallery").scrollIntoView({

        behavior: "smooth"

    });

}

