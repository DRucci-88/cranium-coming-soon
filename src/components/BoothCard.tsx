import { useState } from "react";

type SizeBooth = "large" | "medium" | "small"

interface Props {
  imgSrc: string;
  companyName: string;
  companyDesc: string;
  companyImgSrc: string;
  size?: SizeBooth;
  className?: string;
}

interface BoothStyling {
  frame: string;
  mainLayout: string;
  layoutImgAndName: string;
  layoutNameAndDesc: string;
  nameWithImage: string;
  nameWithDesc: string;
  name: string;
  desc: string;
  img: string;
}

const BoothCard: React.FC<Props> = ({ imgSrc, companyName, companyDesc, companyImgSrc, size = "small", className }) => {
  const [showBoothDetails, setShowBoothDetails] = useState(false);

  /*
    Booth \ Screen |  lg    md    sm
    ----------------------------------
        lg         |  lg    md    sm
        md         |  md    sm    sm
        sm         |  sm    sm    sm
  */

  const boothLgClass: BoothStyling = {
    frame: "col-span-full",
    mainLayout: "flex flex-col lg:flex-row p-8 lg:p-12",
    layoutImgAndName: "flex lg:block flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 mb-0 sm:mb-5 lg:mb-0 lg:min-w-fit",
    layoutNameAndDesc: "min-w-fit lg:min-w-[unset] lg:flex lg:flex-col lg:ml-12",
    nameWithImage: "lg:hidden",
    nameWithDesc: "hidden lg:block lg:mb-2",
    name: "text-2xl sm:text-3xl lg:text-4xl",
    desc: "text-xs sm:text-sm lg:text-base text-center lg:text-left lg:pb-12 mt-2 sm:mt-0",
    img: "w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32"
  }

  const boothMdClass: BoothStyling = {
    frame: "col-span-full sm:col-span-2",
    mainLayout: "flex flex-col p-8",
    layoutImgAndName: "flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8 lg:mb-5",
    layoutNameAndDesc: "min-w-fit",
    nameWithImage: "",
    nameWithDesc: "hidden",
    name: "text-2xl lg:text-3xl",
    desc: "text-xs lg:text-sm text-center mt-2 lg:mt-0",
    img: "w-24 lg:w-28 h-24 lg:h-28"
  }

  const boothSmClass: BoothStyling = {
    frame: "col-span-full sm:col-span-2 lg:col-span-1",
    mainLayout: "flex flex-col p-8",
    layoutImgAndName: "flex flex-col justify-center items-center gap-2",
    layoutNameAndDesc: "min-w-fit",
    nameWithImage: "",
    nameWithDesc: "hidden",
    name: "text-2xl text-center",
    desc: "text-xs text-center mt-2",
    img: "w-24 h-24"
  }

  const boothClass = 
    size === "large" ? boothLgClass :
    size === "medium" ? boothMdClass : boothSmClass

  return (
    <>
      <div className={`relative h-60 rounded-lg black-shadow overflow-hidden ${boothClass.frame} ${className ?? ''}`}
        onMouseEnter={() => setShowBoothDetails(true)}>
        <div className={`${showBoothDetails ? '' : 'opacity-0'} absolute w-full h-full bg-black/50 overflow-auto transition-opacity duration-300 ${boothClass.mainLayout}`}
          onMouseLeave={() => setShowBoothDetails(false)}>
          <div className={boothClass.layoutImgAndName}>
            <div className="min-w-fit">
              <img
                src={companyImgSrc}
                alt={companyName}
                className={`object-cover object-center rounded-xl ${boothClass.img}`}
              />
            </div>
            <h5 className={`font-bold text-neutral-50 ${boothClass.name} ${boothClass.nameWithImage}`}>{companyName}</h5>
          </div>
          <div className={boothClass.layoutNameAndDesc}>
            <h5 className={`font-bold text-neutral-50 ${boothClass.name} ${boothClass.nameWithDesc}`}>{companyName}</h5>
            <p className={`text-neutral-300 ${boothClass.desc}`}>{companyDesc}</p>
          </div>
        </div>
        <img
          src={imgSrc}
          alt={companyName}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default BoothCard;
