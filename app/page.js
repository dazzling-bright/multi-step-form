"use client";

import React from "react";
import "../app/globals.css";
import Sidebar from "../components/Sidebar";
import StepOneForm from "../components/StepOneForm";

const StepOne = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:min-h-screen">
      <Sidebar />
      <StepOneForm />
    </div>
  );
};

export default StepOne;
