import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReduser} from "./userReduser";
import {placeholderReduser} from "./placeholderReduser";
import {customDataReduser} from "./customDataReduser";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReduser = combineReducers({
  user: userReduser,
  placeholder: placeholderReduser,
  customData: customDataReduser
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
