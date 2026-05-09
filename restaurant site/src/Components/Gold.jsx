import React from "react";
import { FREE_DELIVERY_IMG_URL, GOLD_IMG_URL, GOLD_STAR_IMG_URL, SCOTTER_IMG_URL } from "../utils/app.constants";
import GoldStar from "./GoldStar";
import GoldCard from "./GoldCard";

const Gold = () => {
  return (
    <section className="bg-black relative py-60 mt-80 text-white flex items-center justify-center flex-col ">
      <img src={GOLD_IMG_URL} alt="" className="w-77 h-34" />
      <div className="mt-6 text-xl flex flex-col font-normal bg-gradient-to-r from-[#8c6115] via-[#c2a36d] to-[#8c6115] bg-clip-text text-center text-transparent  ">
        <span>Pakistan's Top Serving</span>
        <span>Progem for Food Lovers</span>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 ">
        <GoldStar />
        <span className="text-2xl font-medium tracking-[4px]">
          GOLD BENEFITS
        </span>
        <GoldStar />
      </div>
      <div className="flex gap-10 mt-8">
        <GoldCard ImgUrl={FREE_DELIVERY_IMG_URL} Title="Free Delivery" Des="At all restaurant within 7 km" />
        <GoldCard ImgUrl={SCOTTER_IMG_URL} Title="Up to 30% off extra" Des="At 20,000+ partner restaurants" />
      </div>
      <img src={GOLD_STAR_IMG_URL} alt="" className="w-80 absolute top-0 right-0 rotate-150" />
      <img src={GOLD_STAR_IMG_URL} alt="" className="w-60 absolute top-10 left-5 " />
      <img src={GOLD_STAR_IMG_URL} alt="" className="w-24 absolute bottom-0 right-30 rotate-95" />
    </section>
  );
};

export default Gold;
