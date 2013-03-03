;(function() {

    var data = [],
        data2 = [],
        pref = {
            xaxis: { minorTickFreq: 4, title: 'time (ms)' },
            yaxis: { min: 0, title: 'delay (ms)' },
            grid: { minorVerticalLines: true },
            points: { show: true },
            lines: { show: true, fill: true }
          },
        lastDate,
        lastDate2;

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

    $(window).resize(function() {
        render1();
    });

    $(window).on('trueresize', function() {
        render2();
    });

/*
    $(window).on("throttledresize", function() {
        render2();
    });
*/

})( jQuery );
