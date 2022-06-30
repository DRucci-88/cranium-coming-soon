import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'flowbite'
import IndexPublic from "./activity/public";
import IndexHomeDashboard from "./activity/home-dashboard";
import AuthContextProvider from "./context/AuthContext";
import IndexEventDashboard from './activity/event-dashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>

          {/*Home Dashboard Activity*/}
          {/* <Route path={'home-dashboard/*'} element={<IndexHomeDashboard/>}/> */}

          {/*Public Activity*/}
          <Route path={'/*'} element={<IndexPublic/>}/>

          {/*Event Dashboard Activity*/}
          {/* <Route path={'/event-dashboard/*'} element={<IndexEventDashboard/>}/> */}

        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
