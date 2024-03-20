import React from "react";
import Hero from "../components/Hero";
import { bestSeller } from "../constants";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="max_width padding-container w-full flex flex-col items-start py-10 gap-10">
        <h1 className="text-dark font-bold text-6xl text-start">
          Best
          <br />
          Sellers
        </h1>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-flow-dense w-full justify-center gap-10 md:gap-16 lg:gap-32">
          {bestSeller.map((item, i) => (
            <div
              className="flex flex-col w-full h-full rounded-md overflow-hidden shadow-md"
              key={i}
            >
              <img
                src={item.image}
                alt="logo"
                className=" w-full aspect-[303/278] object-cover"
              />

              <div className="flex flex-col items-start h-full w-full bg-yellow p-5">
                <div className="flex flex-col flex-1 items-start">
                  <p className="popins font-bold text-[25px]">{item.name}</p>
                  <p className="mt-1 popins font-medium text-xs text-start">
                    {item.description}
                  </p>
                </div>

                <p className="popins font-bold text-[35px] mt-3">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT US */}
      <section id="aboutus" className="bg-dark py-10">
        <div className="max_width padding-container flex flex-col lg:flex-row max-h-fit lg:gap-10">
          <div className="flex flex-1 bg-yellow">
            <img
              src="about.png"
              className="object-cover aspect-[555/278] w-full"
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-col flex-1">
            <img
              src="about2.png"
              className="object-cover aspect-[555/278] w-full"
            />
            <div className="flex flex-col items-start my-5">
              <p className="inter font-bold text-[48px] text-white">About Us</p>
              <p className="popins font-normal text-[25px] text-white mt-5 text-start">
                is a vibrant and welcoming coffee shop dedicated to providing a
                haven for coffee lovers and community members alike. Established
                in [Year], we have quickly become a beloved destination for
                locals and visitors seeking exceptional coffee and a cozy
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
