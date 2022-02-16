//export const userIsAuth = (state) => false;
export const getUserEmail = state => state.auth.email;

export const userIsAuth = state => state.auth.isLogin;
export const userIsVerify = state => state.auth.isVerify;
export const authLoading = state => state.auth.isLoading;
export const authNotifyStatus = state => state.auth.notifyStatus;
