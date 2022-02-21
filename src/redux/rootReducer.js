import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import foodReducer from "./food/foodReducer";


const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    food: foodReducer
})

export default rootReducer