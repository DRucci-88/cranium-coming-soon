import React from "react";
import Button from "./Button";
import  { BsLink45Deg } from "react-icons/bs"

const MainEventImage = () => {
    return (
        <>
            <div className="lg:flex-auto lg:ml-auto sm:w-max-screen lg:w-48 lg:h-80">
                <div className="lg:my-5  lg:h-80 shadow-xl">
                    <div className="relative w-full h-full lg:aspect-[4.25/3] ">
                        <img
                            src="/images/jpeg/lorenzo-herrera.jpg"
                            alt="[Alt]"
                            className="w-full h-full flex justify-between items-center object-cover object-center lg:rounded-r-lg"
                        />
                        <div className="absolute w-12 h-12 flex flex-col justify-center items-center top-4 right-8">
                        <Button
                                    type="button"
                                    href="https://www.google.com"
                                    variant="any"
                                    className=" bg-black/60 text-secondary-500 text-xs font-semibold rounded-full px-4 py-4"
                                >
                                   <BsLink45Deg/> 
                                   <a className="ml-2">Copy</a> 
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MainEventImage;