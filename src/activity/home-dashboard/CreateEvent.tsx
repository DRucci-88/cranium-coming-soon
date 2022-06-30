import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { BsQuestionCircle } from "react-icons/bs";

const CreateEvent = () => {
  console.log("CreateEvent - Home Dashboard");

  return (
    <>
      <div className="flex gap-24">
        <div className="flex flex-col">
          <label htmlFor="event-name" className="text-sm mb-1 ml-0.5">
            Event Name
          </label>
          <Input type="text" id="event-name" placeholder="Your Webinar Name" className="w-64" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm mb-1 ml-0.5">
            Category
          </label>
          <div className="flex items-center">
            <Input
              type="select"
              id="category"
              placeholder=""
              options={["Category 1", "Category 2", "Category 3", "Category 4"]}
              className="w-64"
            />
            <BsQuestionCircle className="ml-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <label htmlFor="description" className="text-sm mb-1 ml-0.5">
          Description
        </label>
        <Input type="textarea" id="description" placeholder="Description" className="w-[38rem]" />
      </div>
      <div className="flex gap-11 mt-3">
        <div className="flex flex-col">
          <label htmlFor="start-datetime" className="text-sm mb-1 ml-0.5">
            Start Date & Time
          </label>
          <Input type="datetime-local" id="start-datetime" placeholder="12-02-2021 12:00:00" className="w-64" />
        </div>
        <hr className="w-2 border-y mt-12" />
        <div className="flex flex-col">
          <label htmlFor="end-datetime" className="text-sm mb-1 ml-0.5">
            End Date & Time
          </label>
          <div className="flex items-center">
            <Input type="datetime-local" id="end-datetime" placeholder="12-09-2021 12:00:00" className="w-64" />
            <BsQuestionCircle className="w-6h-6 ml-4" />
          </div>
        </div>
      </div>
      <div className="flex gap-16 mt-3">
        <div className="flex flex-col">
          <label htmlFor="event-type" className="text-sm mb-1 ml-0.5">
            Event Type
          </label>
          <div className="flex items-center">
            <Input
              id="event-type"
              type="select"
              placeholder=""
              options={["Public", "Private"]}
              className="w-64"
            />
            <BsQuestionCircle className="w-6h-6 ml-4" />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="company-name"
            className="text-sm mb-1 ml-0.5"
          >
            Company Name
          </label>
          <div className="flex items-center">
            <Input type="text" id="company-name" placeholder="Your Company Name" className="w-64" />
            <BsQuestionCircle className="w-6h-6 ml-4" />
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-6">
        <Button type="submit" variant="primary" className="w-48">
          Submit
        </Button>
        {/* Back to previous history stack: Events */}
        <Button href="/home-dashboard/events" type="button" variant="secondary" className="max-w-[12rem]">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default CreateEvent;
