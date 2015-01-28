/// <reference path='includes.ts' />

module sample {
	'use strict'

	export class Circle implements Shape, Equality<Circle> {

		constructor(public center: Point, public radius: number) {

	    }

		public draw(context: CanvasRenderingContext2D) {		
			context.beginPath();
	        context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
	        context.fillStyle = 'green';
	        context.fill();
	        context.lineWidth = 5;
	        context.strokeStyle = '#003300';
	        context.stroke();
		}

		public equals(other: Circle) : boolean {			
			return this.radius == other.radius && this.center.equals(other.center);
		}	
	}

}