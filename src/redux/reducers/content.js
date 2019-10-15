import * as actions from "../actions";

const init = {
  id: null,
  title: null,
  time: null, // time when doc create
  viewingFloor: null, // for toggle comment drawer
  isOwned: false,
  contents: [],
  /*
    {
      content: String,
      id: ObjectId
      time: Number // time when floor last modify
      !!! needFetch: Bool (true -> false) !!!
      comments: [{
        content: String,
        time: Number, // time then this comment added
        username: String,
        voteUp: Number,
        voteDown: Number,
      }]
    }
  */
};

export const contentReducer = (state = init, action) => {
  switch (action.type) {
    case actions.ADD_FLOOR:
      const newFloor = {
        id: null,
        content: "",
        time: null,
        needFetch: false,
        comments: null,
        commentsCount: 0,
      };
      return { ...state, contents: [...state.contents, newFloor] };
    case actions.CHECKOUT_CONTENT_FINISH:
      const { contents, ...rests } = action;
      return {
        ...rests,
        contents: contents.map(
          ({ _id: contentId, content, time: contentTime, comments }) => ({
            id: contentId,
            content,
            time: contentTime,
            needFetch: true,
            comments: null,
            commentsCount: comments.length,
          }),
        ),
      };
    case actions.GET_COMMENT_FINISH:
      return {
        ...state,
        contents: state.contents.map(ele =>
          ele.id === action.id
            ? { ...ele, comments: action.comments, needFetch: false }
            : ele,
        ),
      };
    case actions.TOGGLE_VIEWING_DRAWER:
      return { ...state, viewingFloor: action.id };
    // socket:
    case actions.CHANGE_TITLE_FINISH:
      return { ...state, title: action.title };
    case actions.EXIT_DOC_VIEWING:
      return init;
    default:
      return state;
  }
};

export default contentReducer;
