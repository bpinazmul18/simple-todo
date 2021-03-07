import * as actions from "./actionsType";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADDED_BOOK:
      return [
        ...state,
        {
          id: ++lastId,
          bookName: action.payload.bookName,
          isPaid: false,
        },
      ];
    case actions.REMOVED_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
