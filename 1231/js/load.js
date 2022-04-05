// JavaScript Document

$(document).ready(function(){
	

    //當他瀏覽器寬度>=768 會除掉class
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("#3box").removeClass("");
	});


    
});