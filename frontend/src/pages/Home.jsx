import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Description from "../components/Description";
import Testimonials from "../components/Testimonials";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <div className="flex flex-col gap-6 items-center justify-center my-24 p-6 md:px-28">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Xem sự kỳ diệu. Thử ngay bây giờ
        </h1>
        <button className=" text-white bg-black w-auto mt-8 px-12 py-4 flex items-center gap-2 rounded-full text-xl">
          Tạo ảnh bằng AI
          <img className="h-8" src={assets.star_group} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
