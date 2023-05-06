import React from "react";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <div className="p-[1.5rem] flex">
      <div className="flex items-center flex-1 gap-[1rem]">
        <img className="w-[2.5rem] h-[2.5rem]" src={Logo} alt="" />
        <span className="font-semibold">Amazon</span>
      </div>

      <div className="flex gap-[2rem] items-center justify-center">
        <div className="flex gap-[2rem] font-medium list-none">
          <ul className="flex gap-[2rem] font-medium list-none">
            <li className="hover:text-[#fe956f] cursor-pointer">Collections</li>
            <li className="hover:text-[#fe956f] cursor-pointer">Brand</li>
            <li className="hover:text-[#fe956f] cursor-pointer">New</li>
            <li className="hover:text-[#fe956f] cursor-pointer">Sales</li>
            <li className="hover:text-[#fe956f] cursor-pointer">ENG</li>
          </ul>
        </div>
        <input
          placeholder="Search"
          type="text"
          className="w-[7rem] outline-none border-none rounded-[5px] p-[0.9rem] h-[30%] text-[12px]"
        />

        <CgShoppingBag className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
