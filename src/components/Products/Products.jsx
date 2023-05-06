import { React, useState } from "react";
import Plan from "../../assets/plane.png";
import css from "./Products.module.css";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className="px-0 py-[2rem] relative flex felx-col gap-[2rem] items-center justify-center flex-wrap">
      <img
        src={Plan}
        alt=""
        className="absolute w-[8rem] left-[30%] top-[-3rem]"
      />
      <h1>Our Feature Products</h1>

      <div className={css.products}>
        <ul className="list-none flex flex-col gap-[2rem] font-medium text-[1.3rem]">
          <li
            onClick={() => setMenuProducts(ProductsData)}
            className="hover:text-[pink] hover:cursor-pointer"
          >
            All
          </li>
          <li
            onClick={() => filter("skin care")}
            className="hover:text-[pink] hover:cursor-pointer"
          >
            Skin Care
          </li>
          <li
            onClick={() => filter("conditioner")}
            className="hover:text-[pink] hover:cursor-pointer"
          >
            Conditioner
          </li>
          <li
            onClick={() => filter("foundation")}
            className="hover:text-[pink] hover:cursor-pointer"
          >
            Foundation
          </li>
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="">
                <div className="">
                  <span className="text-[1.4rem] font-semibold flex">
                    {product.name}
                  </span>
                  <span className="text-[0.8rem]">{product.detail}</span>
                </div>
                <span className="text-[2rem] font-bold">{product.price}$</span>
                <div className="border-2 border-black rounded-[15px] text-[0.6rem] text-center w-max px-[5px] py-[5px]">
                  Show Now
                </div>
              </div>

              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
