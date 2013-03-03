/*! jquery.trueresize - v0.1.0 - 2013-03-03
* https://github.com/jfroffice/jquery.trueresize
* Copyright (c) 2013 John Fischer; Licensed MIT */

;(function($) {

    var timer;

    $(window).resize(function() {
        if (timer) { clearTimeout(timer); }
        timer = setTimeout(function() {
            timer = null;
            $(window).trigger('trueresize');
        }, 20);
    });

})(jQuery);
