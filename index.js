import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { gridColumns } from "./reducers/gridColumns";
import { gridRows } from "./reducers/gridRows";
import App from "./app";

const rootReducer = combineReducers({ gridColumns, gridRows });

const store = createStore(rootReducer);
console.log("Initial State: ", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
