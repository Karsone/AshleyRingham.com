
$(document).ready(function(){


	/*-----social media icon hover-----*/

	$('.behance').hover(function(){
		$(this).attr({src:'assets/images/behance2.svg'});
		},
	function(){
		$(this).attr({src:'assets/images/behance.svg'});
		});

	$('.linkedin').hover(function(){
			$(this).attr({src:'assets/images/linkedin2.svg'});
		},
	function(){
		$(this).attr({src:'assets/images/linkedin.svg'});
		});

	$('.pinterest').hover(function(){
		$(this).attr({src:'assets/images/pinterest2.svg'});
		},
	function(){
		$(this).attr({src:'assets/images/pinterest.svg'});
		});

	$('.insta').hover(function(){
		$(this).attr({src:'assets/images/insta2.svg'});
		},
	function(){
		$(this).attr({src:'assets/images/insta.svg'});
		});

	/*-----banner colour change on refresh-----*/

	var number = Math.floor((Math.random() * 6) + 1);

	if (number == 1){
		$(".site-banner").css({"background-color":"#F5D3D6"});
		$(".site-banner .inner").css({"background-color":"#F9DF8D"});

		$(".image-overlay").css({"background-color":"#F5D3D6"});
	}

	if (number == 2){
		$(".site-banner").css({"background-color":"#FFB98D"});
		$(".site-banner .inner").css({"background-color":"#B7B8DC"});

		$(".image-overlay").css({"background-color":"#FFB98D"});
	}

	if (number == 3){
		$(".site-banner").css({"background-color":"#ADC8E7"});
		$(".site-banner .inner").css({"background-color":"#A6E5D8"});

		$(".image-overlay").css({"background-color":"#ADC8E7"});
	}

	if (number == 4){
		$(".site-banner").css({"background-color":"#A6E5D8"});
		$(".site-banner .inner").css({"background-color":"#B7B8DC"});

		$(".image-overlay").css({"background-color":"#A6E5D8"});
	}

	if (number == 5){
		$(".site-banner").css({"background-color":"#F9DF8D"});
		$(".site-banner .inner").css({"background-color":"#ADC8E7"});

		$(".image-overlay").css({"background-color":"#F9DF8D"});
	}

	if (number == 6){
		$(".site-banner").css({"background-color":"#B7B8DC"});
		$(".site-banner .inner").css({"background-color":"#F5D3D6"});
		
		$(".image-overlay").css({"background-color":"#B7B8DC"});
	}

	/*-----Responsive Nav-----*/

	 var nav = responsiveNav(".nav-collapse", { // Selector
	  animate: true, // Boolean: Use CSS3 transitions, true or false
	  transition: 284, // Integer: Speed of the transition, in milliseconds
	  label: "menu", // String: Label for the navigation toggle
	  insert: "before", // String: Insert the toggle before or after the navigation
	  customToggle: ".nav-toggle", // Selector: Specify the ID of a custom toggle
	  closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
	  openPos: "relative", // String: Position of the opened nav, relative or static
	  navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
	  navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
	  jsClass: "js", // String: 'JS enabled' class which is added to  element
	  init: function(){}, // Function: Init callback
	  open: function(){}, // Function: Open callback
	  close: function(){} // Function: Close callback
	});

	/*---- menu ----*/

	var svg = $('svg');
  	var lines = svg.find('rect');
  	var line_first = $('svg rect:nth-child(1)')
  	var line_second = $('svg rect:nth-child(2)')
  	var line_third = $('svg rect:nth-child(3)')
  	var i = true;

  	svg.on('click', function(){
    	if (i) {
      	setTimeout(function(){
        	$(this).find("g").addClass('gotcha')

        line_first.css({
          'transform':'rotate(45deg)',
          'left':'50%',
          'top':'50%',
          'width':'200px',
          // This line BELONGS to @dervondenbergen :D 
          // Enjoy your propriety my friend.
          'transform-origin': 'left bottom'
        })
        line_third.css({
          'transform':'rotate(-45deg) translate(-50%,-50%)',
          'left':'50%',
          'top':'50%'
        })
        line_second.css('opacity','0')
      },005)
    } else {
      setTimeout(function(){
        line_first.attr('style', '');
        line_third.attr('style', '');
        line_second.css('opacity','1')
      },005)
    }
    i=!i; 
  });


});