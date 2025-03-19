import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"

import { Route, Routes, useLocation } from 'react-router-dom'
import { Login } from './components/common/Login'

import { UserSidebar } from './components/layouts/UserSidebar'
import { UserProfile } from './components/user/UserProfile'
import { LawyerSidebar } from './components/layouts/LawyerSidebar'
import { Signup } from './components/common/Signup'
import axios from 'axios'
import { SupportSignup } from './components/supportTeam/SupportSignup'
import { SupportLogin } from './components/supportTeam/SupportLogin'
import PrivateRoutes from './hooks/PrivateRoutes'
import { LawyerSignup } from './components/common/LawyerSignup'
import { LawyerLogin } from './components/common/LawyerLogin'
import { AddAppointment } from './components/user/AddAppointment'
import { ViewMyAppointments } from './components/user/ViewMyAppointments'
import { UpdateMyAppointment } from './components/user/UpdateMyAppointment'




function App() {


  const [count, setCount] = useState(0)

  axios.defaults.baseURL = "http://localhost:3010";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = "";
    }

    else {
      document.body.className = "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";

    }

  }, [location.pathname]);

  return (
    <div className={location.pathname === "/Login" || location.pathname === "/signup"  || location.pathname === "/lawyerSignup" || location.pathname === "/lawyerLogin" ? "" : "app-wrapper"}>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/lawyerSignup' element={<LawyerSignup/>}></Route>
        <Route path='/lawyerLogin' element={<LawyerLogin/>}></Route>

        <Route path="" element={<PrivateRoutes/>}>
        <Route path='/user' element={<UserSidebar />}>

          <Route path='profile' element={<UserProfile />}></Route>
          <Route path='addAppointment' element={<AddAppointment/>}></Route>
          <Route path='viewMyAppointments' element={<ViewMyAppointments/>}></Route>
          <Route path='updateAppointment/:id' element={<UpdateMyAppointment/>}></Route>
        </Route>
        <Route path='/lawyer' element={<LawyerSidebar />}>
          
          
        </Route>
        <Route path='/support_team' element={<LawyerSidebar />}>
          <Route path='supportsignup' element={<SupportSignup />}></Route>
          <Route path='supportlogin' element={<SupportLogin />}></Route>
        </Route>
        </Route>
      </Routes>


    </div>
  )
}

export default App
