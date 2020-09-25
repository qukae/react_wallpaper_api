export default class ApiService {

  _apiBase = 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api'

  async getResource(url) {
  const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}`, `received ${res.status}`)
    }
    return await res.json();
  }

  async searchWp() {
    const res = await this.getResource('/v1/search')
    return res.data
  }
}

