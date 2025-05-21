import React from 'react';
import Banner from '../../assets/banner1.webp'
import PostRommMet from '../Post/PostRommMet';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const postData = useLoaderData();
    return (
        <div>

            <div className='lg:mt-12 mt-22 lg:grid lg:grid-cols-2 lg:justify-between italic mb-20 grid grid-cols-1 gap-6 justify-center'>
                <div className='text-center '>
                    <h2 className='text-4xl '>Find You next perfect Roommates from yours Community</h2>
                    <p className='text-gray-600 mt-3'>Introducing roomwow, a game-changing platform designed to simplify and enhance the flat sharing experience. With roomwow, finding the perfect roommate has never been easier. Explore a beautifully designed interface that seamlessly combines functionality and aesthetics</p>
                </div>
                <img className='  lg:w-10/12 rounded' src={Banner} alt="" />
                <div>

                </div>
            </div>
            <PostRommMet postData={postData}></PostRommMet>
        </div>
    );
};

export default Home;