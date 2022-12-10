import { combineReducers } from "redux";
import personReducer from "./reducers/personReducer";
import bookReducer from "./reducers/bookReducer";
import borrowBookReducer from "./reducers/borrowBookReducer"

const rootReducer = combineReducers({
    book : bookReducer,
    borrowBook : borrowBookReducer,
    person : personReducer
});

export default rootReducer;