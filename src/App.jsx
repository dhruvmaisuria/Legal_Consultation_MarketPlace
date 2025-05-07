import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



// import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"



import { Route, Routes, useLocation } from 'react-router-dom'
import { Login } from './components/common/Login'

import { UserSidebar } from './components/layouts/UserSidebar'
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
import { AddReview } from './components/user/AddReview'
import { ViewMyReviews } from './components/user/ViewMyReviews'
import { UserDashBoard } from './components/user/UserDashBoard'
import { LawyerDashBoard } from './components/lawyer/LawyerDashBoard'
import { SelectRole } from './components/common/SelectRole'
import { SelectLoginRole } from './components/common/SelectLoginRole'
import ViewAllLawyers from './components/user/ViewAllLawyers'
import LawyerProfile from './components/user/LawyerProfile'
import ViewMyPayments from './components/user/ViewMyPayments'


import { AdminSideBar } from './components/layouts/AdminSideBar'
import AdminDashBoard from './components/admin/AdminDashBoard'
import AdminUserManagement from './components/admin/AdminUserManagement'
import AdminLawyerManagement from './components/admin/AdminLawyerManagement'
import LawyerProfileForAdmin from './components/admin/LawyerProfileForAdmin'
import MyProfile from './components/lawyer/MyProfile'
import PaymentHistory from './components/admin/PaymentHistory'
import { AdminLogin } from './components/common/AdminLogin'
import AdminReviewManagement from './components/admin/AdminReviewManagement'
import AdminPrivateRoute from './hooks/AdminPrivateRoutes'
import { AdminResetPassword } from './components/common/AdminResetPassword'
import { AdminForgotPassword } from './components/common/AdminForgotPassword'








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
    '/selectRole',
    '/selectLoginRole',
    '/adminLogin',
    '/adminForgotPassword',
    '/adminResetPassword'
    

  ];


if (pathname === '/') return false;

return !noWrapperPaths.some(path => pathname.startsWith(path));
};




function App() {


  const [count, setCount] = useState(0)

  // axios.defaults.baseURL = "http://localhost:3010";
  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

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
        <Route path='/selectRole' element={<SelectRole/>}></Route>
        <Route path='/selectLoginRole' element={<SelectLoginRole/>}></Route>
        <Route path='/adminLogin' element={<AdminLogin/>}></Route>
        <Route path='/adminForgotPassword' element={<AdminForgotPassword/>}></Route>
        <Route path='/adminResetPassword/:token' element={<AdminResetPassword/>}></Route>
        

        <Route path='' element={<AdminPrivateRoute/>}>
        <Route path='/admin' element={<AdminSideBar/>}>
        <Route path='AdminDashBoard' element={<AdminDashBoard/>}></Route>
        
        <Route path='userManagement' element={<AdminUserManagement/>}></Route>
        <Route path='lawyerManagement' element={<AdminLawyerManagement/>}></Route>
        <Route path='lawyerProfile/:lawyerId' element={<LawyerProfileForAdmin/>}></Route>
        <Route path='getAllPayments' element={<PaymentHistory/>}></Route>
        <Route path='getAllReviews' element={<AdminReviewManagement/>}></Route>
        </Route>
        </Route> 

        <Route path="" element={<UserPrivateRoute/>}>
        <Route path='/user' element={<UserSidebar/>}>

          <Route path='userDashBoard' element={<UserDashBoard />}></Route>
          <Route path='addAppointment' element={<AddAppointment/>}></Route>
          <Route path='addQuery' element={<AddQuery/>}></Route>
          <Route path='addReview' element={<AddReview/>}></Route>
          <Route path='viewMyAppointments' element={<ViewMyAppointments/>}></Route>
          <Route path='viewMyQueries' element={<ViewMyQueries/>}></Route>
          <Route path='viewMyReviews' element={<ViewMyReviews/>}></Route>
          <Route path='updateAppointment/:id' element={<UpdateMyAppointment/>}></Route>
          <Route path='viewAllLawyers' element={<ViewAllLawyers/>}></Route>
          <Route path='lawyer/:lawyerId' element={<LawyerProfile/>}></Route>
          <Route path='viewMyPayments' element={<ViewMyPayments/>}></Route>


        </Route>
        </Route>
        <Route path='' element={<LawyerPrivateRoute/>}>
        <Route path='/lawyer' element={<LawyerSidebar />}>
          <Route path='viewAppointments' element={<ViewAppointments/>}></Route>
          <Route path='viewAllQueries' element={<ViewAllQueries/>}></Route>
          <Route path='lawyerDashBoard' element={<LawyerDashBoard/>}></Route>
          <Route path='myProfile' element={<MyProfile/>}></Route>
          
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
