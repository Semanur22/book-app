import axios from "axios";

class BorrowBookService {
  constructor() {
    this.baseUrl = "/api/borrowBooks";
  }

  async getOneBorrowBook(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getAllBorrowBooks() {
    const { status, data } = await axios.get(this.baseUrl).then((resp) => resp);
    return { status, data };
  }

  async postOneBorrowBook(body) {
    const { status, data } = await axios
      .post(this.baseUrl, body)
      .then((resp) => resp);
    return { status, data };
  }

  async putOneBorrowBook(id, borrowBook) {
    return await axios
      .put(id, borrowBook)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneBorrowBook(id) {
    let url = `${this.baseUrl}/${id}`;
    const { status } = await axios.delete(url).then((resp) => resp);
    return { status };
  }


  //carpiya basınca black liste eklenmesi icin 
  //direkt black listi true olarak update ediyor
  /*
  async blackList(id, borrowBook) {
    return await axios
      .put(id, borrowBook)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  */

}
export default BorrowBookService;