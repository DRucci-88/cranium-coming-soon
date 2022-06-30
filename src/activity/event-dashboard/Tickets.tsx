import { Input } from "../../components/Input";
import Button from "../../components/Button";


const Tickets = () => {
    return (
        <>

            <div className="flex-1 bg-primary-700 h-screen">
                <div className="mx-4 p-8 font-bold text-white">
                    TICKET MANAGEMENT
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="p-2 w-1/4">
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">      </path></svg>
                            </div>
                            <Input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="        Search for Users" />
                        </div>
                    </div>
                </div>

                <Button type="submit" variant="primary" className=" my-8 w-48">Add New User</Button>

                <table className="w-full table-auto border-2 border-white">
                    <thead className="border-2 border-white">
                        <tr>
                            <th className="w-1/6 py-4 border-2 border-white text-white text-center">Label</th>
                            <th className="w-1/4 py-4 border-2 border-white text-white text-center">Access</th>
                            <th className="w-1/4 py-4 border-2 border-white text-white text-center">Status</th>
                            <th className="w-1/4 py-4 border-2 border-white text-white text-center">Price</th>
                            <th className="w-1/6 py-4 border-2 border-white text-white text-center">Count</th>

                            <th className="w-1/4 py-4 border-2 border-white text-white text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="border-2 border-white">
                        <tr>
                            <td className="border-2 border-white text-white text-center">VIP</td>
                            <td className="border-2 border-white text-white text-center">Public</td>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mr-12 ml-16 rounded-lg">
                                <a className="text-xs">VIP</a>
                            </button>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mt-8 mr-6 rounded-lg ">
                                <a className="text-xs">Investors</a>
                            </button>
                            <td className="border-2 border-white text-white text-center">Rp.20.000.000,-</td>
                            <td className="border-2 border-white text-white text-center">100</td>
                            <td className="border-2 border-white text-white text-center py-4">
                                <td className="p-3 px-5 flex justify-end py-6">
                                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:shadow-outline">Delete</button>
                                    <button type="button" className="ml-3 text-sm bg-green-500 hover:bg-green-800 text-white py-1 px-2 rounded focus:shadow-outline">Edit</button>
                                </td>
                            </td>
                        </tr>

                        <tr>
                            <td className="border-2 border-white text-white text-center">VIP</td>
                            <td className="border-2 border-white text-white text-center">Public</td>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mr-12 ml-16 rounded-lg">
                                <a className="text-xs">VIP</a>
                            </button>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mt-8 mr-6 rounded-lg ">
                                <a className="text-xs">Investors</a>
                            </button>
                            <td className="border-2 border-white text-white text-center">Rp.10.000.000,-</td>
                            <td className="border-2 border-white text-white text-center">100</td>
                            <td className="border-2 border-white text-white text-center py-4">
                                <td className="p-3 px-5 flex justify-end py-6">
                                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:shadow-outline">Delete</button>
                                    <button type="button" className="ml-3 text-sm bg-green-500 hover:bg-green-800 text-white py-1 px-2 rounded focus:shadow-outline">Edit</button>
                                </td>
                            </td>
                        </tr>

                        <tr>
                            <td className="border-2 border-white text-white text-center">VIP</td>
                            <td className="border-2 border-white text-white text-center">Public</td>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mr-12 ml-16 rounded-lg">
                                <a className="text-xs">VIP</a>
                            </button>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mt-8 mr-6 rounded-lg ">
                                <a className="text-xs">Investors</a>
                            </button>
                            <td className="border-2 border-white text-white text-center">Rp.10.000.000,-</td>
                            <td className="border-2 border-white text-white text-center">100</td>
                            <td className="border-2 border-white text-white text-center py-4">
                                <td className="p-3 px-5 flex justify-end py-6">
                                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:shadow-outline">Delete</button>
                                    <button type="button" className="ml-3 text-sm bg-green-500 hover:bg-green-800 text-white py-1 px-2 rounded focus:shadow-outline">Edit</button>
                                </td>
                            </td>
                        </tr>

                        <tr>
                            <td className="border-2 border-white text-white text-center">VIP</td>
                            <td className="border-2 border-white text-white text-center">Public</td>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mr-12 ml-16 rounded-lg">
                                <a className="text-xs">VIP</a>
                            </button>
                            <button className="bg-green-300 hover:bg-white text-black font w-1/4 h-12 mt-8 mr-6 rounded-lg ">
                                <a className="text-xs">Investors</a>
                            </button>
                            <td className="border-2 border-white text-white text-center">Rp.10.000.000,-</td>
                            <td className="border-2 border-white text-white text-center">100</td>
                            <td className="border-2 border-white text-white text-center py-4">
                                <td className="p-3 px-5 flex justify-end py-6">
                                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button>
                                    <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:shadow-outline">Delete</button>
                                    <button type="button" className="ml-3 text-sm bg-green-500 hover:bg-green-800 text-white py-1 px-2 rounded focus:shadow-outline">Edit</button>
                                </td>
                            </td>
                        </tr>


                    </tbody>
                </table>

                {/* <!-- This is an example component --> */}
                <div className="max-w-2xl mt-12 ml-12">

                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px">
                            <li>
                                <a href="#"
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page"
                                    className="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                            </li>
                        </ul>
                    </nav>


                </div>
            </div>

        </>
    );
};

export default Tickets;