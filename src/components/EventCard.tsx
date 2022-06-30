import { Link } from "react-router-dom";
import Button from "./Button";

const EventCard = () => {
  return (
    <>
      <div className="w-full rounded-lg shadow-xl flex flex-col overflow-hidden">
        <div className="relative w-full h-full aspect-[4.25/3]">
          <img
            src="/images/jpeg/lorenzo-herrera.jpg"
            alt="[Alt]"
            className="w-full h-full flex justify-between items-center object-cover object-center"
          />
          <div className="absolute w-12 h-12 flex flex-col justify-center items-center bg-primary-800 rounded top-2 right-2">
            <p className="text-[10px] font-semibold leading-none mt-1">Feb</p>
            <p className="text-xl font-bold leading-tight">21</p>
          </div>
        </div>
        <div className="bg-primary-900 flex flex-col gap-8 p-6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button
                type="button"
                href="https://www.google.com"
                variant="any"
                className="bg-[#EC5F56]/25 text-[#EC5F56] text-xs font-semibold rounded px-2 py-1"
              >
                Private
              </Button>
              <Button
                type="button"
                href="https://www.google.com"
                variant="any"
                className="bg-secondary-500/25 text-secondary-500 text-xs font-semibold rounded px-2 py-1"
              >
                Private
              </Button>
            </div>
            <h3 className="font-semibold text-xl">The 90's Tech</h3>
            <p className="text-sm">
              The technologies we use nowadays is the evolution from the 90's tech. Reveal interesting facts about the 90's tech with us!
            </p>
          </div>
          <Button
            type="button"
            variant="tertiary"
            href="https://www.google.com"
            className="block text-center py-2"
          >
            See more {">"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default EventCard;
