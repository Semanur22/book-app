import PersonService from "../../services/PersonService";


export const GET_ALL_PERSONS = "GET_ALL_PERSONS";
export const GET_ONE_PERSON = "GET_ONE_PERSON";
export const DELETE_ONE_PERSON = "DELETE_ONE_PERSON";
export const POST_ONE_PERSON = "POST_ONE_PERSON";
export const PUT_ONE_PERSON = "PUT_ONE_PERSON";

const personService = new PersonService();

export function getAllPersons() {
  return function (dispatch) {
    personService
      .getAllPersons()
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ALL_PERSONS, payload: resp }));
  };
}

export function getOnePerson(id) {
  return function (dispatch) {
    personService
      .getOnePerson(id)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ONE_PERSON, payload: resp }));
  };
}

export function deleteOnePerson(id) {
  return function (dispatch) {
    personService
      .deleteOnePerson(id)
      .then((resp) => dispatch({ type: DELETE_ONE_PERSON, payload: id }));
  };
}

export function postOnePerson(person) {
  return function (dispatch) {
    personService
      .postOnePerson(person)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: POST_ONE_PERSON, payload: resp }));
  };
}

export function putOnePerson(id, person) {
  return function (dispatch) {
    personService
      .putOnePerson(id, person)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: PUT_ONE_PERSON, payload: resp }));
  };
}