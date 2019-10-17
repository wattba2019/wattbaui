import ActionTypes from '../Constant/constant';
import { Actions, ActionConst } from 'react-native-router-flux';
// import Login from '../../container/Authentication/signIn'
import { Updates } from 'expo';



export function languageSet(str, route, userHave, userDetails) {
    return dispatch => {
        dispatch({ type: ActionTypes.STR, payload: str })
        console.log(route, "route")
        if (route === "WalkThrough") {
            Actions.WalkThrough()
        }
        if (route === "signIn") {
            Actions.signIn()
            // Actions.VeryfyAcc()
            // Actions.SearchForProperties()
            // Actions.tabNavigation()
            // alert("signin pr jaos")
        }
        if (route === "tabNavigation") {
            // alert("tab") 
            console.log(userDetails, "this.state.userHave", userHave),
                dispatch({ type: ActionTypes.USERCREDENTIALS, payload: userHave })
            dispatch({ type: ActionTypes.USERDETAILS, payload: userDetails })

            Actions.tabNavigation()
        }
        // Actions.VeryfyAcc()
        // Actions.signIn()
        // Actions.VeryfyAcc()
        // Actions.forGotPassword()
        // Actions.signUp()
        // Actions.tabNavigation()
    }
}

export function setUserCredentials(userCredentials) {
    console.log(userCredentials, "userCredentials")
    return dispatch => {
        dispatch({ type: ActionTypes.USERCREDENTIALS, payload: userCredentials })
    }
}

export function setUserDetails(userDetails) {
    // console.log(userCredentials, "userCredentials")
    return dispatch => {
        dispatch({ type: ActionTypes.USERDETAILS, payload: userDetails })
    }
}
export function setTaskId(id) {
    // console.log(userCredentials, "userCredentials")
    return dispatch => {
        dispatch({ type: ActionTypes.TASKID, payload: id })
    }
}

export function setStepsForAddProperties(setStepsForAddProperties) {
    return dispatch => {
        dispatch({ type: ActionTypes.STEPS, payload: setStepsForAddProperties })
    }
}


export function setCountries(countries) {
    return dispatch => {
        dispatch({ type: ActionTypes.COUNTRIES, payload: countries })
    }
}



export function resultData(searchResult) {
    return dispatch => {
        dispatch({ type: ActionTypes.SEARCHRESULT, payload: searchResult })
    }
}

export function hideTaber() {
    return dispatch => {
        Updates.reload()

        // NativeModules.DevMenu.reload();

        // Actions.uriPrefix("../../container/Authentication/signIn")
        // ({ scene, jumpToIndex }) => { jumpToIndex(scene.index); }
        // Actions.signIn()
        // Actions.signIn({ type: ActionConst.REPLACE });
        // Actions.signIn()
        // dispatch({ type: ActionTypes.HIDETABBAR, payload: false })
        // Actions.popTo('signIn')
        // Actions.Route("../../container/Authentication/signIn")
        // Actions.replace('signIn');
        // dispatch({ type: ActionTypes.HIDETABBAR, payload: false })



    }
}


export function setLoginUser(data) {
    return dispatch => {
        dispatch({ type: ActionTypes.LOGINUSERDATA, payload: data })

    }
}

export function setOwnerProperties(data) {
    return dispatch => {
        dispatch({ type: ActionTypes.OWNERPROPERTY, payload: data })

    }
}



export function showNav() {
    return dispatch => {
        // dispatch({ type: ActionTypes.SHOWNAV, payload: false })

    }
}










