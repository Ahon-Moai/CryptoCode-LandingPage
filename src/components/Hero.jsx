import React from "react";
import heroIMG from "../assets/blur-bg.png";
import content from "../assets/Mob.png";
import Company from "./Company";
const Hero = () => {
  return (
    <>
      <div className="w-full h-[800px] bg-stone-950">
        <div className="max-w-[1300px] mx-auto">
          <img
            className="absolute top-[0%] left-[26%] h-[660px] "
            src={heroIMG}
            alt="Flikker"
          />
          <div>
            <img
              className="h-[480px] absolute top-[20%] left-[7%]"
              src={content}
              alt="content"
            />
            <div className="text-gray-300 absolute top-[30%] right-12">
              <h1 className="font-bold text-[56px] max-w-[620px] leading-[72px]">
                Make Easier Your Crypto Transactions.
              </h1>
              <p className="max-w-[620px] py-4 leading-[21px] text-[14px] text-stone-400">
                Our Cryptocurrency offers a fast,secure and affordable
                alternative for all of your financial needs. Join the
                cyptrocurrency revolotion today and take control of your
                financial future. Sign up now to start using our platform for
                yourself.
              </p>
              <button className="mt-6 bg-cyan-200 py-2 px-4 text-black">
                TRY FOR FREE
              </button>
            </div>
          </div>
          <Company />
        </div>
      </div>
    </>
  );
};

export default Hero;
