import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BrowseListings = () => {
    const allPosts = useLoaderData();
    console.log(allPosts);

    return (
        <div className="mt-12 mb-20">
            <div className="overflow-x-auto w-full">
                <table className="table table-fixed w-full min-w-[800px]">
                    <thead>
                        <tr>
                            <th className="w-1/6 text-xl">Location</th>
                            <th className="w-1/6 text-xl">Rent</th>
                            <th className="w-1/6 text-xl">Room Type</th>
                            <th className="w-1/6 text-xl">Availability</th>
                            <th className="w-1/6 text-xl">Lifestyle</th>
                            <th className="w-1/6 text-xl">Contact Info
                            </th>
                            <th className="w-1/6 text-xl text-right pr-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPosts.map((post) => (
                            <tr key={post._id}>
                                <td>{post.location}</td>
                                <td>{post.rent}</td>
                                <td>{post.roomType}</td>
                                <td>{post.availability}</td>
                                <td>{post.lifestyle}</td>
                                <td>{post.contact}</td>
                                <td className="text-right pr-4">
                                    <Link to={`/users/${post._id}`}>
                                        <button className="btn bg-blue-700 text-white btn-xs">
                                            See More</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseListings;
