require ('jquery');
require ('slick-carousel');

$(document).width(function(){
    $('.hourly-weather-list').slick({
      arrows:true,
     draggable: false,
      slidesToShow:6, 
      slidesToScroll:6,
      infinite:false,
      responsive: [
        {breakpoint: 768,settings: { slidesToShow: 3, slidesToScroll: 1 }},
        { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      ]
  });
})