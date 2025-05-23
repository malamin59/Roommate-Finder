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
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-24">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {/* Typewriter Animation */}
            <Typewriter
              words={[
                
                'Find Your Ideal Roommate',
                'Welcome to oue Roommate finder Flatefrom.',
                'That is the most popular Roommate Finder Website in the world ',

              ]}

              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        <ReactAwesome></ReactAwesome>
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


