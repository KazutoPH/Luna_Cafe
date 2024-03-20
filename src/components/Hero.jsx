import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full hero_bg min-h-screen flex justify-center items-center flex-col">
        <p className="poly-regular text-yellow text-[150px] drop-shadow-md">
          LUNA CAFE
        </p>

        <p className="popins-regular text-white text-[50px] drop-shadow-md">
          COFFEE X PASTRIES
        </p>
      </div>
    </section>
  );
};

export default Hero;
