$(function(){

	$('.checkbox').on('click',function(){
		$(this).toggleClass('active');
	});

	$('.radio').on('click',function(){
		$('.radio').removeClass('ractive');
		$(this).addClass('ractive');
	});

	$('.tab-control li').on('click',function(){
		$('.tab-control li').removeClass('active');
		$(this).addClass('active');
		$('.tab-container').removeClass('open');
		$('.' + $(this).attr('data-name')).addClass('open');
	});
});