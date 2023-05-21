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
import Privaterout from './pages/privateroute/Privaterout.jsx';
import Altoys from './pages/Altoys/Altoys.jsx';
import Toydetails from './pages/Toysdetails/Toydetails.jsx';
import Addtoy from './addtoy/Addtoy.jsx';
import Mytoys from './Mytoys/Mytoys.jsx';
import UpdateToy from './Mytoys/UpdateToy/UpdateToy.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Error from './pages/Error/Error.jsx';
import ErrorPage from './components/NewLayout/ErrorPage.jsx';
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
        path: '/blogs',
        element: <Blogs></Blogs>,
      },

      {
        path: '/details',
        element: <Privaterout><Viewdetails></Viewdetails></Privaterout>,
      },

      {
        path: '/alltoys',
        element: <Altoys></Altoys>


      },
      {
        path: 'toysdetail/:id',
        element: <Privaterout><Toydetails></Toydetails></Privaterout>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-ruby.vercel.app/toys/${params.id}`)


      },
      {
        path: '/addtoy',
        element: <Privaterout><Addtoy></Addtoy></Privaterout>,
      },



      {
        path: '/mytoys',
        element: <Privaterout><Mytoys></Mytoys></Privaterout>,
        // loader: () => fetch('https://toy-marketplace-server-ruby.vercel.app/toy')


      },
      {
        path: 'updatetoy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-ruby.vercel.app/toy/${params.id}`)
      }

    ]
  },
  {
    path: '/',
    element: <ErrorPage></ErrorPage>,
    children: [

      {
        path: '/error',
        element: <Error></Error>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
