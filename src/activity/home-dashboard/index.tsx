import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import LayoutsHomeDashboard from "./LayoutsHomeDashboard";
import Overview from "./Overview";
import Events from "./Events";
import Billing from "./Billing";
import Integration from "./Integration";
import Profile from "./Profile";
import PageNotFound from "../public/PageNotFound";
import CreateEvent from "./CreateEvent";


const IndexHomeDashboard = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LayoutsHomeDashboard/>}>
        {/*https://gist.github.com/mjackson/b5748add2795ce7448a366ae8f8ae3bb#not-server-rendering*/}
        {/*Not Server Rendering TODO -> MORE Discussion about SSR in router -- Le Gucci*/}
        <Route path={''} element={<Navigate replace to={'overview'}/>} />
        <Route path={'overview'} element={<Overview/>}/>
        <Route path={'events'} element={<Events/>}/>
        <Route path={'billing'} element={<Billing/>}/>
        <Route path={'integration'} element={<Integration/>}/>
        <Route path={'profile'} element={<Profile/>}/>
        <Route path={'create-event'} element={<CreateEvent/>}/>
        <Route path={'*'} element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
};
export default IndexHomeDashboard;
