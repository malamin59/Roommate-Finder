import React from 'react';
import Banner from '../../assets/banner1.webp';
import PostRommMet from '../Post/PostRommMet';
import { useLoaderData } from 'react-router-dom';
import BannerSlider from '../Slayder/BannerSlider';

const Home = () => {
  const postData = useLoaderData();

  return (
    <div className="max-w-7xl lg:mt-0 mt-8 mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-16">
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            Find Your Next Perfect Roommate from Your Community
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Introducing RoomWow, a game-changing platform designed to simplify and enhance the flat-sharing experience.
            With RoomWow, finding the perfect roommate has never been easier. Explore a beautifully designed interface
            that seamlessly combines functionality and aesthetics.
          </p>
        </div>

        {/* Right: Banner Slider */}
        <div className="lg:w-1/2 w-full">
          <BannerSlider />
        </div>
      </div>

      {/* Post Data Section */}
      <PostRommMet postData={postData} />
    </div>
  );
};

export default Home;
