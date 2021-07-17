export default class Controller {
  constructor(store, view, tags, request) {
    this.store = store;
    this.view = view;
    this.tags = tags;
    this.request = request;

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
    const that = this;
    const params = {
      flightFrom: this.store.getFlightFrom(),
      flightsTo: this.store.getFlightsTo()
    };
    this.request.setParams(params);
    this.request.sendRequest()
      .then(function(json){
			     console.log(json);
           that.view.displayResult(json);
           that.view.buttonToNormal();
			})
      .catch( err => {
            console.log(err);
            //if (err instanceof TypeError)
            that.view.displayErorr(err.message);
            that.view.buttonToNormal();
        });
  }
}
