import { ADD_TO_BLACK } from "../actions/blackAction";
import { blackItems } from "../initialValues/blackItems";

const initialState = {
    blackItems:blackItems
}
export default function blackReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_BLACK:
            return{
                ...state,
                blackItems:[...state.blackItems,{black:1,borrowBook:payload}]
            }
         
    
        default:
            break;
    }
}
