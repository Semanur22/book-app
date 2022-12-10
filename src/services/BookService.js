import axios from "axios";

class BookService {
  constructor() {
    this.baseUrl = "/api/books";
  }

  async getOneBook(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getAllBooks() {
    const { status, data } = await axios.get(this.baseUrl).then((resp) => resp);
    return { status, data };
  }

  async postOneBook(body) {
    const { status, data } = await axios
      .post(this.baseUrl, body)
      .then((resp) => resp);
    return { status, data };
  }

  async putOneBook(id, book) {
    return await axios
      .put(id, book)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneBook(id) {
    let url = `${this.baseUrl}/${id}`;
    const { status } = await axios.delete(url).then((resp) => resp);
    return { status };
  }

  

}
export default BookService;