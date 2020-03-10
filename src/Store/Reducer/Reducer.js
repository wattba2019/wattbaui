const INITIAL_STATE = {
  //API's URL
  // bseUrl: "https://fathomless-citadel-43321.herokuapp.com",
  bseUrl: "http://192.168.40.14:3002",
  // bseUrl: "http://192.168.10.10:3002",
  //user details
  userProfile: {},
  currentLocation: null,
  //shop details
  shopServices: null,
  stylists: null,
  workinghours: null,
  gallery: null,
  specialPack: null,
  shop: null
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action, "ACTION")
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
        // isLoader: !state.isLoader
      };
    case "SET_SERVICES":
      return {
        ...state,
        shopServices: action.payload,
      };
    case "SET_STYLISTS":
      return {
        ...state,
        stylists: action.payload,
      };
    case "SET_WORKINGHOURS":
      return {
        ...state,
        workinghours: action.payload,
      };
    case "SET_GALLERY":
      return {
        ...state,
        gallery: action.payload,
      };
    case "SET_SPECIAL_PACK":
      return {
        ...state,
        specialPack: action.payload,
      };
    case "SET_CURRENT_SHOP":
      return {
        ...state,
        shop: action.payload,
      };
    default:
      return state;
  }
};
