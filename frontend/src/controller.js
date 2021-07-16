export default class Controller {
  constructor(store, view, tags) {
    this.store = store;
    this.view = view;
    this.tags = tags;

    view.bindChangeFlightFrom(this.changeFlightFrom.bind(this));
    view.bindChangeFlightsTo(this.changeFlightsTo.bind(this));
    view.bindFormSubmit(this.formSubmit.bind(this));
  }

  setView() {
    this.view.bindTags(this.tags);
  }

  changeFlightFrom(flightFrom) {
    this.store.updateFlightFrom(flightFrom, () => {
      console.log(this.store.flightFrom);
    });
  }

  changeFlightsTo() {
    let flightsTo = this.tags.getSelectedValues();
    this.store.updateFlightsTo(flightsTo, () => {
      console.log(this.store.flightsTo);
    });
  }

  formSubmit() {
    console.log('submit form');
  }
}
