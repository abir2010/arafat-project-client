import React from "react";
import service_img from "../../../images/servicing/service.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Dashboard from './../../Dashboard/Dashboard/Dashboard';
AOS.init();

const Servicing = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="10"
      data-aos-duration="400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <p className="text-4xl text-gray-900 font-bold heading lg:pb-8">
        OUR CAMPUS <span className="text-yellow-400">FEATURES</span>
      </p>
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-coolGray-700 lg:col-span-6 lg:h-auto shadow-xl"
          style={{
            backgroundColor: "lightgray",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col items-center py-16 text-center">
            <img className="lg:ml-36 shadow-xl" src={service_img} alt="" />
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-coolGray-700">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-right text-3xl font-bold heading">
              EASY TO PURCHASE
            </h1>
            <p className="text-right">
              After buying from us you can have full access of
              <br /> course video and notes.
            </p>
            <div className="flex justify-end">
              <button
                className="inline-flex text-sm text-gray-50 items-center bg-black border-0 py-1 px-6 focus:outline-none hover:bg-yellow-400 hover:text-black mt-4 md:mt-0"
                data-aos="zoom-in"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-right text-3xl font-bold heading">
              LOGIN FROM ANY DEVICE
            </h1>
            <p className="text-right">
              We built our system so that you can gain access <br/>from anywhere.
            </p>
            <div className="flex justify-end">
              <button
                className="inline-flex text-sm text-gray-50 items-center bg-black border-0 py-1 px-6 focus:outline-none hover:bg-yellow-400 hover:text-black mt-4 md:mt-0"
                data-aos="zoom-in"
              >
                READ MORE
              </button>
            </div>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-right text-3xl font-bold heading">
              PERSONAL DASHBOARD
            </h1>
            <p className="text-right">
              We have latest personal Dashboard which is used to sum up 
              <br /> all the details.
            </p>
            <div className="flex justify-end">
              <button
                className="inline-flex text-sm text-gray-50 items-center bg-black border-0 py-1 px-6 focus:outline-none hover:bg-yellow-400 hover:text-black mt-4 md:mt-0"
                data-aos="zoom-in"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicing;
