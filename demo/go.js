var count = 0,
    nbValue = 20,
    data = [],
    lastDate;

function render() {

    var newDate = new Date(),

        delta = newDate - (lastDate || newDate);

    data.push(delta);
    var size = data.length;

    var tmp = data.slice(size-nbValue, size-1);
    $('span.line').html(tmp.join(','));

    $("#max").html(Math.max.apply(null, tmp));

    $("span.line").peity("line", {
                             height: 96,
                             width: 512,
                             min: 0,
/*                             max: 120*/
                         });

    lastDate = newDate;
}

$(function() {
    $(window).resize(function() {
        render();
    });
});
