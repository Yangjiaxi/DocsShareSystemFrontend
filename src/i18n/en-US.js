export const americanEnglish = {
  Snackbar: {
    loginSuccess: "Login Success",
    registerSuccess: "Register Success",
    errorPrefix: "ERROR: ",
    // [JWT]
    NO_JWT: "No Token Provided",
    INVALID_JWT: "Token Expired",
    // [User]
    // (register)
    BAD_EMAIL: "Invalid Email Address",
    BAD_PASSWORD: "Invalid password, at least 6 chars is required.",
    BAD_USERNAME: "Invalid username, at least 6 chars is required.",
    USERNAME_EXIST: "This usename has already been taken, consider another.",
    EMAIL_EXIST: "This email has already been registered.",
    // (login)
    BAD_LOGIN: "Wrong password or email.",
    // (info)
    NO_SUCH_USER: "Invalid user ID.",
    // (share)
    NO_SUCH_DOC: "Invalid document ID.",
    // (delete)
    ALREADY_DELETED: "This document has already been deleted.",
  },
  Login: {
    login: "Sign in",
    loginWord: "Sign in co-comment system",
    register: "Sign up",
    registerWord: "Sign up co-comment system",
    email: "E-Mail",
    password: "Password",
    username: "Username",
  },
  AppBar: {
    INFO_PAGE: "My Profile",
    HOME_PAGE: "Home",
    INIT_PAGE: "Initializing...",
    RECENT_PAGE: "Recent Used",
    SHARED_PAGE: "Shared Documents",
    DELETED_PAGE: "Deleted Documents",
    ABOUT_PAGE: "About",
    DOC_PAGE: "Documents",
    logout: "Logout",
    goBack: "Back",
    changeTheme: "Change To: ",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
  },
  Slider: {
    newDoc: "Create",
    recentDocs: "Recent",
    shareDocs: "Shared With Me",
    wasteBin: "Trash",
    aboutSite: "About",
    profile: "My Profile",
  },
  CircularProgress: {
    loadingPrefix: "Loading",
  },
  DocsTable: {
    lastUse: "Last use: ",
    createTime: "Create time: ",
    deletedDoc: "Deleted",
    ownedDoc: "Mine",
    sharedDoc: "Shared with me",
    shareButton: "Share",
    deleteButton: "Move to Trash",
  },
};

export default americanEnglish;
