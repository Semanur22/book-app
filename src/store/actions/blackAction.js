export const ADD_TO_BLACK="ADD_TO_BLACK"


export  function addToBlack(borrowBook) {
  return {
    type : ADD_TO_BLACK,
    payload : borrowBook
  }
}
