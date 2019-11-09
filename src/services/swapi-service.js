//https://swapi.co/api/

class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource (url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received  ${res.status}`);
    }

    return  await res.json();
  };

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results; // возвращаем внутренний массив results
  };

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  };

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results; // возвращаем внутренний массив results
  };

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  };

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results; // возвращаем внутренний массив results
  };

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  };

}

const swapi = new SwapiService();

swapi.getAllPeople()
  .then(data=> data.forEach(item => console.log(item.name)));

swapi.getAllPlanets()
  .then(data=> data.forEach(item => console.log(item.name)));

swapi.getPerson(2).then(data=> console.log('finally, we have', data));
