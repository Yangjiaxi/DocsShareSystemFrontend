import simplifiedChinese from "./zh-CN";
import americanEnglish from "./en-US";

export { TextTermMaker } from "./component";

export const i18nHelper = {
  // [Snackbar]
  loginSuccess: "loginSuccess",
  registerSuccess: "registerSuccess",
  errorPrefix: "errorPrefix",
  registerUsernameHint: "registerUsernameHint",
  registerEmailHint: "registerEmailHint",
  // --------------------------
  // [common]
  NO_SUCH_PATH: "NO_SUCH_PATH",
  // [JWT]
  NO_JWT: "NO_JWT",
  INVALID_JWT: "INVALID_JWT",
  // [User]
  // (register)
  BAD_EMAIL: "BAD_EMAIL",
  BAD_PASSWORD: "BAD_PASSWORD",
  BAD_USERNAME: "BAD_USERNAME",
  USERNAME_EXIST: "USERNAME_EXIST",
  EMAIL_EXIST: "EMAIL_EXIST",
  // (login)
  BAD_LOGIN: "BAD_LOGIN",
  // (info)
  NO_SUCH_USER: "NO_SUCH_USER",
  // (share)
  NO_SUCH_DOC: "NO_SUCH_DOC",
  // (delete)
  ALREADY_DELETED: "ALREADY_DELETED",
  // --------------------------
  // [Login] | [Register]
  login: "login",
  loginWord: "loginWord",
  registerWord: "registerWord",
  register: "register",
  email: "email",
  password: "password",
  username: "username",
  // [AppBar]
  logout: "logout",
  goBack: "goBack",
  changeTheme: "changeTheme",
  lightMode: "lightMode",
  darkMode: "darkMode",
  INFO_PAGE: "INFO_PAGE",
  RECENT_PAGE: "RECENT_PAGE",
  SHARED_PAGE: "SHARED_PAGE",
  DELETED_PAGE: "DELETED_PAGE",
  ABOUT_PAGE: "ABOUT_PAGE",
  HOME_PAGE: "HOME_PAGE",
  INIT_PAGE: "INIT_PAGE",
  DOC_PAGE: "DOC_PAGE",
  // [Slider]
  newDoc: "newDoc",
  recentDocs: "recentDocs",
  shareDocs: "shareDocs",
  wasteBin: "wasteBin",
  aboutSite: "aboutSite",
  profile: "profile",
  // [CircularProgress]
  loadingPrefix: "loadingPrefix",
  // [DocsTable]
  lastUse: "lastUse",
  createTime: "createTime",
  deleteTime: "deleteTime",
  deletedDoc: "deletedDoc",
  ownedDoc: "ownedDoc",
  sharedDoc: "sharedDoc",
  shareButton: "shareButton",
  deleteButton: "deleteButton",
  deleteHint: "deleteHint",
  // [Dialog]
  confirmButton: "confirmButton",
  cancelButton: "cancelButton",
  attentionText: "attentionText",
};

export const languageList = {
  "zh-CN": {
    translation: simplifiedChinese,
    name: "简体中文",
    flag: "🇨🇳",
  },
  "en-US": {
    translation: americanEnglish,
    name: "English",
    flag: "🇺🇸",
  },
};

export const loadTranslation = languageName => {
  if (!(languageName in languageList)) {
    console.warn(`Language [${languageName}] is not supported yet!`);
    return languageList["zh-CN"];
  }
  return languageList[languageName].translation;
};

export const getTermText = (namespace, term) => {
  let language = localStorage.getItem("language") || "zh-CN";
  if (!(language in languageList)) {
    console.warn(`Language [${language}] is not supported yet!`);
    language = "zh-CN";
  }
  return (
    languageList[language].translation[namespace][term] ||
    languageList["zh-CN"].translation[namespace][term]
  );
};
