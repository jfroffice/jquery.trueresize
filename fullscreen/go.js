;(function() {

    var NB_VALUE = 20,
        MAX_OFFSET = 400,
        pref = {
            xaxis: { minorTickFreq: 4 },
            grid: { minorVerticalLines: true },
            yaxis: { min: 0 },
            points: { show: true },
            lines: { show: true, fill: true }
          },
        data = [],
        data2 = [],
        lastDate,
        lastDate2,
        TIMEOUT_REFRESH = 150,
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
            tmp = [],
            i = myData.length,
            delta = newDate - (myLastDate || newDate);

        myData.push([newDate, delta]);

        while (i >= 0) {
  
            var timeElapsed = newDate - myData[i][0];
            
            if (timeElapsed < 5000) {
                tmp.push([timeElapsed, myData[i][1]])
            } else {
                break;
            }

            --i;
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
/*
        $(window).on("throttledresize", function() {
            render2();
        });*/

    });

})( jQuery );
