import * as actions from "./actionsType";

export const addTodo = (bookName) => ({
  type: actions.ADDED_BOOK,
  payload: {
    bookName,
  },
});

export const deleteTodo = (id) => ({
  type: actions.REMOVED_BOOK,
  payload: {
    id,
  },
});
