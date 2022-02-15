// export const userIsAuth = (state) => true;
export const getUserEmail = (state) => state.auth.email;

export const userIsAuth = (state) => state.auth.isLogin;
