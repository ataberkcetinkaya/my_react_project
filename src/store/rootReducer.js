//tüm statelerin toplandığı yer...

import { combineReducers } from "redux";
import rentReducer from "./reducers/rentReducer";

const rootReducer = combineReducers({
    rent : rentReducer
})

export default rootReducer;