import { Input } from "../../components/Input";
import Button from "../../components/Button";

const Profile = () => {
  console.log("Profile - Home Dashboard");

  return (
    <>
      <div className="flex items-center gap-8">
        <img
          src="/img-avatar.png"
          alt="[Username]"
          width="128"
          height="128"
          className="flex items-center border-2 border-secondary-500 rounded-full overflow-hidden green-shadow"
        />
        <Button type="button" variant="secondary" className="w-fit">
          Change Profile Picture
        </Button>
      </div>
      <div className="flex gap-8 mt-6">
        <div className="flex flex-col">
          <label htmlFor="first-name" className="text-sm mb-1 ml-0.5">
            First Name
          </label>
          <Input type="text" id="first-name" placeholder="First Name" className="w-64" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name" className="text-sm mb-1 ml-0.5">
            Last Name
          </label>
          <Input type="text" id="last-name" placeholder="Last Name" className="w-64" />
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <label htmlFor="bio" className="text-sm mb-1 ml-0.5">
          Bio
        </label>
        <Input type="textarea" id="bio" placeholder="Bio" className="w-[34rem]" />
      </div>
      <div className="flex gap-8 mt-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-1 ml-0.5">
            Email
          </label>
          <Input type="email" id="email" placeholder="Email" className="w-64" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone-number" className="text-sm mb-1 ml-0.5">
            Phone Number
          </label>
          <Input type="tel" id="phone-number" placeholder="Phone Number" className="w-64" />
        </div>
      </div>
      <div className="flex gap-8 mt-3">
        <div className="flex flex-col">
          <label htmlFor="company" className="text-sm mb-1 ml-0.5">
            Company
          </label>
          <Input type="text" id="company" placeholder="Company" className="w-64" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="position-in-company" className="text-sm mb-1 ml-0.5">
            Position in Company
          </label>
          <Input type="text" id="position-in-company" placeholder="Position in Company" className="w-64" />
        </div>
      </div>
      <div className="flex gap-8 mt-6">
        <Button type="submit" variant="primary" className="w-48">
          Save
        </Button>
        <Button
          type="button"
          href="https://www.google.com"
          variant="secondary"
          className="max-w-[12rem]"
        >
          Change Password
        </Button>
      </div>
    </>
  );
};

export default Profile;
