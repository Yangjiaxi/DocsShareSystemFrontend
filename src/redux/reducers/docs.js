import * as actions from "../actions";

const init = {
  recent: [],
  shared: [],
  trash: [],
};

export const docsReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_RECENT_DOCS_FINISH:
      const { recent } = action;
      return { ...state, recent };
    case actions.GET_SHARED_DOCS_FINISH:
      const { shared } = action;
      return { ...state, shared };
    case actions.GET_TRASH_DOCS_FINISH:
      const { trash } = action;
      return { ...state, trash };
    default:
      return state;
  }
};

export default docsReducer;
