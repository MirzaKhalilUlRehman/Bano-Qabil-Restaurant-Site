import React from "react";
import HeroSection from "./Components/HeroSection";
import OrderSection from "./Components/OrderSection";

const App = () => {
  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>
      <HeroSection />
      <OrderSection/>
    </div>
  );
};

export default App;
