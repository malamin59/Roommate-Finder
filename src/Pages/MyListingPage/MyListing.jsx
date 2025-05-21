import React from 'react';
// import { BiLike } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

const MyListing = () => {
    const myPostData = useLoaderData();
    // const { title, roomType,
    //     rent, location, lifestyle,
    //     description, contact,
    //     availability } = myPostData
    //     console.log(myPostData)
    return (
        <div className='mt-10 mb-20'>
            {
                myPostData.map(myPost =>
                    <div key={myPost._id}>
                        <div className="card w-8/12 mx-auto card-border bg-base-100">
                            <div className="card-body" >
                                <h2 className=" text-3xl  text-center"> Title :  {myPost.title}</h2>
                                <p className='text-xl'> location :  {myPost.location}</p>
                                <p className='text-xl'>Ret : {myPost.rent}</p>
                                <p className='text-xl'> Lifestyle Preferences : {myPost.lifestyle}</p>
                                <p className='text-xl'>Room Type : {myPost.roomType} </p>
                                <p className='text-xl'>Availability : {myPost.availability}</p>
                                <p className='text-xl'> Contact Info : {myPost.contact}</p>
                                <p className='text-xl'> {myPost.description} </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary bg-blue-700">
                                        {/* <BiLike /> */}
                                         Like</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default MyListing;   