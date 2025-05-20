import React from 'react';
import errorImage from '../assets/errorImage.avif'

const Error = () => {
    return (
        <div className=' mt-30 lg:w-4/12 mx-auto'>
          <img src={errorImage} alt="" />
        </div>
    );
};

export default Error;