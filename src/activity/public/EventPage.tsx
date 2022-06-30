import EventCard from "../../components/EventCard";
import { Input } from "../../components/Input";

const EventPage = () => {
  console.log('Event Page')
  // TODO Event Page
  return (
    <>
      <section id="events" className="bg-primary-700">
        <div className="max-w-screen-2xl p-10 sm:p-16 mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="hl"></div>
            <h2 className="text-2xl lg:text-4xl font-bold">Events</h2>
            <p className="text-center text-neutral-400 mt-4">"Lorem Ipsum is simply dummy text of the printing and typesetting industry"</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div>
              <label className="inline-block text-xs sm:text-sm lg:text-base font-semibold mb-2">Search</label>
              <Input type="search" id="search" placeholder="Enter a keyword..." />
            </div>
            <div>
              <label className="inline-block text-xs sm:text-sm lg:text-base font-semibold mb-2">Filter by</label>
              <Input
                type="select"
                id="filter"
                placeholder="This Week"
                options={["This Week", "Category1", "Category2"]}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPage;
