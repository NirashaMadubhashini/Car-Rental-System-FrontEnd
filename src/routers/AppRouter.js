import React from "react";
import { Route, BrowserRouter,Routes} from "react-router-dom";
import AdminPanel from "../pages/Admin";
import CustomerPanel from "../pages/Customer";
import DriverPanel from "../pages/Driver";
import AboutSection from "../pages/Loging";
import LogingSection from "../pages/Loging";
import SignUp from "../pages/Loging/SignUp";

function AppRouter() {
  return (
      <BrowserRouter>
          <Routes>
              {/*<Route exact path='/' element={<LogingSection/>}/>*/}
              <Route exact path='admin' element={<AdminPanel/>}/>
              <Route exact path='customer' element={<CustomerPanel/>}/>
              <Route exact path='driver' element={<DriverPanel/>}/>
              <Route exact path='/' element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default AppRouter;
