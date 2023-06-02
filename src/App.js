import { Route, Routes,    BrowserRouter as Router,  } from 'react-router-dom';
import {AnimatePresence}from 'framer-motion'
import { useStateValue } from './Context/StateProvider';
import axiosinstance from './Axios/Axios';
import VerifyOtp from './components/VerifyOtp';
import { useEffect, useState } from 'react';
import SignIn from '../src/pages/Authentication/SignIn.js';
import SignUp from '../src/pages/Authentication/SignUp.js';
import Chart from '../src/pages/Chart';
import ECommerce from '../src/pages/Dashboard/ECommerce.js';
import FormElements from '../src/pages/Form/FormElements.js';
import FormLayout from '../src/pages/Form/FormLayout.js';

import Settings from '../src/pages/Settings.js';
import Tables from '../src/pages/Tables.js';
import Alerts from '../src/pages/UiElements/Alerts.js';
import Buttons from '../src/pages/UiElements/Buttons.js';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword'
function App() {
  const [{token,cart,product,catagories},dispatch]=useStateValue()

  useEffect(()=>{
    

  },[])

  return (
    <div className="App">
      <AnimatePresence>




<Routes>
    <Route path="/" element={<SignIn />} />
     <Route path="/dashboard" element={<ECommerce />} />
     <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>} />
     <Route path="/auth/reset-password" element={<ResetPassword></ResetPassword>} />
     <Route path="/verifyOtp" element={<VerifyOtp></VerifyOtp>} />
     <Route path="/forms/form-elements" element={<FormElements />} />
     <Route path="/forms/form-layout" element={<FormLayout />} />
     <Route path="/tables" element={<Tables />} />
     <Route path="/settings" element={<Settings />} />
     <Route path="/chart" element={<Chart />} />
     <Route path="/ui/alerts" element={<Alerts />} />
     <Route path="/ui/buttons" element={<Buttons />} />
     <Route path="/auth/signin" element={<SignIn />} />
     <Route path="/auth/signup" element={<SignUp />} />



   </Routes>







      </AnimatePresence>
      
    </div>
      
  );
}

export default App;
