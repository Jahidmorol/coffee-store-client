import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe';
import UpdateCoffe from './components/UpdateCoffe';
import Coffes from './components/Coffes';
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coffes></Coffes>,
    loader: () => fetch('http://localhost:5000/coffee'),
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/addcoffee",
    element: <AddCoffe></AddCoffe>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
