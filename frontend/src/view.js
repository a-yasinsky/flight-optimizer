import {$on, qs} from './helpers';

export default class View {
  constructor(template) {
    this.template = template;
    this.$flightFrom = qs('.flightfrom');
    this.$flightsTo = qs('.flightsto');
    this.$form = qs('.flight-optimizer-form');
  }

  bindTags(tags) {
    tags.init(this.$flightsTo);
  }

  bindChangeFlightFrom(handler) {
    $on(this.$flightFrom, 'change', ({target}) => {
			const flightFrom = target.value.trim();
			if (flightFrom) {
				handler(flightFrom);
			}
		});
  }

  bindChangeFlightsTo(handler) {
    $on(this.$flightsTo, 'change', () => {
			  handler();
		});
  }

  bindFormSubmit(handler) {
    $on(this.$form, 'submit', (event) => {
        event.preventDefault();
			  handler();
		});
  }
}
