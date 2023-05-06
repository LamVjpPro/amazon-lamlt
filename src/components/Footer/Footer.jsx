import React from "react";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="w-[100%] mt-[5rem]">
      <hr className="w-[100%] h-[1px] border-none bg-[white] mt-[1rem]" />

      <div className="flex w-[100%] justify-around">
        <div className="flex items-start gap-[1rem]">
          <img src={Logo} alt="" className="h-[2.5rem] w-[2.5rem]" />
          <span className="font-semibold text-[1rem]">Amazon</span>
        </div>

        <div className="flex flex-col gap-[1rem] max-w-[12rem]">
          <div className={css.detail}>
            <span>Contact US</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center ">
              <LocationMarkerIcon className="w-[25px]" />
              <span>Luc Nam - Bac Giang</span>
            </span>

            <span className="hover:cursor-pointer flex gap-[1rem] items-center ">
              {" "}
              <PhoneIcon className="w-[25px]" />
              <a href="tel:0348-0676-29">0348067629</a>
            </span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center ">
              {" "}
              <InboxIcon className="w-[25px]" />
              <a href="tel:0348-0676-29">Ltl@gmail.com</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] max-w-[12rem]">
          <div className={css.detail}>
            <span>Account</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center ">
              <LoginIcon className="w-[25px]" />
              <span>Sign In</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] max-w-[12rem]">
          <div className={css.detail}>
            <span>Company</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center ">
              <UsersIcon className="w-[25px]" />
              <span>About US</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] max-w-[12rem]">
          <div className={css.detail}>
            <span>Resources</span>
            <span className="hover:cursor-pointer flex gap-[1rem] items-center ">
              <LinkIcon className="w-[25px]" />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-[0.65rem] mt-[2rem] text-center w-[100%]">
        <span>Copyright ©2023 by Amazon, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
