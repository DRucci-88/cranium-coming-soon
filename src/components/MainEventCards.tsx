import React from "react";
import Button from "./Button";
import MainEventTimeCards from "./MainEventTimeCards";
import { AiOutlinePlus } from "react-icons/ai";

const MainEventCards = () => {
    return (
        <>

            <div className="mx-auto mt-11 sm:my-18 sm:mx-auto lg:my-5 w-max h-96 sm:h-72 lg:h-80 shadow-xl bg-primary-800 rounded-lg lg:rounded-l-lg">
                <div className="mx-4 sm:mx-12 my-auto">
                    <div className="mx-auto flex flex-row my-6">
                        <div className="flex flex-col">
                            <div className="sm:hidden">
                                <div className="w-max-min">
                                    <Button
                                        type="button"
                                        href="https://www.google.com"
                                        variant="any"
                                        className="text-secondary-500 text-xs font-semibold rounded-full w-max h-8 px-2 py-1 gap-2"
                                    >
                                        <div><a>+ Add to Watchlist</a></div>
                                    </Button>
                                </div>
                            </div>
                            <a className="text-2xl lg:text-4xl text-white font-bold">The 90's Tech</a>
                            <div className="flex flex-row">
                                <Button
                                    type="button"
                                    href="https://www.google.com"
                                    variant="any"
                                    className="bg-secondary-500/25 text-secondary-500 text-xs font-semibold rounded px-2 py-1"
                                >
                                    Category
                                </Button>
                                <a className="ml-4 sm:mx-auto lg:mx-4 text-sm lg:text-lg text-white font-thin">123 people are registered</a>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:ml-44 lg:ml-20">
                            <Button
                                type="button"
                                href="https://www.google.com"
                                variant="any"
                                className=" bg-secondary-500/25 text-secondary-500 text-xs font-semibold rounded-full w-8 h-8 px-2 py-1"
                            >
                                <AiOutlinePlus />
                            </Button>
                        </div>
                    </div>

                    <div className="flex-flex-row mt-2 ml-auto h-24">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <MainEventTimeCards titlename="Start Time" datename="12/1/22" timename="11.00"></MainEventTimeCards>

                            <MainEventTimeCards titlename="End Time" datename="12/1/22" timename="12.00"></MainEventTimeCards>
                        </div>
                        <Button type="submit" variant="primary" className="mt-8 my-4 mx-auto">
                            Joint Event
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainEventCards;