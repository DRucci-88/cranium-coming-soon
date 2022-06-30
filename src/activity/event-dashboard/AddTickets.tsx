import { Input } from "../../components/Input";
import Button from "../../components/Button";


const AddTickets = () => {
    return (
        <>

            <div className="flex-1 bg-primary-700 h-screen">
                <div className="mx-2 p-2 font-bold text-white">
                    TICKET MANAGEMENT
                </div>

                <div className="mx-2 p-2 font-bold text-white">
                    LABEL
                </div>
                <div className="flex">
                    <Button type="submit" variant="secondary" className="my-2 ml-2 mx-8 w-48">VIP</Button>
                    <Button type="submit" variant="secondary" className="my-2 mx-8 w-48">Investors</Button>
                    <Button type="submit" variant="secondary" className="my-2 mx-8 w-48">Standard</Button>
                    <Button type="submit" variant="secondary" className="my-2 mx-8 w-48">Student</Button>
                    <Button type="submit" variant="secondary" className="my-2 mx-8 w-48">All</Button>
                </div>
                <div className="flex mt-8">
                    <Button type="submit" variant="primary" className="my-2 ml-2 mx-8 w-48">Custom</Button>
                    <Input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-8" placeholder=" Input Label" />
                </div>
                <div className="mx-2 my-6 p-2 font-bold text-white">
                    Access
                </div>
                <div className="flex">
                    <Button type="submit" variant="secondary" className="ml-2 mx-8 w-48">Public</Button>
                    <Button type="submit" variant="secondary" className="mx-8 w-48">Private</Button>
                </div>

                <div className="my-6 mx-2 p-2 font-bold text-white">
                    Price
                </div>
                <div>
                    <Input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2 my-4" placeholder=" Input Price" />
                </div>
                <Button type="submit" variant="primary" className="w-48 mx-2 my-12">
                    Save
                </Button>

            </div>



        </>
    );
};

export default AddTickets;