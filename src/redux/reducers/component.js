import * as actions from "../actions";
import { loadTranslation } from "../../i18n";

const languageName = localStorage.getItem("language") || "zh-CN";

const stored = {
  languageName,
  languageDict: loadTranslation(languageName),
  themeMode: localStorage.getItem("themeMode") || "light",
  themeColor: localStorage.getItem("themeColor") || "blue",
};

const init = {
  ...stored,
  progressOn: false,
  snackbars: [],
  pageName: "INIT_PAGE",
  drawerOpen: false,
  isMobile: false,
  isViewingDocs: false,
};

export function componentReducer(state = init, action) {
  switch (action.type) {
    case actions.VIEW_DOCS:
      return { ...state, isViewingDocs: action.isViewing };
    case actions.DETECT_WIDTH:
      return { ...state, isMobile: action.isMobile };
    case actions.TOGGLE_SLIDER:
      const { drawerOpen } = state;
      return { ...state, drawerOpen: !drawerOpen };
    case actions.CHANGE_BROWSER_PATH:
      return { ...state, pageName: action.pageName };
    case actions.CHANGE_THEME_MODE:
      const { themeMode } = state;
      const changeTo = themeMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", changeTo);
      return { ...state, themeMode: changeTo };
    case actions.CHANGE_THEME_COLOR:
      localStorage.setItem("themeColor", action.color);
      return { ...state, themeColor: action.color };
    case actions.CHANGE_LANGUAGE:
      localStorage.setItem("language", action.languageName);
      return {
        ...state,
        languageName: action.languageName,
        languageDict: loadTranslation(action.languageName),
      };
    case actions.TOGGLE_PROGRESS:
      return { ...state, progressOn: action.on };
    case actions.ENQUEUE_SNACKBAR:
      return {
        ...state,
        snackbars: [...state.snackbars, { ...action.notification }],
      };
    case actions.REMOVE_SNACKBAR:
      return {
        ...state,
        snackbars: state.snackbars.filter(
          snackbar => snackbar.key !== action.key,
        ),
      };
    case actions.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbars: state.snackbars.map(snackbar =>
          action.dismissAll || snackbar.key === action.key
            ? { ...snackbar, dismissed: true }
            : { ...snackbar },
        ),
      };
    default:
      return state;
  }
}
