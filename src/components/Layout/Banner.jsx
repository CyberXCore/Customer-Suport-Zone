import React from "react";
import bannerImage from "./../../assets/vector1.png";

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center md:h-[250px] gap-6 px-4 md:px-0">
      
      {/* In Progress Banner */}
      <div className="w-full md:w-1/2 py-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#632EE3] to-[#9F62F2] h-full relative overflow-hidden">
        <div className="w-1/2 flex flex-col items-center">
          <span className="text-2xl text-white">In Progress</span>
          <span className="text-6xl font-semibold text-white">{inProgressCount}</span>
        </div>
        <img src={bannerImage} alt="Banner" className="absolute bottom-0 left-0" />
        <img src={bannerImage} alt="Banner" className="absolute bottom-0 right-0 -scale-x-100" />
      </div>

      {/* Resolved Banner */}
      <div className="w-full md:w-1/2 py-5 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#54CF68] to-[#00827A] h-full relative overflow-hidden">
        <div className="w-1/2 flex flex-col items-center">
          <span className="text-2xl text-white">Resolved</span>
          <span className="text-6xl font-semibold text-white">{resolvedCount}</span>
        </div>
        <img src={bannerImage} alt="Banner" className="absolute bottom-0 left-0" />
        <img src={bannerImage} alt="Banner" className="absolute bottom-0 right-0 -scale-x-100" />
      </div>

    </section>
  );
};

export default Banner;
