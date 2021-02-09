"use strict"

describe('Plane', function () {
    let plane;
    let airport;
    beforeEach(function () {
        plane = new Plane();
        airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
    });

    it('isWorking', function () {
        expect(plane.isWorking()).toBe(true);
    });
    it('can land at an airport', function () {
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
    it('can take off from an airport', function () {
        plane.land(airport);
        plane.takeOff();
        expect(airport.clearForTakeOff).toHaveBeenCalledWith();
    })

    it('prove its left the airport', function () {
        plane.land(airport);
        plane.takeOff();
        expect(plane.currentAirport()).toEqual(null);
    })

});