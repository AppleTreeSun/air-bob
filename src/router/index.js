import React from 'react';
import { Navigate } from 'react-router-dom';


const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))
const NotFound = React.lazy(() => import("@/views/notfound"))
const Lab = React.lazy(() => import("@/views/lab"))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home"/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/lab',
    element: <Lab/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
]


export default routes