let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
}

// --------------loginForm--------------
let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}

// ------------------search bar-----------------
let search = document.getElementById('search-btn');
let searchBar = document.querySelector('.search-Bar');

search.addEventListener('click', () => {
    searchBar.classList.toggle('active');
});
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }

};


let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

let scrollBtn = document.querySelector('.scroll');
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        right: 0,
        behavior: 'smooth',
    })
});

window.onscroll = () => {
    navbar.classList.remove('active');
    searchBar.classList.remove('active');

    if (window.scrollY > 700) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
}



// --------------------query form-----------
var queryForm = document.querySelector('.q-form');
var queryBtn = document.querySelector('.cont-us-btn');

queryBtn.addEventListener('click', () => {
    queryForm.classList.add('active');
});
document.querySelector('.q-form .cross').addEventListener('click', () => {
    queryForm.classList.remove('active');
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 9500,
        disableOnInnteration: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 500,
        disableOnInnteration: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".weekend", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ================singin sign up page===============
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//     container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//     container.classList.remove("sign-up-mode");
// });