
$(document).ready(function(){

    var owl = $('#events-carousel.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        dots: true,
        nav: true,
        margin:10,
        autoplay:false,
        autoplayTimeout:2500,
        autoplayHoverPause:true
    });
});


$(document).ready(function(){

    var owl = $('#style-items-carousel.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        dots: true,
        nav: false,
        margin:10,
        autoplay:false,
        autoplayTimeout:2500,
        autoplayHoverPause:true
    });
});
