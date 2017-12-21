// Opem and Close nemu mobile.
$(document).ready(function(e) {
	$("#hamburger").click(function(e) {
		if($(this).is(':checked')){ //Retornar true ou false
			$(".menu-mobile-toglle").addClass("m-menu-hide");
			$(".menu-mobile").addClass("menu-mobile-opem");
		}
		else{
			$(".menu-mobile-toglle").removeClass("m-menu-hide");
			$(".menu-mobile").removeClass("menu-mobile-opem");
		}

	});
});

$(document).ready(function(){
    $(".highligth-btn-plus").click(function(){
        $("div").scrollTop(100);
    });
});