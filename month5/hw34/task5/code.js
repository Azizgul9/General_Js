var task5=function() {
    var dashGenerator = function (dash, color) {
        var dash = $('<div>');
        dash.addClass(color + '-dash dash');
        var dashsize='20px';
        dash.css({
            background: color,
            width: dashsize,
            height: dashsize,
            display: 'inline-block'
        });
        return dash;
    };

    var task = $('#task');

    var chessDash = $('<div>');
    var size='160px';
    chessDash.addClass('chess-dash');
    chessDash.css({width: size, height: size, fontSize: 0});

    task.append(chessDash);
    var k = 0;
    while (k < 8) {
        k++;
        if (k % 2 == 0) {
            var color = 'black';
        }
        else {
            var color = 'white';
        }
        for (var i = 0; i < 4; i++) {
            if (color == 'black') {
                color = 'white';
            } else {
                color = 'black';
            }
            for (var j = 0; j < 1; j++) {
                var white = dashGenerator('whiteDash', color);
                chessDash.append(white);

                if (color == 'white') {
                    color = 'black';
                } else {
                    color = 'white';
                }
                var black = dashGenerator('blackDash', color);
                chessDash.append(black);
            }
        }
    }
}