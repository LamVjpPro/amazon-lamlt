import { React, useState } from "react";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

import "./Header.css";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };

  return (
    <div className="p-[1.5rem] flex">
      <div className="flex items-center flex-1 gap-[1rem]">
        <img className="w-[2.5rem] h-[2.5rem]" src={Logo} alt="" />
        <span className="font-semibold">Amazon</span>
      </div>

      <div className="flex gap-[2rem] items-center justify-center right">
        <div className="bars" onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul
          className="flex gap-[2rem] font-medium list-none menu"
          style={{ display: ShowMenu ? "inherit" : "none" }}
        >
          <li className="hover:text-[#fe956f] cursor-pointer">Collections</li>
          <li className="hover:text-[#fe956f] cursor-pointer">Brand</li>
          <li className="hover:text-[#fe956f] cursor-pointer">New</li>
          <li className="hover:text-[#fe956f] cursor-pointer">Sales</li>
          <li className="hover:text-[#fe956f] cursor-pointer">ENG</li>
        </ul>
        <input
          placeholder="Search"
          type="text"
          className="w-[7rem] outline-none border-none rounded-[5px] p-[0.9rem] h-[30%] text-[12px] search"
        />

        <CgShoppingBag className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
