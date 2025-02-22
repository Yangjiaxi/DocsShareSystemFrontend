import * as actions from "../actions";
import { move } from "../../utils";

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
      needUpdate: Bool,
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
            needUpdate: false,
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
            ? {
                ...ele,
                comments: action.comments,
                needFetch: false,
                needUpdate: false,
              }
            : ele,
        ),
      };
    case actions.TOGGLE_VIEWING_DRAWER:
      return { ...state, viewingFloor: action.id };
    // socket:
    case actions.CHANGE_TITLE_FINISH:
      return { ...state, title: action.title };
    case actions.APPEND_FLOOR_FINISH:
      const newFloor = {
        id: action.id,
        time: action.time,
        content: action.content,
        needFetch: true,
        needUpdate: false,
        comments: null,
        commentsCount: 0,
      };
      return { ...state, contents: [...state.contents, newFloor] };
    case actions.CHANGE_FLOOR_FINISH:
      return {
        ...state,
        contents: state.contents.map(ele =>
          ele.id === action.id
            ? {
                ...ele,
                content: action.content,
                time: action.time,
              }
            : ele,
        ),
      };
    case actions.DELETE_FLOOR_FINISH:
      return {
        ...state,
        contents: state.contents.filter(({ id }) => id !== action.id),
      };
    case actions.ADD_COMMENT_FINISH:
      return {
        ...state,
        contents: state.contents.map(ele =>
          ele.id === action.floorID
            ? {
                ...ele,
                needFetch: true,
                needUpdate: true,
                commentsCount: ele.commentsCount + 1,
              }
            : ele,
        ),
      };
    case actions.VOTE_COMMENT_FINISH:
      return {
        ...state,
        contents: state.contents.map(ele =>
          ele.id === action.floorID
            ? {
                ...ele,
                needUpdate: true,
              }
            : ele,
        ),
      };
    case actions.MOVE_FLOOR_FINISH:
      return {
        ...state,
        contents: move(state.contents, action.from, action.to),
      };
    // side work
    case actions.EXIT_DOC_VIEWING:
      return init;
    default:
      return state;
  }
};

export default contentReducer;
