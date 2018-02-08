// // @flow
// import config from '../util/config';
// import ApiUtils from '../util/api-utils'
//
// // how can i get this data from redux????
// export const appLoginUser = ({ email, password }) => {
//     fetch(config.API_BASE_URL + config.API_APP_LOGIN, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         'id': email,
//         'auth': password,
//         }),
//       })
//       .then((res) => res.json())
//       .then((data) => data)
//       .catch((err) => err)
// };
