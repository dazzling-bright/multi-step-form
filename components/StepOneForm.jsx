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

  const formInputFields = [
    {
      id: "firstName",
      name: "firstName",
      placeholder: "e.g. Stephen King",
      label: "Name",
      type: "text",
    },

    {
      id: "email",
      name: "email",
      placeholder: "e.g. stephenking@lorem.com",
      label: "Email",
      type: "email",
    },
    {
      id: "telephone",
      name: "telephone",
      placeholder: "e.g. +1 234 567 890",
      label: "Phone Number",
      type: "tel",
    },
  ];

  return (
    <article className="flex flex-col items-center justify-between flex-1 bg-blue-200">
      <main className="p-8 mx-4 md:mx-0 -translate-y-12 md:translate-y-0  md:w-full md:flex-1 rounded-2xl md:rounded-none shadow-md bg-white">
        <header className="mb-4">
          <h1 className="font-bold text-xl my-2">Personal Information</h1>
          <p>Please provide your name, email address, and phone number</p>
        </header>
        <form onSubmit={handleSubmit} className="w-full">
          {formInputFields.map(({ id, name, placeholder, label, type }) => (
            <React.Fragment key={id}>
              <label className="font-bold text-sm" htmlFor={id}>
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className="block outline-gray-300 transition-all duration-300 ease-in-out focus:shadow-sm hover:shadow-sm w-full p-2 border mb-6 border-gray-300 rounded-lg"
              />
            </React.Fragment>
          ))}
        </form>
      </main>

      <div className="bg-white w-full p-4 text-right mt-auto">
        <Button
          type="submit"
          className="p-4 px-12 bg-blue-900 text-white rounded-lg"
        >
          Next
        </Button>
      </div>
    </article>
  );
};

export default StepOneForm;
