import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Authprovider from './provider/Authprovider.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Viewdetails from './pages/view details/Viewdetails.jsx';
import Details from './pages/dogdetails/Details.jsx';
import Privaterout from './pages/privateroute/Privaterout.jsx';
import Altoys from './pages/Altoys/Altoys.jsx';
import Toydetails from './pages/Toysdetails/Toydetails.jsx';
import Addtoy from './addtoy/Addtoy.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/details',
        element: <Privaterout><Viewdetails></Viewdetails></Privaterout>,
      },
      {
        path: '/detail',
        element: <Privaterout><Details></Details></Privaterout>,
      },
      {
        path: '/alltoys',
        element: <Altoys></Altoys>


      },
      {
        path: 'toysdetail/:id',
        element: <Privaterout><Toydetails></Toydetails></Privaterout>,
        loader: ({ params }) => fetch(`http://localhost:4000/toys/${params.id}`)


      },
      {
        path: '/addtoy',
        element: <Addtoy></Addtoy>


      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
