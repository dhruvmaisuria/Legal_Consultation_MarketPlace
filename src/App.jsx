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
// import PrivateRoutes from './hooks/PrivateRoutes'
import { LawyerSignup } from './components/common/LawyerSignup'
import { LawyerLogin } from './components/common/LawyerLogin'
import { AddAppointment } from './components/user/AddAppointment'
import { ViewMyAppointments } from './components/user/ViewMyAppointments'
import { UpdateMyAppointment } from './components/user/UpdateMyAppointment'
import LandingPage from './components/common/LandingPage'
import { ResetPassword } from './components/common/ResetPassword'
import { ViewAppointments } from './components/lawyer/ViewAppointments'
import { ForgotPassword } from './components/common/ForgotPassword'
import { LawyerForgotPassword } from './components/common/LawyerForgotPassword'
import { LawyerResetPassword } from './components/common/LawyerResetPassword'
import { ContactUs } from './components/common/ContactUs'
import UserPrivateRoute from './hooks/UserPrivateRoutes'
import LawyerPrivateRoute from './hooks/LawyerPrivateRoutes'
import { AddQuery } from './components/user/AddQuery'
import { ViewMyQueries } from './components/user/ViewMyQueries'
import { ViewAllQueries } from './components/lawyer/ViewAllQueries'



const shouldApplyAppWrapper = (pathname) => {
  const  noWrapperPaths = [
    '/Login',
    '/signup',
    '/lawyerSignup',
    '/lawyerLogin',
    '/resetPassword',
    '/forgotPassword',
    '/lawyerForgotPassword',
    '/contactUs',
    '/lawyerResetPassword',

  ];


if (pathname === '/') return false;

return !noWrapperPaths.some(path => pathname.startsWith(path));
};




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
    <div className={shouldApplyAppWrapper(location.pathname) ? "app-wrapper" : "/user"}>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/lawyerSignup' element={<LawyerSignup/>}></Route>
        <Route path='/lawyerLogin' element={<LawyerLogin/>}></Route>
        <Route path='/resetPassword/:token' element={<ResetPassword/>}></Route>
        <Route path='/lawyerResetPassword/:token' element={<LawyerResetPassword/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='/lawyerForgotPassword' element={<LawyerForgotPassword/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>

        <Route path="" element={<UserPrivateRoute/>}>
        <Route path='/user' element={<UserSidebar />}>

          <Route path='profile' element={<UserProfile />}></Route>
          <Route path='addAppointment' element={<AddAppointment/>}></Route>
          <Route path='addQuery' element={<AddQuery/>}></Route>
          <Route path='viewMyAppointments' element={<ViewMyAppointments/>}></Route>
          <Route path='viewMyQueries' element={<ViewMyQueries/>}></Route>
          <Route path='updateAppointment/:id' element={<UpdateMyAppointment/>}></Route>
        </Route>
        </Route>
        <Route path='' element={<LawyerPrivateRoute/>}>
        <Route path='/lawyer' element={<LawyerSidebar />}>
          <Route path='viewAppointments' element={<ViewAppointments/>}></Route>
          <Route path='viewAllQueries' element={<ViewAllQueries/>}></Route>
          
        </Route>
        </Route>
        <Route path='/support_team' element={<LawyerSidebar />}>
          <Route path='supportsignup' element={<SupportSignup />}></Route>
          <Route path='supportlogin' element={<SupportLogin />}></Route>
        </Route>
        
      </Routes>


    </div>
  )
}

export default App
