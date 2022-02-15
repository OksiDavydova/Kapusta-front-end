//export const userIsAuth = (state) => false;
export const getUserEmail = (state) => state.auth.email;

export const userIsAuth = (state) => state.auth.isLogin;
