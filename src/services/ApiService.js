export default class ApiService {

  _apiBase = 'https://cors-anywhere.herokuapp.com/https://wallhaven.cc/api'



  async getResource(url) {
  const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}`, `received ${res.status}`)
    }

    return await res.json();
  }

  async searchWp(q, categories, color, sorting, page) {
    console.log('api q', q, 'api cat', categories, 'api_color', color);
    let colorApi = null
    if (color) {
      colorApi = `&colors=${color}`
    }
    // toplist = top,
    const res = await this.getResource(`/v1/search?q=${q}&categories=${categories.join('')}&purity=100&sorting=${sorting}&order=desc${colorApi}&page=${page}`)
    console.log(res.data);
    return res.data
  }
}

