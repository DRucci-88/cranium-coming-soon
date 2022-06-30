import Button from "../../components/Button";
import PlanCard from "../../components/PlanCard";
import EventCard from "../../components/EventCard";

const HomePage = () => {
  console.log('Home Page')
  return (
    <>
      {/* Hero */}
      <div id="hero" className="bg-blend-multiply bg-primary-500/75 bg-[url(../public/images/jpeg/hero-event.jpg)] bg-cover bg-center">
        <div className="flex flex-col justify-center items-center py-36 mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold my-6 max-w-[90%] sm:max-w-screen-sm lg:max-w-screen-md text-center">
            At eripuit signiferumque sea, vel ad mucius eiusmod
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-neutral-400 max-w-[90%] sm:max-w-[80%] lg:max-w-screen-[70%] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dicta commodi mollitia velit iure molestiae quisquam ipsam fugiat esse, consectetur adipisci non aut perferendis eum earum voluptatum, id officiis recusandae.
          </p>
          <div className="flex flex-row">
            <div className="mx-4">
              <Button type="button" variant="primary" size="large" isCustom={true} className="mt-8">Attend an Event</Button>
            </div>
            <div className="mx-4">
              <Button type="button" variant="secondary" size="large" isCustom={true} className="mt-8">Host an Event</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700">
        <h2 className="text-center text-2xl font-bold py-6 text-white">Our Clients</h2>
        <div className="flex justify-center">
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
        </div>
      </div>

      <div className="bg-primary-800 p-8">
        <div id="events">
          <h1 className="py-4 text-2xl font-bold text-white text-center">Events</h1>
          <p className="py-6 mb-4 text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>

      <div id="features" className="bg-primary-700">
        <div className="max-w-screen-2xl max-h-fit grid lg:grid-cols-10 lg:justify-items-stretch lg:items-center p-10 sm:px-20 sm:py-16 mx-auto">

          <div className="order-1 lg:col-span-3 flex items-stretch mb-3">
            <div className="vl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold py-1">Features</h2>
          </div>
          <div className="order-3 lg:col-span-3 lg:row-start-2 text-neutral-400">
            <p className="mb-4">Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual space milik Anda</p>
            <div>
              <ul className="list-disc ml-4">
                <li>Membuat acara hybrid yang variatif</li>
                <li>Meningkatkan konversi dalam acara untuk mendukung tujuan bisnis/event</li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </div>
            <Button variant="secondary" size="large" isCustom={true} className="mt-8" type={'button'}>Contact us</Button>
          </div>
          <div className="order-2 lg:col-start-5 lg:col-span-6 lg:row-span-2 my-5">
            <img
              src="images/jpeg/experience-live.jpg"
              alt="Next Level Event Experience"
              className="object-cover object-center w-full h-52 sm:h-80 bg-white text-black rounded-lg shadow-black"
            />
          </div>
        </div>
      </div>

      <div id="plans" className="bg-primary-800 pb-16">
        <div className="h-auto">
          <h1 className="py-4 text-2xl font-bold text-white text-center">Account Plans</h1>
          <p className="py-6 mb-4 text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex justify-center flex-wrap">
            <PlanCard />
            <PlanCard variant="best-seller" className="mx-8" />
            <PlanCard />
          </div>
        </div>
      </div>

      <div className="bg-primary-700">
        <div className="max-w-screen-2xl max-h-fit grid lg:grid-cols-10 lg:justify-items-stretch lg:items-center p-10 sm:px-20 sm:py-16 mx-auto">

          <div className="order-1 lg:col-span-3 flex items-stretch mb-3">
            <div className="vl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold py-1">Ready to Create an Event?</h2>
          </div>
          <div className="order-3 lg:col-span-3 lg:row-start-2 text-neutral-400">
            <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div>
            </div>
            <div className="flex flex-row">
              <div className="mx-auto">
                <Button variant="primary" size="large" isCustom={true} className="mt-8" type={'button'}>Host an Event</Button>
              </div>
              <div className="mx-auto">
                <Button variant="secondary" size="large" isCustom={true} className="mt-8" type={'button'}>Contact Us</Button>
              </div>
            </div>
          </div>
          <div className="order-2 lg:col-start-5 lg:col-span-6 lg:row-span-2 my-5">
            <img
              src="images/jpeg/seamless-event.jpg"
              alt="Next Level Event Experience"
              className="object-cover object-center w-full h-full sm:h-80 bg-white text-black rounded-lg shadow-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
