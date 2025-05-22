
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Root/MainLayOut';
import Error from '../Pages/Error';
import SignIn from '../Pages/SignIn/SignIn';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Rigester/Register';
import AddRoommate from '../Pages/AddToRoommate/AddListing';
import PrivateRoute from '../Components/Private/PrivateRoute';
import PostRommMet from '../Pages/Post/PostRommMet';
import BrowseListings from '../Pages/BrowseListings/BrowseListings';
import PostDetailsPage from '../Pages/Detailspage/PostDetailsPage';
import MyListing from '../Pages/MyListingPage/MyListing';
import { AuthContext } from '../Context/AuthContext';
import Update from '../Pages/UserUpdate/Update';
// import PrivateRout from '../Pages/PrivateRout/PrivateRout';



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://my-mongo-project-server.vercel.app/addRmm'),
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
                path: '/PostRommMet',
                element: <PostRommMet></PostRommMet>

            },
            {
                path: '/addRoommate',
                element: <PrivateRoute>
                    <AddRoommate>
                    </AddRoommate>
                </PrivateRoute>
            },
            {
                path: "/myListing",
                element: <PrivateRoute>
                    <MyListing></MyListing>
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://my-mongo-project-server.vercel.app/addRmmAll/${params.id}`),
                element:( <PrivateRoute>
                    <Update></Update>
                </PrivateRoute>)
            },
            {
                path: '/browseListings',
                loader: () => fetch('https://my-mongo-project-server.vercel.app/addRmmAll'),
                Component: BrowseListings
            },
            {
                path: 'users/:id',
                loader: ({ params }) => fetch(`https://my-mongo-project-server.vercel.app/addRmmAll/${params.id}`),
                element: <PrivateRoute>
                    <PostDetailsPage></PostDetailsPage>
                </PrivateRoute>
            }
        ]
    }
])

export default router