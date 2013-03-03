/*
 * trueresize
 * https://github.com/jfroffice/jquery.trueresize
 *
 * Copyright (c) 2013 John Fischer
 * Licensed under the MIT license.
 */

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
