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
      <div className='mb-12'>
        <SectionTow></SectionTow>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import BannerSlider from '../Slayder/BannerSlider';
// import PostRommMet from '../Post/PostRommMet';
// import SectionOne from '../ExtraSection/SectionOne';
// import SectionTow from '../ExtraSection/SectionTow';

// const Home = () => {
//   const postData = useLoaderData();

//   // ডার্ক মোড স্টেট
//   const [darkMode, setDarkMode] = useState(() => {
//     // লোকোল স্টোরেজ থেকে ডার্ক মোড সেটিং নাও
//     const saved = localStorage.getItem('darkMode');
//     return saved === 'true' ? true : false;
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     // ডার্ক মোড স্টেট লোকাল স্টোরেজে সংরক্ষণ
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
//       {/* ডার্ক/লাইট মোড টগল বাটন */}
//       <div className="flex justify-end mb-6">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="bg-blue-700 dark:bg-yellow-400 text-white dark:text-gray-900 px-4 py-2 rounded-full shadow hover:bg-blue-800 dark:hover:bg-yellow-300 transition"
//         >
//           {darkMode ? 'Light Mode' : 'Dark Mode'}
//         </button>
//       </div>

//       {/* Hero Section */}
//       <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-24">
//         {/* Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Find Your Ideal <span className="text-blue-700 dark:text-blue-400">Roommate</span>
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
//             Welcome to <strong className="text-blue-700 dark:text-blue-400">RoomWow</strong> — your trusted platform for finding the perfect roommate.
//             Whether you're a student, working professional, or new in town, we make your search seamless and stress-free.
//           </p>
//           <button className="inline-block bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium text-lg py-3 px-8 rounded-full shadow-lg transition duration-300">
//             Start Your Journey
//           </button>
//         </div>

//         {/* Banner Slider */}
//         <div className="lg:w-1/2 w-full shadow-lg rounded-lg overflow-hidden">
//           <BannerSlider />
//         </div>
//       </section>

//       {/* Posts Section */}
//       <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner transition-colors duration-500">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Latest Roommate Listings
//         </h2>
//         <PostRommMet postData={postData} />
//       </section>

//       {/* second section */}
//       <SectionOne />
//       <div className='mb-52'>
//         <SectionTow />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import BannerSlider from '../Slayder/BannerSlider';
// import PostRommMet from '../Post/PostRommMet';
// import SectionOne from '../ExtraSection/SectionOne';
// import SectionTow from '../ExtraSection/SectionTow';

// const Home = () => {
//   const postData = useLoaderData();

//   // Theme state: true = dark, false = light
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // On mount, check if user has a saved preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDarkTheme(true);
//       document.documentElement.classList.add('dark');  // Add dark class on root
//     }
//   }, []);

//   // Handle toggle button click
//   const toggleTheme = () => {
//     if (isDarkTheme) {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//       setIsDarkTheme(false);
//     } else {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//       setIsDarkTheme(true);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 transition-colors duration-300
//                     bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">

//       {/* Theme toggle button */}
//       <div className="flex justify-end mb-4">
//         <button
//           onClick={toggleTheme}
//           className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 transition"
//         >
//           {isDarkTheme ? 'Switch to Light' : 'Switch to Dark'}
//         </button>
//       </div>

//       {/* Hero Section */}
//       <section className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-24">
//         {/* Text Content */}
//         <div className="lg:w-1/2 text-center lg:text-left space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Find Your Ideal <span className="text-blue-700 dark:text-blue-400">Roommate</span>
//           </h1>
//           <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
//             Welcome to <strong className="text-blue-700 dark:text-blue-400">RoomWow</strong> — your trusted platform for finding the perfect roommate.
//             Whether you're a student, working professional, or new in town, we make your search seamless and stress-free.
//           </p>
//           <button className="inline-block bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium text-lg py-3 px-8 rounded-full shadow-lg transition duration-300">
//             Start Your Journey
//           </button>
//         </div>

//         {/* Banner Slider */}
//         <div className="lg:w-1/2 w-full shadow-lg rounded-lg overflow-hidden">
//           <BannerSlider />
//         </div>
//       </section>

//       {/* Posts Section */}
//       <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner">
//         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
//           Latest Roommate Listings
//         </h2>
//         <PostRommMet postData={postData} />
//       </section>

//       {/* Other sections */}
//       <SectionOne />
//       <div className="mb-52">
//         <SectionTow />
//       </div>
//     </div>
//   );
// };

// export default Home;
