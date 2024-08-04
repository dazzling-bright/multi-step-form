import Link from "next/link";
import React from "react";

const steps = [1, 2, 3, 4];

const Sidebar = () => {
  return (
    <aside className="flex justify-center items-center z-0 w-full md:w-1/3 h-48 md:h-screen md:flex-col md:gap-24 md:justify-start md:items-start gap-8 text-white bg-cover bg-top bg-[url('/bg-mobile.svg')] md:bg-[url('/bg-desktop.svg')]">
      {steps.map((step) => (
        <Link
          href="/"
          key={step}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white"
        >
          {step}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
