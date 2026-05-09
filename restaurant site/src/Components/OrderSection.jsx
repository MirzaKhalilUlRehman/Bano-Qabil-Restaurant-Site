import React from "react";
import {
  BURGER_IMG_URL,
  CITIES_IMG_URL,
  LEAVES_IMG_URL,
  LEFT_SIDE_LINE,
  MOMOS_IMG_URL,
  ORDER_DELIVERED_IMG_URL,
  PIZZA_IMG_URL,
  RESTAURANT_IMG_URL,
  RIGHT_SIDE_LINE,
  TOMATO_IMG_URL,
} from "../utils/app.constants";

const OrderSection = () => {
  return (
    <section className="h-[37rem] relative">
      <div className="absolute left-0 -top-44 h-auto w-[70%] translate-x-[-70%]">
        <img src={LEFT_SIDE_LINE} alt="" className="h-auto w-full" />
      </div>
      <div className="absolute right-0 top-[-55%] h-auto w-[70%] translate-x-[65%]">
        <img src={RIGHT_SIDE_LINE} alt="" className="h-auto w-full" />
      </div>
      <img
        src={BURGER_IMG_URL}
        alt=""
        className="w-[15rem] absolute left-52 top-10"
      />
      <img
        src={MOMOS_IMG_URL}
        alt=""
        className="w-[15rem] h-[13rem] absolute right-52 -top-44"
      />
      <img
        src={PIZZA_IMG_URL}
        alt=""
        className="w-[15rem]  absolute right-36 top-40"
      />
      <img
        src={TOMATO_IMG_URL}
        alt=""
        className="w-12 absolute left-32 top-96"
      />
      <img
        src={LEAVES_IMG_URL}
        alt=""
        className="w-12 absolute left-[30%] -top-38"
      />
      <img
        src={TOMATO_IMG_URL}
        alt=""
        className="w-12  absolute right-32 top-10 rotate-45"
      />
      <div className="w[30%] text-center m-auto flex items-center justify-center flex-col mt-[14rem] ">
        <span className=" text-carnation text-5xl font-bold leading-[3.5rem]">
          Better food for <br />
          more people
        </span>
        <span className="text-comet text-xl mt-8 w-[25rem] ">
          For over a decade, we’ve enabled our customers to discover new tastes,
          delivered right to their doorstep
        </span>
      </div>
      <div className="rounded-4xl bg-white shadow-2xl w-[53%] m-auto py-6 px-7 flex items-center mt-[10rem]">
        <div className="flex items-center justify-center gap-3 flex-1 border-r border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-3xl font-bold">3,00,000+</span>
            <span className="text-raven text-lg">restaurants</span>
          </div>
          <img src={RESTAURANT_IMG_URL} alt="" className="w-16 h-14" />
        </div>
        <div className="flex items-center justify-center gap-8 flex-1 border-r border-gray-200 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-3xl font-bold">800+</span>
            <span className="text-raven text-lg">cities </span>
          </div>
          <img src={CITIES_IMG_URL} alt="" className=" h-14" />
        </div>
        <div className="flex items-center justify-center gap-8 flex-1 ml-3 pr-5">
          <div className="flex flex-col">
            <span className="text-comet text-3xl font-bold">3 billion+</span>
            <span className="text-raven text-lg">orders delivered</span>
          </div>
          <img src={ORDER_DELIVERED_IMG_URL} alt="" className="w-16 h-14" />
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
