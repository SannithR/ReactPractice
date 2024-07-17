// src/hoc/withLogging.tsx
import React from 'react';

const withLogging = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    console.log('Props:', props);
    return <Component {...props} />;
  };
};

export default withLogging;
