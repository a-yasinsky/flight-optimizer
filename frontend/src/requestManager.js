export default class RequestManager {
  constructor() {
    this.url = 'http://localhost:8080/prices/minimum/';
    this.params = {};
  }

  setParams(params) {
      this.params = params;
  }

  sendRequest() {
    let url = `${this.url}?` + new URLSearchParams(this.params);
    let options = {
      method: 'GET',
  		mode: 'cors'
    };
    return fetch(url, options)
  		.then(function(response){
  			if(response.ok){
  				return response.json();
  			}
  			throw new Error('API is unavailable now.');
  		});
  }
}
