export const LOGIN = "LOGIN";
export const login = token => ({
  type: LOGIN,
  token,
});

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT,
});

export const LOGIN_START = "LOGIN_START";
export const loginStart = (email, password) => ({
  type: LOGIN_START,
  email,
  password,
});

export const REGISTER_START = "REGISTER_START";
export const registerStart = (username, email, password) => ({
  type: REGISTER_START,
  username,
  email,
  password,
});

export const TOGGLE_PROGRESS = "TOGGLE_PROGRESS";
export const toggleProgress = (on = false) => ({
  type: TOGGLE_PROGRESS,
  on,
});

export const ENQUEUE_SNACKBAR = "ENQUEUE_SNACKBAR";
export const enqueueSnackbar = (message, options) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    message,
    options,
  },
});

export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";
export const removeSnackbar = key => ({
  type: REMOVE_SNACKBAR,
  key,
});

export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const closeSnackbar = key => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const changeLanguage = languageName => ({
  type: CHANGE_LANGUAGE,
  languageName,
});

export const CHANGE_THEME_MODE = "CHANGE_THEME_MODE";
export const changeThemeMode = () => ({
  type: CHANGE_THEME_MODE,
});

export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";
export const changeThemeColor = color => ({
  type: CHANGE_THEME_COLOR,
  color,
});

export const CHANGE_BROWSER_PATH = "CHANGE_BROWSER_PATH";
export const changeBrowserPath = pageName => ({
  type: CHANGE_BROWSER_PATH,
  pageName,
});

export const TOGGLE_SLIDER = "TOGGLE_SLIDER";
export const toggleSlider = (target = null) => ({
  type: TOGGLE_SLIDER,
  target,
});

export const DETECT_WIDTH = "DETECT_WIDTH";
export const detectWidth = isMobile => ({
  type: DETECT_WIDTH,
  isMobile,
});

export const VIEW_DOCS = "VIEW_DOCS";
export const viewDocs = isViewing => ({
  type: VIEW_DOCS,
  isViewing,
});

export const GET_USER_INFO_BEGIN = "GET_USER_INFO_BEGIN";
export const getUserInfoBegin = () => ({
  type: GET_USER_INFO_BEGIN,
});

export const GET_USER_INFO_FINISH = "GET_USER_INFO_FINISH";
export const getUserInfoFinish = info => ({
  type: GET_USER_INFO_FINISH,
  info,
});

export const GET_RECENT_DOCS_BEGIN = "GET_RECENT_DOCS_BEGIN";
export const getRecentDocsBegin = () => ({
  type: GET_RECENT_DOCS_BEGIN,
});

export const GET_RECENT_DOCS_FINISH = "GET_RECENT_DOCS_FINISH";
export const getRecentDocsFinish = recent => ({
  type: GET_RECENT_DOCS_FINISH,
  recent,
});

export const GET_MY_DOCS_BEGIN = "GET_MY_DOCS_BEGIN";
export const getMyDocsBegin = () => ({
  type: GET_MY_DOCS_BEGIN,
});

export const GET_MY_DOCS_FINISH = "GET_MY_DOCS_FINISH";
export const getMyDocsFinish = my => ({
  type: GET_MY_DOCS_FINISH,
  my,
});

export const GET_SHARED_DOCS_BEGIN = "GET_SHARED_DOCS_BEGIN";
export const getSharedDocsBegin = () => ({
  type: GET_SHARED_DOCS_BEGIN,
});

export const GET_SHARED_DOCS_FINISH = "GET_SHARED_DOCS_FINISH";
export const getSharedDocsFinish = shared => ({
  type: GET_SHARED_DOCS_FINISH,
  shared,
});

export const GET_TRASH_DOCS_BEGIN = "GET_TRASH_DOCS_BEGIN";
export const getTrashDocsBegin = () => ({
  type: GET_TRASH_DOCS_BEGIN,
});

export const GET_TRASH_DOCS_FINISH = "GET_TRASH_DOCS_FINISH";
export const getTrashDocsFinish = trash => ({
  type: GET_TRASH_DOCS_FINISH,
  trash,
});

export const DELETE_DOC_BEGIN = "DELETE_DOC_BEGIN";
export const deleteDocBegin = id => ({
  type: DELETE_DOC_BEGIN,
  id,
});

export const DELETE_DOC_FINISH = "DELETE_DOC_FINISH";
export const deleteDocFinish = () => ({
  type: DELETE_DOC_FINISH,
});

export const SHOULD_UPDATE_RECENT = "SHOULD_UPDATE_RECENT";
export const shouldUpdateRecent = () => ({
  type: SHOULD_UPDATE_RECENT,
});

export const SHOULD_UPDATE_MY = "SHOULD_UPDATE_MY";
export const shouldUpdateMy = () => ({
  type: SHOULD_UPDATE_MY,
});

export const SHOULD_UPDATE_SHARED = "SHOULD_UPDATE_SHARED";
export const shouldUpdateShared = () => ({
  type: SHOULD_UPDATE_SHARED,
});

export const SHOULD_UPDATE_TRASH = "SHOULD_UPDATE_TRASH";
export const shouldUpdateTrash = () => ({
  type: SHOULD_UPDATE_TRASH,
});

export const RESTORE_DOC_BEGIN = "RESTORE_DOC_BEGIN";
export const restoreDocBegin = id => ({
  type: RESTORE_DOC_BEGIN,
  id,
});

