/// <reference path='includes.ts' />

module sample {
	'use strict'

	export class Line implements Shape {
		
		constructor(public start: Point, public end: Point) {
			
	    }

		draw(context: CanvasRenderingContext2D) {
			context.beginPath();
	      	context.moveTo(this.start.x, this.start.y);
	      	context.lineTo(this.end.x, this.end.y);
	      	context.stroke();
		}
	}
}