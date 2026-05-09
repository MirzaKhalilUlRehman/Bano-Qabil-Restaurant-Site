import React from "react";
import HeroSection from "./Components/HeroSection";
import OrderSection from "./Components/OrderSection";
import FeatureSection from "./Components/FeatureSection";

const App = () => {
  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>
      <HeroSection />
      <OrderSection/>
      <FeatureSection/>
    </div>
  );
};

export default App;
