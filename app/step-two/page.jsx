"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import useHandleSubmit from "@/app/functions/handleSubmit";
import {
  monthlySubscription,
  yearlySubscription,
} from "../store/store-slices/subscriptionPlanSlice";

const StepTwo = () => {
  const dispatch = useDispatch();

  // Access the subscription plan from the Redux store
  const currentPlan = useSelector(
    (state) => state.subscriptionPlan.currentSubscriptionPlan
  );

  const ArcadePlanIcon = "/icon-arcade.svg";
  const AdvancedPlanIcon = "/icon-advanced.svg";
  const ProPlanIcon = "/icon-pro.svg";

  const nextPath = "step-three";
  const handleSubmit = useHandleSubmit(nextPath);

  const monthlyPlansArray = [
    {
      name: "Arcade",
      price: "$9/month",
      icon: ArcadePlanIcon,
    },
    {
      name: "Advanced",
      price: "$12/month",
      icon: AdvancedPlanIcon,
    },
    { name: "Pro", price: "$15/month", icon: ProPlanIcon },
  ];

  const yearlyPlansArray = [
    {
      name: "Arcade",
      price: "$90/year",
      bonusOffer: "2 months free",
      icon: ArcadePlanIcon,
    },
    {
      name: "Advanced",
      price: "$120/year",
      bonusOffer: "2 months free",
      icon: AdvancedPlanIcon,
    },
    {
      name: "Pro",
      price: "$150/year",
      bonusOffer: "2 months free",
      icon: ProPlanIcon,
    },
  ];

  // Determine the displayed plans based on Redux state
  const isYearly = currentPlan === "yearly";
  const plans = isYearly ? yearlyPlansArray : monthlyPlansArray;

  return (
    <article className="flex-1 flex flex-col md:px-6 ">
      <section className="flex-grow sm:mx-12 md:m-0 md:w-full rounded-2xl md:rounded-none -translate-y-20 md:transform-none">
        <header className="mb-4">
          <h1 className="font-bold text-2xl my-2">Select your plan</h1>
          <p>You have the option of monthly or yearly billing</p>
        </header>
        <article className="flex flex-col flex-1 gap-6">
          {plans.map(({ name, price, icon, bonusOffer }, index) => (
            <div
              key={index}
              tabIndex={0}
              className={`flex sm:gap-8 px-2 border-gray-400 py-4 rounded-xl border hover:bg-magnolia cursor-pointer transition-opacity duration-300 opacity-100`}
            >
              <figure>
                <Image alt="" width={50} height={50} src={icon} />
              </figure>
              <div className="flex-1">
                <h2 className="font-bold">{name}</h2>
                {isYearly && (
                  <p className="text-sm text-cool-gray">{bonusOffer}</p>
                )}
                <p className="font-bold">{price}</p>
              </div>
            </div>
          ))}
        </article>
        <div className="flex my-2 py-4 font-bold justify-evenly items-center cursor-pointer bg-magnolia">
          <span
            onClick={() => dispatch(monthlySubscription())}
            className="flex-1 text-center"
          >
            Monthly
          </span>
          <div
            className={`bg-marine-blue rounded-2xl h-[30px] w-[50px] flex py-4 items-center px-1 transition-all duration-300 ${
              isYearly ? "justify-end" : "justify-start"
            }`}
            onClick={() =>
              dispatch(isYearly ? monthlySubscription() : yearlySubscription())
            }
          >
            <div className="bg-white rounded-2xl mx-[1px] h-[20px] aspect-square"></div>
          </div>
          <span
            onClick={() => dispatch(yearlySubscription())}
            className="flex-1 text-center"
          >
            Yearly
          </span>
        </div>
      </section>

      <section className="bg-white w-full flex justify-between items-center p-4 text-right mt-auto">
        <Link
          href="/"
          className="text-cool-gray hover:text-marine-blue font-bold transition-all duration-300"
        >
          Go Back
        </Link>
        <Button onClick={handleSubmit} type="submit">
          Next Step
        </Button>
      </section>
    </article>
  );
};

export default StepTwo;
