import React from "react";
import { Route, BrowserRouter,Routes} from "react-router-dom";
import AdminPanel from "../pages/Admin";
import CustomerPanel from "../pages/Customer";
import DriverPanel from "../pages/Driver";

function AppRouter() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<AdminPanel/>}/>
              <Route exact path='customer' element={<CustomerPanel/>}/>
              <Route exact path='driver' element={<DriverPanel/>}/>
          </Routes>
      </BrowserRouter>

  );
}

export default AppRouter;
