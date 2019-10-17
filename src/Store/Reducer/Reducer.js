import ActionTypes from "../Constant/constant";

const INITIAL_STATE = {
  isLoader: false,
  isError: false,
  errorMessage: "",
  str: {},
  countries: {},
  cloneSteps: {},
  searchResult: [],
  searchData: {},
  userCredentials: {},
  userDetails: {},
  tabs: false,
  taskId: "",
  hidaTabBar: false,
  loginUserData: {},
  propertyData:[]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload
      };
    case ActionTypes.LOADER:
      return {
        ...state,
        isLoader: !state.isLoader
      };
    case ActionTypes.TABS:
      return {
        ...state,
        tabs: action.payload
      };
    case ActionTypes.SHOWERROR:
      return {
        ...state,
        isLoader: !state.isLoader,
        isError: !state.isError,
        errorMessage: action.payload
      };
    case ActionTypes.HIDEERROR:
      return {
        ...state,
        isError: false,
        errorMessage: ""
      };
    case ActionTypes.STR:
      return {
        ...state,
        str: action.payload
      };

    case ActionTypes.COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case ActionTypes.STEPS:
      return {
        ...state,
        cloneSteps: action.payload
      };
    case ActionTypes.SEARCHRESULT:
      return {
        ...state,
        searchResult: action.payload
      };
    case ActionTypes.SEARCHDATA:
      return {
        ...state,
        searchData: action.payload
      };

    case ActionTypes.LOGINUSERDATA:
      return {
        ...state,
        loginUserData: action.payload
      };

    case ActionTypes.USERCREDENTIALS:
      return {
        ...state,
        userCredentials: action.payload
      };
    case ActionTypes.USERDETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    case ActionTypes.OWNERPROPERTY:
      return {
        ...state,
        propertyData: action.payload
      };
    case ActionTypes.TASKID:
      return {
        ...state,
        taskId: action.payload
      };
    case ActionTypes.HIDETABBAR:
      return {
        ...state,
        hidaTabBar: !state.hidaTabBar,
      };
    case ActionTypes.SHOWNAV:
      return {
        ...state,
        hidaTabBar: false,
      };

    default:
      return state;
  }
};
