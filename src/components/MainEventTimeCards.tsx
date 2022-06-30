import React from "react";



const MainEventTimeCards = (props: { titlename: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; datename: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; timename: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })  => {
    console.log(props);
    return (
        <>
            <div className="flex flex-col ml-4 xl:ml-20 2xl:mx-auto">
                <div className="w-48 h-max  bg-primary-700 flex-col rounded-t-sm">
                    <p className="ml-4 text-sm text-white font-semibold mt-3">{props.titlename}</p>
                    <div className="flex flex-row">
                        <p className="ml-4 text-center text-white text-sm font-thin">{props.datename}</p>
                        <p className="ml-2 text-center text-sm text-white font-thin mb-3">{props.timename}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainEventTimeCards;