import Button from "../../components/Button";

const Overview = () => {
  console.log("Overview - Home Dashboard");

  return (
    <>
      <div className="flex-1">
        <div className="font-bold text-5xl mt-8">Hello Username!</div>
        <div className="min-h-[8rem] mt-8">
          <div className="text-2xl">Your upcoming events</div>
          <div className="text-xl">
            You-re not registered for any event yet. {" "}
            <Button
              type="button"
              variant="tertiary"
              href="https://www.google.com/"
              className="text-xl"
            >
              Find an Event
            </Button>
          </div>
        </div>
        <div className="min-h-[8rem] mt-8">
          <div className="text-2xl">Plan Info</div>
          <div className="text-xl">
            You-re not registered for any plan yet. {" "}
            <Button
              type="button"
              variant="tertiary"
              href="https://www.google.com/"
              className="text-xl"
            >
              Find a plan info
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
