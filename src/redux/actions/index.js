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
export const toggleSlider = () => ({
  type: TOGGLE_SLIDER,
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

export const SHOULD_UPDATE_SHARED = "SHOULD_UPDATE_SHARED";
export const shouldUpdateShared = () => ({
  type: SHOULD_UPDATE_SHARED,
});

export const SHOULD_UPDATE_TRASH = "SHOULD_UPDATE_TRASH";
export const shouldUpdateTrash = () => ({
  type: SHOULD_UPDATE_TRASH,
});
