// dark mode light mode toggle
const themeToggle = document.getElementById("themeToggle");

document.body.classList.add("dark-theme");
themeToggle.classList.add("dark-mode");

themeToggle.addEventListener("click", () => {
    themeToggle.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-theme");
});

// Nested dropdown
$(document).ready(function () {

    $('.navbar-center .dropdown > .dropdown-toggle').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $menu = $(this).next('.dropdown-menu');

        // Toggle current menu only
        $menu.toggleClass('show');
        $(this).toggleClass('show');
    });

});

$(document).ready(function () {

    $('.navbar-center .dropdown > .dropdown-toggle').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).toggleClass('show');
        $(this).siblings('.dropdown-menu').toggleClass('show');
    });

});

// overlay 
document.addEventListener('DOMContentLoaded', function () {
    const navbarMenu = document.getElementById('navbar-menu');
    const overlay = document.querySelector('.overlay');

    navbarMenu.addEventListener('shown.bs.collapse', function () {
        overlay.classList.add('active');
    });

    navbarMenu.addEventListener('hidden.bs.collapse', function () {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function () {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarMenu);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});

// Split text animation
// gsap.registerPlugin(ScrollTrigger);

// const split = new SplitType(".animate", {
//     types: "lines, words"
// });

// gsap.from(split.words, {
//     yPercent: 100,
//     opacity: 0,
//     duration: 1.5,
//     stagger: 0.005,
//     ease: "power4.out",
//     scrollTrigger: {
//         trigger: ".animate",
//         start: "top 85%",
//         toggleActions: "play none none none"
//     }
// });

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".animate").forEach((element) => {
    const split = new SplitType(element, {
        types: "lines, words"
    });

    gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Loader
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";

    }, 500);
});

// Navbar
$(document).ready(function () {

    $('.side-menu a').on('click', function (e) {
        e.preventDefault();

        $('.sidebar').addClass('on');
        $('.navbar').addClass('sidebar-open');
    });

    $('.close-btn').on('click', function (e) {
        e.preventDefault();

        $('.sidebar').removeClass('on');
        $('.navbar').removeClass('sidebar-open');
    });
});

// Fixed navbar
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function handleSticky() {
        if (window.innerWidth >= 1024) {
            if (window.scrollY > 50) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.addEventListener("scroll", handleSticky);
    window.addEventListener("resize", handleSticky);

    handleSticky();
});

// Smooth scroll behavior for page
const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Slider section (hero slider)
const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev'
    },

    on: {
        init: function () {
            updateCounter(this);
        },
        slideChange: function () {
            updateCounter(this);
        }
    }
});

function updateCounter(swiper) {
    document.querySelector('.current-slide').textContent =
        swiper.realIndex + 1;

    document.querySelector('.total-slide').textContent =
        swiper.slides.length;
}

// $('.hero-slider').on('init', function (event, slick) {

//     $('.total-slide').text(
//         slick.slideCount < 10
//             ? + slick.slideCount
//             : slick.slideCount
//     );

//     $('.current-slide').text('1');
// });

// $('.hero-slider').on('afterChange', function (event, slick, currentSlide) {

//     let current = currentSlide + 1;

//     $('.current-slide').text(
//         current < 10
//             ? + current
//             : current
//     );
// });

// $('.hero-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     speed: 1000,
//     cssEase: 'ease-in-out',
//     prevArrow: $('.slide-prev'),
//     nextArrow: $('.slide-next')
// });

// Magnific popup
$(".popup-youtube").magnificPopup({
    type: "iframe",
});

// About section
const texts = document.querySelectorAll(".info .text");

window.addEventListener("scroll", () => {
    texts.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight;
        const end = windowHeight * 0.45;

        let progress = (start - rect.top) / (start - end);

        progress = Math.max(0, Math.min(1, progress));

        text.style.backgroundSize = `${progress * 100}% 100%`;
    });
});

// Service card
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.services-style-one-item');

    // Restore saved active card
    const activeIndex = localStorage.getItem('activeServiceCard');

    if (activeIndex !== null && cards[activeIndex]) {
        cards[activeIndex].classList.add('active');
    } else {
        cards[0].classList.add('active');
    }

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(item => item.classList.remove('active'));

            card.classList.add('active');

            localStorage.setItem('activeServiceCard', index);
        });
    });
});

// team section slider
$('.team-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
    $('.team-slider').slick('setPosition');
});

$(window).on('load', function () {
    $('.team-slider').slick('setPosition');
});

// testimonial slider
const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});

// Shape image
const section = document.querySelector('.testimonial-section');
const shapeImg = document.getElementById('shapeImg');

window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom > 0 && rect.top < windowHeight) {

        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);

        const translateY = 80 - (progress * 160);

        shapeImg.style.transform = `translate(0%, ${translateY}%)`;
    }
});

// Panel
gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {

    const panels = gsap.utils.toArray(".panel");
    const wrapper = document.querySelector(".panel-wrapper");

    const getScrollAmount = () =>
        wrapper.scrollWidth - window.innerWidth;

    const tween = gsap.to(wrapper, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
            trigger: ".parallax-panels",
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => "+=" + getScrollAmount(),
            invalidateOnRefresh: true
        }
    });

    return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
    };
});