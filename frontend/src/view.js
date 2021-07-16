import {$on, qs} from './helpers';

export default class View {
  constructor(template, tags) {
    this.template = template;
    this.tags = tags;
    this.$flightfrom = qs('.flightfrom');
    this.$flightsto = qs('.flightsto');
    this.$simpleTags = document.getElementById("simple-tag");
    //this.$buttonAddFlight = qs('.button-add-flight');
  }

  showFlightFrom() {
    this.$flightfrom.innerHTML = this.template.cityFromItem();
  }

  showFlightsTo() {
      this.$flightsto.innerHTML = this.template.citiesToItem();
  }

  bindTags() {
    this.tags.init();
  }
/*
  bindAddItem(handler) {
		$on(this.$buttonAddFlight, 'click', () => {
			handler(txt);
		});
	}
*/
}
