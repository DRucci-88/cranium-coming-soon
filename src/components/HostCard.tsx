import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  name: string;
  bio: string;
  imgSrc: string;
  className?: string;
}

const HostCard: React.FC<Props> = ({ name, bio, imgSrc, className }) => {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <>
      <div className={`w-auto rounded-2xl lg:rounded-lg overflow-hidden black-shadow ${className}`}>
        <div className="flex items-center gap-5 bg-primary-900/75 lg:bg-neutral-700 p-5">
          <img
            src={imgSrc}
            alt={name}
            className="w-16 sm:w-20 h-16 sm:h-20 object-cover object-center rounded-full"
          />
          <div>
            <p className="text-xs sm:text-sm lg:text-base text-neutral-400">Hosted by</p>
            <h4 className="font-sans font-bold text-base sm:text-xl lg:text-2xl text-neutral-200">
              {name}
            </h4>
          </div>
          <BsChevronDown
            className={`${
              bioOpen ? "rotate-180" : ""
            } block lg:hidden w-6 h-6 cursor-pointer ml-auto transition-transform duration-500`}
            onClick={() => setBioOpen(!bioOpen)}
            title="Open Bio"
            strokeWidth={0.5}
          />
        </div>
        <div
          className={`${
            bioOpen ? "p-5" : "h-0 px-5"
          } lg:h-full bg-neutral-800/75 lg:bg-neutral-800 overflow-hidden lg:p-8 transition-all ease-out duration-500`}
        >
          <p
            className={`${
              bioOpen ? "ease-out" : "ease-in"
            } text-xs sm:text-sm lg:text-base text-neutral-200 transition-all duration-500`}
          >
            {bio}
          </p>
        </div>
      </div>
    </>
  );
};

export default HostCard;
