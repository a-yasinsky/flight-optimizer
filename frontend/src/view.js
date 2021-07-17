import {$on, qs} from './helpers';

export default class View {
  constructor(template) {
    this.template = template;
    this.$flightFrom = qs('.flightfrom');
    this.$flightsTo = qs('.flightsto');
    this.$form = qs('.flight-optimizer-form');
    this.$submitButton = qs('.flight-optimizer-form .btn');
    this.$result = qs('.result');
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

  clearResult() {
    this.$result.innerHTML = "";
  }

  buttonToLoad() {
    this.$submitButton.disabled = true;
    this.$submitButton.innerHTML = this.template.loadingButtonInner();
  }

  buttonToNormal() {
    this.$submitButton.disabled = false;
    this.$submitButton.innerHTML = this.template.normalButtonInner();
  }

  displayResult(result) {
    this.$result.innerHTML = this.template.resultInner(result);
  }

  displayErorr(err) {
    this.$result.innerHTML = this.template.resultInnerError(err);
  }

  bindFormSubmit(handler) {
    const that = this;
    $on(this.$form, 'submit', (event) => {
        event.preventDefault();
        that.clearResult();
        that.buttonToLoad();
			  handler();
		});
  }
}
