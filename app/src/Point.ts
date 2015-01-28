/// <reference path='includes.ts' />

module sample {
	'use strict'

	export class Point implements Equality<Point> {

	    constructor(public x: number, public y: number) {

	    }

	    public equals(other: Point) : boolean {			
			return this.x == other.x && this.y == other.y;
		}
	}	
}