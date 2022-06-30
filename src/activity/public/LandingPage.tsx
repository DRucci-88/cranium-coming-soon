import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import CompanyLogo from "../../components/CompanyLogo";
import ScrollToTop from "../../components/ScrollToTop";

const LandingPage = () => {
  console.log("Landing Page");
  return (
    <>
      {/* Hero */}
      <div
        id="hero"
        className="bg-blend-multiply bg-primary-500/75 bg-[url(../public/images/jpeg/hero-event.jpg)] bg-cover bg-center"
      >
        <div className="flex flex-col justify-center items-center py-36 mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold my-6 max-w-[90%] sm:max-w-screen-sm lg:max-w-screen-md text-center">
            All-in-one Event Management Services
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-neutral-400 max-w-[90%] sm:max-w-[80%] lg:max-w-screen-[70%] text-center">
            [Temu - in logo] membantu mengelola seluruh kebutuhan event online
            maupun offline dalam satu pintu dengan mengedepankan teknologi{" "}
            <i>virtual reality</i>
          </p>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="bg-primary-700">
        <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-between items-center sm:items-stretch lg:items-center p-12 sm:px-20 sm:py-16 lg:py-36 mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <div className="hl sm:vl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold py-1 lg:mr-8 xl:mr-0">
              Our Services
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12">
            <div className="flex flex-col items-center sm:items-stretch text-center sm:text-left max-w-xs">
              <div className="w-10 h-10 mb-4">
                <img
                  src="images/vector/platform.svg"
                  alt="Platform Development"
                />
              </div>
              <h6 className="text-md font-bold mb-2">Platform Development</h6>
              <p className="text-xs text-neutral-400">
                Membangun virtual space berbasis web sebagai wadah semua
                aktivitas digital Anda, seperti: webinar, hybrid event, pameran,
                conference, corporate event, workshops, entertainment dan acara
                online lainnya
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-stretch text-center sm:text-left max-w-xs mt-12 sm:mt-0 sm:ml-20">
              <div className="w-10 h-10 mb-4">
                <img src="images/vector/organize.svg" alt="Event Organizer" />
              </div>
              <h6 className="text-md font-bold mb-2">Event Organizer</h6>
              <p className="text-xs text-neutral-400">
                Menciptakan pengalaman acara online dan offline yang
                terintegrasi dengan mengelola hybrid event Anda mulai dari
                pembuatan konsep, perencanaan, produksi, talent management,
                hingga pelaksanaan acara
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Seamless */}
      <section id="seamless" className="bg-primary-800">
        <div className="max-w-screen-2xl flex flex-col lg:flex-row justify-center overflow-hidden 2xl:py-20 mx-auto">
          <img
            src="images/jpeg/seamless-event.jpg"
            alt="Seamless Event Experience"
            className="object-cover object-center h-80 sm:h-96 lg:h-[unset] lg:w-3/6 rounded-b-lg lg:rounded-r-lg 2xl:rounded-lg shadow-black"
          />
          <div className="lg:w-3/6 flex flex-col justify-center items-center p-10 sm:px-20 sm:py-16 lg:py-36">
            <div>
              <div className="flex items-stretch mb-3">
                <div className="vl"></div>
                <h2 className="text-2xl lg:text-4xl font-bold py-1">
                  Build Seamless Offline & Online Event Experience
                </h2>
              </div>
              <p className="text-neutral-400 text-base lg:text-lg">
                Berikan pengalaman yang berkesan dan serupa bagi audience online
                maupun offline melalui program acara hybrid yang dikemas khusus
                dan unik bagi kebutuhan Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Live */}
      <section id="live" className="bg-primary-700">
        <div className="max-w-screen-2xl max-h-fit grid lg:grid-cols-10 lg:justify-items-stretch lg:items-center p-10 sm:px-20 sm:py-16 mx-auto">
          <div className="order-1 lg:col-span-3 flex items-stretch mb-3">
            <div className="vl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold py-1">
              Take Your Event to The Next Level
            </h2>
          </div>
          <div className="order-3 lg:col-span-3 lg:row-start-2 text-neutral-400">
            <p className="mb-4">
              Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual
              space milik Anda
            </p>
            <div>
              <b>
                <i>Mengapa menggunakan virtual reality?</i>
              </b>
              <ul className="list-disc ml-4">
                <li>Membuat acara hybrid yang variatif</li>
                <li>
                  Meningkatkan konversi dalam acara untuk mendukung tujuan
                  bisnis/event
                </li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </div>
            <Button
              type={"button"}
              href="/experience-live"
              variant="primary"
              size="large"
              isCustom={true}
              className="mt-8"
            >
              Experience Live
            </Button>
          </div>
          <div className="relative flex justify-center items-center order-2 lg:col-start-5 lg:col-span-6 lg:row-span-2 my-5">
            <Carousel className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-lg overflow-hidden" />
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="bg-primary-800">
        <div className="max-w-screen-2xl p-10 sm:p-16 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="hl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold">Our Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-16">
            <CompanyLogo name="Telkom" imgSrc="images/jpeg/telkom-leap.png" />
            <CompanyLogo name="Dräger" imgSrc="images/jpeg/draeger.png" />
            <CompanyLogo name="Lazada" imgSrc="images/jpeg/lazada.png" />
            <CompanyLogo name="Telin" imgSrc="images/jpeg/telin.png" />
            <CompanyLogo name="Pertamina" imgSrc="images/jpeg/pertamina.png" />
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section id="contact" className="bg-primary-700">
        <div className="flex flex-col justify-center items-center py-16 mx-auto">
          <div className="hl"></div>
          <h2 className="text-2xl lg:text-4xl font-bold">Contact Us</h2>
          <Button
            variant="primary"
            size="large"
            isCustom={true}
            href="https://wa.me/+628179101889"
            className="mt-8"
            type={"button"}
          >
            Contact Us
          </Button>
        </div>
      </section>
      
      {/* ScrollToTop */}
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
