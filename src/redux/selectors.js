// export const userIsAuth = (state) => true;

export const userIsAuth = (state) => state.auth.isLogin;
export const userEmailAuth = (state) => state.auth.email;
