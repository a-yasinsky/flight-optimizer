export default class Store {
    constructor() {
      this.flightFrom = {name: ''};
      this.flightsTo = [];
    }

    getFlightFrom() {
      return this.FlightFrom;
    }

    getFlightsTo() {
      return this.flightsTo;
    }
/*
    insert(item, callback) {
      this.flightsTo.push(item);

      if (callback) {
        callback();
      }
    }
*/
}
