/// <reference path='includes.ts' />

module sample {
	'use strict'

	export class Driver {
		constructor() {	

		}

		draw() {	
			var canvas = <HTMLCanvasElement>window.document.getElementById("drawingCanvas");
			var ctx = canvas.getContext("2d");

			var line = new Line(new Point(100, 150), new Point(450, 50));
			line.draw(ctx);
			
			var circle = new Circle(new Point(100, 70), 50);
			circle.draw(ctx);
		
		}
	}
}