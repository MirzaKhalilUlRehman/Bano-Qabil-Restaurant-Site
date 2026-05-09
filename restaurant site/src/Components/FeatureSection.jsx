import React from "react";
import { CALENDAR_IMG_URL, COLLECTIONS_IMG_URL, FOOD_ON_TRAIN_IMG_URL, GIFT_CARDS_IMG_URL, GOURMET_IMG_URL, HEALTHY_IMG_URL, OFFERS_IMG_URL, PARTY_IMG_URL, PHONE_IMG_URL, VEG_MODE_IMG_URL } from "../utils/app.constants";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
  return (
    <section className="h-120 bg-gradient-to-b from-chablis to-white">
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
          <div className="absolute top-34 left-18 shadow-2xl bg-white rounded-3xl flex flex-col items-center justify-center border border-athens-gray py-4 pb-2 ">
            <img src={CALENDAR_IMG_URL} alt="" className="w-36 h-23" />
            <span>
              Schedule
              <br />
              your order
            </span>
          </div>
        </div>
        <FeatureCard Title="Veg Mode" ImgUrl={VEG_MODE_IMG_URL} className="bottom-72 left-94 "/>
        <FeatureCard Title="Healthy" ImgUrl={HEALTHY_IMG_URL} className="bottom-64 left-60"/>
        <FeatureCard Title="Plan a Party" ImgUrl={PARTY_IMG_URL} className="bottom-28 left-60"/>
        <FeatureCard Title="Gift Cards" ImgUrl={GIFT_CARDS_IMG_URL} className="bottom-36 left-100"/>
        <FeatureCard Title="Gourmet" ImgUrl={GOURMET_IMG_URL} className="bottom-64 right-108"/>
        <FeatureCard Title="Offers" ImgUrl={OFFERS_IMG_URL} className="bottom-70 right-74"/>
        <FeatureCard Title="Food on Train" ImgUrl={FOOD_ON_TRAIN_IMG_URL} className="bottom-28 right-102"/>
        <FeatureCard Title="Collections" ImgUrl={COLLECTIONS_IMG_URL} className="bottom-34 right-68"/>
      </div>
    </section>
  );
};

export default FeatureSection;
