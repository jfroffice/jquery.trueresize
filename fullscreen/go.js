;(function() {

    var count = 0,
        NB_VALUE = 20,
        data = [],
        lastDate;

    function render($container, $max, $line) {

        var newDate = new Date(),
            delta = newDate - (lastDate || newDate);

        if (delta > 400) {
            lastDate = newDate;
            return;
        }

        data.push(delta);

        var size = data.length,
            tmp = data.slice(size - NB_VALUE, size - 1);

        $line.html(tmp.join(','));
        $max.html(Math.max.apply(null, tmp) + ' ms');
        $line.peity("line", {
                        height: $container.height(),
                        width: $container.width(),
                        min: 0
                    });

        lastDate = newDate;
    }

    $(function() {
        $(window).resize(function() {
            render($('#container'), $("#max"), $('span.line'));
        });
    });

})( jQuery );
