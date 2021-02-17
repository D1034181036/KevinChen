$(window).on("load", function(){
	$(".loader").fadeOut(500);

	$(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });
})

$(document).ready(function(){

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Web Developer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    items: 4,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	        	items:4
	        }
	    }
	})

    //當螢幕到skills高度 - window大小 + 200 時執行動畫
    var skillsTopOffset = $("#skills").offset().top; //get skill section position

    $(window).scroll(function(){
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
    		$('.chart').easyPieChart({
		    	easing: 'easeInOut',
		    	barColor: '#fff',
		    	trackColor: false,
		    	scaleColor: false,
		    	lineWidth: 4,
		    	size: 152,
		    	onStep: function(from, to, percent){
		    		$(this.el).find('.percent').text(Math.round(percent));
		    	}
		    });
    	}
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

    	$(".items").isotope({
	    	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

	    return false;
    })

})