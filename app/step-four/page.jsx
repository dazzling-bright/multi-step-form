
import React from "react";
import { FaCheck } from "react-icons/fa6";

const StepFour = () => {
  return (
    <article className=" flex flex-col justify-center items-center h-full md:px-12 ">
      <FaCheck className="border-[30px] text-strawberry-red border-strawberry-red border- rounded-full p-4 text-9xl shadow-black" />
      <header className="my-4">
        <h1 className="font-extrabold text-4xl text-marine-blue my-2">
          Thank you!
        </h1>
      </header>
      <p className="text-cool-gray font-medium">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </article>
  );
};

export default StepFour;
