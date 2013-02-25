$(function() {

    var $frame = $('#frame'),
        $duration = $('input[name=duration]');

    $duration.val('800');

    $('.btn').click(function() {

        var width = $frame.css('width').replace('px', '');
        width = (width == 900) ? 550 : 900;

        var height = $frame.css('height').replace('px', '');
        height = (height == 600) ? 400 : 600;

        var duration = $duration.val();

        $frame.animate({ width: width, height: height }, { duration: duration });
    });

});
