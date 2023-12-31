import React from "react";
import useAuth from "../../../hooks/useAuth";
import dashboard_img from "../../../images/banner/dashboard.png";
import CardBarChart from "../../Cards/CardBarChart";
import CardLineChart from "../../Cards/CardLineChart";
import CardPageVisits from "../../Cards/CardPageVisits";
import CardSocialTraffic from "../../Cards/CardSocialTraffic";

const DashBoardHome = () => {
  const { user, isAdmin } = useAuth();
  return (
    <div>
      {!isAdmin ? (
        <div className="lg:px-20 lg:py-8 rounded-xl">
          <section className="text-gray-100 bg-yellow-400 lg:mt-12 body-font">
            <div className="container lg:px-5 mt-4 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 w-full">
                <img src={dashboard_img} alt="" />
              </div>
              <div className="lg:w-2/6 md:w-1/2 rounded-lg py-8 px-4 lg:px-0 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <p className="text-3xl text-left font-bold text-white heading">
                  <span className="text-white">WELCOME</span> <br />{" "}
                  <span className="text-5xl text-black">{user?.displayName}</span>
                </p>
                <p className="text-md text-left mt-16 text-black">
                  This is your dashboard. You can find your orders list ,
                  payment options , also review page to review our website.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="h-screen lg:px-20 lg:py-2 rounded-xl bg-blue-200">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              {/* <CardLineChart /> */}
            </div>
            <div className="w-full xl:w-4/12 px-4">
              {/* <CardBarChart /> */}
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardPageVisits />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardHome;