export const RESTORE_DOC_FINISH = "RESTORE_DOC_FINISH";
export const restoreDocFinish = () => ({
  type: RESTORE_DOC_FINISH,
});

export const DESTROY_DOC_BEGIN = "DESTROY_DOC_BEGIN";
export const destroyDocBegin = id => ({
  type: DESTROY_DOC_BEGIN,
  id,
});

export const DESTROY_DOC_FINISH = "DESTROY_DOC_FINISH";
export const destroyDocFinish = () => ({
  type: DESTROY_DOC_FINISH,
});

export const CREATE_DOC_START = "CREATE_DOC_START";
export const createDocStart = () => ({
  type: CREATE_DOC_START,
});

export const CREATE_DOC_FINISH = "CREATE_DOC_FINISH";
export const createDocFinish = () => ({
  type: CREATE_DOC_FINISH,
});

export const ACCEPT_DOC_START = "ACCEPT_DOC_START";
export const acceptDocStart = id => ({
  type: ACCEPT_DOC_START,
  id,
});

export const ACCEPT_DOC_FINISH = "ACCEPT_DOC_FINISH";
export const acceptDocFinish = () => ({
  type: ACCEPT_DOC_FINISH,
});

export const CHECKOUT_CONTENT_START = "CHECKOUT_CONTENT_START";
export const checkoutContentStart = id => ({
  type: CHECKOUT_CONTENT_START,
  id,
});

export const CHECKOUT_CONTENT_FINISH = "CHECKOUT_CONTENT_FINISH";
export const checkoutContentFinish = (id, title, time, contents, isOwned) => ({
  type: CHECKOUT_CONTENT_FINISH,
  id,
  title,
  time,
  contents,
  isOwned,
});

export const EXIT_DOC_VIEWING = "EXIT_DOC_VIEWING";
export const exitDocViewing = () => ({
  type: EXIT_DOC_VIEWING,
});

export const GET_COMMENT_START = "GET_COMMENT_START";
export const getCommentStart = id => ({
  type: GET_COMMENT_START,
  id,
});

export const GET_COMMENT_FINISH = "GET_COMMENT_FINISH";
export const getCommentFinish = (id, comments) => ({
  type: GET_COMMENT_FINISH,
  id,
  comments,
});

export const TOGGLE_VIEWING_DRAWER = "TOGGLE_VIEWING_DRAWER";
export const toggleViewingDrawer = id => ({
  type: TOGGLE_VIEWING_DRAWER,
  id,
});

// [SOCKET]
export const SOCKET_START = "SOCKET_START";
export const socketStart = id => ({
  type: SOCKET_START,
  id,
});

export const CHANGE_TITLE_START = "CHANGE_TITLE_START";
export const changeTitleStart = title => ({
  type: CHANGE_TITLE_START,
  title,
});

export const CHANGE_TITLE_FINISH = "CHANGE_TITLE_FINISH";
export const changeTitleFinish = title => ({
  type: CHANGE_TITLE_FINISH,
  title,
});

export const APPEND_FLOOR_START = "APPEND_FLOOR_START";
export const appendFloorStart = () => ({
  type: APPEND_FLOOR_START,
});

export const APPEND_FLOOR_FINISH = "APPEND_FLOOR_FINISH";
export const appendFloorFinish = (id, time, content) => ({
  type: APPEND_FLOOR_FINISH,
  id,
  time,
  content,
});

export const CHANGE_FLOOR_START = "CHANGE_FLOOR_START";
export const changeFloorStart = (content, floorID) => ({
  type: CHANGE_FLOOR_START,
  content,
  floorID,
});

export const CHANGE_FLOOR_FINISH = "CHANGE_FLOOR_FINISH";
export const changeFloorFinish = (id, time, content) => ({
  type: CHANGE_FLOOR_FINISH,
  id,
  time,
  content,
});

export const DELETE_FLOOR_START = "DELETE_FLOOR_START";
export const deleteFloorStart = id => ({
  type: DELETE_FLOOR_START,
  id,
});

export const DELETE_FLOOR_FINISH = "DELETE_FLOOR_FINISH";
export const deleteFloorFinish = id => ({
  type: DELETE_FLOOR_FINISH,
  id,
});

export const MOVE_FLOOR_START = "MOVE_FLOOR_START";
export const moveFloorStart = (from, to) => ({
  type: MOVE_FLOOR_START,
  from,
  to,
});

export const MOVE_FLOOR_FINISH = "MOVE_FLOOR_FINISH";
export const moveFloorFinish = (from, to) => ({
  type: MOVE_FLOOR_FINISH,
  from,
  to,
});

export const ADD_COMMENT_START = "ADD_COMMENT_START";
export const addCommentStart = (floorID, content) => ({
  type: ADD_COMMENT_START,
  floorID,
  content,
});

export const ADD_COMMENT_FINISH = "ADD_COMMENT_FINISH";
export const addCommentFinish = floorID => ({
  type: ADD_COMMENT_FINISH,
  floorID,
});

export const VOTE_COMMENT_START = "VOTE_COMMENT_START";
export const voteCommentStart = (floorID, commentID, vote) => ({
  type: VOTE_COMMENT_START,
  floorID,
  commentID,
  vote,
});

export const VOTE_COMMENT_FINISH = "VOTE_COMMENT_FINISH";
export const voteCommentFinish = floorID => ({
  type: VOTE_COMMENT_FINISH,
  floorID,
});
