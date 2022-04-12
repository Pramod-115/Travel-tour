$('.slider1').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

new WOW().init();

$(".fa-bars").click(()=> {
    console.log("chicked");
    $(".links").addClass("mobmenu");
})

$(".fa-xmark").click(()=> {
    console.log("hide");
    $(".links").removeClass("mobmenu");
})

$('.package_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$(window).scroll(() => {
    if ($(window).scrollTop() > 250) {
        $(".navbar").addClass("fixed");
        $(".up_btn").addClass("show");

    }
    else {
        $(".navbar").removeClass("fixed");
        $(".up_btn").removeClass("show");
    }
})

$(".up_btn").click(()=> {
    window.scrollTo({top: 0, behavior: 'smooth'});
})