import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Contact from './Contact.tsx';
import '@picocss/pico'
import Home from './Home.tsx';
import Research from './Research.tsx';
import Beyond from './beyondCode.tsx';
import SignUpPage from './signUp.tsx';
import Feedback from './Feedback.tsx';
import Salim from './Salim.tsx';
import ManageSchools from './admin.tsx';
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
    path: "/data",
    element: <Data/>
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} /> {/* Assuming router is defined */}
    </React.StrictMode>
  );
} else {
  console.error('Root element not found in the DOM');
}

