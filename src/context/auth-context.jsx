import React, { createContext, useContext, useState } from 'react';

import { toast } from 'react-toastify';
import { LoaderContext } from './loader-context';
// import { Cookies, useCookies } from "react-cookie";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setLoading } = useContext(LoaderContext);
  //   const [cookies] = useCookies();

  const loginUser = async (values) => {
    try {
      setLoading(true);
      //   let { data } = await api.auth.userLogin(values);
      //   if (data && data.success) {
      //     setUserCookies(data.data);
      //     setUser(data.data);
      //     toast.success("LoggedIn Successfully!");
      //     setLoggedIn(true);
      //     setLoading(false);
      //   } else {
      //     setLoading(false);
      //     setLoggedIn(false);
      //   }
    } catch (error) {
      setLoading(false);
      setLoggedIn(false);
      toast.error('something went to wrong!');
    }
  };

  const contextValues = {
    isLoggedIn,
    loginUser,
    setLoggedIn,
  };

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>;
};
