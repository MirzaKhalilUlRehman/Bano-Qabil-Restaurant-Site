import React from "react";

const FeatureCard = (props) => {
  return (
    <div
      className={
        `py-2 pb-2 absolute shadow-2xl bg-white rounded-2xl flex flex-col items-center justify-center border border-athens-gray ${props.className} `
      }
    >
      <img
        src={props.ImgUrl}
        alt={props.Title}
        className="w-28 h-18"
      />
      <span className="text-ebony-clay py-2">{props.Title}</span>
    </div>
  );
};

export default FeatureCard;
