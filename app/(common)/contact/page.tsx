import GoogleMap from "@/components/custom/GoogleMap";
import Hero from "@/components/custom/Hero";
import { Mail, MapPinCheck, User } from "lucide-react";

const page = () => {
  return (
    <>
      <Hero bread={["Home", "Contact"]} page="Contact" />

      <div className="flex justify-center gap-10 flex-wrap items-start container mx-auto max-w-7xl py-10">
        <form className="mx-5">
          <h4 className="text-black font-semibold text-3xl py-2">
            Contact us for any questions
          </h4>
          <div className="flex flex-col space-y-5 mt-2">
            <input
              type="text"
              placeholder="Name*"
              className="focus:border-[#78BC16] border-2 md:w-xl w-full py-2 px-2"
            />
            <input
              type="email"
              placeholder="Email*"
              className="focus:border-[#78BC16] border-2 md:w-xl w-full py-2 px-2"
            />
            <input
              type="tel"
              placeholder="Phone No*"
              className="focus:border-[#78BC16] border-2 md:w-xl w-full py-2 px-2"
            />
            <textarea
              placeholder="How can we help?*"
              rows={10}
              className="focus:border-[#78BC16] border-2 md:w-xl w-full py-2 px-2"
            />
            <button
              type="submit"
              className="bg-[#333333] hover:bg-[#78BC16] py-2 px-2 font-semibold md:text-lg text-sm cursor-pointer text-white rounded-lg md:w-30 w-24 transform duration-200 ease-in-out">
              Submit
            </button>
          </div>
        </form>

        <div className="flex flex-col items-start justify-center mx-5">
          <h4 className="text-black text-start font-semibold text-3xl py-2">
            Get Info
          </h4>

          <div className="space-y-2 md:w-xs w-full mt-2">
            <span className="flex md:items-start  items-center justify-start md:flex-row flex-col gap-3 text-gray-600">
              <MapPinCheck className="size-6 text-[#78BC16] font-normal" />
              <p className="text-gray-600 md:text-start text-center">
                <div className="text-black font-semibold text-lg">Location</div>
                p-70, Kottai St, Thirupparankundram, Madurai
              </p>
            </span>
            <div className="space-y-8">
              <span className="flex items-center justify-start md:flex-row flex-col gap-3 text-gray-600">
                <Mail className="size-6 text-[#78BC16] font-light" />{" "}
                karthick.santhosh1999@gmail.com
              </span>
              <span className="flex items-center justify-start md:flex-row flex-col gap-3 text-gray-600">
                <User className="size-6 text-[#78BC16] font-light" /> Santhosh
                Kani.M
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <GoogleMap />
    </>
  );
};

export default page;
