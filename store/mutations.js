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

  //房产
  export function CHANGE_NEWHOUSE(state,house){
    state.houses = house;
  };
  export function SHOW_SPIN(state,show){
    state.hShowSpin = show;
  };
  //改变删选条件
  export function CHANGE_SELECTED_HOUSE(state,houseId){
    state.selectedHotHouse = houseId;
  };
  export function CHANGE_SELECTED_AREA(state,area){
    state.selectedArea = area;
  };
  export function CHANGE_SELECTED_PRICE(state,price){
    state.selectedAveragePrice = price;
  };
  export function CHANGE_SELECTED_PAYMENT(state,payment){
    state.selectedDownPayment = payment;
  };

  