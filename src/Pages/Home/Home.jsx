
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerSlider from '../Slayder/BannerSlider';
import PostRommMet from '../Post/PostRommMet';

const Home = () => {
  const postData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 mb-20">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-800 leading-tight">
            Find Your Perfect <span className="text-blue-700">Roommate</span>
          </h1>
          <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
            Discover <strong>RoomWow</strong> — a modern web platform that makes your roommate search experience simple and enjoyable.
            Whether you're a student, a professional, or someone new to the city, this platform is designed just for you.
          </p>
          <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Get Started Now
          </button>
        </div>

        {/* Banner Slider */}
        <div className="lg:w-1/2 w-full">
          <BannerSlider />
        </div>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          Latest Roommate Posts
        </h2>
        <PostRommMet postData={postData} />
      </section>
    </div>
  );
};

export default Home;
