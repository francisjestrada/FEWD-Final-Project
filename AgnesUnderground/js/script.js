$("document").ready(function() {
  
	 $("div.cta").click(function(){
	  	// console.log("hovering button");
	  	$("section.signup-form").slideToggle("slow");
	});

	 $(".autoplay").slick({
	    slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 3000,
	  	mobileFirst: true,
	 });

	 $("#thespace-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#thespace").offset().top
	    }, 1000);
	 });
	 $("#memberships-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#memberships").offset().top
	    }, 1000);
	 });
	 $("#location-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#map").offset().top
	    }, 1000);
	 });
	 $("#home-button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home").offset().top
	    }, 1000);
	 });
	 $(".continue").click(function() {
    	$(".required").each(function() {
        	if($(this).val() == "") {
          		$(this).css("border", "4px solid #E30016");
        	} else {
        		$(this).css("border", "1px solid #969899");
        	}
    	});

    $("body").keydown(function(event) {
	 	if (event.which == 40) {
   			console.log("works");
   			window.scrollBy(0, 500);
	 	}
	 });
});
	 



   

 
  




});