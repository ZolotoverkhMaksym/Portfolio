// Tabs - section "Our Services"
const ul = document.querySelector(".tabs");
ul.addEventListener("click", function (ev) {
    let data = ev.target.dataset.tab;

    document
        .querySelector(".active-content")
        .classList.remove("active-content");
    document.querySelector(".active-tab").classList.remove("active-tab");

    document
        .querySelector(`[data-li = ${data}]`)
        .classList.add("active-content");

    ev.target.classList.add("active-tab");
});

// Filtrable Gallery Portfolio - section "Our Amazing Work"
const filterCards = document.querySelectorAll(".portfolio-card");
const portfolioBtns = document.querySelector(".portfolio-btns");
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector(".loader");
let currFilter = "all";
let cardsNum = 12;

function showLoader() {
    loadMoreBtn.classList.add("hide");
    loader.classList.remove("hide");
}
function hideLoader() {
    loadMoreBtn.classList.remove("hide");
    loader.classList.add("hide");
}

loadMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();

    showLoader();
    setTimeout(() => {
        cardsNum += 12;
        hideLoader();
        showCards(currFilter);
    }, 3000);
});

portfolioBtns.addEventListener("click", function (event) {
    const currentBtn = document.querySelector(".portfolio-btn-active");
    currentBtn.classList.remove("portfolio-btn-active");
    event.target.classList.add("portfolio-btn-active");

    let filterBtns = event.target.dataset.filter;
    cardsNum = 12;
    currFilter = filterBtns;
    showCards(filterBtns);
});

function showCards(filter = "all") {
    let j = 0;

    for (let i = 0; i < filterCards.length; i++) {
        if (
            (filterCards[i].classList.contains(filter) || filter == "all") &&
            j < cardsNum
        ) {
            j++;
            filterCards[i].classList.remove("hide");
        } else {
            filterCards[i].classList.add("hide");
        }
    }

    if (j < cardsNum) {
        loadMoreBtn.classList.add("hide");
    } else {
        loadMoreBtn.classList.remove("hide");
    }
}

showCards();

// Testimonial slider - section "About Ham"
const slides = document.querySelectorAll(".slide"),
    thumbnails = document.querySelectorAll(".thumbnail"),
    leftArrow = document.querySelector(".left-arrow"),
    rightArrow = document.querySelector(".right-arrow");

let currentSlide = 0,
    currentActive = 0,
    testimTimer;

window.onload = function () {
    function playSlide(slide) {
        for (let k = 0; k < thumbnails.length; k++) {
            slides[k].classList.remove("active");
            thumbnails[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = slides.length - 1;
        }

        if (slide > slides.length - 1) {
            slide = currentSlide = 0;
        }

        slides[slide].classList.add("active");
        thumbnails[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, 4000);
    }

    leftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
    });

    rightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
    });

    for (let l = 0; l < thumbnails.length; l++) {
        thumbnails[l].addEventListener("click", function () {
            playSlide((currentSlide = Array.from(thumbnails).indexOf(this)));
        });
    }

    playSlide(currentSlide);
};
