require ('jquery');
require ('slick-carousel');
import $ from 'jquery';

 window.$ = window.jQuery = $;
 $(document).width(function(){
    $('.fiveDaysCityWeatherList').slick({
        arrows:true, // показать стрелки
        dots:false, // не показывать точки
        slidesToShow:3, // показывать по 3 слайда
      
    });
});
