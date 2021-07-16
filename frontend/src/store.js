export default class Store {
    constructor() {
      this.flightFrom = "";
      this.flightsTo = [];
    }

    getFlightFrom() {
      return this.flightFrom;
    }

    getFlightsTo() {
      return this.flightsTo;
    }

    updateFlightFrom(flightFrom, callback) {
      this.flightFrom = flightFrom;
      if (callback) {
        callback();
      }
    }

    updateFlightsTo(flightsTo, callback) {
      this.flightsTo = flightsTo;
      if (callback) {
        callback();
      }
    }
}
