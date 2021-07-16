export default class Template {

  cityFromItem() {
    return `
<label class="form-label">Flight From</label>
<input type="text" class="form-control" >
    `;
  }

  citiesToItem() {
    return `
<label class="form-label">Flight(s) To</label>
<div id="simple-tag" class="simple-tags" data-simple-tags=""></div>
    `;
  }

/*
  citiesToItem(flightsTo) {
    return flightsTo.reduce((a, item) => a + `
<div class="input-group">
    <input type="text" class="form-control">
    <button class="btn btn-outline-secondary button-add-flight" type="button"> + </button>
    <button class="btn btn-outline-secondary" type="button"> - </button>
</div>`, '');
  }
*/
}
