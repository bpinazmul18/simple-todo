import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "./actions";

const List = (props) => {
  console.log(props);
  return (
    <ul>
      {props.bookName.map((todo, index) => (
        <li key={index}>
          {todo.bookName}
          <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// const mapStateToProps = (state) => ({
//   todos: state.bookName.bookName,
// });

const mapStateToProps = ({ bookName }) => ({ bookName });

export default connect(mapStateToProps)(List);
