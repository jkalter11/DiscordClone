import { createStore, applyMiddleware, compose } from "redux"
import reduxPromiseMiddleware from "redux-promise-middleware"
import reducer from "./reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxPromiseMiddleware()))
)
