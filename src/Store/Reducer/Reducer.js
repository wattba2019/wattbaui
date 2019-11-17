const INITIAL_STATE = {
  bseUrl: "http://192.168.10.10:3002",
  currentLocation: null

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload
      };
    case "USER_CURRENT_LOCATION_ACTION":
      return {
        ...state,
        currentLocation: action.payload
      };
    default:
      return state;
  }
};
