// import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import image from "../../assets/jhankarvai.jpeg";
import { Link } from "react-router-dom";
import {
  FaWifi, FaBath, FaUniversity, FaFemale, FaBriefcase,
  FaUtensils, FaCity, FaCouch, FaBox, FaLock
} from "react-icons/fa";
import { useEffect, useState } from "react";

// Array of JSX titles with icons
const titles = [
  { icon: <FaWifi className="inline mr-2 text-blue-600" />, text: "High-Speed Wi-Fi & AC – Room Available" },
  { icon: <FaBath className="inline mr-2 text-blue-600" />, text: "Private Room with Attached Bathroom" },
  { icon: <FaUniversity className="inline mr-2 text-blue-600" />, text: "Perfect for University Students" },
  { icon: <FaFemale className="inline mr-2 text-blue-600" />, text: "Female Roommate Needed  Safe Area" },
  { icon: <FaBriefcase className="inline mr-2 text-blue-600" />, text: "Professionals Preferred  Clean Apartment" },
  { icon: <FaUtensils className="inline mr-2 text-blue-600" />, text: "Room with Kitchen Access  Bills Included" },
  { icon: <FaCity className="inline mr-2 text-blue-600" />, text: "City View Room  Ideal for Night Owls" },
  { icon: <FaCouch className="inline mr-2 text-blue-600" />, text: "Stylish Furnished Room  Move-in Ready" },
  { icon: <FaBox className="inline mr-2 text-blue-600" />, text: "Spacious Room with Storage Space" },
  { icon: <FaLock className="inline mr-2 text-blue-600" />, text: "Gated Community  Secure Room for Rent" },
];

const MySection = () => {
  const [index, setIndex] = useState(0);

  // Cycle through titles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500); // Change every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-h-[70vh] overflow-hidden rounded-xl shadow-inner bg-gray-100 px-4 py-6">
      <h3 className="text-center text-3xl font-bold italic text-gray-800 mb-6">
      What is important of Roommate
      </h3>

      <div className="flex flex-col items-center justify-center gap-4">
        {/* Image */}
        <img
          className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-blue-300 shadow-md"
          src={image}
          alt="Jhankar Mahbub"
        />

        {/* Typing Section with Icons */}
        <h1 className="text-xl lg:text-2xl font-semibold text-center text-gray-700 px-2 transition-all duration-300 ease-in-out min-h-[60px]">
         {titles[index].icon} {titles[index].text}
        </h1>

        {/* Lottie Animation */}
        <div className="w-32 lg:w-44">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Tooltip Button */}
        <Link to="https://web.programming-hero.com/home" target="_blank">
          <button
            data-tooltip-id="tooltip1"
            data-tooltip-content="Click to know more!"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Hover me
          </button>
        </Link>

        <Tooltip id="tooltip1" />
      </div>
    </div>
  );
};

export default MySection;
