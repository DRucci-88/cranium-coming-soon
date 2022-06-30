import { BsClock, BsGeoAlt } from "react-icons/bs"

const OverviewEventCards = () => {
    return (
        <>
            <div className="mx-8 lg:mx-auto my-4 h-auto lg:w-11/12 shadow-xl bg-primary-500 rounded-lg">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="text-left mx-9 mt-8">
                            <a className="text-white text-2xl font-semibold">The 90's text The pioneer</a>
                        </div>
                        <div className="mx-9 text-left my-auto">
                            <a className="hidden sm:block sm:text-white sm:text-sm sm:font-light">The technologies we use nowadays is the evolution from the 90's tech. Reveal interesting facts about the 90's tech!</a>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto md:mx-9 md:w-1/2 w-max">
                        <div className="flex flex-row sm:flex-col w-max md:flex-row my-4">
                            <div className="flex flex-col">
                                <div className="flex flex-row text-white">
                                    <BsClock className="w-7 h-7" />
                                    <a className="ml-4">7.00 AM - 8.00 AM</a>
                                </div>
                                <div className="my-auto flex flex-row text-justify text-white">
                                    <BsGeoAlt className="w-7 h-7" />
                                    <a className="ml-4">Room 1</a>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-row  my-2 group w-fit md:mx-2 md:w-40">
                                    <div className="mx-auto my-auto  w-14 h-14 rounded-full">
                                        <div className="relative w-full h-full lg:aspect-[4.25/3] ">
                                            <img
                                                src="/images/jpeg/thomas-tell.jpg"
                                                alt="[Alt]"
                                                className="w-full h-full flex justify-between items-center object-cover object-center rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="my-auto items-center space-x-3">
                                        <h3 className="hidden sm:block sm:text-white sm:group-hover:text-white sm:text-sm sm:font-semibold">Thomas Tell</h3>
                                        <p className="hidden sm:block text-white text-sm">Speaker</p>
                                    </div>
                                </div>
                                <div className="-ml-4 flex flex-row  group w-fit md:mx-2 md:w-40">
                                    <div className="mx-auto my-auto  w-14 h-14">
                                    <div className="relative w-full h-full lg:aspect-[4.25/3] ">
                                            <img
                                                src="/images/jpeg/simon-says.jpg"
                                                alt="[Alt]"
                                                className="w-full h-full flex justify-between items-center object-cover object-center rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="my-auto items-center space-x-3">
                                        <h3 className="hidden sm:block text-white group-hover:text-white text-sm font-semibold">Simon Says</h3>
                                        <p className="hidden sm:block text-white text-sm">Moderator</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default OverviewEventCards