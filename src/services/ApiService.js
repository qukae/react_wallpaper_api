export default class ApiService {

  _apiBase = 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api'



  async getResource(url) {
  const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}`, `received ${res.status}`)
    }
    return await res.json();
  }

  async searchWp(q = '2077', categories = [1,0,0], color = '660000') {
    console.log('api q', q, 'api cat', categories);
    const res = await this.getResource(`/v1/search?q=${q}&categories=${categories.join('')}&purity=100&sorting=date_added&order=desc&colors=${color}&page=2`)
    return res.data
  }
}

