// @flow

import config from '../util/config';
import ApiUtils from '../util/api-utils'

// how can i get this data from redux????
export const loginUser = ({ email, password }) => (
  fetch(config.API_BASE_URL + config.API_APP_LOGIN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id': email,
      'auth': password,
    }),
  }).then(response => {
      console.log("response is ", response)
        if (response.status >= 400) {
          fetchDataError();
        }
        return response.json();
      })
    .then((json) => {
      if(!json.success){
        console.log("response is + this should have been called");
        // dispatch(fetchDataError());
      }else{
        return (data) => data;
      }
  })
    .catch((err) => err)
);
