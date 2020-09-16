import  'slick-carousel/slick/slick.min'
import $ from 'jquery';
 window.$ = window.jQuery = $;

const slider= $(document).width(function(){
  $('.five-days-weather-list').slick({
      arrows:true,
     draggable: false,
      slidesToShow:5, 
      slidesToScroll:1,
      infinite:false,
      responsive: [
        {breakpoint: 768,settings: { slidesToShow: 3, slidesToScroll: 1 }},
        { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      ]
  });
});

export {
  slider
}
