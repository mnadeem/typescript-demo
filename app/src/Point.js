var sample;
(function (sample) {
    'use strict';

    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    })();
    sample.Point = Point;
})(sample || (sample = {}));
