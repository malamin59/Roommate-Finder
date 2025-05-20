
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Root/MainLayOut';
import Error from '../Pages/Error';
import SignIn from '../Pages/SignIn/SignIn';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Rigester/Register';
import AddRoommate from '../Pages/AddToRoommate/AddListing';
import PrivateRoute from '../Components/Private/PrivateRoute';
// import PrivateRout from '../Pages/PrivateRout/PrivateRout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addRoommate',
                element: <PrivateRoute>
                    <AddRoommate>
                    </AddRoommate>
                </PrivateRoute>


            }
        ]
    }
])

export default router