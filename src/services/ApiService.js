export default class ApiService {

  _apiBase = 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api'



  async getResource(url) {
  const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}`, `received ${res.status}`)
    }
    return await res.json();
  }

  async searchWp(search = '2077') {
    const res = await this.getResource(`/v1/search?q=${search}&categories=110&purity=100&sorting=date_added&order=desc&page=2`)
    return res.data
  }
}

