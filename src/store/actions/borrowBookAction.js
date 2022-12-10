import BorrowBookService from "../../services/BorrowBookService";

export const GET_ALL_BORROW_BOOKS = "GET_ALL_BORROW_BOOKS";
export const GET_ONE_BORROW_BOOK = "GET_ONE_BORROW_BOOK";
export const DELETE_ONE_BORROW_BOOK = "DELETE_ONE_BORROW_BOOK";
export const POST_ONE_BORROW_BOOK = "POST_ONE_BORROW_BOOK";
export const PUT_ONE_BORROW_BOOK = "PUT_ONE_BORROW_BOOK";
//export const BLACK_LIST = "BLACK_LIST";

const borrowBookService = new BorrowBookService();

export function getAllBorrowBooks() {
  return function (dispatch) {
    borrowBookService
      .getAllBorrowBooks()
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ALL_BORROW_BOOKS, payload: resp }));
  };
}

export function postOneBorrowBook(id) {
  return function (dispatch) {
    borrowBookService
      .postOneBorrowBook(id)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ONE_BORROW_BOOK, payload: resp }));
  };
}

export function deleteOneBorrowBook(id) {
  return function (dispatch) {
    borrowBookService
      .deleteOneBorrowBook(id)
      .then((resp) => dispatch({ type: DELETE_ONE_BORROW_BOOK, payload: id }));
  };
}

export function postOneBorrowBook(borrowBook) {
  return function (dispatch) {
    borrowBookService
      .postOneBorrowBook(borrowBook)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: POST_ONE_BORROW_BOOK, payload: resp }));
  };
}

export function putOneBorrowBook(id, borrowBook) {
  return function (dispatch) {
    borrowBookService
      .putOneBorrowBook(id, borrowBook)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: PUT_ONE_BORROW_BOOK, payload: resp }));
  };
}
/*
export function blackList(id, borrowBook) {
    return function (dispatch) {
      borrowBookService
        .blackList(id, borrowBook)
        .then((resp) => resp.data)
        .then((resp) => dispatch({ type: BLACK_LIST, payload: resp }));
    };
  }
  */