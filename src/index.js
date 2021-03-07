import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddTodo from "./AddTodo";
import List from "./List";

const App = () => {
  return (
    <div>
      <AddTodo />
      <List />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
