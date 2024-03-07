import React from "react";
import logo from "../assets/Logo.png";
function Navbar() {
  return (
    <>
      <div className="w-full h-full bg-stone-950  ">
        <div className="max-w-[1300px] px-6 py-4 cursor-pointer mx-auto text-gray-300">
          <div className="flex justify-between font-sans">
            <img src={logo} className="h-[60px]" alt="logo" />
            <div>
              <ul className="flex flex-row gap-6 py-5 font-semibold ">
                <li className="">PRODUCT</li>
                <li>COMPANY</li>
                <li>PRICING</li>
                <li>BLOG</li>
              </ul>
            </div>
            <div className="py-3">
              <button className="py-2  px-4 ">Login</button>
              <button className="py-2 ml-3 px-4 bg-cyan-200 text-black hover:rounded-lg duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
