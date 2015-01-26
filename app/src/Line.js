var sample;
(function (sample) {
    'use strict';

    var Line = (function () {
        function Line(start, end) {
            this.start = start;
            this.end = end;
        }
        Line.prototype.draw = function (context) {
            context.beginPath();
            context.moveTo(this.start.x, this.start.y);
            context.lineTo(this.end.x, this.end.y);
            context.stroke();
        };
        return Line;
    })();
    sample.Line = Line;
})(sample || (sample = {}));
