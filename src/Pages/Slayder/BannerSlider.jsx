// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Banner from '../../assets/banner1.webp'


// const BannerSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000
//   };

//   return (
//     <div className="w-full max-w-5xl mx-auto mt-8">
//       <Slider {...settings}>
//         <div className="bg-blue-500 text-white p-20 text-center rounded-lg">
//           <img className='  lg:w-10/12 rounded' src={Banner} alt="" />
//           <h2 className="text-3xl font-bold">Welcome to Our website </h2>
//           <p className="mt-4 text-lg">Explore thousands of resources and grow your career.</p>
//         </div>
//         <div className="bg-green-500 text-white p-20 text-center rounded-lg">
//           <h2 className="text-3xl font-bold">Learn with Experts</h2>
//           <p className="mt-4 text-lg">Get mentored by industry professionals and gain practical skills.</p>
//         </div>
//         <div className="bg-purple-500 text-white p-20 text-center rounded-lg">
//           <h2 className="text-3xl font-bold">Build Real Projects</h2>
//           <p className="mt-4 text-lg">Work on real-world projects and build your portfolio.</p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default BannerSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banner from '../../assets/banner1.webp';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      <Slider {...settings}>
        {/* Slide 1 with image */}
        <div className="relative text-white text-center rounded-lg overflow-hidden">
          <img 
            src={Banner} 
            alt="Banner" 
            className="w-full h-[400px] object-cover brightness-75" 
          />
          {/* <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold">Welcome to Our Website</h2>
              <p className="mt-4 text-lg md:text-xl">Explore thousands of resources and grow your career.</p>
          </div> */}
        </div>

        {/* Slide 2 */}
        <div className="bg-green-500 text-white p-20 text-center rounded-lg">
          <h2 className="text-3xl font-bold">Find your Roommate</h2>
          <p className="mt-4 text-lg">Get mentored by industry professionals and gain practical skills.</p>
        </div>

        {/* Slide 3 */}
        <div className="bg-purple-500 text-white p-20 text-center rounded-lg">
          <h2 className="text-3xl font-bold">Build Real Projects</h2>
          <p className="mt-4 text-lg">Work on real-world projects and build your portfolio.</p>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
