;(function($) {

	var TIMEOUT_REFRESH = 20,
		timer;

	function debounced(cb) {
        (function() {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(function() {
                timer = null;
                cb && cb();
            }, TIMEOUT_REFRESH);
        })();
    }

	$(window).resize(function() {
		debounced(function() {
			$(window).trigger('trueresize');
		});			
	});

})(jQuery);