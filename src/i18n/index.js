import simplifiedChinese from "./zh-CN";
import americanEnglish from "./en-US";

export const i18nHelper = {
  // [Login]
  login: "login",
  email: "email",
  password: "password",
  // [AppBar]
  logout: "logout",
  goBack: "goBack",
  changeTheme: "changeTheme",
  lightMode: "lightMode",
  darkMode: "darkMode"
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
  const language = localStorage.getItem("language") || "zh-CN";
  return (
    languageList[language].translation[namespace][term] ||
    languageList["zh-CN"].translation[namespace][term]
  );
};
