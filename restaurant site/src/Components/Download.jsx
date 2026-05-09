import React from "react";
import { APP_STORE_URL, PHONE_IMG_URL, PLAY_STORE_URL, QR_CODE_IMG_URL } from "../utils/app.constants";

const Download = () => {
  return (
    <section className="pt-24 flex gap-28 items-center justify-center shadow-2xl mb-60 bg-gradient-to-b from-[#ffedef] to-[#ffdbe0]">
      <div className="flex flex-col">
        <span className="text-[2.5rem] font-bold "> Download the app now!</span>
        <span className="text-2xl  text-gray-600 ">
          Experience seamless online ordering <br />
          only on the Zomato app
        </span>
        <div className="flex gap-4 mt-6">
          <img src={PLAY_STORE_URL} alt="" className="w-47 h-14" />
          <img src={APP_STORE_URL} alt="" className="w-42 h-14" />
        </div>
      </div>
      <div className="relative ">
<img src={PHONE_IMG_URL} alt="" className="w-md h-[29rem ]" />
<span className="w-[16rem] absolute left-24 top-32 text-center text-2xl text-gary700 font-bold ">
Scan the QR code to <br /> download the app
</span>
<img src={QR_CODE_IMG_URL} alt="" className="absolute w-56 left-28 bottom-8 " />
      </div>
    </section>
  );
};

export default Download;
