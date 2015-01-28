/// <reference path='includes.ts' />

describe('Line API', () => {

    beforeEach(() => {
        this.point  = new sample.Point(10, 20);
    });

    it('should return the number 10 when point x is 10', () => {
        var result = this.point.x
        expect(result).toBe(10);
    });

    it('should return the number 20 when point y is 20', () => {
        var result = this.point.y;
        expect(result).toBe(20);
    });

    it('Point Equilatiy Test', () => {
        var result = this.point.y;
        expect(this.point.equals(new sample.Point(10, 20))).toBe(true);
    });  

});
