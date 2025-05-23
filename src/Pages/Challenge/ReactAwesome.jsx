import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const ReactAwesome = () => {
  return (
    <div className="p-5 text-center space-y-4">
         <Slide direction="left">
       <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Welcome to <strong className="text-blue-700">RoomWow</strong> — your trusted platform for finding the perfect roommate.
            Whether you're a student, working professional, or new in town, we make your search seamless and stress-free.
          </p>
      </Slide>

      <Zoom>
        <button className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium text-lg py-3 px-8 rounded-full shadow-lg transition duration-300">
            Start Your Journey
          </button>
      </Zoom>
    </div>
  );
};

export default ReactAwesome;
