$(".carousel-button-right").live('click',function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
});
   
$(".carousel-button-left").live('click',function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').width();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"}); 
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove(); 
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').width();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200); 
   setTimeout(function () { 
      $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }, 300);
}