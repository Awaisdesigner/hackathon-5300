import { combineReducers } from "redux";

import AuthReducer from './reducer/AuthReducer'

const rootReducer = combineReducers({

    AuthReducer,
})

export default rootReducer