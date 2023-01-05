$(window).on("load", function(){
	$(".loader").fadeOut(500);

	$(".items").isotope({
    	filter: '*.websites',
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
	    loop: false,
	    margin: 10,
	    items: 3,
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
	        }
	    }
	})

    // 當螢幕到 (skills 高度 - window大小 + 200) 時執行動畫
    var skillsTopOffset = $("#skills").offset().top; // get skill section position

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

    
    // Usage:

    // Example 1:
    // <input id="url" type="text" value="http://example.com" readonly>
    // <button data-clipboard-target="#url" data-bs-toggle="tooltip">Copy</button>

    // Example 2:
    // <button data-clipboard-text="hello world" data-bs-toggle="tooltip">Copy</button>

    function clipboardWithTooltip(target = '[data-bs-toggle="tooltip"]', tooltipText = 'Copied!'){
        // Initialize Tooltip
        const tooltipTriggerList = [].slice.call(document.querySelectorAll(target));
        
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl, {
                trigger: 'manual',
                placement: 'bottom',
            });
        });

        // Initialize Clipboard
        const clipboard = new ClipboardJS(target);

        clipboard.on('success', function(e) {
            $(e.trigger).tooltip('hide').attr('data-bs-original-title', tooltipText).tooltip('show');
            setTimeout(function() { $(e.trigger).tooltip('hide'); }, 1000);
        });

        clipboard.on('error', function(e) {
            $(e.trigger).tooltip('hide').attr('data-bs-original-title', 'Failed!').tooltip('show');
            setTimeout(function() { $(e.trigger).tooltip('hide'); }, 1000);
        });
    }

    clipboardWithTooltip(target = '[data-bs-toggle="tooltip"]', text = 'Copied!');
})