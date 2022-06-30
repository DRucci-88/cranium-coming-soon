import DateCard from "../../components/DateCard";
import MainEventCards from "../../components/MainEventCards";
import MainEventImage from "../../components/MainEventImage";
import OverviewEventCards from "../../components/OverviewEventCards";

const EventLandingPage = () => {
  console.log('Event Landing Page')
  return (
    <>
      <section className="h-screen lg:h-96 bg-primary-700">
        <div className="lg:mx-48 flex flex-col-reverse h-max sm:gap-2 lg:gap-0 lg:flex-row ">
          <MainEventCards></MainEventCards>
          <MainEventImage></MainEventImage> 
        </div>
      </section>


      <section className="flex flex-row  bg-primary-800">
        <div className="ml-4 text-slate-50 font-normal">
          <p className="font-extrabold">Description</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis debitis minima delectus repellat quidem
            maiores voluptates dolorum autem officiis culpa.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolore!</p>
        </div>
        <div className=" flex-auto ml-auto mt-0 w-96 h-64">
          <div className="mx-4 lg:mx-auto my-auto w-40 h-52 shadow-sm bg-neutral-700 rounded-lg">
            <br />
            <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-full">
            </div>
            <p className="text-white text-center">
              WPU
            </p>
            <p className="text-white text-center font-thin">
              Company
            </p>
          </div>
        </div>
      </section>


      <div className=" mx-auto text-center px-8 sm:h-Screen bg-primary-700">
        <p className="text-slate-50 text-2xl h-11 font-bold ">Speaker</p>
      </div>

      <section className="flex flex-row justify-center bg-primary-700">
        <div className="container flex flex-col md:flex-row">

          <a href="/" className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

        </div>
      </section>
      {/* <section className="flex flex-row justify-center bg-primary-700">

        <div className="container flex flex-col md:flex-row">

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
            className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full" />
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>
        </div>
      </section> */}


      <div className="mx-auto  h-14  text-center px-8 bg-primary-800">
        <p className="text-slate-50 text-2xl font-bold">Schedule</p>
      </div>

      <div className="w-full flex-grow lg:flex md:items-center bg-primary-800 lg:w-auto hidden">
        <div className="mx-auto">
          <div className="flex h-56 flex-row gap-2 my-4">
          <DateCard month={1} date={1}></DateCard>
          <DateCard month={1} date={2}></DateCard>
          <DateCard month={1} date={3}></DateCard>
          <DateCard month={1} date={4}></DateCard>
          <DateCard month={1} date={5}></DateCard>
          </div>
        </div>
      </div>


      <section className="flex flex-col  bg-primary-800">


        <OverviewEventCards></OverviewEventCards>
        <OverviewEventCards></OverviewEventCards>
        <OverviewEventCards></OverviewEventCards>

      </section>




      <section className="flex flex-col bg-primary-500">
        <div className="mx-auto text-center px-8 bg-primary-500">
          <p className="text-slate-50 text-2xl font-bold">Booths</p>
        </div>

        <div className="flex flex-row mx-auto  my-4 w-11/12 h-44 shadow-xl bg-gray-500 rounded-lg">
          <div className="mx-10 flex flex-col">
            <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
            </div>
            <div className="my-3">
              <h2 className="text-xl text-white font-bold">Booths</h2>
              <p className="text-sm text-white">Booths Details</p>
            </div>
          </div>
          <div className="text-2xl my-auto text-white font-bold justify-center">
            <h1>Booths Banner</h1>
          </div>
        </div>
      </section>


      {/* <section className="flex-row md:flex md:gap-4 lg:min-w-max justify-center bg-primary-500">

        <div className="my-4 mx-4 md:mx-auto md:flex-initial lg:w-2/4  h-44 bg-gray-500 rounded-lg">
          <div className="flex flex-row">
            <div className="mx-10 flex flex-col">
              <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
              </div>
              <div className="my-3">
                <h2 className="text-xl text-white font-bold">Booths</h2>
                <p className="text-sm text-white">Booths Details</p>
              </div>
            </div>
            <div className="text-2xl my-auto mx-auto text-white font-bold justify-center">
              <h1>Booths Banner</h1>
            </div>
          </div>
        </div>

        <div className="my-4 mx-4 md:mx-auto md:flex-initial bg-gray-500 h-44 lg:w-1/5 rounded-lg">
          <div className="mx-10 my-2 flex flex-col">
            <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
            </div>
            <div className="my-3">
              <h2 className="text-xl text-white font-bold">Booths</h2>
              <p className="text-sm text-white">Booths Details</p>
            </div>
          </div>
        </div>

        <div className="my-4 mx-4 md:mx-auto md:flex-initial bg-gray-500 h-44 lg:w-1/5 rounded-lg">
          <div className="mx-10 my-2 flex flex-col">
            <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
            </div>
            <div className="my-3">
              <h2 className="text-xl text-white font-bold">Booths</h2>
              <p className="text-sm text-white">Booths Details</p>
            </div>
          </div>
        </div>

      </section> */}


      <section className="flex flex-col bg-primary-500">
        <div className="mx-auto text-center px-8 bg-primary-500">
          <p className="text-slate-50 text-2xl font-mono ">Event Sponsor</p>
        </div>
        <div className="flex flex-col md:flex-row mx-auto md:gap-x-4 my-4 w-max h-auto">
          <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full" />
          <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full" />
          <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full" />
          <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full" />
          <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full" />
          <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full" />
        </div>
      </section>


      <section>
        <footer className="w-full bg-primary-600 py-8">
          <div className="container mx-auto text-center px-8">
            <p className="text-white mb-2 text-sm">Copyright of <span className="font-bold">Cranium Indonesia</span>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default EventLandingPage;
