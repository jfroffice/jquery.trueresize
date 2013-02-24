;(function() {

    var count = 0,
        NB_VALUE = 20,
        data = [],
        lastDate;

    function render() {

        var newDate = new Date(),
            delta = newDate - (lastDate || newDate);

        if (delta > 500) {
            lastDate = newDate;
            return;
        }

        data.push(delta);

        var size = data.length,
            tmp = data.slice(size - NB_VALUE, size - 1),
            $line = $('span.line');

        $line.html(tmp.join(','));
        $("#max").html(Math.max.apply(null, tmp) + ' ms');
        $line.peity("line", {
                        height: 96,
                        width: 600,
                        min: 0
                    });

        lastDate = newDate;
    }

    $(function() {
        $(window).resize(function() {

            console.log($(window).width());
            render();
        });
    });

})( jQuery );