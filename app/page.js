"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import StepOneForm from "../components/StepOneForm";

const StepOne = () => {
  return (
    <div className="relative">
      <Sidebar />
      <StepOneForm />
    </div>
  );
};

export default StepOne;
