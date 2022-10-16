const selectUserName = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectRefreshing = state => state.contacts.isRefreshing;

export { selectUserName, selectIsLoggedIn, selectRefreshing };
