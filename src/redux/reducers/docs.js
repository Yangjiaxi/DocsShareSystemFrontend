import * as actions from "../actions";

const init = {
  recent: [],
  shared: [],
  trash: [],
  shouldUpdateRecent: true,
  shouldUpdateShared: true,
  shouldUpdateTrash: true,
};

export const docsReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_RECENT_DOCS_FINISH:
      const { recent } = action;
      return { ...state, recent, shouldUpdateRecent: false };
    case actions.GET_SHARED_DOCS_FINISH:
      const { shared } = action;
      return { ...state, shared, shouldUpdateShared: false };
    case actions.GET_TRASH_DOCS_FINISH:
      const { trash } = action;
      return { ...state, trash, shouldUpdateTrash: false };
    case actions.SHOULD_UPDATE_RECENT:
      return { ...state, shouldUpdateRecent: true };
    case actions.SHOULD_UPDATE_SHARED:
      return { ...state, shouldUpdateShared: true };
    case actions.SHOULD_UPDATE_TRASH:
      return { ...state, shouldUpdateTrash: true };
    default:
      return state;
  }
};

export default docsReducer;
