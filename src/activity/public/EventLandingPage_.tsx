import { BsLink45Deg, BsPlusLg } from "react-icons/bs";
import BoothCard from "../../components/BoothCard";
import Button from "../../components/Button";
import DateCard from "../../components/DateCard";
import HostCard from "../../components/HostCard";
import {
  ScheduleCard,
  ScheduleSpeakerCard,
} from "../../components/ScheduleCard";
import SpeakerCard from "../../components/SpeakerCard";
import CompanyLogo from "../../components/CompanyLogo";

const EventLandingPage_ = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="bg-primary-700">
        <div className="max-w-screen-2xl flex justify-center items-center p-0 lg:p-16 mx-auto">
          <div className="w-full flex flex-col-reverse lg:flex-row items-stretch">
            {/* Event Details */}
            <div className="lg:w-1/2 bg-primary-900/75 bg-primary-900 flex flex-col gap-4 sm:gap-7 rounded-2xl lg:rounded-l-lg lg:rounded-r-none overflow-hidden p-8 sm:px-12 lg:px-10 sm:py-12 mx-10 sm:mx-16 lg:mx-0 mb-10 sm:mb-16 lg:mb-0">
              <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
                <div>
                  <h1 className="w-full font-bold text-3xl sm:text-4xl lg:text-5xl">
                    The 90's Tech
                  </h1>
                  <div className="flex items-center mt-1">
                    <Button
                      type="button"
                      href="https://www.google.com"
                      variant="any"
                      className="h-fit bg-secondary-500/25 text-secondary-500 text-xs font-semibold rounded px-2 py-1 mt-0.5"
                    >
                      Category
                    </Button>
                    <h6 className="sm:whitespace-nowrap text-sm sm:text-base lg:text-lg ml-2">
                      123 People are registered
                    </h6>
                  </div>
                </div>
                {/* Add to Watchlist Button */}
                <Button
                  type="button"
                  variant="any"
                  className="h-fit sm:bg-secondary-500/25 text-secondary-500 rounded-full p-0 sm:p-4 sm:mt-0.5 ml-auto"
                >
                  <BsPlusLg strokeWidth={1} />
                  <p className="sm:static block sm:hidden ml-2">
                    Add to Watchlist
                  </p>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-0 xl:gap-4 justify-between">
                <div className="sm:w-1/2 bg-primary-700 flex flex-col gap-1 rounded overflow-hidden p-6">
                  <p className="font-bold text-base sm:text-lg">Start Time</p>
                  <p className="text-base sm:text-lg">13/02/22 12.00 WIB</p>
                </div>
                <div className="sm:w-1/2 bg-primary-700 flex flex-col gap-1 rounded overflow-hidden p-6">
                  <p className="font-bold text-base sm:text-lg">End Time</p>
                  <p className="text-base sm:text-lg">13/03/22 12.00 WIB</p>
                </div>
              </div>
              <Button
                type="button"
                href="register"
                variant="primary"
                size="large"
                className="max-w-full"
              >
                Join event
              </Button>
            </div>

            {/* Host Card */}
            <div className="block lg:hidden px-10 sm:px-16 pb-10 sm:pb-16 -mt-14 z-10">
              <HostCard
                name="Steel Astrei"
                bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet euismod enim quis semper. Vestibulum volutpat erat urna, in dictum purus tempor eu. Sed malesuada volutpat elit, sed vulputate tortor tempor sed."
                imgSrc="images/jpeg/img-avatar.png"
                className=""
              />
            </div>

            {/* Event Thumbnail */}
            <div className="relative w-full lg:w-1/2 h-96 lg:h-[unset] bg-[url(../public/images/jpeg/lorenzo-herrera.jpg)] bg-cover bg-center lg:rounded-r-lg overflow-hidden">
              <Button
                type="button"
                href="https://www.google.com"
                variant="any"
                className="absolute bg-black/75 text-secondary-500 rounded-full px-6 py-3 top-7 right-7"
              >
                <BsLink45Deg className="text-2xl" strokeWidth={0.5} />
                <p className="font-semibold text-sm ml-2">Copy</p>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description Section */}
      <section id="description" className="bg-primary-800">
        <div className="max-w-screen-2xl flex justify-between items-center gap-8 p-10 sm:p-16 mx-auto">
          {/* Event Description */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-stretch mb-3">
              <div className="vl"></div>
              <h2 className="text-2xl lg:text-4xl font-bold py-1">
                Description
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum placerat nec metus non pretium. <br />
              Ut at velit quis ante porttitor molestie a vel leo. Mauris dapibus
              elementum tellus, eget dictum metus feugiat vel. Nam non urna
              vestibulum, ornare urna at, ultricies odio.
            </p>
          </div>
          {/* Host Card */}
          <HostCard
            name="Steel Astrei"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet euismod enim quis semper. Vestibulum volutpat erat urna, in dictum purus tempor eu. Sed malesuada volutpat elit, sed vulputate tortor tempor sed."
            imgSrc="images/jpeg/img-avatar.png"
            className="hidden lg:block max-w-[calc(50%-2rem)]"
          />
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="bg-primary-700">
        <div className="max-w-screen-2xl p-10 sm:p-16 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="hl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold">Speakers</h2>
          </div>
          <div className="flex justify-start gap-10 overflow-x-auto">
            <SpeakerCard
              name="Thomas Tell"
              positionAndCompany="Software Engineer at ABC Company"
              imgSrc="images/jpeg/thomas-tell.jpg"
            />
            <SpeakerCard
              name="Thomas Tell"
              positionAndCompany="Software Engineer at ABC Company"
              imgSrc="images/jpeg/thomas-tell.jpg"
            />
            <SpeakerCard
              name="Thomas Tell"
              positionAndCompany="Software Engineer at ABC Company"
              imgSrc="images/jpeg/thomas-tell.jpg"
            />
            <SpeakerCard
              name="Thomas Tell"
              positionAndCompany="Software Engineer at ABC Company"
              imgSrc="images/jpeg/thomas-tell.jpg"
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="bg-primary-800">
        <div className="max-w-screen-2xl p-10 sm:p-16 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="hl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold">Schedule</h2>
          </div>
          <div className="flex flex-col gap-10">
            {/* Date Cards */}
            <div className="flex justify-start gap-4 sm:gap-8 overflow-x-auto pt-1 -mt-1">
              <DateCard month={1} date={15} />
              <DateCard month={1} date={16} />
              <DateCard month={1} date={17} />
              <DateCard month={1} date={18} />
              <DateCard month={1} date={19} />
              <DateCard month={1} date={20} />
            </div>
            {/* Schedule Cards */}
            <ScheduleCard
              title={`The 90's Tech: "The Pioneer"`}
              desc={` The technologies we use nowadays is the evolution from the 90's tech. Reveal interesting facts about the 90's tech!`}
              startTime={`00.00`}
              endTime={`23.59`}
              location={`Room 1`}
            >
              <ScheduleSpeakerCard imgSrc="images/jpeg/thomas-tell.jpg" name="Thomas Tell" role="Speaker" imgClassName="z-20" />
              <ScheduleSpeakerCard imgSrc="images/jpeg/simon-says.jpg" name="Simon Says" role="Moderator" imgClassName="absolute sm:static -ml-4 sm:ml-0 z-10" />
              <ScheduleSpeakerCard imgSrc="images/jpeg/img-avatar.png" name="Stranger" role="Guest" imgClassName="absolute sm:static ml-4 sm:ml-0" />
            </ScheduleCard>
          </div>
        </div>
      </section>

      {/* Booths Section */}
      <section id="booths" className="bg-primary-700">
        <div className="max-w-screen-2xl p-10 sm:p-16 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="hl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold">Booths</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <BoothCard
              size="large"
              imgSrc="images/jpeg/seamless-event.jpg"
              companyName="Lorenzo Herrera"
              companyDesc="Lorenzo Herrera is a leading company in the tech industries."
              companyImgSrc="images/jpeg/lorenzo-herrera.jpg"
            />
            <BoothCard
              size="medium"
              imgSrc="images/jpeg/seamless-event.jpg"
              companyName="Lorenzo Herrera"
              companyDesc="Lorenzo Herrera is a leading company in the tech industries."
              companyImgSrc="images/jpeg/lorenzo-herrera.jpg"
            />
            <BoothCard
              size="small"
              imgSrc="images/jpeg/seamless-event.jpg"
              companyName="Lorenzo Herrera"
              companyDesc="Lorenzo Herrera is a leading company in the tech industries."
              companyImgSrc="images/jpeg/lorenzo-herrera.jpg"
            />
            <BoothCard
              size="small"
              imgSrc="images/jpeg/seamless-event.jpg"
              companyName="Lorenzo Herrera"
              companyDesc="Lorenzo Herrera is a leading company in the tech industries."
              companyImgSrc="images/jpeg/lorenzo-herrera.jpg"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="bg-primary-800">
        <div className="max-w-screen-2xl p-10 sm:p-16 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="hl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold">Sponsors</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-16">
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventLandingPage_;
