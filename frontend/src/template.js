export default class Template {

  loadingButtonInner() {
    return `
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
    `;
  }

  normalButtonInner() {
    return `
Show best price
    `;
  }

  resultInner(res) {
    return `
Best price per km is ${res['price_per_km']}$ for ${res['name']}
    `;
  }

  resultInnerError(err) {
    return `
Error occured with API: ${err}
    `;
  }
}
