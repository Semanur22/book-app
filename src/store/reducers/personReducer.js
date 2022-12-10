import { persons, person } from "../initialValues/personItems";
import {
  DELETE_ONE_PERSON,
  GET_ALL_PERSONS,
  GET_ONE_PERSON,
  POST_ONE_PERSON,
  PUT_ONE_PERSON
} from "../actions/personActions";

const initialValue = {
  persons,
  person
};

function personReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case GET_ALL_PERSONS:
      return {
        ...state,
        persons: payload
      };
    case DELETE_ONE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== payload)
      };
    case POST_ONE_PERSON:
      return {
        ...state,
        persons: [...state.persons, payload]
      };
    case GET_ONE_PERSON:
      return {
        ...state,
        person: payload
      };
    case PUT_ONE_PERSON:
      return {
        ...state,
        persons: [
          ...state.persons.filter((person) => person.id !== payload.id),
          payload
        ]
      };

    default:
      return {
        ...state
      };
  }
}
export default personReducer;