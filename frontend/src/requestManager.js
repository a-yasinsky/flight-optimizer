export default class RequestManager {
  constructor() {
    this.url = 'http://localhost:8080/prices/minimum';
    this.params = {};
  }

  setParams(params) {
      this.params = params;
  }

  handleErrors(res) {
    if (res.status === 400) {
      throw new Error('Bad request');
    }
    else if (!res.ok) throw new Error('API error');
    return res;
  }

  sendRequest() {
    const that = this;
    let url = this.url;
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.params),
    };
    return fetch(url, options)
    .then(that.handleErrors)
    .then(res => res.json());
  }
}
