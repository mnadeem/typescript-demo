/// <reference path='includes.ts' />

describe('A FizzBuzz generator', () => {
    beforeEach(() => {
        this.point  = new sample.Point(10, 30);
    });

    it('should return the number 10 when point x is 10', () => {
        var result = this.point.x
        expect(result).toBe(10);
    });   

});
