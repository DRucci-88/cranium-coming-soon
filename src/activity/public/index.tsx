import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
// import HomePage from "./HomePage";
// import PageNotFound from "./PageNotFound";
// import SignUp from "./SignUp";
import LayoutsPublic from "./LayoutsPublic";
// import EventLandingPage2 from "./EventLandingPage_";
// import EventLandingPage from "./EventLandingPage";
// import EventPage from "./EventPage";
// import ExperienceLive from "./ExperienceLive";
// import SignIn from "./SignIn";
// import ComingSoon from "./ComingSoon";
// import Register from "./Register"
// import ThankYouPage from "./ThankYouPage"

const IndexPublic = () => {
  return (
    <>
      <Routes>
        {/* <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/signin'} element={<SignIn/>}/>
        <Route path={'/coming-soon'} element={<ComingSoon/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/thankyou'} element={<ThankYouPage/>}/> */}

        <Route path={'/'} element={<LayoutsPublic/>}>
          <Route index element={<LandingPage/>}/>
          {/* <Route path={'home-page'} element={<HomePage/>}/>
          <Route path={'event-page'} element={<EventPage/>}/>
          <Route path={'event-landing-page_'} element={<EventLandingPage2/>}/>
          <Route path={'event-landing-page'} element={<EventLandingPage/>}/>
          <Route path={'experience-live'} element={<ExperienceLive/>}/>
          <Route path={'Event-landing-page'} element={<EventPage/>}/> */}
        </Route>

        <Route path={'*'} element={<Navigate to={'/'}/>}/>

      </Routes>
    </>
  );
};

export default IndexPublic;
