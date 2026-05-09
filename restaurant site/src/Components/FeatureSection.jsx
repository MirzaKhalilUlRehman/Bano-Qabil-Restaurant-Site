import React from "react";
import { CALENDAR_IMG_URL, COLLECTIONS_IMG_URL, FOOD_ON_TRAIN_IMG_URL, GIFT_CARDS_IMG_URL, GOURMET_IMG_URL, HEALTHY_IMG_URL, OFFERS_IMG_URL, PARTY_IMG_URL, PHONE_IMG_URL, VEG_MODE_IMG_URL } from "../utils/app.constants";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <section className="h-[30rem] bg-gradient-to-b from-chablis to-white">
      <div className="relative text-center flex flex-col items-center justify-center py-28">
        <span className="text-carnation text-[48px] font-bold leading-tight">
          What’s waiting for you
          <br />
          on the app?
        </span>
        <span className="text-xl text-comet font-extralight mt-5">
          Our app is packed with features that <br />
          enable you to experience food <br />
          delivery like never before
        </span>
        <div className="relative">
          <img src={PHONE_IMG_URL} alt="" className="w-[18rem] mt-6" />
          <div className="absolute top-[8.5rem] left-[4.5rem] shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border border-athens-gray py-4 pb-2 ">
            <img src={CALENDAR_IMG_URL} alt="" className="w-[144px] h-[90px]" />
            <span>
              Schedule
              <br />
              your order
            </span>
          </div>
        </div>
        <FeatureCard Title="Veg Mode" ImgUrl={VEG_MODE_IMG_URL} className="bottom-[18rem] left-[23.5rem] "/>
        <FeatureCard Title="Healthy" ImgUrl={HEALTHY_IMG_URL} className="bottom-[16rem] left-[15rem]"/>
        <FeatureCard Title="Plan a Party" ImgUrl={PARTY_IMG_URL} className="bottom-[7rem] left-[15rem]"/>
        <FeatureCard Title="Gift Cards" ImgUrl={GIFT_CARDS_IMG_URL} className="bottom-[9rem] left-[25rem]"/>
        <FeatureCard Title="Gourmet" ImgUrl={GOURMET_IMG_URL} className="bottom-[16rem] right-[27rem]"/>
        <FeatureCard Title="Offers" ImgUrl={OFFERS_IMG_URL} className="bottom-[17.5rem] right-[18.5rem]"/>
        <FeatureCard Title="Food on Train" ImgUrl={FOOD_ON_TRAIN_IMG_URL} className="bottom-[7rem] right-[25.5rem]"/>
        <FeatureCard Title="Collections" ImgUrl={COLLECTIONS_IMG_URL} className="bottom-[8.5rem] right-[17rem]"/>
      </div>
    </section>
  );
};

export default FeatureSection;
