import * as actions from "../actions";

const init = {
  id: null,
  title: null,
  time: null, // time when doc create
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
    case actions.CHECKOUT_CONTENT_FINISH:
      const { id, title, time, contents } = action;
      return {
        ...state,
        id,
        title,
        time,
        contents: contents.map(
          ({ _id: contentId, content, time: contentTime, comments }) => ({
            id: contentId,
            content,
            time: contentTime,
            needFetch: true,
            comments: [],
            commentsCount: comments.length,
          }),
        ),
      };
    case actions.EXIT_DOC_VIEWING:
      return init;
    default:
      return state;
  }
};

export default contentReducer;
