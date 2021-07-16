export default class Controller {
  constructor(store, view) {
    this.store = store;
    this.view = view;

    //this.addItem();
    //view.bindAddItem(this.addItem.bind(this));
  }

  setView() {
    //this.view.showFlightFrom();
    //this._updateFlights();
    //this.view.showFlightsTo();
    this.view.bindTags();
  }
/*
  addItem(txt="") {
		this.store.insert({
			id: Date.now(),
			txt
		}, () => {
			this._updateFlights();
		});
	}

  _updateFlights() {
      this.view.showFlightsTo();
  }
*/
}
