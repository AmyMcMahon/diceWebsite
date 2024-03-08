import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Services from './Services.tsx';
import Contact from './Contact.tsx';
import '@picocss/pico'
import Home from './Home.tsx';
import Research from './Research.tsx';
import Beyond from './beyondCode.tsx';
import SignUpPage from './signUp.tsx';
import Feedback from './Feedback.tsx';
import Salim from './Salim.tsx';
import ManageSchools from './admin.tsx';
import Search from './search.tsx';
import Data from './data.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/innovation",
    element: <Research/>,
  },
  {
    path: "/services",
    element: <Services/>,
   },
   {
    path: "/contact",
    element: <Contact/>,
   },
   {
    path: "/signUp",
    element: <SignUpPage/>,
   },
   {
    path: "/beyond",
    element: <Beyond/>,
   },
   {
    path: "/feedback",
    element: <Feedback/>,
   },

  {
    path: "/salim",
    element: <Salim/>,
  },
  {
    path: "/admin",
    element: <ManageSchools/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
  {
    path: "/data",
    element: <Data/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

