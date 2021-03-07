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
      console.log(action.payload.id);
      const data = state.filter((book) => book.id !== action.payload.id);
      return data;

    default:
      return state;
  }
}
