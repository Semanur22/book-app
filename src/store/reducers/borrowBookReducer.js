import { borrowBooks, borrowBook } from "../initialValues/borrowBookItems";
import {
  DELETE_ONE_BORROW_BOOK,
  GET_ALL_BORROW_BOOKS,
  GET_ONE_BORROW_BOOK,
  POST_ONE_BORROW_BOOK,
  PUT_ONE_BORROW_BOOK
} from "../actions/borrowBookAction";

const initialValue = {
  borrowBooks,
  borrowBook
};

function borrowBookReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case GET_ALL_BORROW_BOOKS:
      return {
        ...state,
        borrowBooks: payload
      };
    case DELETE_ONE_BORROW_BOOK:
      return {
        ...state,
        borrowBooks: state.borrowBooks.filter((borrowBook) => borrowBook.id !== payload)
      };
    case POST_ONE_BORROW_BOOK:
      return {
        ...state,
        borrowBooks: [...state.borrowBook, payload]
      };
    case GET_ONE_BORROW_BOOK:
      return {
        ...state,
        borrowBook: payload
      };
    case PUT_ONE_BORROW_BOOK:
      return {
        ...state,
        borrowBooks: [
          ...state.borrowBooks.filter((borrowBook) => borrowBook.id !== payload.id),
          payload
        ]
      };

    default:
      return {
        ...state
      };
  }
}
export default borrowBookReducer;