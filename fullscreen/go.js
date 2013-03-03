;(function() {

    var data = [],
        data2 = [],
        pref = {
            xaxis: { minorTickFreq: 4 },
            grid: { minorVerticalLines: true },
            yaxis: { min: 0 },
            points: { show: true },
            lines: { show: true, fill: true }
          },
        TIMEOUT_REFRESH = 10,
        lastDate,
        lastDate2,
        _timer;

    function resize(callback, timeout) {
        (function() {
            if (_timer) {
                clearTimeout(_timer);
            }

            _timer = setTimeout(function() {
                _timer = null;
                callback && callback();
            }, timeout || TIMEOUT_REFRESH);
        })();
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
            
            if (timeElapsed < 4000) {
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
            resize(render2, 20);
        });
/*
        $(window).on("throttledresize", function() {
            render2();
        });*/

    });

})( jQuery );
