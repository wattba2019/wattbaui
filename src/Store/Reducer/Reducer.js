const INITIAL_STATE = {
  bseUrl: "https://fathomless-citadel-43321.herokuapp.com",
  // bseUrl: "http://192.168.100.156:3002",
  isLoader: false,
  userProfile: {},
  currentLocation: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        userProfile: action.payload
      };
    case "USER_CURRENT_LOCATION_ACTION":
      return {
        ...state,
        currentLocation: action.payload,
        isLoader: !state.isLoader
      };
    default:
      return state;
  }
};
