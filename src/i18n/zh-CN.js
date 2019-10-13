export const simplifiedChinese = {
  Snackbar: {
    acceptSuccess: "正在打开...",
    createDocSuccess: "新建成功",
    restoreSuccess: "文件已恢复",
    destroySuccess: "文件已移除",
    deleteSuccess: "成功移动至回收站",
    loginSuccess: "登陆成功",
    registerSuccess: "注册成功",
    errorPrefix: "错误：",
    // [JWT]
    NO_JWT: "没有提供身份验证",
    INVALID_JWT: "身份验证已过期",
    // [User]
    // (register)
    BAD_EMAIL: "不合法的邮箱地址",
    BAD_PASSWORD: "密码至少六位",
    BAD_USERNAME: "用户名至少六位",
    USERNAME_EXIST: "该用户名已被占用",
    EMAIL_EXIST: "该邮箱已被注册",
    // (login)
    BAD_LOGIN: "邮箱或密码错误",
    // (info)
    NO_SUCH_USER: "不合法的用户ID",
    // (share)
    NO_SUCH_DOC: "不合法的文档ID",
    // (delete)
    ALREADY_DELETED: "文档已被删除",
  },
  Login: {
    login: "登录",
    register: "注册",
    loginWord: "登陆协同评注系统",
    registerWord: "注册协同评注系统",
    email: "邮箱",
    password: "密码",
    username: "用户名",
  },
  AppBar: {
    INFO_PAGE: "个人信息",
    HOME_PAGE: "主页",
    INIT_PAGE: "初始化...",
    DOC_PAGE: "文档共享",
    RECENT_PAGE: "最近查看",
    MY_PAGE: "我的文档",
    SHARED_PAGE: "与我共享",
    DELETED_PAGE: "回收站",
    ABOUT_PAGE: "关于",
    logout: "登出",
    goBack: "返回",
    changeTheme: "切换：",
    lightMode: "亮色模式",
    darkMode: "暗色模式",
  },
  Slider: {
    newDoc: "新建文档",
    recentDocs: "最近查看",
    myDocs: "我的文档",
    shareDocs: "与我共享",
    wasteBin: "回收站",
    aboutSite: "关于",
    profile: "个人信息",
  },
  CircularProgress: {
    loadingPrefix: "正在加载",
  },
  DocsTable: {
    lastUse: "最后使用：",
    createTime: "创建时间：",
    deleteTime: "删除时间：",
    deletedDoc: "被创建者删除",
    ownedDoc: "我的",
    sharedDoc: "与我共享",
    shareButton: "分享",
    deleteButton: "移到回收站",
    restoreButton: "恢复",
    destroyButton: "彻底删除",
    deleteHint: "文档将被移动至回收站",
    destroyHint: "文档将被彻底删除，该操作无法恢复",
  },
  Dialog: {
    confirmButton: "确认",
    cancelButton: "取消",
    attentionText: "注意",
  },
  ContentCell: {
    lastModify: "最后修改：",
    commentsCount: "评论数：",
  },
  FloorComments: {
    sendButton: "发送",
  },
};

export default simplifiedChinese;
