// @flow
import {appLoginUser} from '../services/api-requests';
import {fetchDataError} from './fetch-data-error';
import {fetchDataRequest} from './fetch-data-request';
import {fetchDataSuccess} from './fetch-data-success';

export const loginUser = () => (
  (dispatch : Function) => {
    dispatch(fetchDataRequest());
    return appLoginUser()
      .then((appLoginSuccessResult) => dispatch(fetchDataSuccess(appLoginSuccessResult)))
      .catch((err) => dispatch(fetchDataError()));
  }
);
