// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Banner from '../../assets/banner1.webp';
// import banner2 from '../../assets/image2.jpg';
// import banner3 from '../../assets/image3.jpg'

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
//         {/* Slide 1 with image and text */}
//         <div className="relative text-white text-center h-[400px] rounded-lg overflow-hidden">
//           <img
//             src={Banner}
//             alt="Banner"
//             className="w-full h-full object-cover brightness-75"
//           />
//         </div>

//         {/* Slide 2 */}
//         <div className="relative  text-white text-center h-[400px] rounded-lg overflow-hidden flex flex-col justify-center items-center px-4">
//           <img
//             src={banner2}
//             alt="Banner"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <h2 className="text-3xl md:text-4xl font-bold">Find your Roommate</h2>
//           <p className="mt-4 text-lg md:text-xl">Get mentored by industry professionals and gain practical skills.</p>
//         </div>

//         {/* Slide 3 */}
//         <div className="relative  text-white text-center h-[400px] rounded-lg overflow-hidden flex flex-col justify-center items-center px-4">
//           <img
//             src={banner3}
//             alt="Banner"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <h2 className="text-3xl md:text-4xl font-bold">Build Real Projects</h2>
//           <p className="mt-4 text-lg md:text-xl">Work on real-world projects and build your portfolio.</p>
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
import banner2 from '../../assets/image2.jpg';
import banner3 from '../../assets/image3.jpg';

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
        {/* Slide 1 */}
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          {/* Background Image */}
          <img
            src={banner2}
            alt="Banner"
            className="absolute w-full h-full object-cover brightness-75"
          />
          {/* Text Layer */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Find your Roommate</h2>
            <p className="mt-4 text-lg md:text-xl">Roomster has been the most popular roommate finder service since 2003, with millions of downloads. Browse rooms for rent and find roommates easily.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src={banner3}
            alt="Banner"
            className="absolute w-full h-full object-cover brightness-75"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Build Real Projects</h2>
            <p className="mt-4 text-lg md:text-xl">Trying to find a roommate is a headache, but websites like Roomi, PadMapper and Craigslist can help. We round up these and other roommate ....</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
