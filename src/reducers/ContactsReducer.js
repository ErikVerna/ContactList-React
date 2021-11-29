export const ContactsReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((e) => e.id !== action.payload);

    default:
      return state;
  }
};
