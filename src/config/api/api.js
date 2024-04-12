import api from './apiCOnfig';

const auth = {
  userLogin: (data) => api.post(`/user/login`, data),
  userCreate: (data) => api.post(`/user/register`, data),
};
export default {
  auth,
};
