import axios from 'axios';
import { API_URL } from '../global/constant';

const api = axios.create({
  baseURL: `${API_URL}/api`,
});
const logout = async () => {
  await localStorage.removeItem('jwtToken');
  await localStorage.clear();
  //   store.dispatch(setLogout());
};

export const _setTokenForAPI = async (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
    return;
  }
  const data = await localStorage.getItem('jwtToken');
  if (data) {
    const _token = data;
    console.log('_token', _token);
    api.defaults.headers.common['Authorization'] = _token;
    return;
  }
};
_setTokenForAPI();
api.interceptors.request.use(
  (config) => ({
    ...config,
    validateStatus: (status) => status === 200 && status,
  }),
  (error) => Promise.reject(error)
);

api.interceptors.response.use(undefined, (error) => {
  if (error?.toJSON()?.message !== 'Network Error') {
    if (error?.response?.status === 401) {
      //   logout();
      //   Popup.show({
      //     ...modalErrorConfig,
      //     title: "Error",
      //     textBody: "You've been logged out, please log back in.",
      //     buttonText: "Ok",
      //     callback: () => {
      //       Popup.hide();
      //       navigate("Login");
      //     },
      //   });
    } else {
      if (
        error?.response?.data?.kycStatus === false ||
        error?.response?.data?.kycStatus !== undefined
      ) {
      } else {
        // Popup.show({
        //   ...modalErrorConfig,
        //   title: "Error",
        //   textBody:
        //     error?.response?.data?.error ||
        //     error?.response?.data?.msg ||
        //     error?.response?.data?.message?.message ||
        //     error?.response?.data?.message ||
        //     error?.toJSON()?.message ||
        //     "Something went wrong",
        //   buttonText: "Ok",
        //   callback: () => {
        //     Popup.hide();
        //   },
        // });
      }
    }
  }

  return Promise.reject(error);
});

export default api;
