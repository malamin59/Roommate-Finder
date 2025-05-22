import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaUserCheck, FaComments, FaLock, FaHandshake, FaRocket } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* 🔁 Marquee Section */}
      <Marquee
        gradient={false}  
        speed={50}
        className="text-lg font-semibold text-blue-700 mb-10 flex gap-10"
      >
        <span className="flex items-center gap-2">
          <FaUserCheck className="text-blue-700" /> 100% Verified Profiles
        </span>
        <span className="flex items-center gap-2 mx-6">
          <FaComments className="text-blue-700" /> Private & Secure Chat
        </span>
        <span className="flex items-center gap-2 mx-6">
          <FaRocket className="text-blue-700" /> Smart Roommate Matching
        </span>
        <span className="flex items-center gap-2 mx-6">
          <FaHandshake className="text-blue-700" /> Trusted by Users
        </span>
      </Marquee>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        Why Choose <span className="text-blue-700">RoomWow</span>?
      </h2>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-6">
            <FaUserCheck className="text-blue-700 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Verified Listings</h3>
          <p className="text-gray-600">
            All listings are manually verified to ensure you meet only real people, not scams.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-6">
            <FaHandshake className="text-blue-700 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Perfect Matches</h3>
          <p className="text-gray-600">
            Match with roommates based on lifestyle, location, and budget. No mismatches!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-6">
            <FaLock className="text-blue-700 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Platform</h3>
          <p className="text-gray-600">
            We protect your information and provide safe, encrypted chat with all users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
