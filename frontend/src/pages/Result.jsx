import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const handleSubmit = async (e) => {

  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full min-h-[90vh]">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded" />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`}></span>
        </div>
        <p className={!loading ? "hidden" : ""}>Loading ....</p>
      </div>
      {!imageLoaded && (
        <div className="flex  w-full max-w-xl bg-neutral-500 text-white text-sm rounded-full mt-10 p-0.5">
          <input
          onChange={e => setInput(e.target.value)} value={input}
            type="text"
            placeholder="Mô tả những gì bạn muốn tạo ra"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Tạo Ảnh
          </button>
        </div>
      )}
      {imageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-r-full">
          <p className="hover:scale-105 transition-all duration-300 bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">
            Tạo một cái khác
          </p>
          <button type="submit" className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300">
            Tải xuống
          </button>
        </div>
      )}
    </form>
  );
};

export default Result;
