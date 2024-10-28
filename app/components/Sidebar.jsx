"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const steps = [
  { step: 1, path: "/step-one" },
  { step: 2, path: "/step-two" },
  { step: 3, path: "/step-three" },
  { step: 4, path: "/step-four" },
];

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <aside className="flex justify-center items-center w-full md:w-2/5 md:px-4 md:flex-col py-4 md:gap-24 md:justify-start md:items-start gap-8 text-white bg-cover bg-center bg-no-repeat bg-[url('/bg-mobile.svg')] md:rounded-3xl">
      {steps.map(({ step, path }) => (
        <Link href={path} key={step}>
          <p
            className={`w-12 h-12  flex items-center justify-center rounded-full font-bold ${
              currentPath === path
                ? "bg-light-blue text-marine-blue"
                : "border border-white"
            }`}
          >
            {step}
          </p>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
