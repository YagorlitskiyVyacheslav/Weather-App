
function slider1(){
  $(document).width(function(){
      $('.five-days-weather-list').slick({
        arrows:true,
        // draggable: false,
         slidesToShow:5, 
         slidesToScroll:1,
         infinite:false,
         disabled: true,
         responsive: [
           {breakpoint: 768,settings: { slidesToShow: 3, slidesToScroll: 1 }},
           {breakpoint: 1800,settings: { slidesToShow: 5, slidesToScroll: 1 }}
         ]
      });
     });
}

function slider2(){
  $(document).width(function(){
      $('.hourly-weather-list').slick({
        arrows:true,
        draggable: false,
         slidesToShow:6, 
         slidesToScroll:1,
         infinite:false,
         responsive: [
           {breakpoint: 768,settings: { slidesToShow: 4, slidesToScroll: 1 }},
           {breakpoint: 1800,settings: { slidesToShow: 5, slidesToScroll: 1 }}
         ]
      });
     });
}
export 
{slider1,
  slider2
}