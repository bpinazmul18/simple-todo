import { connect } from "react-redux";
import React from "react";
import { addTodo } from "./actions";

const AddTodo = (props) => {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.bookName.value;
          props.dispatch(addTodo(input));
          event.target.bookName.value = "";
        }}
      >
        <label htmlFor="addBookList">Add Book List</label> <br /> <br />
        <input id="todo" name="bookName" type="text" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default connect()(AddTodo);
