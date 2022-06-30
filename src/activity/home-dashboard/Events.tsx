import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import EventCard from "../../components/EventCard";
import { Input } from "../../components/Input";

const Events = () => {
  console.log("Events - Home Dashboard");

  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <NavLink
              to="/"
              className="h-fit w-40 text-center font-semibold border-b border-neutral-50/25"
            >
              {({ isActive }) =>
                isActive ? (
                  <p className="border-b border-secondary-500 py-2">
                    My Events
                  </p>
                ) : (
                  <p className="py-2">My Events</p>
                )
              }
            </NavLink>
            <NavLink
              to="/"
              className="h-fit w-40 text-center font-semibold border-b border-neutral-50/25"
            >
              {({ isActive }) =>
                isActive ? (
                  <p className="border-b border-secondary-500 py-2">
                    Hosted Events
                  </p>
                ) : (
                  <p className="py-2">Hosted Events</p>
                )
              }
            </NavLink>
            <Button
              type="button"
              variant="tertiary"
              href="/"
              className="h-fit max-w-[10rem] text-center py-2 mx-8"
            >
              Public Events {"›"}
            </Button>
          </div>
          <div className="flex items-center">
            <label htmlFor="filter" className="font-semibold mr-4">Filter by</label>
            <Input
              id="filter"
              type="select"
              placeholder="Category"
              options={["Category 1", "Category 2", "Category 3", "Category 4"]}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-4">
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </div>
      </div>
    </>
  );
};

export default Events;
