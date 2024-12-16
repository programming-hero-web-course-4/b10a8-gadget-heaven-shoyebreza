import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Error from './components/Error/Error'
import Home from './components/outlets/home/Home'


















const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:() =>fetch('/products.json'),
        children:[
          {
            path:'/',
            element:<AllProducts/>
          },
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
