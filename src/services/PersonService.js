import axios from "axios";

class PersonService {
  constructor() {
    this.baseUrl = "/api/persons";
  }

  async getOnePerson(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getAllPersons() {
    const { status, data } = await axios.get(this.baseUrl).then((resp) => resp);
    return { status, data };
  }

  async postOnePerson(body) {
    const { status, data } = await axios
      .post(this.baseUrl, body)
      .then((resp) => resp);
    return { status, data };
  }

  async putOnePerson(id, person) {
    return await axios
      .put(id, person)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOnePerson(id) {
    let url = `${this.baseUrl}/${id}`;
    const { status } = await axios.delete(url).then((resp) => resp);
    return { status };
  }
}
export default PersonService;