  //存储当前登录的用户信息
  export function CAHNGEUSER_INFO (state, userInfo) {
    state.userInfo = userInfo;
  };
  export function  CHANGECURRENT_LOGIN(state,isLogin){
    state.keepLogin = isLogin;
  };
  //退出登录loading、
  export function QUITlOGIN_LOADING(state,loading){
    state.showLoginLoading = loading;
  };
  