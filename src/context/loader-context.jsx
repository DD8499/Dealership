import React, { createContext, useCallback, useState } from 'react';

export const LoaderContext = createContext({});

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const contextValues = {
    loading,
    setLoading: useCallback(async (loading) => {
      await setLoading(loading);
    }, []),
  };

  return <LoaderContext.Provider value={contextValues}>{children}</LoaderContext.Provider>;
};
