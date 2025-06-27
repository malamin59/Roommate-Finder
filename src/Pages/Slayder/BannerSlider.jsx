import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/banner1.webp";
import banner3 from "../../assets/image3.jpg";
import banner4 from "../../assets/bnner4.webp";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-4 px-2 pb-7">
      <Slider {...settings}>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img src={banner4} alt="Banner" className="w-full h-full object-cover brightness-75" />
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img src={banner1} alt="Banner" className="absolute w-full h-full object-cover brightness-75" />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4" />
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img src={banner3} alt="Banner" className="absolute w-full h-full object-cover brightness-75" />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Find your Roommate</h2>
            <p className="mt-4 text-lg md:text-xl">
              Roomster has been the most popular roommate finder service since 2003, with millions of downloads.
              Browse rooms for rent and find roommates easily.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
