/// <reference path='includes.ts' />

describe('Line API', () => {

    beforeEach(() => {
        this.line  = new sample.Line(new sample.Point(10, 20), new sample.Point(10, 25));
    });

    it('Start Point is at 10, 20', () => {
        var result = this.line.start
        expect(result.equals(new sample.Point(10, 20))).toBe(true);
    });

    it('End Point is at 10, 25', () => {
        var result = this.line.end
        expect(result.equals(new sample.Point(10, 25))).toBe(true);
    });

    it('Line Equilatiy Test', () => {
        expect(this.line.equals(new sample.Line(new sample.Point(10, 20), new sample.Point(10, 25)))).toBe(true);
    }); 
    
    it('Should draw on context', () => {
       
        var mockedMethods:Array<string> = ["beginPath", "moveTo", "lineTo", "stroke"];
        var fake:CanvasRenderingContext2D  = jasmine.createSpyObj<CanvasRenderingContext2D>("context", mockedMethods);
        this.line.draw(fake);

        expect(fake.beginPath).toHaveBeenCalled();
        expect(fake.moveTo).toHaveBeenCalled();
        expect(fake.lineTo).toHaveBeenCalled();
        expect(fake.stroke).toHaveBeenCalled();

    });

});
