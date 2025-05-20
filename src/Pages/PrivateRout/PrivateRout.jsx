// import React, { use } from 'react';
// // import { AuthContext } from '../Provider/AuthProvider';
// import { Navigate, useLocation } from 'react-router';
// // import Loading from '../Components/Loading';
// import { AuthContext } from '../../Context/AuthContext';
// import Loading from '../../Components/loading';

// const PrivateRout = ({ children }) => {

//     const { user, loading  } = use(AuthContext);
//     const location = useLocation();
//     // console.log(location)

//     if (loading) {
//         return <Loading></Loading>
//     }
//     // console.log(user);   
//     if (user && user?.email) {
//         return children;
//     }
//     return <Navigate state={location.pathname} to="/login"> </Navigate>

// };

// export default PrivateRout;