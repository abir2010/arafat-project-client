import React from "react";
import top from "../../../images/banner/top2.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <section className="text-gray-100 bg-yellow-400 body-font">
        <div className="container lg:px-16 mt-4 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full">
            <img src={top} alt="" />
          </div>
          <div className="lg:w-2/6 md:w-1/2 rounded-lg py-8 px-4 lg:px-0 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <p className="text-4xl text-left font-bold text-white heading">
              FIND A <br />{" "}
              <span className="text-black text-5xl">HIGH QUALITY</span> COURSE{" "}
              <br /> & START TO LEARN
            </p>
            <p className="text-md text-left mt-8 text-black">
            Our Campus is an online learning and teaching marketplace with over 213000 courses and 62 million students. Learn programming, marketing, data science and more.
            </p>
            <button></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
