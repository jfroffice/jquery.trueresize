;(function() {

    var count = 0,
        NB_VALUE = 64,
        MAX_OFFSET = 400,
        data = [],
        data2 = [],
        lastDate,
        lastDate2,
        TIMEOUT_REFRESH = 10,
        _timer;

    function resizeDirect() {

        if (_timer) {
            clearTimeout(_timer);
            _timer = null;
        }

        render2();
    }

    function resize() {

        if (_timer) {
            clearTimeout(_timer);
        }

        _timer = setTimeout(resizeDirect, TIMEOUT_REFRESH);
    }

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
            tmp;

        if ($container.attr('id') == 'container') {
            tmp = myData.slice(size - NB_VALUE, size - 1);
        } else {
            tmp = myData.slice(size - (NB_VALUE / 2), size - 1);
        }

        $line.html(tmp.join(','));
        $max.html(Math.max.apply(null, tmp) + ' ms');
        $line.peity("line", {
                        height: $container.height(),
                        width: $container.width(),
                        min: 0
                    });

        return newDate;
    }

    function render1() {
        lastDate = render($('#container'), $("#max"), $('span.line'), data, lastDate);  
    }

    function render2() {
        lastDate2 = render($('#container2'), $("#max2"), $('span.line2'), data2, lastDate2);
    }

    $(function() {
        $(window).resize(function() {
            render1();
        });

        $(window).resize(function() {
            resize();
        });
    });

})( jQuery );
