"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import NavbarElipse from "../../public/nav-bar-elipse.svg";

const navigationData: {
  url: string;
  title: string;
}[] = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-80 min-w-80 bg-prim-3 flex flex-col justify-between items-start py-16 px-16 text-prim-1 select-none ">
      {/* Logo/my name */}
      <Link href="/">
        <div className="flex justify-center cursor-pointer ">
          <h2 className="text-2xl">
            Danilo <strong>Costilla</strong>
          </h2>
        </div>
      </Link>

      {/* Nav links */}
      <ul className="text-2xl   space-y-2">
        {navigationData.map((navData) => {
          return (
            <li key={uuidv4()} className="cursor-pointer">
              {pathname === navData.url ? (
                <div className="flex justify-center items-center">
                  <div className="mr-2">
                    <NavbarElipse />
                  </div>
                  <strong>
                    <Link href={navData.url}>{navData.title}</Link>
                  </strong>
                </div>
              ) : (
                <Link href={navData.url}>{navData.title}</Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* Socials */}
      <div className="flex justify-center items-center  ">
        <p>linkedin</p>
        <p>soundcloud</p>
      </div>
    </div>
  );
};

export default Sidebar;
