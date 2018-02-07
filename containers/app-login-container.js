// @flow

import {connect} from 'react-redux';
import LoginScreen from '../components/login-screen';
import {getAppLoginSelector} from '../reducers/app-login-reducer';
import {loginUser} from '../actions/fetch-data';

// mapStateToProps = (state, props) => ({
//     ...props.navigation.state.params
// })

const mapStateToProps = (state : Object) => getAppLoginSelector(state);
const mapDispatchToProps = (dispatch : Function) => (
  {
    loginUser: () => dispatch(loginUser()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
