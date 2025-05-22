import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerSlider from '../Slayder/BannerSlider';
import PostRommMet from '../Post/PostRommMet';
import SectionOne from '../ExtraSection/SectionOne';
import SectionTow from '../ExtraSection/SectionTow';

const Home = () => {
  const postData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-24">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Find Your Ideal <span className="text-blue-700">Roommate</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Welcome to <strong className="text-blue-700">RoomWow</strong> — your trusted platform for finding the perfect roommate.
            Whether you're a student, working professional, or new in town, we make your search seamless and stress-free.
          </p>
          <button className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium text-lg py-3 px-8 rounded-full shadow-lg transition duration-300">
            Start Your Journey
          </button>
        </div>

        {/* Banner Slider */}
        <div className="lg:w-1/2 w-full shadow-lg rounded-lg overflow-hidden">
          <BannerSlider />
        </div>
      </section>

      {/* Posts Section */}
      <section className="bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Latest Roommate Listings
        </h2>
        <PostRommMet postData={postData} />
      </section>
      {/*  second section  */}
      <SectionOne></SectionOne>
     <div className='mb-52'>
       <SectionTow></SectionTow>
     </div>
    </div>
  );
};

export default Home;
