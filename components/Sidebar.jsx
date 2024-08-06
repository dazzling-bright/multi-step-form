"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const steps = [
  { step: 1, path: "/stepOne" },
  { step: 2, path: "/stepTwo" },
  { step: 3, path: "/stepThree" },
  { step: 4, path: "/stepFour" },
];

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <aside className="flex justify-center items-center w-full md:w-2/5 py-24 md:px-4 md:py-8 md:h-full md:flex-col md:gap-24 md:justify-start md:items-start gap-8 text-white bg-cover bg-center bg-no-repeat bg-[url('/bg-mobile.svg')] md:bg-[url('/bg-desktop.svg')]">
      {steps.map(({ step, path }) => (
        <Link href={path} key={step}>
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full font-bold ${
              currentPath === path
                ? "bg-light-blue text-marine-blue"
                : "border border-white"
            }`}
          >
            {step}
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
