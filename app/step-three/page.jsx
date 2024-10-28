"use client";
import React, { useState } from "react";

import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import useHandleSubmit from "@/app/functions/handleSubmit";
import { useSelector } from "react-redux";

const StepThree = () => {
  const nextPath = "step-three";
  const handleSubmit = useHandleSubmit(nextPath);

  const subscriptionPlan = useSelector(
    (state) => state.subscriptionPlan.currentSubscriptionPlan
  );

  return (
    <article className="flex-1 flex flex-col md:px-6 h-full">
      <section className="flex-grow  sm:mx-12 md:m-0 md:w-full rounded-2xl md:rounded-none -translate-y-20 md:transform-none">
        <header className="mb-4 ">
          <h1 className="font-bold text-2xl my- text-marine-blue">
            Finishing up
          </h1>
          <p className="text-cool-gray font-medium">
            Double-check everything looks OK before confirming
          </p>
        </header>
        <section className="flex flex-col flex-1 gap-6 text-marine-blue">
          <div className="flex justify-between items-center font-bold">
            <p>
              <span>Arcade ({subscriptionPlan}) </span> <br />
              <span className="text-cool-gray underline font-normal cursor-pointer">
                Change
              </span>
            </p>
            <p>$90/yr</p>
          </div>

          <p className="flex justify-between">
            <span>Online Service</span> <span>+$10/yr</span>
          </p>
          <p className="flex justify-between">
            <span>Larger Storage</span> <span>+$20/yr</span>
          </p>

          <p className="flex justify-between">
            <span>
              Total
              {subscriptionPlan === "yearly" ? "(per year)" : "(per month)"}
            </span>
            <span className="text-purplish-blue">+$120/yr</span>
          </p>
        </section>
      </section>

      <section className="w-full flex justify-between items-center">
        <Link
          href="/step-two"
          className="text-cool-gray hover:text-marine-blue font-bold transition-all duration-300 "
        >
          Go Back
        </Link>
        <Button
          onClick={handleSubmit}
          className="bg-purplish-blue font-bold"
          type="submit"
        >
          Confirm
        </Button>
      </section>
    </article>
  );
};

export default StepThree;
