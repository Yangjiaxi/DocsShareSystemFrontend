import * as actions from "../actions";

const init = {
  recent: [],
  shared: [],
  trash: [],
};

export const docsReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_RECENT_DOCS_FINISH:
      const { data } = action;
      return { ...state, recent: data };
    default:
      return state;
  }
};

export default docsReducer;
