$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    navText: ["<img src='../../static/images/Navigator/prev-button.png'>","<img src='../../static/images/Navigator/next-button.png'>"]
})