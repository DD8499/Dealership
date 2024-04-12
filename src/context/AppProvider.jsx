import React from 'react';
import PropTypes from 'prop-types';
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
      {ProviderComponents.reduceRight(
        (acc, Comp) => (
          <Comp>{acc}</Comp>
        ),
        children
      )}
    </>
  );
};

export default ProvidersWrapper;

ProvidersWrapper.propTypes = {
  children: PropTypes.any,
};
