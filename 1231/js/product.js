//JavaScriptDocument

$(document).ready(function(){
	
    $(".box").eq(0).addClass("ch_bg");
    
    $(".content").eq(0).show();

$(".box").click(function(){
    
    var _index = $(this).index();
    
    $(this).addClass("ch_bg").siblings().removeClass("ch_bg");

    $(".content").eq(_index).fadeIn(1500).siblings().fadeOut(500);
    
});	

//group
$(".fancybox").fancybox({
    openEffect	: 'none', //'elastic', 'fade' or 'none'
    closeEffect	: 'none'
});


//single
$(".linktext").fancybox({
    openEffect	: 'elastic',
    closeEffect	: 'elastic',

    helpers : {
        title : {
            type : 'float' // 'float', 'inside', 'outside' or 'over'
        }
    }
});

});

