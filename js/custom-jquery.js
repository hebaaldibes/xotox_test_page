$(document).ready(function(){
	$(".navs").on('click', function(e){
		$(".main-menu").hide();	
		$(".sub-menu").hide();	
		if ($(this).hasClass("active")) {
			$(this).children(".main-menu").hide();
			$(this).children(".right-arrow").attr('src','images/right-arrow.png');	
			$(this).removeClass("active"); 
		}
		else{
			$(".navs").removeClass("active");
			$(".navs").children(".right-arrow").attr('src','images/right-arrow.png');	
			$(this).addClass("active"); 
			$(this).children(".main-menu").show();
			$(this).children(".right-arrow").attr('src','images/bottom-arrow.png');	

		}
	});

	$(".sub-list").on("click", function(e) {
		var height = $(this).parent(".main-menu").css("height"); // to save main menu height
		$(this).children(".sub-menu").show();
		$(this).children(".sub-menu").css({"min-height":height});
		$(".sub-menu2").css({"min-height":height});
		e.stopPropagation();
		e.preventDefault();
		
	});
	$(".archive").mouseenter(function(){
		$(this).children(".archive-menu").show();
	});

	$(".back").on("click",function(e) {
		$(this).parent(".sub-menu").hide(); 
		e.stopPropagation();
		e.preventDefault();
	});

	
});