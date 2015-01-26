var sample;
(function (sample) {
    'use strict';

    var Circle = (function () {
        function Circle(center, radius) {
            this.center = center;
            this.radius = radius;
        }
        Circle.prototype.draw = function (context) {
            context.beginPath();
            context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
            context.fillStyle = 'green';
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();
        };
        return Circle;
    })();
    sample.Circle = Circle;
})(sample || (sample = {}));
