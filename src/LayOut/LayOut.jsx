import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Root/MainLayOut";
import Error from "../Pages/Error";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Rigester/Register";
import AddRoommate from "../Pages/AddToRoommate/AddListing";
import PrivateRoute from "../Components/Private/PrivateRoute";
import PostRommMet from "../Pages/Post/PostRommMet";
import BrowseListings from "../Pages/BrowseListings/BrowseListings";
import PostDetailsPage from "../Pages/Detailspage/PostDetailsPage";
import MyListing from "../Pages/MyListingPage/MyListing";
import { AuthContext } from "../Context/AuthContext";
import Update from "../Pages/UserUpdate/Update";
import Loading from "../Components/loading";
import PhotoPage from "../Pages/Mypage/PhotoPage";
import AllPhotoPage from "../Pages/Mypage/AllPhotoPage";
import ContactUs from "../Pages/Contact/ContactUs";
import DashboardLayOut from "./DashboardLayOut";
import MyListingPage from "../Pages/DasrboardPage/MyListingPage";
import OverviewPage from "../Pages/DasrboardPage/OverviewPage";
import BroseCollection from "../Pages/DasrboardPage/BroseCollection";
// import PrivateRout from '../Pages/PrivateRout/PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://my-mongo-project-server.vercel.app/addRmm"),
        element: <Home></Home>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/PostRommMet",
        element: <PostRommMet></PostRommMet>,
      },
      {
        path: "/addRoommate",
        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/myListing",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "allPhotoPage",
        element: (
          <PrivateRoute>
            <AllPhotoPage />
          </PrivateRoute>
        ),
      },
      {
        path: "myPage",
        element: (
          <PrivateRoute>
            <PhotoPage></PhotoPage>
          </PrivateRoute>
        ),
      },
      {
        path: "ContactUs",
        element: (
          <PrivateRoute>
            <ContactUs />
          </PrivateRoute>
        ),
      },

      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-mongo-project-server.vercel.app/addRmmAll/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/browseListings",
        loader: () =>
          fetch("https://my-mongo-project-server.vercel.app/addRmmAll"),
        Component: BrowseListings,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "users/:id",
        loader: ({ params }) =>
          fetch(
            `https://my-mongo-project-server.vercel.app/addRmmAll/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <PostDetailsPage></PostDetailsPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayOut />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: OverviewPage,
      },
      {
        path: "myListingPage",
        Component: MyListingPage,
      },

      {
        path: "BroseCollection",
        loader: () =>
          fetch("https://my-mongo-project-server.vercel.app/addRmmAll"),
        Component: BroseCollection,
      },
     
       {
        path: "myListing",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        )},
        {
        path: "addRoommate",
        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
