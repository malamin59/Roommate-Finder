import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerSlider from '../Slayder/BannerSlider';
import PostRommMet from '../Post/PostRommMet';
import SectionOne from '../ExtraSection/SectionOne';
import SectionTow from '../ExtraSection/SectionTow';
import { Typewriter } from 'react-simple-typewriter';
import MySection from '../Challenge/Mysection';
import ReactAwesome from '../Challenge/ReactAwesome';

const Home = () => {
  const postData = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-16">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            <Typewriter
              words={[
                'Find Your Ideal Roommate',
                'Welcome to our Roommate Finder Platform.',
                'It is the most popular Roommate Finder Website in the world',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <ReactAwesome />
        </div>

        {/* Banner Slider */}
        <div className="lg:w-1/2 w-full shadow-lg rounded-lg overflow-hidden">
          <BannerSlider />
        </div>
      </section>

      {/* Posts Section */}
      <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Latest Roommate Listings
        </h2>
        <PostRommMet postData={postData} />
      </section>

      {/* Extra Sections */}
      <SectionOne />
      <div className="mb-12">
        <SectionTow />
      </div>
      <div>
        <MySection />
      </div>
    </div>
  );
};

export default Home;
