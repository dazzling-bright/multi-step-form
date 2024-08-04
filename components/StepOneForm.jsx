"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const StepOneForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/step2");
  };

  return (
    <div className="relative flex flex-col items-center justify-between flex-1 bg-blue-200">
      <main className="p-8 absolute -top-[10%] md:relative md:top-0 md:w-full md:flex-1 rounded-2xl shadow-md bg-white  ">
        <header className="mb-4">
          <h1 className="font-bold text-xl">Personal Information</h1>
          <p>Please provide your name, email address, and phone number</p>
        </header>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="font-bold text-sm" htmlFor="firstName">
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="e.g. Stephen King"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="e.g. stephenking@lorem.com"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-sm" htmlFor="telephone">
              Phone Number
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              placeholder="e.g. +1 234 567 890"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </form>
      </main>

      <div className="bg-white w-full p-4 text-right mt-auto">
        <Button
          type="submit"
          className="p-4 px-12 bg-blue-900 text-white rounded-lg "
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepOneForm;
