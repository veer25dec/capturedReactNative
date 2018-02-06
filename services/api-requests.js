// @flow

import config from '../util/config';
// how can i get this data from redux????
export const appLoginUser = () => (
  fetch(config.API_BASE_URL + config.API_APP_LOGIN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id': 'veer25mangat@gmail.com',
      'auth': 'Anna1234',
    }),
  }).then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
);
