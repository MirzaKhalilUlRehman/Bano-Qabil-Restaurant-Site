import React from "react";
import HeroSection from "./Components/HeroSection";
import OrderSection from "./Components/OrderSection";
import FeatureSection from "./Components/FeatureSection";
import Gold from "./Components/Gold";

const App = () => {
  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>
      <HeroSection />
      <OrderSection/>
      <FeatureSection/>
      <Gold/>
    </div>
  );
};

export default App;
