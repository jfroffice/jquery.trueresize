;(function() {

    var NB_VALUE = 20,
        MAX_OFFSET = 400,
        pref = {
            xaxis: { minorTickFreq: 4 },
            grid: { minorVerticalLines: true },
            points: { show: true },
            lines: { show: true, fill: true }
          },
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

    function render1() {
        lastDate = render($('#container'), $("#max"), $('span.line'), data, lastDate);
    }

    function render2() {
        lastDate2 = render($('#container2'), $("#max2"), $('span.line2'), data2, lastDate2);
    }

    function render($container, $max, $line, myData, myLastDate) {

        var newDate = new Date(),
            delta = newDate - (myLastDate || newDate);

        if (delta > MAX_OFFSET) {
            myLastDate = newDate;
            return;
        }

        myData.push([newDate, delta]);

        var size = myData.length,
            slice = myData.slice(size - NB_VALUE, size - 1),
            tmp = [];

        for(var i=0;i<slice.length;i++) {
            tmp.push([(slice[i][0] - slice[0][0]), slice[i][1]])
        }

        graph = Flotr.draw($container[0], [ tmp ], pref);

        return newDate;
    }

    $(function() {
        $(window).resize(function() {
            render1();
        });

        $(window).resize(function() {
            resize();
        });

/*        $(window).on("debouncedresize", function() {
            lastDate2 = render($('#container2'), $("#max2"), $('span.line2'), data2, lastDate2);
        });*/

        

    });

})( jQuery );
