/// <reference path='includes.ts' />

module sample {
	'use strict'

	export interface Equality <T> {
		equals(other: T) : boolean;	
	}
}
