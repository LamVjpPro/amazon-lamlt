import React from "react";
import HeroImg from "../../assets/hero.png";
import "./Hero.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="containerr">
      <div className="h_sides">
        <span className="text1 uppercase text-[1.5rem] w-min block font-semibold">
          skin protection cream
        </span>
        <div className="text2 flex flex-col w-min text-black">
          <span className="first:text-[2.5rem] first:font-semibold">
            Trendy Collection
          </span>
          <span className="first:block">
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>
      </div>

      <div className="flex items-baseline justify-center relative">
        <motion.div
          transition={transition}
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className="blueCircle"
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
          className="w-[30rem] absolute bottom-0 img-hero"
        />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className="absolute bottom-[25%] right-[5%] flex gap-[1rem] items-center cart-2"
        >
          <RiShoppingBagFill className="w-[60px] h-[60px] bg-white p-[10px] rounded-[50%] border-[6px] border-black" />

          <div className="flex gap-[1rem] items-center bg-white p-[10px] text-[0.8rem] rounded-[15px]">
            <span className="first:block first:w-[6rem]">
              Best Signup Offers
            </span>

            <div>
              <BsArrowRight className="rounded-[50%] border-[1px] border-blue-500 w-7 h-7 p-1 items-center justify-center" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid">
        <div className="flex flex-col text-right traffic">
          <span className="first:font-extrabold first:text-[2.5rem]">1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className="flex flex-col text-right customers">
          <span className="first:font-extrabold text-right text-[2.5rem]">
            100k
          </span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
