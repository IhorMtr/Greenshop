$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        1100: {
            items: 4
        }
    }

})