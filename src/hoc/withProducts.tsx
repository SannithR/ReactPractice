// src/hoc/withProducts.tsx
import React from 'react';
import { ProductsContext } from '../context/ProductsContext';

const withProducts = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const context = React.useContext(ProductsContext);

    if (!context) {
      throw new Error('withProducts must be used within a ProductsProvider');
    }

    return <WrappedComponent {...props} {...context} />;
  };
};

export default withProducts;
