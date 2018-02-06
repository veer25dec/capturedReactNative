// @flow
import {combineReducers} from 'redux';
import appLoginReducer from './app-login-reducer';

// // Root Reducer
// const rootReducer = combineReducers({
//   appLogin: apploginReducer,
//   nav: navReducer,
// });
//
// export default rootReducer;
export default function getRootReducer(navReducer:Object) {
    return combineReducers({
        nav: navReducer,
        appLogin: appLoginReducer,
    });
}
