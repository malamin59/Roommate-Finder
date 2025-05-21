import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiLike } from "react-icons/bi";
const PostDetailsPage = () => {
    const postDetails = useLoaderData();
    const { title, roomType,
        rent, location, lifestyle,
        description, contact,
        availability } = postDetails
    return (
        <div className='mt-10 mb-20'>
            <div>
                <div className="card w-8/12 mx-auto card-border bg-base-100">
                    <div className="card-body">
                        <h2 className=" text-3xl  text-center"> Tile :  {title}</h2>
                        <p className='text-xl'> location :  {location}</p>
                        <p className='text-xl'>Ret : {rent}</p>
                        <p className='text-xl'> Lifestyle Preferences : {lifestyle}</p>
                        <p className='text-xl'>Room Type : {roomType} </p>
                        <p className='text-xl'>Availability : {availability}</p>
                         <p className='text-xl'> Contact Info : {contact}</p>
                        <p className='text-xl'> {description} </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary bg-blue-700"> <BiLike /> Like</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostDetailsPage;