import React from 'react';
import { Link } from 'react-router-dom';

const PostRommMet = ({ postData }) => {
    console.log(postData)

    return (
        <div className='my-20'>
            <h2 className='text-center italic text-3xl my-4 '>Available Roommates  </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    postData.map(post => <div key={post._id} className="card bg-base-100 w-96 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title ">{post.title}</h2>
                            <p className='text-gray-600'>location : {post.location}</p>
                            <p className='text-gray-600'>Availability : {post.availability}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/users/${post._id}`} >
                                
                                <button className="btn bg-black text-white">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostRommMet;



