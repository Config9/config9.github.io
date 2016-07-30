// =====================================================
// Config9 Material Frontend Template
// =====================================================
(function($){
  $(function(){

    $('.button-collapse').sideNav();

    // =================================================
    // scrollFire effects. Load and display elements when scroll fired
    // =================================================
    var options = [
	    // {selector: 'nav.class', offset: 200, callback: customCallbackFunc } },
	    {selector: 'nav#config9-nav', offset: 200, callback: function() {
	      // customCallbackFunc();
	      Materialize.toast('I am a toast!', 4000);
	    } },
	];
	Materialize.scrollFire(options);

	// =================================================
	// Scrollspy: spy if the element is at the center of screen or not
	// 1. Add .scrollspy and #introduction to the div that you want to spy
	// 2. Add #introduction to the nav link to see it activated
	// =================================================
	$('.scrollspy').scrollSpy();
	        

  }); // end of document ready
})(jQuery); // end of jQuery name space