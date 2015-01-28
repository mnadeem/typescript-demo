/// <reference path='includes.ts' />

module sample {
	'use strict'

	export class Line implements Shape, Equality<Line> {
		
		constructor(public start: Point, public end: Point) {
			
	    }

		draw(context: CanvasRenderingContext2D) {
			context.beginPath();
	      	context.moveTo(this.start.x, this.start.y);
	      	context.lineTo(this.end.x, this.end.y);
	      	context.stroke();
		}
		
		public equals(other: Line) : boolean {			
			return this.start.equals(other.start) && this.end.equals(other.end);
		}
	}
}