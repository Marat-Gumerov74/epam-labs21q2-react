import {applyMiddleware, combineReducers, createStore} from "redux";
import {customDataReduser} from "./customDataReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReduser = combineReducers({
  customData: customDataReduser
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
