const getIsAuth = (state) => state.auth.isLogin;

const getUserName = (state) => state.auth.user.name;

const getUserEmail = (state) => state.auth.user.email;

const getCurrentToken = (state) => state.auth.token;

const getAuthError = (state) => state.auth.error;

const getIsLoading = (state) => state.auth.isLoading;

export {
  getIsAuth,
  getUserName,
  getUserEmail,
  getCurrentToken,
  getAuthError,
  getIsLoading,
};
