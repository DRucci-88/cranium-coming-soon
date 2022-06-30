import { Children, ReactNode } from "react";
import { BsClock, BsGeoAlt } from "react-icons/bs";

interface ScheduleProps {
  title: string;
  desc: string;
  startTime: string;
  endTime: string;
  location: string;
  className?: string;
  children: ReactNode;
}

interface ScheduleSpeakerProps {
  imgSrc: string;
  name: string;
  role: string;
  className?: string;
  imgClassName?: string;
}

const ScheduleCard: React.FC<ScheduleProps> = ({
  title = "Schedule",
  desc = "Schedule Description",
  startTime = "00.00",
  endTime = "23.59",
  location = "N/A",
  className,
  children
}) => {
  return (
    <>
      <div className={`relative bg-primary-400 rounded-lg overflow-hidden px-8 sm:px-12 lg:px-20 py-8 lg:py-12 ${className ?? ''}`}>
        <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">
          {title}
        </h3>
        <p className="hidden sm:block text-sm lg:text-base text-neutral-300">
          {desc}
        </p>
        <div className="flex gap-6 lg:gap-10 mt-4">
          <div className="min-w-fit flex flex-col justify-center">
            <span className="flex items-center gap-4">
              <BsClock
                className="w-7 lg:w-8 h-7 lg:h-8 text-neutral-300 overflow-visible p-1"
                strokeWidth={0.5}
              />
              <p className="font-semibold text-sm lg:text-lg">
                {startTime} - {endTime} WIB
              </p>
            </span>
            <span className="flex items-center gap-4">
              <BsGeoAlt
                className="w-7 lg:w-8 h-7 lg:h-8 text-neutral-300 overflow-visible p-1"
                strokeWidth={0.5}
              />
              <p className="font-semibold text-sm lg:text-lg">{location}</p>
            </span>
          </div>
          {/* Schedule Speaker Cards */}
          <div className="flex gap-0 sm:gap-6 lg:gap-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

const ScheduleSpeakerCard: React.FC<ScheduleSpeakerProps> = ({
  imgSrc,
  name = "Speaker",
  role = "Speaker",
  className,
  imgClassName,
}) => {
  return (
    <>
      <div className={`flex items-center gap-4 ${className ?? ''}`}>
        <img
          src={imgSrc}
          alt={name}
          className={`min-w-[3rem] w-12 lg:w-16 h-12 lg:h-16 object-cover object-center border-2 border-primary-300 rounded-full ${imgClassName ?? ''}`}
        />
        <div className="hidden sm:block">
          <p className="font-semibold text-sm lg:text-lg">{name}</p>
          <p className="text-xs lg:text-base text-neutral-300">{role}</p>
        </div>
      </div>
    </>
  );
};

export { ScheduleCard, ScheduleSpeakerCard };
