import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Routers'
import TimeLineContextProvidor from './Context/TimeLineContextProvidor'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TimeLineContextProvidor>
     <RouterProvider router ={router}>
      
    </RouterProvider>
     <ToastContainer />
   </TimeLineContextProvidor>
  </StrictMode>
)
