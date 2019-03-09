$(document).ready(function($){

	/* слайдер нижний прокрутки */
	var scrollSlider="290"; // шаг прокрутки складывается из ширины .gals_item плюс отступ между li
    var is_animate=false;// анимация работает в данную секунду
    var start_otstup=$('#slider_down ul').css('left'); // нулевая начальная позиция ряда
    var time_interval=5000; // временной интервал прокрутки  

	  function autoplay_left(){
   if(is_animate) return;
    is_animate = true;
     $("#slider_down>ul").animate({left: "-="+scrollSlider}, 500, function(){
     
      $('#slider_down>ul>li:first').appendTo($("#slider_down>ul"));
      
      $("#slider_down>ul").css({'left': start_otstup});
     is_animate = false;
    });
   
  }
    

  var timerId = setTimeout(function tick() {   // циклическая  прокрутка слайдера с временным интервалом
   autoplay_left();
  timerId = setTimeout(tick, time_interval);
}, time_interval);


	$( ".strelki:eq(0)" ).click(function() { //прокрутка при клике по стрелке влево 
   if(is_animate) return;

   is_animate=true;
 
  $( "#slider_down>ul" ).animate({
    
    left: "-="+scrollSlider,
   
  }, 500, function() {
    // Animation complete.
     $('#slider_down>ul>li:first').appendTo($("#slider_down>ul"));
      
      $("#slider_down>ul").css({'left': start_otstup});
     is_animate = false;
  });
  
});// end прокрутка при клике по стрелке влево

$( ".strelki:eq(1)" ).click(function() {  //прокрутка при клике по стрелке вправо
  if (is_animate) return;
  is_animate=true;
  $('#slider_down>ul>li:last').prependTo($("#slider_down>ul"));
  $("#slider_down>ul").css({'left': '-='+scrollSlider});
 $( "#slider_down>ul" ).animate({
    
    left: "+="+scrollSlider,
   
  }, 500, function() {
    // Animation complete.
     
     //$('#slider_down>ul>li:last').prependTo($("#slider_down>ul"));
      
      //$("#slider_down>ul").css({'left': start_otstup});
     is_animate = false;
  });
}); // end прокрутка при клике по стрелке вправо
/* end of слайдер нижний прокрутки */

});// последняя скобка ready 
