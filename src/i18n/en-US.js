export const americanEnglish = {
  Snackbar: {
    acceptSuccess: "Opening document...",
    createDocSuccess: "Create Success",
    restoreSuccess: "Restore Success",
    destroySuccess: "Destroy Success",
    deleteSuccess: "Move to Trash Success",
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
    // (changeTitle)
    TITLE_ZERO_LENGTH: "Title can't be empty.",
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
    MY_PAGE: "My Documents",
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
    myDocs: "My Documents",
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
    deleteTime: "Delete time: ",
    deletedDoc: "Deleted by Owner",
    ownedDoc: "Mine",
    sharedDoc: "Shared with me",
    shareButton: "Share",
    deleteButton: "Move to Trash",
    restoreButton: "Restore",
    destroyButton: "Remove Completely",
    deleteHint: "Document will be sent to trash.",
    destroyHint:
      "Document will be remove completely, this operation CANNOT undo.",
  },
  Dialog: {
    confirmButton: "Confirm",
    cancelButton: "Cancel",
    attentionText: "ATTENTION",
  },
  ContentCell: {
    lastModify: "Last Modify: ",
    commentsCount: "#Comment: ",
    previewButton: "Preview",
    publishButton: "Publish",
    editCellButton: "Edit",
    removeCellButton: "Delete",
    collapseCellButton: "Collapse",
    realtimeSwitch: "Realtime Render",
    soonSaveHint: "Modified, please save as soon as posible",
  },
  FloorComments: {
    sendButton: "SEND",
  },
  ContentTitle: {
    contentTitle: "Title",
  },
};

export default americanEnglish;
