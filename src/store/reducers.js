let INITIAL_STATE = {
  lang: "en-US",
  favorites: [],
  counter: 0,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_COUNTER":
      return { ...state, counter: action.payload };
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload };
    case "SET_LANGUAGE":
      return { ...state, lang: action.payload };

    default:
      return state;
  }
}
export default reducer;