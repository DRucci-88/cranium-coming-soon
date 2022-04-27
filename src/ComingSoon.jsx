import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <>
      <div className="relative w-screen h-screen bg-primary-700 flex flex-col lg:flex-row justify-between lg:items-center overflow-x-hidden lg:overflow-hidden sm:px-24 lg:px-36">
        <div className="hidden sm:block fixed bg-primary-800 w-[50vw] h-[110vh] -skew-x-[10deg] pointer-events-none sm:-right-12 lg:-right-32" />
        <div className="flex flex-col justify-center items-center sm:items-stretch pt-12 px-12 sm:px-0 sm:pt-24 lg:pt-0 z-10">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-neutral-50 mr-auto">
            TEMU
          </Link>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch mt-8">
            <div className="hl sm:vl" />
            <h2 className="text-neutral-50 text-3xl sm:text-5xl lg:text-6xl font-bold py-1 lg:mr-8 xl:mr-0">
              Coming Soon!
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-center sm:text-left text-xs sm:text-base lg:text-lg mt-5">
            Our team is currently working on the website, building features to
            live up your event experience in the coming future.
          </p>
          <div className="flex flex-col items-center sm:items-start mt-10">
            <h3 className="text-neutral-300 text-xl sm:text-2xl lg:text-3xl font-semibold">Get in touch with us!</h3>
            
            <a className="btn btn-primary btn-lg btn-custom mt-8" href="https://wa.me/+628179101889" target={'_blank'}>
              Contact Us
            </a>
            
          </div>
        </div>
        <div className="w-48 flex justify-end items-center border-[5px] border-secondary-500 shadow-green mx-auto my-12 sm:mx-0 sm:mb-24 lg:my-0 z-10">
          <h2 className="text-secondary-500 text-4xl font-bold py-40 mr-5">{'>'}</h2>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
