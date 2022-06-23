import { createStore,combineReducers,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { adminReducer } from "./reducers/adminReducer"
import { authReducer } from "./reducers/authReducer"
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
   admin: adminReducer,
   auth: authReducer
})

const middleware = [thunkMiddleware] 

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
))

export default store