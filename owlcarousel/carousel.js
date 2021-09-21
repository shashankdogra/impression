$(document).ready(function(){

    $('.owl-carousel').each(function(){
        var margin = $(this).data('margin');
        var tablet = $(this).data('tablet');
        var mobile = $(this).data('mobile');
        $(this).owlCarousel({
            items:3,
            loop:true,
            margin:margin,
            autoplay:false,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:mobile
                },
                600:{
                    items:tablet
                },
                1300:{
                    items:3
                }
            },
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })
    });
        
});
