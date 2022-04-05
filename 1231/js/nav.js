// JavaScript Document

$(document).ready(function(){
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});
	
	//當他瀏覽器寬度>=768 會把他關起來
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});
	
});