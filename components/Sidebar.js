import React from "react";

const steps = [1, 2, 3, 4];

const Sidebar = () => {
  return (
    <aside
      className="flex justify-center absolute z-10 w-full h-60 top-0 left-0 gap-8 text-white"
      style={{
        backgroundImage: "url('/bg-mobile.svg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {steps.map((step) => (
        <p
          key={step}
          className={`p-4 self-center rounded-full border border-white`}
        >
          {step}
        </p>
      ))}
    </aside>
  );
};

export default Sidebar;
