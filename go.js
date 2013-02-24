$(function() {

    var $frame = $('#frame'),
        $duration = $('input[name=duration]');

    $duration.val('800');

    $('.btn').click(function() {

        var width = $frame.css('width').replace('px', '');
        width = (width == 900) ? 600 : 900;

        $frame.animate({ width:width }, { duration: $duration.val() });
    });

});
