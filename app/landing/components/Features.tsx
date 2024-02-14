import Container from "./layouts/Container";
import { SiGoogleanalytics } from "react-icons/si";
import { RiUserVoiceFill } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";

const Features = () => {
  return (
    <Container className="mt-8">
      <div className=" flex flex-col gap-20  bg-themeDarkWhiteBg py-8 px-4  lg:p-16 ">
        <div className="flex flex-col item-start gap-4 lg:items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold text-3xl  sm:text-[2.8rem]">
              Build a customer-centric
            </p>
            <p className="font-bold text-3xl sm:text-[2.8rem]">
              marketing strategy
            </p>
          </div>
          <p className="text-themeGrayText font-medium text-center">
            Clearly state the unique benefits of your Saas business
          </p>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="p-5 flex flex-col gap-2  items-center w-72">
            <div className="p-3 rounded-full bg-themeDarkShadow">
              <SiGoogleanalytics className="text-3xl text-themeYellow " />
            </div>
            <p className="font-bold">Social Media Analysis</p>
            <p className="text-themeGrayText text-center font-medium">
              Stay ahead with live analytics on engagement, reach, and
              sentiment.
            </p>
          </div>

          <div className="p-5 flex flex-col gap-2  items-center w-72">
            <div className="p-3 rounded-full bg-themeDarkShadow">
              <BsFillSearchHeartFill className="text-3xl text-themeYellow " />
            </div>
            <p className="font-bold">Market research</p>
            <p className="text-themeGrayText text-center font-medium">
              Make informed decisions by uncovering competitor strategies.
            </p>
          </div>

          <div className="p-5 flex flex-col gap-2  items-center w-72">
            <div className="p-3 rounded-full bg-themeDarkShadow">
              <RiUserVoiceFill className="text-3xl text-themeYellow " />
            </div>
            <p className="font-bold">Influencer Marketing</p>
            <p className="text-themeGrayText text-center font-medium">
              Find influencers aligning with your brand effortlessly.
            </p>
          </div>

          <div className="p-5 flex flex-col gap-2  items-center w-72">
            <div className="p-3 rounded-full bg-themeDarkShadow">
              <SiGoogleanalytics className="text-3xl text-themeYellow " />
            </div>
            <p className="font-bold">Social Media Analysis</p>
            <p className="text-themeGrayText text-center font-medium">
              Stay ahead with live analytics on engagement, reach, and
              sentiment.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
