import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AttendanceForm from "./AttendanceForm";
import BasicSetup from "./BasicSetup";
import LayoutsEventDashboard from "./LayoutsEventDashboard";
import Tickets from "./Tickets";
import Overview from "../event-dashboard/Overview";
import AddTickets from "./AddTickets";
import DataConfiguration1 from "./DataConfiguration1";
import Attendance from "../../components/Attendance";

const IndexEventDashboard = () => {

    return (
        <Routes>
            <Route path={'/'} element={<LayoutsEventDashboard />}>
                <Route path={''} element={<Navigate replace to={'overview'}/>} />
                <Route path={'overview'} element={<Overview />}/>
                <Route path={'basic-setup'} element={<BasicSetup />}/>
                {/* <Route path={'registration'} element={<Registration />}/> */}
                <Route path={'tickets'} element={<Tickets />}/>
                <Route path={'add-tickets'} element={<AddTickets />}/>
                {/* <Route path={'schedule'} element={<Schedule />}/> */}
                {/* <Route path={'venue'} element={<Venue />}/> */}
                {/* <Route path={'people'} element={<People />}/> */}
                <Route path={'attendance'} element={<Attendance />}/>
                <Route path={'attendance-form'} element={<AttendanceForm />}/>
                {/* <Route path={'recording'} element={<Recording />}/> */}
                <Route path={'data-configuration'} element={<DataConfiguration1/>}/>
            </Route>
        </Routes>

    );


};
export default IndexEventDashboard;
