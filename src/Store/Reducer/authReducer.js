import ActionTypes from "../Constant/constant";

const INITIAL_STATE = {
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER:
      return {
        ...state,
        user: action.payload
      };
    case ActionTypes.USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
};
