import React from "react";
import DateCard from "../../components/DateCard";
import OverviewEventCards from "../../components/OverviewEventCards";

const OverviewEvent = () => {
    return (
        <>

            <div className="flex-1 bg-primary-700">
                <div className="mx-0 p-8 font-bold text-white">
                    Event Name
                </div>

                {/* DateNavbar */}
                <div className="flex gap-6">
                    <DateCard date="15" month="1" />
                    <DateCard date="16" month="1" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <OverviewEventCards />
                    <OverviewEventCards />
                </div>
            </div>
        </>
    )
}

export default OverviewEvent
