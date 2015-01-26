var sample;
(function (sample) {
    'use strict';

    var Driver = (function () {
        function Driver() {
        }
        Driver.prototype.draw = function () {
            var canvas = window.document.getElementById("drawingCanvas");
            var ctx = canvas.getContext("2d");

            var line = new sample.Line(new sample.Point(100, 150), new sample.Point(450, 50));
            line.draw(ctx);

            var circle = new sample.Circle(new sample.Point(100, 70), 50);
            circle.draw(ctx);
        };
        return Driver;
    })();
    sample.Driver = Driver;
})(sample || (sample = {}));
