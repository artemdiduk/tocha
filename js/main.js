$(function () {
    
    $('.reviews__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1142,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
        ]

    });

    $('.header__menu-burger').click(function(){
        $(this).toggleClass('active');
        $('.header__menu-list').toggleClass('active');
    });
    
    
   

  
    
})
