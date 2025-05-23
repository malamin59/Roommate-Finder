import React from 'react';
import { FaUser } from 'react-icons/fa';
import banner2 from '../../assets/image2.jpg';
import banner5 from '../../assets/bnner5.jpg';
import banner6 from '../../assets/bnner6.jpeg';
import banner7 from '../../assets/bnner7.jpeg';
import banner8 from '../../assets/banner8.jpeg';
import banner9 from '../../assets/bnner9.jpeg';
import banner10 from '../../assets/bnner10.jpeg';
import banner11 from '../../assets/banner11.jpeg';
import banner12 from '../../assets/banner12.jpeg';
import banner14 from '../../assets/banner14.jpeg';
import banner15 from '../../assets/banner15.jpeg';
import banner16 from '../../assets/banner16.jpeg';
import banner17 from '../../assets/banner17.jpeg';

const images = [
    banner2, banner5, banner6, banner7, banner8, banner9,
    banner10, banner11, banner12, banner14, banner15, banner16, banner17,
];

const styles = `
@keyframes scrollMarquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
`;

const SectionTwo = () => {
    return (
        <>
           <div>
             <style>{styles}</style>

            <div className="my-16 px-4 lg:px-8 max-w-6xl mx-auto text-center">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <FaUser className="text-4xl text-black" />
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-md">
                        Our Community in Action
                    </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Take a look at some amazing moments from our community. Whether it's{' '}
                    <span className="text-indigo-600 font-medium">finding the perfect roommate</span> or{' '}
                    <span className="text-indigo-600 font-medium">making lifelong memories</span>, we're proud
                    to be part of your journey!
                </p>
            </div>

            <div className="overflow-hidden w-full pb-10">
                <div
                    className="flex w-max"
                    style={{
                        animation: 'scrollMarquee 40s linear infinite',
                    }}
                >
                    {[...images, ...images].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`community-${index}`}
                            className="w-60 h-48 object-cover rounded-xl mx-2 shadow-md"
                        />
                    ))}
                </div>
            </div>
            
           </div>
        </>
    );
};

export default SectionTwo;
