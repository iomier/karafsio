const initialState = {
  test: ""
};

export const searchSiteReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, test: action.payload };
    default:
      return state;
  }
};
