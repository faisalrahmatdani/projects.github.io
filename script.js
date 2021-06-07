$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
   
    e.preventDefault() ;
   });


//    about 
$(window).on('load', function() {
    $('.kiri').addClass('pmuncul');
    $('.kanan').addClass('pmuncul');
});



   //    parallax
$(window). scroll(function(){
    var wScroll = $(this).scrollTop();
   
    // jumbotron
        $('.jumbotron img').css({
            'transform' : 'translate(0px, '+ wScroll/4 +'%)'
        });
    
        $('.jumbotron h1').css({
            'transform' : 'translate(0px, '+ wScroll/2 +'%)'
        });
    
        $('.jumbotron p').css({
            'transform' : 'translate(0px, '+ wScroll/2 +'%)'
        });



        // porfolio
        if( wScroll > $('.porfolio').offset().top - 650 ) {
            $('.porfolio .thumbnail').each(function(i) {
                setTimeout(function() {
                    $('.porfolio .thumbnail').eq(i).addClass('muncul');  
                }, 400 * (i+1));
            });
            // 
        }


});



   