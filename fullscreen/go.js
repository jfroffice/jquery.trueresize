;(function() {

    var count = 0,
        NB_VALUE = 20,
        MAX_OFFSET = 400,
        data = [],
        data2 = [],
        lastDate,
        lastDate2;

    function render($container, $max, $line, myData, myLastDate) {

        var newDate = new Date(),
            delta = newDate - (myLastDate || newDate);

 /*       if (delta > MAX_OFFSET) {
            myLastDate = newDate;
            return;
        }
*/
        myData.push(delta);

        var size = myData.length,
            tmp = myData.slice(size - NB_VALUE, size - 1);

        $line.html(tmp.join(','));
        $max.html(Math.max.apply(null, tmp) + ' ms');
        $line.peity("line", {
                        height: $container.height(),
                        width: $container.width(),
                        min: 0
                    });

        return newDate;
    }

    $(function() {
        $(window).resize(function() {
            lastDate = render($('#container'), $("#max"), $('span.line'), data, lastDate);            
        });

        $.event.special.debouncedresize.threshold = 10;

        $(window).on("debouncedresize", function() {
            lastDate2 = render($('#container2'), $("#max2"), $('span.line2'), data2, lastDate2);
        });

    });

})( jQuery );
