/// <reference path='includes.ts' />

describe('Circle API', () => {

    beforeEach(() => {
        this.circle  = new sample.Circle(new sample.Point(10, 20), 20);
    });

    it('Center Point is at 10, 20', () => {
        var result = this.circle.center
        expect(result.equals(new sample.Point(10, 20))).toBe(true);
    });

    it('Radius is at 20', () => {
        var result = this.circle.radius
        expect(result).toBe(20);
    });

    it('Line Equilatiy Test', () => {
        expect(this.circle.equals(new sample.Circle(new sample.Point(10, 20), 20))).toBe(true);
    });  

});
