const selectUserName = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

export { selectUserName, selectIsLoggedIn };
