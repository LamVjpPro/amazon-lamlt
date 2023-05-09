import React from "react";
import Shade from "../../assets/shade.png";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import ReactCompareImage from "react-compare-image";
import "./Virtual.css";

const Virtual = () => {
  return (
    <div className="mt-[6rem] mb-[6rem] p-[2rem] flex justify-around Virtual">
      <div className="flex flex-col gap-[2rem] relative">
        <span className="text-[2rem] uppercase block w-[20rem] font-bold">
          Virtual Try-On
        </span>
        <span className="text-[1.6rem] uppercase block w-[20rem]">
          Never Buy The Wrong Shade Again!
        </span>
        <span className="text-[1.6rem] block font-bold">Try Now!</span>
        <img src={Shade} alt="" className="w-[10rem] absolute bottom-[3rem]" />
      </div>

      <div className="">
        <div className="w-[30rem]">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
