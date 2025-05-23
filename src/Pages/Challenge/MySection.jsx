import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json';
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const MySection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        I am a{' '}
        <span className="text-blue-600">
          <Typewriter
            words={['Web Developer', 'Designer', 'Problem Solver', 'i have 2 year exprience']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <div className="w-72 h-72 mb-4">
        <Lottie animationData={animationData} loop={true} />
      </div>

      <button
        data-tooltip-id="tooltip1"
        data-tooltip-content="Click to know more!"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Hover me
      </button>
      <Tooltip id="tooltip1" />
    </div>
  );
};

export default MySection;
