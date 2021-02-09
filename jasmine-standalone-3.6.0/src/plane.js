'use strict';

class Plane {
    constructor() {
        this._location;
    }
    isWorking() {
        return true;
    }
    land(airport) {
        airport.clearForLanding(this)
        this._location = airport;
    };
    takeOff() {
        this._location.clearForTakeOff()
        this._location = null
    };
    currentAirport() {
        return this._location
    }
};

// airport = new Airport();
// Airport {_hangar: Array(0)}
// plane = new Plane();
// Plane {}
// plane.land(airport);
// undefined
// airport.planes()
// [Plane]
// plane.takeOff()
// undefined
// airport.planes()
// []