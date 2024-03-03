import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contatti from './pages/Contatti.jsx'
import About from './pages/About.jsx'
import Cities from './pages/Cities.jsx'
import SingolaCard from './pages/SingolaCard.jsx'
import CitiesChildren from './pages/CitiesChildren.jsx'
import SingolaCardChildren from './pages/SingolaCardChildren.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home> ,
  },
  {
    path:"/about",
    element: <About></About> ,
  },
  {
    path:"/contatti",
    element: <Contatti></Contatti> ,
  },
  {
    path:"/cities",
    element: <Cities></Cities> ,
  },
  {
    path:"/cities/:cardId",
    element: <SingolaCard></SingolaCard> ,
  },
  {
    path:"/cities-children",
    element:  <CitiesChildren></CitiesChildren>,
    children:[
      {
        path:":cardId",
        element: <SingolaCardChildren></SingolaCardChildren>
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
