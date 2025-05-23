import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json';
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import image from '../../assets/jhankarvai.jpeg'
import { Link } from 'react-router-dom';
// import ReactAwesome from './ReactAwesome';

const MySection = () => {
    return (
      <div>
        <h3 className='text-center text-4xl font-bold italic'> About Our Idol</h3>
          <div className="flex mb-20 flex-col items-center justify-center mt-6 bg-gray-100 p-6">
            <img className='lg:w-2/12 lg:h-[200px] rounded' src={image} alt="" />
            <h1 className="text-4xl font-bold text-center mb-4 mt-9">
                Jhanker Vai{' '}
                <span className="text-blue-600">
                    <Typewriter
                        words={['is the best Web Developer in Bangladesh',
                            'is the best web development mentor in Bangladesh.',
                            'is the founder of Programming Hero.',
                            'teaches with fun and clarity.',
                            'is our idol and role model.',
                            'is roadmap changes lives.',
                            'We love you, Jhankar Vai!',
                            'is our idol',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </span>
            </h1>

            <div className="w-52">
                <Lottie animationData={animationData} loop={true} />
            </div>

            <button
                data-tooltip-id="tooltip1"
                data-tooltip-content="Click to know more!"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                <Link to='https://web.programming-hero.com/home'>
                    Hover me

                </Link>
            </button>
            <Tooltip id="tooltip1" />
        </div>


<div>
    {/* <ReactAwesome></ReactAwesome> */}
</div>

      </div>
    );
};

export default MySection;