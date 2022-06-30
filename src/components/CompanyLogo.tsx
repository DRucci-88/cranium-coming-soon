interface Props {
  name: string;
  imgSrc: string;
  className?: string;
}

const CompanyLogo: React.FC<Props> = ({ name, imgSrc, className }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={name}
        className={`w-52 h-52 object-cover object-center grayscale invert ${className ?? ''}`}
      />
    </>
  );
};

export default CompanyLogo;
