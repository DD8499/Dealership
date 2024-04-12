import React from 'react';
import { AuthProvider } from './auth-context';
import { LoaderProvider } from './loader-context';

const ProvidersWrapper = ({ children }) => {
  const providers = {
    AuthProvider,
    LoaderProvider,
  };

  const ProviderComponents = Object.values(providers);

  return (
    <>
      {ProviderComponents.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};

export default ProvidersWrapper;
