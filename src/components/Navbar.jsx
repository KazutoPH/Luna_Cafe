import React from "react";
import { navList } from "../constants";

const Navbar = () => {
  return (
    <main className="max_width padding-container flex flex-row justify-between absolute top-0 py-5 left-1/2 -translate-x-1/2">
      <div className="flex flex-row gap-6 items-center">
        <img
          src="logo.png"
          alt="logo"
          height={50}
          width={50}
          className="object-contain"
        />
        {navList.map((nav, i) => (
          <p className="nav_text text-white" key={i}>
            {nav.name}
          </p>
        ))}
      </div>

      <p className="popins font-bold text-white text-[25px]">SIGN IN</p>
    </main>
  );
};

export default Navbar;
