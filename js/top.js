$(document).ready(function(){

    $('.top').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ){
            $('.top').slideDown(500);
        } else {
            $('.top').slideUp(300);
        }
    });

});