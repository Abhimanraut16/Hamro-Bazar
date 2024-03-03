import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import 'swiper/css';

// /_ bootstrap css 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// _ fonts and icons _

// import '././assets/css/icofont.min.css';
import '../src/component/Assest/css/icofont.min.css'
import '../src/component/Assest/css/animate.css'
import '../src/component/Assest/css/style.min.css'
// import '././assets/css/animate.css';
// import '././assets/css/style.min.css';





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Blog from './component/Blog/Blog.jsx';
import Shop from './component/Shop/Shop.jsx';
const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [{ path: '/', element: <Home /> },
    {
      path: '/Blog', element:<Blog/>
    },
    {
      path: "/shop",
      element: <Shop/>
    }

  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
