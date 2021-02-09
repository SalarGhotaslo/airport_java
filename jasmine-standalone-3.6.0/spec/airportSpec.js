"use strict";


describe('Airport', function () {

    let airport
    let plane

    beforeEach(function () {
        airport = new Airport();
        plane = new jasmine.createSpy('plane', ['land', 'clearForTakeOff']);
    });

    describe('plane.land', function () {
        it('planes can be instructed to land in airports', function () {
            airport.clearForLanding(plane);
            expect(airport.planes()).toEqual([plane]);
        });
        it('takes off from airport', function () {
            airport.clearForLanding(plane);
            airport.clearForTakeOff(plane);
            expect(airport.planes()).toEqual([]);
        });
    });
    describe('planes', function () {
        it('should be empty by default', function () {
            expect(airport.planes()).toEqual([]);
        });
    });
});