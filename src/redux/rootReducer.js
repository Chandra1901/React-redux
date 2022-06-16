// We learnt that redux provides the CombineReducers function  to handle Scenarios where there are the multiple reducers

// Within this reducer we will combine all our reducers within the single reducer that can be passed to the create store function

import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export  default rootReducer