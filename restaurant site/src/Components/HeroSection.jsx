import React from "react";
import { VIDEO_URL , PLAY_STORE_URL , APP_STORE_URL} from "../utils/app.constants";

const HeroSection = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        playsInline
        muted
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <img src="/assets/zomato.png" alt="zomato" className="w-52 mb-6" />

        <h1 className="text-white font-semibold text-7xl">
          Pakistan's #1 <br />
          food delivery app
        </h1>
        <span className="text-white text-2xl px-5 text-center font-medium">
          Experience fast & easy online ordering <br />
          on the Zomato app
        </span>
        <div className="flex gap-6 mt-10 ">
            <img src={PLAY_STORE_URL} alt="" className="w-44" />
            <img src={APP_STORE_URL} alt="" className="w-44" />
        </div>
        <div className="flex items-center justify-center gap-2 relative -bottom-30 animate-bounce">
            <span className="text-white font-medium">Scroll Down</span>
            <img src="/assets/double-arrow.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
