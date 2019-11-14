import ActionTypes from "../Constant/constant";

const INITIAL_STATE = {
  bseUrl: "http://192.168.100.62:3002"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
