import simplifiedChinese from "./zh-CN";
import americanEnglish from "./en-US";

export const i18nHelper = {
  // [Snackbar]
  loginSuccess: "loginSuccess",
  errorPrefix: "errorPrefix",
  // [Login]
  login: "login",
  email: "email",
  password: "password",
  // [AppBar]
  logout: "logout",
  goBack: "goBack",
  changeTheme: "changeTheme",
  lightMode: "lightMode",
  darkMode: "darkMode",
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
  aboutSite: "aboutSite"
};

export const languageList = {
  "zh-CN": {
    translation: simplifiedChinese,
    name: "简体中文",
    flag: "🇨🇳"
  },
  "en-US": {
    translation: americanEnglish,
    name: "English",
    flag: "🇺🇸"
  }
};

export const getTermText = (namespace, term) => {
  let language = localStorage.getItem("language") || "zh-CN";
  if (!(language in languageList)) {
    console.warn(`Language [${language}] is not supported yet, sorry!`);
    language = "zh-CN";
  }
  return (
    languageList[language].translation[namespace][term] ||
    languageList["zh-CN"].translation[namespace][term]
  );
};
