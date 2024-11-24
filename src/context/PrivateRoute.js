// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAppContext } from './AppContext';

// const PrivateRoute = ({ children }) => {
//   const { isLoggedIn } = useAppContext();
//   return isLoggedIn ? children : <Navigate to="/" />;
// };

// export default PrivateRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from './AppContext';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAppContext();

  // التحقق من حالة تسجيل الدخول
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
