interface Props {
  name: string;
  positionAndCompany: string;
  imgSrc: string;
  className?: string;
}

const SpeakerCard: React.FC<Props> = ({ name, positionAndCompany, imgSrc, className }) => {
  return (
    <>
      <div className={`relative aspect-[3/4] min-w-[13rem] sm:min-w-[14rem] lg:min-w-[15rem] rounded-lg overflow-hidden ${className}`}>
        <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/40">
          <div className="absolute w-full text-center bottom-8">
            <h5 className="font-semibold text-xl text-neutral-50">
              {name}
            </h5>
            <p className="text-xs text-neutral-300 mt-1">{positionAndCompany}</p>
          </div>
        </div>
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default SpeakerCard;
